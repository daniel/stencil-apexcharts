import { h } from "@stencil/core";
import ApexCharts from 'apexcharts';
const config = (options, type, width, height, series, toolbar, stacked, stackType) => {
    const chart = options.chart ? Object.assign({}, options.chart) : {};
    if (type) {
        chart.type = type;
    }
    if (width) {
        chart.width = width;
    }
    if (height) {
        chart.height = height;
    }
    if (toolbar) {
        chart.toolbar = toolbar;
    }
    if (stacked) {
        chart.stacked = stacked;
    }
    if (stackType) {
        chart.stackType = stackType;
    }
    return series ? Object.assign(Object.assign({}, options), { chart, series }) : Object.assign(Object.assign({}, options), { chart });
};
if (window) {
    const win = window;
    win.ApexCharts = ApexCharts;
}
export class chart {
    constructor() {
        /**
         * Internal ApexCharts instance
         */
        this.chartObj = null;
    }
    optionsChanged(options) {
        if (this.chartObj !== null) {
            return this.chartObj.updateOptions(config(options, this.type, this.width, this.height, this.series, this.toolbar, this.stacked, this.stackType));
        }
    }
    seriesChanged(series) {
        if (this.chartObj !== null) {
            this.chartObj.updateSeries(series, true);
        }
    }
    /**
     * Updates the configuration object. The new config object is merged with the existing config object preserving the existing configuration.
     * @param newOptions The configuration object to merge on the existing one
     * @param redrawPaths When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths
     * @param animate Should the chart animate on re-rendering
     */
    async updateOptions(newOptions, redrawPaths, animate) {
        return this.chartObj.updateOptions(newOptions, redrawPaths, animate);
    }
    async componentDidLoad() {
        if (this.chartObj === null) {
            this.chartObj = new ApexCharts(this.chartRef, config(this.options, this.type, this.width, this.height, this.series, this.toolbar, this.stacked, this.stackType));
            return this.chartObj.render();
        }
    }
    componentDidUnload() {
        if (this.chartObj !== null) {
            this.chartObj.destroy();
        }
    }
    render() {
        return h("div", { ref: el => (this.chartRef = el) });
    }
    static get is() { return "apex-chart"; }
    static get originalStyleUrls() { return {
        "$": ["apex-chart.css"]
    }; }
    static get styleUrls() { return {
        "$": ["apex-chart.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "ApexChartType",
                "resolved": "\"area\" | \"bar\" | \"bubble\" | \"candlestick\" | \"donut\" | \"heatmap\" | \"histogram\" | \"line\" | \"pie\" | \"radar\" | \"radialBar\" | \"rangeBar\" | \"scatter\"",
                "references": {
                    "ApexChartType": {
                        "location": "import",
                        "path": "."
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/chart/type/",
                        "name": "see"
                    }],
                "text": "(optional) Type"
            },
            "attribute": "type",
            "reflect": false
        },
        "width": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "ApexChartWidth",
                "resolved": "number | string",
                "references": {
                    "ApexChartWidth": {
                        "location": "import",
                        "path": "."
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/chart/width/",
                        "name": "see"
                    }],
                "text": "(optional) Width"
            },
            "attribute": "width",
            "reflect": false
        },
        "height": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "ApexChartHeight",
                "resolved": "number | string",
                "references": {
                    "ApexChartHeight": {
                        "location": "import",
                        "path": "."
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/chart/height/",
                        "name": "see"
                    }],
                "text": "(optional) Height"
            },
            "attribute": "height",
            "reflect": false
        },
        "toolbar": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ApexChartToolbar",
                "resolved": "{ show?: boolean; tools?: { download?: string | boolean; selection?: string | boolean; zoom?: string | boolean; zoomin?: string | boolean; zoomout?: string | boolean; pan?: string | boolean; reset?: string | boolean; }; autoSelected?: \"zoom\" | \"selection\" | \"pan\"; }",
                "references": {
                    "ApexChartToolbar": {
                        "location": "import",
                        "path": "."
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/chart/toolbar/",
                        "name": "see"
                    }],
                "text": "(optional) Toolbar"
            }
        },
        "stacked": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "ApexChartStacked",
                "resolved": "boolean",
                "references": {
                    "ApexChartStacked": {
                        "location": "import",
                        "path": "."
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/chart/stacked/",
                        "name": "see"
                    }],
                "text": "(optional) Stacked"
            },
            "attribute": "stacked",
            "reflect": false
        },
        "stackType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "ApexChartStackType",
                "resolved": "\"100%\" | \"normal\"",
                "references": {
                    "ApexChartStackType": {
                        "location": "import",
                        "path": "."
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/chart/stackType/",
                        "name": "see"
                    }],
                "text": "(optional) StackType"
            },
            "attribute": "stack-type",
            "reflect": false
        },
        "options": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "ApexOptions",
                "resolved": "ApexOptions",
                "references": {
                    "ApexOptions": {
                        "location": "import",
                        "path": "apexcharts"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/",
                        "name": "see"
                    }],
                "text": "(optional) Options"
            }
        },
        "series": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "ApexOptionsSeries",
                "resolved": "number[] | { name: string; type?: string; data: number[] | { x: any; y: any; }[] | [number, number][] | [number, number[]][]; }[]",
                "references": {
                    "ApexOptionsSeries": {
                        "location": "import",
                        "path": "."
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": "https://apexcharts.com/docs/options/series/",
                        "name": "see"
                    }],
                "text": "(optional) Series"
            }
        }
    }; }
    static get states() { return {
        "chartObj": {}
    }; }
    static get methods() { return {
        "updateOptions": {
            "complexType": {
                "signature": "(newOptions: ApexCharts.ApexOptions, redrawPaths?: boolean, animate?: boolean) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "newOptions The configuration object to merge on the existing one",
                                "name": "param"
                            }],
                        "text": "The configuration object to merge on the existing one"
                    }, {
                        "tags": [{
                                "text": "redrawPaths When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths",
                                "name": "param"
                            }],
                        "text": "When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths"
                    }, {
                        "tags": [{
                                "text": "animate Should the chart animate on re-rendering",
                                "name": "param"
                            }],
                        "text": "Should the chart animate on re-rendering"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "ApexOptions": {
                        "location": "import",
                        "path": "apexcharts"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Updates the configuration object. The new config object is merged with the existing config object preserving the existing configuration.",
                "tags": [{
                        "name": "param",
                        "text": "newOptions The configuration object to merge on the existing one"
                    }, {
                        "name": "param",
                        "text": "redrawPaths When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths"
                    }, {
                        "name": "param",
                        "text": "animate Should the chart animate on re-rendering"
                    }]
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "options",
            "methodName": "optionsChanged"
        }, {
            "propName": "series",
            "methodName": "seriesChanged"
        }]; }
}
