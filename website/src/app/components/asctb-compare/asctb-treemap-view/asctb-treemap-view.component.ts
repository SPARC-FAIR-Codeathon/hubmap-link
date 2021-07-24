import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import * as d3 from 'd3';
import { AsctbCompareService } from 'src/app/services/asctb-compare.service';

@Component({
  selector: 'app-asctb-treemap-view',
  templateUrl: './asctb-treemap-view.component.html',
  styleUrls: ['./asctb-treemap-view.component.css']
})
export class AsctbTreemapViewComponent implements OnInit, OnChanges {

  @Input() asTree;

  constructor(private asctbCompareService: AsctbCompareService) {
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.generateTreemap();
  }


  generateTreemap() {

    //Short-circuit when no data is available
    if(!this.asTree) return;

    // Set the dimensions and margins of the diagram
    var element = d3.select('#treemap-div').node();
    let wWidth = element.getBoundingClientRect().width - 50;
    let wHeight = element.getBoundingClientRect().height;
    
    let heightDynamicScale = Math.ceil((this.asctbCompareService.countTotalAS / 50) * element.getBoundingClientRect().height);

    wHeight = (wHeight > heightDynamicScale)?wHeight: heightDynamicScale;

    var margin = {top: 0, right: 0, bottom: 0, left: 90},
        width = wWidth - margin.left - margin.right,
        height = wHeight - margin.top - margin.bottom;

    d3.selectAll("#treemap-div > *").remove();
    var svg = d3.select("#treemap-div").append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate("
              + margin.left + "," + margin.top + ")");

    var i = 0,
        duration = 750,
        root;

    // declares a tree layout and assigns the size
    var treemap = d3.tree().size([height, width]);

    // Assigns parent, children, height, depth
    root = d3.hierarchy(this.asTree, function(d) {
      return d.asAcyclicalChildren;
    });

    root.x0 = height / 2;
    root.y0 = 0;

    update(root);

    function update(source) {

      // Assigns the x and y position for the nodes
      var treeData = treemap(root);

      // Compute the new tree layout.
      var nodes = treeData.descendants(),
          links = treeData.descendants().slice(1);

      function findLongestPathToRoot(node, visited){
        let longestRoute = 0;
        if(!node.asParents || node.asParents.length < 1 || visited.has(node)) return 0;
        visited.add(node);
        node.asParents.forEach(parent => {
          let dist = findLongestPathToRoot(parent, new Set(visited)) + 1;
          longestRoute = (longestRoute >= dist)?longestRoute:dist;
        });
        return longestRoute;
      }

      //Compute depth. The depth assigned by d3.hierarchy makes unsafe assumptions
      nodes.forEach(function(d){
        let newDepth = findLongestPathToRoot(d.data, new Set());
        d.depth = newDepth;
      });

      // Normalize for fixed-depth.
      nodes.forEach(function(d){ d.y = d.depth * 180});

      // ****************** Nodes section ***************************

      // Update the nodes...
      var node = svg.selectAll('g.node')
          .data(nodes, function(d) {return d.id || (d.id = ++i); });

      // Enter any new modes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
          .attr('class', 'node')
          .attr("transform", function(d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        });
        //.on('click', click);

      // Shared = white
      // Hubmap = blue
      // Sparc = olive
      let nodeFillColor = (node) =>{
        if(node.data.sparcResident && node.data.hubmapResident) { return "#fff"; }
        else if(!node.data.sparcResident && node.data.hubmapResident) { return "rgb(144, 158, 121)"; }
        else { return "rgb(69, 59, 134)"; }
      }

      // Add Circle for the nodes
      nodeEnter.append('circle')
          .attr('class', (d)=>{
            let classStr = 'node';
              if(!d.data.sparcResident && d.data.hubmapResident) { classStr += " hubmap"; }
              else if(d.data.sparcResident && !d.data.hubmapResident) { classStr += " sparc"; }
            return classStr;
          })
          .attr('r', 1e-6)
          .style("fill", function(d) {
            return nodeFillColor(d);
          });

      // Add labels for the nodes
      nodeEnter.append('text')
          .attr("dy", ".35em")
          .attr("x", function(d) {
              return d.children || d._children ? -13 : 13;
          })
          .attr("text-anchor", function(d) {
              return d.children || d._children ? "end" : "start";
          })
          .text(function(d) { return d.data.name; });

      // UPDATE
      var nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function(d) { 
            return "translate(" + d.y + "," + d.x + ")";
        });

      // Update the node attributes and style
      nodeUpdate.select('circle.node')
        .attr('r', 10)
        .style("fill", function(d) {
            return nodeFillColor(d);
        })
        .attr('cursor', 'pointer');


      // Remove any exiting nodes
      var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) {
              return "translate(" + source.y + "," + source.x + ")";
          })
          .remove();

      // On exit reduce the node circles size to 0
      nodeExit.select('circle')
        .attr('r', 1e-6);

      // On exit reduce the opacity of text labels
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);

      // ****************** links section ***************************
      // Index nodes by id
      let nodeIdx = {};
      nodes.forEach(node => {
        nodeIdx[node.data.id] = node;
      });
      
      //For nodes with multiple parents, duplicate them and copy each other parent node into the parent property
      var expandedLinks = [];
      links.forEach(node => {
        node.data.asParents.forEach(parent => {
          let nextNode = Object.assign({}, node);
          nextNode.parent = nodeIdx[parent.id];
          expandedLinks.push(nextNode);
        });
      });

      // Update the links...
      var link = svg.selectAll('path.link')
          .data(expandedLinks, function(d) { return d.id; });


      var linkEnter = link.enter().insert('path', "g")
        .attr("class", function(d){
          let classesStr = "link";
          if(d.parent.data && d.parent.data.asSparcChildren.has(d.data)){ classesStr += " sparc" }
          if(d.parent.data && d.parent.data.asHubmapChildren.has(d.data)){ classesStr += " hubmap" }
          if(d.parent.data && d.parent.data.asSharedChildren.has(d.data)){ classesStr += " shared" }
          
          return classesStr;
        })
        .attr('d', function(d){
          var o = {x: source.x0, y: source.y0}
          return diagonal(o, o)
        });

      // UPDATE
      var linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate.transition()
          .duration(duration)
          .attr('d', function(d){ return diagonal(d, d.parent) });

      // Remove any exiting links
      var linkExit = link.exit().transition()
          .duration(duration)
          .attr('d', function(d) {
            var o = {x: source.x, y: source.y}
            return diagonal(o, o)
          })
          .remove();

      // Store the old positions for transition.
      nodes.forEach(function(d){
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Creates a curved (diagonal) path from parent to the child nodes
      function diagonal(s, d) {

        let path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`

        return path
      }

      // Toggle children on click.
      /*function click(event, d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
        update(d);
      }*/
    }




  }
}
