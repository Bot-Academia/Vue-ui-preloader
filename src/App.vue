<template>
  <div id="app" class="container">

<!--    loaders-->
    <div v-if="selected=='loader1'">
      <loader1
        :styling="styling"
      ></loader1>
    </div>
    <div v-else>
      <h1>Select a loader first</h1>
    </div>
      <br><br><br>



<!--    selectors-->
    <div class="container">
        <h2>Loader options</h2>
      <button class="btn btn-primary" @click="loader1">
        Spinning Wheel
      </button>
    </div>

      <br><br><br>
      <!--      props to be passed-->
      <div class="container form">
          <h4>Animation Color:
          <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="styling.wheelcolor">
          {{styling.wheelcolor}}</h4>
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
           <h2>Speed:</h2>
          <div>
              <b-form-input id="range-1" v-model="styling.speed" type="range" min="0" max="10"></b-form-input>
              <div class="mt-2">Seconds: {{ styling.speed }}</div>
          </div>
      </div>

      <br><br><br>

      <div class="container">
          <h2>Test Duration:</h2>
          <div>
              <b-form-input id="range-1" v-model="value" type="range" min="0" max="10"></b-form-input>
              <div class="mt-2">Seconds: {{ value }}</div>
          </div>
      </div>

  </div>
</template>

<script>

import loader1 from "./components/loader1";

export default {
  data(){
    return{
      selected: '',
        value: 5,
        styling: {
            wheelcolor: '#ffbb0f',
            wheelbg: '#999793',
            opacity: 100,
            bgcolor: '#343a40',
            size: 5,
            speed: 2,
        }
    };
  },
  name: 'App',
  components: {
    loader1: loader1,
  },
  methods: {
    loader1() {
      this.selected='loader1';
      setTimeout(() => {
        this.selected='';
      }, this.value*1000);
    }
  }
}
</script>

<style>
.form{
    background-color: lightblue;
    border-radius: 15px;
}
</style>
