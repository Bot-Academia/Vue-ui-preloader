<template>
  <div id="app" class="container">

<!--    loaders-->
    <loader :styling="styling" :name="selected"></loader>


<!--      formal-->
    <div class="container main">
        <h2>Loader options</h2>
        <div id="outer">
            <div class="inner"><button class="btn btn-primary" @click="loader('loader1')" >Spinner</button></div>
            <div class="inner"><button class="btn btn-primary" @click="loader('dots')">Dots</button></div>
            <div class="inner"><button class="btn btn-primary" @click="loader('toptombar')">Loading</button></div>
            <div class="inner"><button class="btn btn-primary" @click="loader('circular')">circular</button></div>
            <div class="inner"><button class="btn btn-primary" @click="loader('box')">Box</button></div>
        </div>
    </div>

      <br><br><br>

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
              <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.wheelbg">
              {{styling.wheelbg}}</h4>
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

      <br><br><br>

      <div class="container test">
          <h2>Test Duration:</h2>
          <div>
              <b-form-input id="range-1" v-model="value" type="range" min="0" max="10"></b-form-input>
              <div class="mt-2">Seconds: {{ value }}</div>
          </div>
      </div>

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
            objectcolor: '#ffbb0f',
            animationcolor: '#ffbb0f',
            animationcolor2: '#ffbb0f',
            wheelbg: '#999793',
            opacity: 80,
            bgcolor: '#343a40',
            size: 5,
            speed: 2,
        },
    };
  },
  name: 'App',
  components: {
    loader: loader,
  },
  methods: {
    loader(loader) {
      this.selected=loader;
      setTimeout(() => {
        this.selected='';
      }, this.value*1000);
    }
  }
}
</script>

<style>
.form,.test,.main{
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    background-color: lightblue;
    border-radius: 15px;
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
    padding: 10px 10px 10px 10px;
    display: inline-block;
}

</style>
