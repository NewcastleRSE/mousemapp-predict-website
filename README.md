# Standard Project
MouseMApp Website

## About

A simple static website with a form for submitting images of mice for assessment by the [Azure function](https://github.com/NewcastleRSE/mousemapp-predict-function) running the [classification model](https://github.com/NewcastleRSE/Mouse_MApp_model).

### Project Team
Matt Leach, Newcastle University  ([matthew.leach@ncl.ac.uk](mailto:matthew.leach@ncl.ac.uk))   
Satnam Dlay, Newcastle University  ([rsatnam.dlay@newcastle.ac.uk](mailto:rsatnam.dlay@newcastle.ac.uk))

### RSE Contact
Nik Khadijah Nik Aznan 
RSE Team  
Newcastle University  
([nik.nik-aznan@newcastle.ac.uk](mailto:nik.nik-aznan@newcastle.ac.uk))  

## Built With

The site is built using the [Ava](https://onepagelove.com/ava) theme from [OnePageLove](https://onepagelove.com)

## Getting Started

### Prerequisites

NodeJS is required to use some of the linting, build and serve commands. It's recommended to use version 16 but any LTS version should work.

### Installation

To install the various dev dependencies, run

```bash
yarn install
```

### Running Locally

Once the dependencies are installed run

```bash
yarn develop
```

## Deployment

### Local

To run the site in a simple NodeJS webserver, run

```bash
yarn serve
```

### Production

Deployment is handle by a workflow in `.github/workflows` that runs the build process and deploys to a special branch called `gh-pages`. The branch is configured to serve the build files as a static site on GitHub.

## Usage

Any links to production environment, video demos and screenshots.

## Roadmap

- [x] Initial Research  
- [x] Minimum viable product 
- [x] Alpha Release  
- [ ] Feature-Complete Release  

## Contributing

### Main Branch
Protected and can only be pushed to via pull requests. Should be considered stable and a representation of production code.

### Dev Branch
Should be considered fragile, code should compile and run but features may be prone to errors.

### Feature Branches
A branch per feature being worked on.

https://nvie.com/posts/a-successful-git-branching-model/

## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
