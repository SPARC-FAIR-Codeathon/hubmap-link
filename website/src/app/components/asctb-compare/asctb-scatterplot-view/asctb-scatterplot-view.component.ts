import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AsctbCompareService } from 'src/app/services/asctb-compare.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-asctb-scatterplot-view',
  templateUrl: './asctb-scatterplot-view.component.html',
  styleUrls: ['./asctb-scatterplot-view.component.css']
})
export class AsctbScatterplotViewComponent implements OnInit, OnChanges {

  @Input() fdNodes;
  @Input() fdEdges;

  constructor(private asctbCompareService: AsctbCompareService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.generateForceDirected();
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



  generateForceDirected() {
    //Short-circuit when no data is available
    if(!this.fdNodes || !this.fdEdges || !this.asctbCompareService) return;

    // Set the dimensions and margins of the diagram
    var element = d3.select('#forcedirected-div').node();
    let wWidth = element.getBoundingClientRect().width - 50;
    let wHeight = element.getBoundingClientRect().height;
    
    //let heightDynamicScale = Math.ceil((this.asctbCompareService.countTotalAS / 50) * element.getBoundingClientRect().height);
    //wHeight = (wHeight > heightDynamicScale)?wHeight: heightDynamicScale;

    this.margin = {top: 80, right: 90, bottom: 60, left: 90};
    this.width = wWidth - this.margin.right - this.margin.left;
    this.height = wHeight - this.margin.top - this.margin.bottom;

    d3.selectAll("#forcedirected-div > *").remove();

    this.svg = d3.select('#forcedirected-div').append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    var edgeColor = (node) => {
      if(node.group == 1) { return "#ccc"; } //Both
      if(node.group == 2) { return "rgb(144, 158, 121)"; } //Hubmap
      if(node.group == 3) { return "darkslateblue"; } //Sparc
    }


/*
    .attr("class", "links")
    .attr('class', function(d){
      let classesStr = "link";
      if(d.parent.data.asSparcChildren.has(d.data)){ classesStr += " sparc" }
      if(d.parent.data.asHubmapChildren.has(d.data)){ classesStr += " hubmap" }
      return classesStr;
    })
    .attr('class', function(d){
        console.dir(d);
        let parentOrgan = this.asctbCompareService.mergedOrganIdx[d.target];
        let childOrgan = this.asctbCompareService.mergedOrganIdx[d.source];
        let classesStr = "link";
        if(parentOrgan.asSparcChildren.has(childOrgan)){ classesStr += " sparc" }
        if(parentOrgan.asHubmapChildren.has(childOrgan)){ classesStr += " hubmap" }
        return classesStr;
      })
  */  

    var link = this.svg.append("g")
      .attr("class", "link")
      .selectAll("line")
      .data(this.fdEdges)
      .enter().append("line")
        .attr("stroke-width", function(d) { return Math.sqrt(d.value); });


    var nodeColor = (node) => {
      if(node.group == 1) { return "#ccc"; } //Both
      if(node.group == 2) { return "rgb(144, 158, 121)"; } //Hubmap
      if(node.group == 3) { return "darkslateblue"; } //Sparc
    }
    




    var g = this.svg.append("g")
      .attr("class", "nodes");

    var node_g = g
    .selectAll("circle")
      .data(this.fdNodes)
      .enter().append("g");

    var node = node_g.append("circle")
      .attr("r", 5)
      .attr("fill", function(d) { return nodeColor(d); });

    //this.svg.selectAll("g.nodes")
    node_g
      .append("text")
      .text(function(d) { return d.organ.name; })
      .attr('class','fd-text')
      .attr('x', 6)
      .attr('y', 3);

    node.append("title")
        .text(function(d) { return d.id; });

    simulation
        .nodes(this.fdNodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(this.fdEdges);

    function ticked() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });
  
      node_g.attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
    }


    //add zoom capabilities 
    var zoom_handler = d3.zoom()
    .on("zoom", (event, d)=>{
      this.svg.attr("transform", event.transform);
    });
    zoom_handler(d3.select('#forcedirected-div'))
  
    //Node dragging
    node_g.call(
      d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

    function dragstarted(event, d) {
      d3.select(this).classed("fixed", d.fixed = true);
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }


    
  }
}
