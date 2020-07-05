<template>
  <div id="app" class="container">

<!--    loaders-->
    <div v-if="selected=='loader1'">
      <loader1></loader1>
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
      <div class="container">
          <h1>For how long you want to run loader animation?</h1>
          <div>
              <b-form-input id="range-1" v-model="value" type="range" min="0" max="10"></b-form-input>
              <div class="mt-2">Value: {{ value }}</div>
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
        value: 5
    };
  },
  name: 'App',
  components: {
    loader1: loader1
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
