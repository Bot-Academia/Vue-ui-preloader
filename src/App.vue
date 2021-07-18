<template>
  <div id="app" class="container">
    <loader :object="styling.objectcolor"
            :color1="styling.animationcolor"
            :color2="styling.animationcolor2"
            :size="styling.size"
            :speed="styling.speed"
            :bg="styling.bgcolor"
            :objectbg="styling.objectbg"
            :opacity="styling.opacity"
            :name="selected"
            :disableScrolling="styling.disableScrolling"></loader>

      <div class="row justify-content-md-center">
          <div class="col-md-auto">
              <a href="https://www.npmjs.com/package/vue-ui-preloader"><img src="https://img.shields.io/npm/v/vue-ui-preloader.svg" class="batch"></a>
              <a href="https://www.npmjs.com/package/vue-ui-preloader"><img src="https://img.shields.io/npm/dm/vue-ui-preloader.svg" class="batch"></a>
          </div>
      </div>
      <h1><b><span id="ui">UI</span><span id="topia">topia</span></b></h1>

      <p class="row justify-content-md-center">Vue-Ui-Loader is a preloader component made with CSS transistions and animations</p>

      <transition name="fade">
      <div class="container form" v-if="flag">
          <div class="row">
              <div class="col-sm">
                  <h5>Object color:
                      <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.objectcolor">
                      {{styling.objectcolor}}</h5>

                  <h5> Additional Color1:
                      <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.animationcolor">
                      {{styling.animationcolor}}</h5>
                  <h5> Additional Color2:
                      <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.animationcolor2">
                      {{styling.animationcolor2}}</h5>
                  <h5>Background color:
                      <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.bgcolor">
                      {{styling.bgcolor}}</h5>
                  <h5>Object bg color:
                      <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.objectbg">
                      {{styling.objectbg}}</h5>
                  <h5>Disable page scrolling:
                      <input type="checkbox" id="favcolor" name="pageScrollingDisabled" v-model="styling.disableScrolling">
                      {{styling.disableScrolling}}</h5>
              </div>
              <div class="col-sm">
                  <h5>Background color opacity: {{ styling.opacity }}%</h5>
                  <b-form-input id="range-1" v-model="styling.opacity" type="range" min="0" max="100"></b-form-input>
                  <h5>Size of animation: {{ styling.size }}px</h5>
                  <b-form-input id="range-1" v-model="styling.size" type="range" min="0" max="30"></b-form-input>
                  <h5>Speed: {{ styling.speed }}s</h5>
                  <div>
                      <b-form-input id="range-1" v-model="styling.speed" type="range" min="0.1" max="10" step="0.1"></b-form-input>
                  </div>
              </div>
          </div>
          <hr>
          <h4>Test Duration: {{ value }}s</h4>
          <div>
              <b-form-input id="range-1" v-model="value" type="range" min="0" max="10"></b-form-input>
          </div>
      </div>
      </transition>

      <transition name="fade">
      <div class="container" v-if="flag">
          <div id="outer">
              <div class="inner"><button class="btn btn-danger" @click="loader('spinning')" ><h2>Spinner</h2></button></div>
              <div class="inner"><button class="btn btn-danger" @click="loader('dots')"><h2>Dots</h2></button></div>
              <div class="inner"><button class="btn btn-danger" @click="loader('loading')"><h2>Loading</h2></button></div>
              <div class="inner"><button class="btn btn-danger" @click="loader('circular')"><h2>Circular</h2></button></div>
              <div class="inner"><button class="btn btn-danger" @click="loader('box')"><h2>Box</h2></button></div>
          </div>
      </div>
      </transition>

      <div class="container">

      </div>
<!--      props to be passed-->


      <br>

      <transition name="slide">
   <div class="container form" v-if="flag">
       <h1>Playground Code</h1>
       <b-form-textarea
      id="textarea"
      v-model="code"
      rows="3"
      placeholder="Your code snippet will be displayed here after you select Pre-Loader, paste this code after installation."
       ></b-form-textarea></div>
      </transition>
      <br>
  </div>
</template>

<script>

import loader from "./components/loader"

export default {
  data(){
    return{
      selected: '',
        value: 2,
        styling: {
            objectcolor: '#ff9633',
            animationcolor: '#ffffff',
            animationcolor2: '#17fd3d',
            objectbg: '#999793',
            opacity: 80,
            bgcolor: '#343a40',
            size: 5,
            speed: 2,
            disableScrolling: false,
        },
        code: ``,
        flag: false
    };
  },
  name: 'App',
  components: {
    loader: loader,
  },
  methods: {
    loader(loader) {
      this.selected=loader;
      this.code=`<loader object="${this.styling.objectcolor}" color1="${this.styling.animationcolor}" color2="${this.styling.animationcolor2}" size="${this.styling.size}" speed="${this.styling.speed}" bg="${this.styling.bgcolor}" objectbg="${this.styling.objectbg}" opacity="${this.styling.opacity}" disableScrolling="${this.styling.disableScrolling}" name="${this.selected}"></loader>`
      setTimeout(() => {
        this.selected='';
      }, this.value*1000);
    }
  },
    mounted() {
      this.flag=true;
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
h1{
    text-align: center;
    padding-bottom: 5px;
    font-family: 'Noto Sans', sans-serif;
}
.header h1{
  font-family: 'Noto Sans', sans-serif;
    margin: 10px 10px 10px 10px;
}
#ui{
  color: red;
  font-size: 70px;
  font-family: 'Noto Sans', sans-serif;
}
#topia{
  color: blue;
    font-size: 50px;
  font-family: 'Noto Sans', sans-serif;
}
.form{
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 20px 20px 20px 20px;
    background-color: rgb(75, 106, 163);
    border-radius: 15px;
    box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.75);
    color: white;
}
#textarea{
  text-align: center;
  font-weight: bold;
  box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.75);
}
#outer
{
    width:100%;
    text-align: center;
}
.inner
{
    margin: 10px 10px 10px 10px;
    display: inline-block;
}
.batch{
    text-align: center;
    margin: 10px 10px 10px 10px;
}
    p{
        color: lightyellow;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 2s;
}

.fade-leave-active {
    transition: opacity 2s;
    opacity: 0;
}
.slide-enter {
    opacity: 0;
    /*transform: translateY(20px);*/
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}

.slide-move {
    transition: transform 1s;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}
</style>
