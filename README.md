# HuBMAP and SPARC Linkages
> A tool to discover visualize SPARC and HuBMAP ontology and data linkages

Description.

## Product demo
A demo of the latest build is [available here](https://sparc-fair-codeathon.github.io/hubmap-link/).

## Installation

The transpiled build artifacts are located in the /website/build/ directory and may be cloned or downloaded directly from Github. All files in the build directory should be deployed to the root directory of a static web server such as nginx or apache2.

  
## How to compile this project

### Prerequisite software
1. A GIT client such as https://git-scm.com/
2. NodeJs & NPM - The latest build can be found at https://nodejs.org/en/download/
3. Angular CLI - From the command line, execute the following:
```
> npm install -g @angular/cli
```
4. A capable web development IDE such as Visual Studio Code is suggested. 

### Environment setup and compilation
1. Clone the repository into your local environment
```
> git clone https://github.com/SPARC-FAIR-Codeathon/hubmap-link.git 
```
2. Install the project dependencies. Navigate to /website and execute the following npm command:
```
> npm install
```
3. To begin serving the project immediately out of your localhost on port 4200, execute the following command:
```
> ng serve
```
4. Alternatively, to build the project execute:
```
> ng build
```
Additional options may be configured to meet the objectives of your build. More information may be found at the following reference: https://angular.io/cli/build. Upon successful execution of the build command, the compiled artifacts are located in the /website/build/ directory and may be copied directly to a webserver.

## Project structure


## Background

## Methodology & limitations

## Links and acknowledgements



# Visualizing Sample and Ontology linkages between HuBMAP and SPARC (hubmap-link)

We propose to visualize and report on the linkages between HuBMAP and SPARC. We will

1) look at the anatomical structures ontologically tagged by SPARC and find how they connect to the HuBMAP CCF / ASCT+B ontology terms
2) find how those common terms map to the 3D HuBMAP VHCCF reference system
3) map samples from SPARC to HuBMAP 
4) visualize the term overlaps 
5) and visualize the samples both from HuBMAP and SPARC in the same 3D reference system (CCF).

This study of the interlinkages between HuBMAP and SPARC ontologies and data could be very valuable in longitudinal studies and to further the goals of both HuBMAP and SPARC in cross-consortium interoperability.

See the [Project Description](DESCRIPTION.md) for more background information and initial resources for development.

## Tracking Development

Development will be tracked on the [Sprint Backlog](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/projects/1).
