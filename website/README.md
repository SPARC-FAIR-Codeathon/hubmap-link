# HuBMAP & SPARC Linkages - Web Application

## Installation

This application consists of two parts, a webapp and an API server. The webapp is dependent on the API server for data transformation and to obscure the SciCrunch API key.

To get started locally, follow these instructions:

1. If you haven't done it already, [make a fork of this repo](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/fork).
1. Clone to your local computer using `git`.
1. Make sure that you have Node 14.0 installed. See instructions [here](https://nodejs.org/en/download/).
1. Install your IDE of choice. We recommend [Visual Studio Code](https://code.visualstudio.com/).
1. Install the Angular CLI \
    `npm install -g @angular/cli`

## Building and Installing the Webapp

For building and installing, the following instructions assume you have changed directories to the website dir (`cd website`).

### Initial Webapp Setup

Run `npm ci` to install the JavaScript dependencies into `node_modules`.

### Development Webapp Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build Webapp

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Additional options may be configured to meet the objectives of your build. More information may be found at the following reference: https://angular.io/cli/build.

### Webapp Deployment

The transpiled build artifacts are located in the `/website/dist/` directory. All files in the build directory should be deployed to the root directory of a static web server such as nginx or apache2. The CI/CD workflow in this repository places these build artifacts in the `gh-pages` branch to be automatically served by GitHub Pages.
