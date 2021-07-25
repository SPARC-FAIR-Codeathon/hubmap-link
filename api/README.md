# HuBMAP & SPARC Linkages - API Server

## Installation

This application consists of two parts, a webapp and an API server. The webapp is dependent on the API server for data transformation and to obscure the SciCrunch API key.

To get started locally, follow these instructions:

1. If you haven't done it already, [make a fork of this repo](https://github.com/SPARC-FAIR-Codeathon/hubmap-link/fork).
1. Clone to your local computer using `git`.
1. Make sure that you have Node 14.0 installed. See instructions [here](https://nodejs.org/en/download/).
1. Install your IDE of choice. We recommend [Visual Studio Code](https://code.visualstudio.com/).

## Building and Installing the API server

The following instructions assume you have changed directories to the API server home dir (`cd api`).

### Initial API Server Setup

Run `npm ci` to install the JavaScript dependencies into `node_modules`.

The API server requires a SciCrunch API key to access SPARC data. After you have created a User identity, a key can be downloaded for free on the [SciCrunch website](https://scicrunch.org/).

### Development API Server

If on a linux-based OS:  
```
> export SCICRUNCH_API_KEY='APIKEYXXXX'
```
If on a Windows-based OS:  
```
> set SCICRUNCH_API_KEY=APIKEYXXXX
```

Run `npm start` for a dev server. Alternatively, you can run `npm watch-ts` and `npm watch-node` in separate terminals to have automatic rebuilding/serving of code while modifying API code. Navigate to `http://localhost:5000/` to verify the API server is running.

### Build API server

Run `npm run build-ts` to build the API server code. The build artifacts will be stored in the `dist/` directory.

### API server Deployment

The transpiled build artifacts are located in the `/api/dist/` directory. All files in the build directory should be deployed to a service which can host Node.js applications. Run `node dist/index.js` on the instance to start the API server. The CI/CD workflow in this repository places these build artifacts in the Heroku infrastructure to automatically be run from <https://hubmap-link-api.herokuapp.com>.
