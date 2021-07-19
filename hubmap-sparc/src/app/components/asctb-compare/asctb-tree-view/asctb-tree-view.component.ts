import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import * as d3 from 'd3';
import { AsctbCompareService } from 'src/app/services/asctb-compare.service';

@Component({
  selector: 'app-asctb-tree-view',
  templateUrl: './asctb-tree-view.component.html',
  styleUrls: ['./asctb-tree-view.component.css']
})
export class AsctbTreeViewComponent implements OnInit, OnChanges  {

  @Input() asTree;

  constructor(private asctbCompareService: AsctbCompareService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.generateTree();
  }


  margin:{left:number, right:number, top:number, bottom:number};  
  width:number;
  height:number;
  barHeight:number;
  barWidth:number;
  i:number;
  duration:number;
  tree;
  root;
  svg;

  generateTree() {
    //Short-circuit when no data is available
    if(!this.asTree) return;

    // Set the dimensions and margins of the diagram
    var element = d3.select('#treeview-div').node();
    let wWidth = element.getBoundingClientRect().width;
    let wHeight = element.getBoundingClientRect().height;
    
    let heightDynamicScale = Math.ceil((this.asctbCompareService.countTotalAS / 50) * element.getBoundingClientRect().height);

    wHeight = (wHeight > heightDynamicScale)?wHeight: heightDynamicScale;


    this.margin = {top: 20, right: 90, bottom: 20, left: 90};
    this.width = wWidth - this.margin.right - this.margin.left;
    this.height = wHeight - this.margin.top - this.margin.bottom;
    this.barHeight = 20;
    this.barWidth = this.width *.8;
    this.i = 0;
    this.duration = 750;
    this.tree = d3.tree().size([this.width, this.height]);
    // this.tree = tree().nodeSize([0, 30]);

    this.tree = d3.tree().nodeSize([0, 30]); 
    this.root = this.tree(d3.hierarchy(this.asTree, function(d) {
      return d.asAcyclicalChildren;
      //return new Set([...d.asHubmapChildren, ...d.asSparcChildren, ...d.asSharedChildren]);
    }));
    this.root.each((d)=> {
      d.name = d.id; //transferring name to a name variable
      d.id = this.i; //Assigning numerical Ids
      this.i++;
    });
    this.root.x0 = this.root.x;
    this.root.y0 = this.root.y
    d3.selectAll("#treeview-div > *").remove();

    this.svg = d3.select('#treeview-div').append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    

  
    let connector = function(d:any) {
    //curved 
    /*return "M" + d.y + "," + d.x +
        "C" + (d.y + d.parent.y) / 2 + "," + d.x +
        " " + (d.y + d.parent.y) / 2 + "," + d.parent.x +
        " " + d.parent.y + "," + d.parent.x;*/
      //straight
      return "M" + d.parent.y + "," + d.parent.x
        + "V" + d.x + "H" + d.y;      
    }
  
    let collapse = (d) => {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    };

    let click = (d) => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    };

    var update = (source) => {

      this.width=800;

      // Compute the new tree layout.
      let nodes = this.tree(this.root)
      let nodesSort = [];
      nodes.eachBefore(function (n) {
        nodesSort.push(n);
      });
      this.height = Math.max(500, nodesSort.length * this.barHeight + this.margin.top + this.margin.bottom);
      let links = nodesSort.slice(1);
      // Compute the "layout".
      nodesSort.forEach ((n,i)=> {
        n.x = i *this.barHeight;
      });

      d3.select('svg').transition()
        .duration(this.duration)
        .attr("height", this.height);

      // Update the nodes…
      let node = this.svg.selectAll('g.node')
      .data(nodesSort, function (d: any) {
        return d.id || (d.id = ++this.i);
      });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr('transform', function () {
        return 'translate(' + source.y0 + ',' + source.x0 + ')';
      })
      .on('click', click);

      // Shared = white
      // Hubmap = blue
      // Sparc = olive
      let nodeFillColor = (node) =>{
        if(node.data.sparcResident && node.data.hubmapResident) { return "#fff"; }
        else if(!node.data.sparcResident && node.data.hubmapResident) { return "rgb(144, 158, 121)"; }
        else { return "rgb(69, 59, 134)"; }
      }

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

      nodeEnter.append('text')
        .attr('x', function (d: any) {
        return d.children || d._children ? 10 : 10;
      })
        .attr('dy', '.35em')
        .attr('text-anchor', function (d: any) {
        return d.children || d._children ? 'start' : 'start';
      })
        .text(function (d: any) {
          let id = (d.data.id.indexOf('SURROGATE')>-1)?'<NONE>':d.data.id;
          return d.data.name + ' (' + id + ')';
      })
      .style('fill-opacity', 1e-6);

      nodeEnter.append('svg:title').text(function (d: any) {
        return d.data.name;
      });

      // Transition nodes to their new position.
      let nodeUpdate = node.merge(nodeEnter)
        .transition()
        .duration(this.duration);
      
      nodeUpdate
          .attr('transform', function (d: any) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });

      nodeUpdate.select('circle')
        .attr('r', 4.5)
        .style("fill", function(d) {
          return nodeFillColor(d);
        });
      
      nodeUpdate.select('text')
        .style('fill-opacity', 1);

      // Transition exiting nodes to the parent's new position (and remove the nodes)
      var nodeExit = node.exit().transition()
      .duration(this.duration);
      
      nodeExit
      .attr('transform', function (d) {
        return 'translate(' + source.y + ',' + source.x + ')';
      })
      .remove();

      nodeExit.select('circle')
        .attr('r', 1e-6);

      nodeExit.select('text')
        .style('fill-opacity', 1e-6);
      
      // Update the links…
      var link = this.svg.selectAll('path.link')
      .data(links, function (d: any) {
        // return d.target.id;
        var id = d.id + '->' + d.parent.id;
        return id;
      }
          );

      // Enter any new links at the parent's previous position.
      let linkEnter = link.enter().insert('path', 'g')
      .attr('class', function(d){
        let classesStr = "link";
        if(d.parent.data.asSparcChildren.has(d.data)){ classesStr += " sparc" }
        if(d.parent.data.asHubmapChildren.has(d.data)){ classesStr += " hubmap" }
        return classesStr;
      })
      .attr('d', (d) => {
        var o = {x: source.x0, y: source.y0, parent: {x: source.x0, y: source.y0}};
        return connector(o);
      });
      
      // Transition links to their new position.
      link.merge(linkEnter).transition()
        .duration(this.duration)
        .attr('d', connector);


      // // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(this.duration)
        .attr('d', (d: any) => {
        var o = {x: source.x, y: source.y, parent: {x: source.x, y: source.y}};
        return connector(o);
      })
        .remove();

      // Stash the old positions for transition.
      nodesSort.forEach(function (d: any) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
      
    }

    // this.root.children.forEach(this.collapse);
    update(this.root);
  }
}
