<template>
  <div id="app" class="container">

<!--loaders-->
    <loader :object="styling.objectcolor"
            :color1="styling.animationcolor"
            :color2="styling.animationcolor2"
            :size="styling.size"
            :speed="styling.speed"
            :bg="styling.bgcolor"
            :objectbg="styling.objectbg"
            :opacity="styling.opacity"
            :name="selected"></loader>

                <div class="container header">
                    <h1><b><span id="ui">UI</span><span id="topia">topia</span></b></h1>
                    <hr class="style-two">
                    <h1>Vue Pre-loader</h1>
                </div>
<!--formal-->
      <div class="container">
          <div class="row">
              <div class="col-sm">
                  <div class="container main">
                      <h2>Loader options</h2>
                      <div id="outer">
                          <div class="inner"><button class="btn btn-danger" @click="loader('loader1')" >Spinner</button></div>
                          <div class="inner"><button class="btn btn-danger" @click="loader('dots')">Dots</button></div>
                          <div class="inner"><button class="btn btn-danger" @click="loader('toptombar')">Loading</button></div>
                          <div class="inner"><button class="btn btn-danger" @click="loader('circular')">circular</button></div>
                          <div class="inner"><button class="btn btn-danger" @click="loader('box')">Box</button></div>
                      </div>
                  </div>
              </div>
              <div class="col-sm">
                  <div class="container test">
                      <h2>Test Duration:</h2>
                      <div>
                          <b-form-input id="range-1" v-model="value" type="range" min="0" max="10"></b-form-input>
                          <div class="mt-2">Seconds: {{ value }}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>




<!--      props to be passed-->
      <div class="container form">
          <h4>Animation Color:
          <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.objectcolor">
          {{styling.objectcolor}}</h4>
          <h4> Additional Color selector:
              <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.animationcolor">
              <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.animationcolor2">
              {{styling.animationcolor}},{{styling.animationcolor2}}</h4>
          <h4>Background Color:
          <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.bgcolor">
          {{styling.bgcolor}}</h4>
          <h4>Animation Background Color:
              <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.objectbg">
              {{styling.objectbg}}</h4>
          <h4>Background Color opacity:</h4>
          <b-form-input id="range-1" v-model="styling.opacity" type="range" min="0" max="100"></b-form-input>
          <div class="mt-2">Opacity-percentage: {{ styling.opacity }}</div>
          <h4>Size of animation:</h4>
          <b-form-input id="range-1" v-model="styling.size" type="range" min="0" max="30"></b-form-input>
          <div class="mt-2">Size in pixel: {{ styling.size }}</div>
           <h4>Speed:</h4>
          <div>
              <b-form-input id="range-1" v-model="styling.speed" type="range" min="0.1" max="10" step="0.1"></b-form-input>
              <div class="mt-2">Seconds: {{ styling.speed }}</div>
          </div>
      </div>

      <br>

      <b-form-textarea
      id="textarea"
      v-model="code"
      rows="3"
       ></b-form-textarea>

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
        },
        code: ``,
    };
  },
  name: 'App',
  components: {
    loader: loader,
  },
  methods: {
    loader(loader) {
      this.selected=loader;
      this.code=`<loader object="${this.styling.objectcolor}"color1="${this.styling.animationcolor}"color2="${this.styling.animationcolor2}"size="${this.styling.size}"speed="${this.styling.speed}"bg="${this.styling.bgcolor}"objectbg="${this.styling.objectbg}"opacity="${this.styling.opacity}"name="${this.selected}"></loader>`
      setTimeout(() => {
        this.selected='';
      }, this.value*1000);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
.header{
  text-align: center;
  border-radius: 15px !important;
  box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.75);
  background-color: rgb(255, 255, 255) !important;
}

.header h1{
  font-family: 'Noto Sans', sans-serif;
    margin: 10px 10px 10px 10px;
}

#ui{
  color: red;
  font-size: 50px;
  font-family: 'Noto Sans', sans-serif;
}

#topia{
  color: blue;
  font-family: 'Noto Sans', sans-serif;
}

hr.style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

.form,.test,.main{
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    background-color: rgb(22, 51, 105);
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

</style>
