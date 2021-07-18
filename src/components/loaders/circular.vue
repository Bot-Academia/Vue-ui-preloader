<template>
<div id="overlay-circular" :style="{'background-color': bgcolors}">
  <div class="loader-circular"></div>
</div>
</template>

<script>
    import overflowMixin from '../../mixins/overflow';

    export default {
        name: "circular",
        props: ['object','color1','color2','size','speed','opacity','bg','objectbg','disableScrolling'],
        mixins: [overflowMixin],
        data() {
            return{
                bgcolors: ''

            };
        },
        created() {
            let root = document.documentElement;

            root.style.setProperty('--color-animation1', this.object);
            root.style.setProperty('--color-animation2', this.color1);
            root.style.setProperty('--color-animation3', this.color2);
            root.style.setProperty('--border-size',this.size+'px solid transparent');
            root.style.setProperty('--time-animation1', "spin-circular "+ (this.speed-0.5)+"s linear infinite");
            root.style.setProperty('--time-animation2', "spin-circular "+ (this.speed)+"s linear infinite");
            root.style.setProperty('--time-animation3', "spin-circular "+ (this.speed+1.0)+"s linear infinite");
            var c;
            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.bg)){
                c= this.bg.substring(1).split('');
                if(c.length== 3){
                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c= '0x'+c.join('');
                this.bgcolors= 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + this.opacity/100 +')';
            }
        }
    }
</script>

<style>

:root{
    --color-animation1: #9370DB;
    --color-animation2: #9370DB;
    --color-animation3: #9370DB;
    --border-size: 3px solid transparent;
}

  :root{
    --time-animation1: spin-circular 1.5s linear infinite;
    --time-animation2: spin-circular 2s linear infinite;
    --time-animation3: spin-circular 3s linear infinite;
  }
#overlay-circular {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:1000;
}
.loader-circular {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: var(--border-size);
    border-top-color: var(--color-animation1);
    -webkit-animation: var(--time-animation2);
    animation: var(--time-animation2);
}
.loader-circular:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: var(--border-size);
    border-top-color: var(--color-animation2);
    -webkit-animation: var(--time-animation3);
    animation: var(--time-animation3);
}
.loader-circular:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: var(--border-size);
    border-top-color: var(--color-animation3);
    -webkit-animation: var(--time-animation1);
    animation: var(--time-animation1);
}
@-webkit-keyframes spin-circular {
    0%   {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes spin-circular {
    0%   {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>