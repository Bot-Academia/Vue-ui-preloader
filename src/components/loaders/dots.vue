<template>
    <div id="overlay-dots" :style="{'background-color': bgcolors}">
        <div class="loader-dots" :style="{'color': object,'font-size': size+'px'}"></div>
    </div>
</template>

<script>
    import overflowMixin from '../../mixins/overflow';

    export default {
        name: "dots",
        props: ['object','color1','color2','size','speed','opacity','bg','objectbg','disableScrolling'],
        mixins: [overflowMixin],
        data() {
            return{
                bgcolors: ''

            };
        },
        created() {
            let root = document.documentElement;
            root.style.setProperty('--time-animation', "load7 " + this.speed + "s infinite ease-in-out");
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

<style >
    :root{
        --time-animation: load7 0.7s infinite ease-in-out;
    }
    #overlay-dots{
        background-color: rgba(52,58,64,1);
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:1000;
    }
    .loader-dots,
    .loader-dots:before,
    .loader-dots:after {
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: var(--time-animation);
        animation: var(--time-animation);
    }
    .loader-dots {
        color: black;
        font-size: 10px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index:2000;
        text-indent: -9999em;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    .loader-dots:before,
    .loader-dots:after {
        content: '';
        position: absolute;
        top: 0;
    }
    .loader-dots:before {
        left: -3.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .loader-dots:after {
        left: 3.5em;
    }
    @-webkit-keyframes load7 {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    }
    @keyframes load7 {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    }
</style>