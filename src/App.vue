<template>
  <div id="app" class="container">

<!--    loaders-->
    <div v-if="selected=='loader1'">
      <loader1
      :wheelcolor="wheelcolor"
      :bgcolor="bgcolor"
      :wheelbg="wheelbg"
      :opacity="opacity"
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
        Static Loader
      </button>
    </div>

      <br><br><br>
      <!--      props to be passed-->
      <div class="container">
          <h4>Wheel color:</h4>
          <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="wheelcolor">
          {{wheelcolor}}
          <h4>Background Color:</h4>
          <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="bgcolor">
          {{bgcolor}}
          <h4>Background Color opacity:</h4>
          <b-form-input id="range-1" v-model="opacity" type="range" min="0" max="100"></b-form-input>
          <div class="mt-2">Opacity-percentage: {{ opacity }}</div>
          <h4>Wheel Background Color:</h4>
          <input type="color" id="favcolor" name="favcolor" value="#ff0000" v-model="wheelbg">
          {{wheelbg}}
      </div>
      <div class="container">
          <h4>Test Duration:</h4>
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
        wheelcolor: '#ffbb0f',
        wheelbg: '#999793',
        opacity: 100,
        bgcolor: '#343a40'
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

</style>
