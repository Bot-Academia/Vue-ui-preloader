<template>
<div>
     <component :is="name"
                :object="object"
                :color1="color1"
                :color2="color2"
                :size="size"
                :speed="speed"
                :bg="bg"
                :objectbg="objectbg"
                :opacity="opacity"
                :disableScrolling="disableScrolling"></component>
</div> 
</template>

<script>
import loader1 from "./loaders/loader1";
import dots from "./loaders/dots";
import circular from "./loaders/circular";
import toptombar from "./loaders/toptombar";
import box from "./loaders/box";
export default {
    name: 'loader',
    components:{
        spinning: loader1,
        dots: dots,
        circular : circular,
        loading : toptombar,
        box: box,
    },
    props: ['object','color1','color2','size','speed','opacity','bg','objectbg','name','disableScrolling'],
}
</script>

<style>
    body.overflowHidden {
        overflow: hidden !important;
    }
</style>