# HuBMAP & SPARC Linkages

> A tool to discover and visualize SPARC and HuBMAP ontology and data linkages

[![Latest Version](https://img.shields.io/badge/Production%20Site-Live-brightgreen)](https://sparc-fair-codeathon.github.io/hubmap-link/)
[![Production Build](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/actions/workflows/production-build.yml/badge.svg)](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/actions/workflows/production-build.yml)
[![GitHub last commit](https://img.shields.io/github/last-commit/SPARC-FAIR-Codeathon/hubmap-link.svg)](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/commits/main)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

## Product demo

The latest build of this product is at <https://sparc-fair-codeathon.github.io/hubmap-link/>.

## Project Goals

This application enables visualization and reporting on the linkages between HuBMAP and SPARC. It performs the following functions:

1) Visualization of the anatomical structures ontologically tagged by SPARC and highlight their linkage with HuBMAP CCF / ASCT+B ontology terms
2) Illustrate how those common terms map to the 3D HuBMAP VHCCF reference system
3) Map samples from SPARC to HuBMAP
4) Visualize the term overlaps
5) Visualize the samples both from HuBMAP and SPARC in the same 3D reference system (CCF).

This study of the interlinkages between HuBMAP and SPARC ontologies and data could be very valuable in longitudinal studies and to further the goals of both HuBMAP and SPARC in cross-consortium interoperability.

See the [Project Description](DESCRIPTION.md) and [Workflow Document](WORKFLOW.pdf) for more background information and initial resources for development.

## Tracking Development

Development is tracked on the [Sprint Backlog](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/projects/1).

## Continuous Integration / Continuous Deployment (CI/CD)

This application is built automatically using [GitHub Actions](https://github.com/features/actions) ([status](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/actions/workflows/production-build.yml)). Each push to the `main` branch starts a workflow that builds the latest version of the code and deploys the built application to [GitHub Pages](https://pages.github.com/) ([here](https://sparc-fair-codeathon.github.io/hubmap-link/)).

## Installation

This application consists of two parts, a webapp and a proxy server.
To get started locally, follow these instructions:

1. If you haven't done it already, [make a fork of this repo](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/fork).
1. Clone to your local computer using `git`.
1. Make sure that you have Node 14.0 installed. See instructions [here](https://nodejs.org/en/download/).
1. Install your IDE of choice. We recommend [Visual Studio Code](https://code.visualstudio.com/).
1. Install the Angular CLI \
    `npm install -g @angular/cli`

## Building and Installing the webapp project

For building and installing, the following instructions assume you have changed directories to the website dir (`cd website`).

### Initial setup

Run `npm ci` to install the JavaScript dependencies into `node_modules`.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Additional options may be configured to meet the objectives of your build. More information may be found at the following reference: https://angular.io/cli/build.

### Deployment

The transpiled build artifacts are located in the `/website/dist/` directory. All files in the build directory should be deployed to the root directory of a static web server such as nginx or apache2. The CI/CD workflow described above places these build artifacts in the `gh-pages` branch to be automatically served by GitHub Pages.

## Building and Installing the proxy server

The following instructions assume you have changed directories to the proxy server home dir (`cd api`).

### Initial setup

Run `npm ci` to install the JavaScript dependencies into `node_modules`.

The proxy server requires a SciCrunch API key to access SPARC data. After you have created a User identity, a key can be downloaded for free on the [SciCrunch website](https://scicrunch.org/).

If on a linux-based OS:  
```
> export SCICRUNCH_API_KEY='APIKEYXXXX'
```
If on a Windows-based OS:  
```
> set SCICRUNCH_API_KEY=APIKEYXXXX
```
npm start

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Project structure

* `/website/` - Parent directory of the hubmap-link web application
* `/website/e2e/` - Configuration directory for application end-to-end testing
* `/website/src/` - Project source code and assets
* `/website/src/app/` - Angular application source code 
* `/website/src/app/components/` - The web component hierarchy 
* `/website/src/app/interfaces/` - Typescript interfaces
* `/website/src/app/services/` - Modules to maintain inter-component state, data, and data-wrangling business logic
* `/website/src/assets/` - Static web assets such as images and datafiles
* `/website/src/environments/` - Build environment configuration
* `/api/` - A proxy server to obscure api key and perform some datatype conversions
* `/api/src/` - Project proxy source code and assets
* `/api/public/` - Publically exposed proxy resources
* `/docs/` - Documentation resources

## Data sources

| Data Type | Source | Method |
| ----------- | ----------- | ----------- |
| HuBMAP ontology concepts | HuBMAP CCF Reporter [Ontology API](https://portal.hubmapconsortium.org/docs/apis) | The ontology API references production versions of the HuBMAP ASCT+B tables where concepts are curated |
| SPARC AS ontology concepts | FDI Lab [SciCrunch/SciGraph API](https://scicrunch.org/) | Organ anatomical structure concept datasets are extracted via neighbor search referencing inbound [PART_OF](http://www.ontobee.org/ontology/RO?iri=http://purl.obolibrary.org/obo/BFO_0000050) predicate up to 10 degrees |
| SPARC CT ontology concepts | FDI Lab [SciCrunch/SciGraph API](https://scicrunch.org/) | Cell Type concepts are extracted via cypher query on UBERON-to-Cell Ontology single-hop linkages across all predicates |
| HuBMAP dataset metadata | HuBMAP [Elastic Search API](https://smart-api.info/ui/7aaf02b838022d564da776b03f357158) | Dataset metadata is ingested directly from the endpoint |
| SPARC dataset metadata | SPARC [Elastic Search API](https://scicrunch.org/) | Dataset metadata is filtered to human-species subset |

## Ontology concept merging

HuBMAP and SPARC concepts are merged principally based on shared ontology IDs. In the case of SPARC, anatomic structures are uniformly annotated with UBERON-sourced IDs. Most HuBMAP concepts are likewise annotated with UBERON-sourced IDs. However, a small proportion of HuBMAP concepts lack an ontology ID assignment and require additional disambiguation. Where HuBMAP concepts lacked an ontological identifier, the concept name is compared to all exact synonyms among participating SPARC nodes. If no matching synonyms exist in SPARC, then the concept is treated as novel and added to the graph.

![alt text](./docs/HuBMAP_merge_workflow.png)


## Links and acknowledgements

**Team Members**:

* Bruce W. Herr II ([@bherr2](https://github.com/bherr2))
* Samuel O'Blenes ([@soblenes32](https://github.com/soblenes32))
