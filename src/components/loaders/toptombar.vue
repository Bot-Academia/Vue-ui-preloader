<template>
<div id="overlay-bar" :style="{'background-color': bgcolors}">
        <div class="loader-bar" :style="{'color': object,'font-size': size+'px',}">Loading..</div>
    </div>
</template>

<script>
    import overflowMixin from '../../mixins/overflow';

    export default {
        name: "toptombar",
        props: ['object','color1','color2','size','speed','opacity','bg','objectbg','disableScrolling'],
        mixins: [overflowMixin],
        data() {
            return{
                bgcolors: ''

            };
        },
        created() {
            let root = document.documentElement;
            root.style.setProperty('--time-animation', "load " + this.speed + "s infinite alternate ease-in-out");
            root.style.setProperty('--color-bar',this.objectbg);
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
        --time-animation: load .7s infinite alternate ease-in-out;
        --color-bar: #ffbb0f;
    }
 #overlay-bar{
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
.loader-bar{
    width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
   text-transform: uppercase;
  font-weight: 900;
  color: #ce4233;
  letter-spacing: 0.2em;
  }

  .loader-bar:before, .loader-bar:after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: var(--color-bar);
    position: absolute;
    animation: var(--time-animation);
  }
  
  .loader-bar:before {
    top: 0;
  }
  
  .loader-bar:after {
    bottom: 0;
  }

  @keyframes load {
  0% { left: 0; height: 30px; width: 15px }
  50% { height: 8px; width: 40px }
  100% { left: 235px; height: 30px; width: 15px}
}


</style>