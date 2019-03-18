<p align="center"><img src="https://github.com/apexcharts/stencil-apexcharts/raw/master/assets/stencil-apexcharts.png"></p>

<p align="center">
  <a href="https://github.com/apexcharts/stencil-apexcharts/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="License"></a>
  <a href="https://travis-ci.com/apexcharts/stencil-apexcharts"><img src="https://api.travis-ci.com/apexcharts/stencil-apexcharts.svg?branch=master" alt="build" /></a>
  <a href="https://www.npmjs.com/package/stencil-apexcharts"><img src="https://img.shields.io/npm/v/stencil-apexcharts.svg" alt="ver"></a>
</p>

<p align="center">Stencil.js wrapper for <a href="https://github.com/apexcharts/apexcharts.js">ApexCharts</a> to build interactive visualizations in stencil.</p>

<p align="center"><a href="https://apexcharts.com/javascript-chart-demos/"><img src="https://apexcharts.com/media/apexcharts-banner.png"></a></p>


## Installation

#### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/stencil-apexcharts@0.0.1/dist/apex.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc.

#### Node Modules

- Run `npm install stencil-apexcharts apexcharts --save`
- Put a script tag similar to this <script src='node_modules/stencil-apexcharts/dist/apex.js'></script> in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc.

#### In a stencil-app-starter app

- Run `npm install stencil-apexcharts apexcharts --save`
- Add an import to the npm packages: `import stencil-apexcharts;`
- Then you can use the element anywhere in your template, JSX, html etc.

## Usage

#### JSX

```html
<apex-chart
  type="bar"
  series={[{
    name: 'sales',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }]}
  options={{
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }} />
```

#### HTML

```html
<apex-chart></apex-chart>
<script>
  const chart = document.querySelector('apex-chart');
  chart.series = [
    {
      name: 'sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ];
  chart.options = {
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };
</script>
```

## Development

#### Install dependencies

```bash
npm install
npm install apexcharts
```

#### Running the example

Basic example is included to show how to get started using ApexCharts with Stencil easily.

To run the examples,
```bash
npm install
npm install apexcharts
npm run start
```

#### Bundling

```bash
npm run build
```

## License

Stencil-ApexCharts is released under MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.
