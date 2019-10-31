# apex-chart



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description          | Type                                                                                                                                                                                                                                                                                  | Default     |
| ----------- | ------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `height`    | `height`     | (optional) Height    | `number \| string`                                                                                                                                                                                                                                                                    | `undefined` |
| `options`   | --           | (optional) Options   | `ApexOptions`                                                                                                                                                                                                                                                                         | `undefined` |
| `series`    | --           | (optional) Series    | `number[] \| { name: string; type?: string; data: number[] \| { x: any; y: any; }[] \| [number, number][] \| [number, number[]][]; }[]`                                                                                                                                               | `undefined` |
| `stackType` | `stack-type` | (optional) StackType | `"100%" \| "normal"`                                                                                                                                                                                                                                                                  | `undefined` |
| `stacked`   | `stacked`    | (optional) Stacked   | `boolean`                                                                                                                                                                                                                                                                             | `undefined` |
| `toolbar`   | --           | (optional) Toolbar   | `{ show?: boolean; tools?: { download?: string \| boolean; selection?: string \| boolean; zoom?: string \| boolean; zoomin?: string \| boolean; zoomout?: string \| boolean; pan?: string \| boolean; reset?: string \| boolean; }; autoSelected?: "zoom" \| "selection" \| "pan"; }` | `undefined` |
| `type`      | `type`       | (optional) Type      | `"area" \| "bar" \| "bubble" \| "candlestick" \| "donut" \| "heatmap" \| "histogram" \| "line" \| "pie" \| "radar" \| "radialBar" \| "rangeBar" \| "scatter"`                                                                                                                         | `undefined` |
| `width`     | `width`      | (optional) Width     | `number \| string`                                                                                                                                                                                                                                                                    | `undefined` |


## Methods

### `updateOptions(newOptions: ApexCharts.ApexOptions, redrawPaths?: boolean, animate?: boolean) => Promise<void>`

Updates the configuration object. The new config object is merged with the existing config object preserving the existing configuration.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
