<template>
<div>
     <component :is="name" :styling="styling"></component>
</div> 
</template>

<script>
import loader1 from "./loaders/loader1";
import dots from "./loaders/dots";
import circular from "./loaders/circular";
import toptombar from "./loaders/toptombar";
import box from "./loaders/box";
export default {
    components:{
        loader1: loader1,
        dots: dots,
        circular : circular,
        toptombar : toptombar,
        box: box,
    },
    props:['name','styling'],
}
</script>

<style scoped>

</style>