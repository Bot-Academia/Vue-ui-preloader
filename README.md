![chrome_54Uk8Qpx8p](https://user-images.githubusercontent.com/54861487/86740454-4a074e00-c054-11ea-8d35-ddcb438982e7.png)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/52e8f8d3a38e4c8ab3a2539ecfd88b5b)](https://app.codacy.com/gh/Bot-Academia/Vue-ui-preloader?utm_source=github.com&utm_medium=referral&utm_content=Bot-Academia/Vue-ui-preloader&utm_campaign=Badge_Grade_Dashboard)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f88fe30e-103a-4157-8ead-30de668b037c/deploy-status)](https://app.netlify.com/sites/vue-preloader/deploys)

[![Language](https://img.shields.io/badge/language-vue-green.svg)](https://img.shields.io/badge/language-vue-green.svg)
[![License](https://img.shields.io/badge/license-MIT-000000.svg)](https://img.shields.io/badge/license-MIT-000000.svg)
[![NPM Package](https://img.shields.io/npm/v/vue-ui-preloader.svg)](https://www.npmjs.com/package/vue-ui-preloader) 
[![NPM Downloads](https://img.shields.io/npm/dm/vue-ui-preloader.svg)](https://www.npmjs.com/package/vue-ui-preloader)
	<a href="https://github.com/vuejs/awesome-vue#loader"><img src="https://awesome.re/mentioned-badge.svg" alt="Mentioned in Awesome-Vue" /></a>


[![NPM](https://nodei.co/npm/vue-ui-preloader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-ui-preloader/)

## Demo and playground
Live demo -  https://vue-preloader.netlify.app/

[Playground Website](https://vue-preloader.netlify.app/).
Adjust the settings using the playground options. On the bottom of the page you will find the source code that you can directly use in your project or you can manually change the props.

npm link - https://www.npmjs.com/package/vue-ui-preloader

## Installation

```bash
# use yarn
yarn add vue-ui-preloader
# use npm
npm install --save vue-ui-preloader
```

## Usage

In your main.js
```js
import loader from "vue-ui-preloader";

Vue.use(loader);
```

In your template
```vue
<template>
  <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
</template>
```

>note(you can either use the [playground](https://vue-preloader.netlify.app/) website to automatically get all the props set or you can set them manaully using the below prop list. You can also resort to not passing any prop, in this case the preloader will use default settings.)

## Via CDN

CDN demo link - http://jsfiddle.net/8961cm0s/1/

In your index.html
```html
<script src="https://unpkg.com/vue-ui-preloader"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/vue-ui-preloader/dist/loader.css">
```

In your template
```html
<div id="app">
  <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
</div>
```

In your main.js
```js
Vue.use(loader)

new Vue({
  el: '#app',
  components:{
  loader:loader
  }
});
```

## Props
| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| name | string | 'spinning' | decides the type of loader |
| object | string | '#ff9633' | set the color of the loaders. hex or color |
| color1 | string | only for circular | set the color of the circular loader disk1. hex or color |
| color2 | string | only for circular | set the color of the circular loader disk2. hex or color |
| size | number | 5 | set the size of loader |
| bg | string | '#343a40' | set the color of the loader background. hex or color |
| objectbg | string | '#999793' | set the color of the loader object background. hex or color |
| opacity | number | 80 | set the opacity of background |
| speed | number | 2 | animation speed in seconds |
| disableScrolling | boolean | false | disable page scrolling when preloader is open |

## Author

&#169; [Vinayak sharma](https://github.com/vinayaksh42)
 [Hrishikesh Agarwal](https://github.com/codetheorem)
