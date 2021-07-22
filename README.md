# HuBMAP & SPARC Linkages

> A tool to discover and visualize SPARC and HuBMAP ontology and data linkages

[![Latest Version](https://img.shields.io/badge/Production%20Site-Live-brightgreen)](https://sparc-fair-codeathon.github.io/hubmap-link/)
[![Production Build](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/actions/workflows/production-build.yml/badge.svg)](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/actions/workflows/production-build.yml)
[![GitHub last commit](https://img.shields.io/github/last-commit/SPARC-FAIR-Codeathon/hubmap-link.svg)](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/commits/main)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

## Product demo

The latest build of this product is at <https://sparc-fair-codeathon.github.io/hubmap-link/>.

## Project Goals

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

## Continuous Integration / Continuous Deployment (CI/CD)

This application is built automatically using [GitHub Actions](https://github.com/features/actions) ([status](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/actions/workflows/production-build.yml)). Each push to the `main` branch starts a workflow that builds the latest version of the code and deploys the built application to [GitHub Pages](https://pages.github.com/) ([here](https://sparc-fair-codeathon.github.io/hubmap-link/)).

## Installation

To get started locally, follow these instructions:

1. If you haven't done it already, [make a fork of this repo](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/fork).
1. Clone to your local computer using `git`.
1. Make sure that you have Node 14.0 installed. See instructions [here](https://nodejs.org/en/download/).
1. Install your IDE of choice. We recommend [Visual Studio Code](https://code.visualstudio.com/).
1. Install the Angular CLI \
    `npm install -g @angular/cli`

## Building and Installing this project

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

## Background

## Methodology & limitations

### SPARC datasources

SciGraph

### HuBMAP datasources

HuBMAP

### Merging datasources

In cases where HuBMAP concepts lacked an annotated ontological identifier, a case-insensitive name lookup was executed against all exact synonym terms in the SPARC dataset. In the event of a term match, the ID associated with the synonymous term hit was applied to the other term.

## Links and acknowledgements

**Team Members**:

* Bruce W. Herr II (@bherr2)
* Samuel O'Blenes (@soblenes32)
