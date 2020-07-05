<template>
<div id="overlay" :style="{'background-color': bgcolors}">
        <div class="loader" :style="{'color': styling.wheelcolor,'font-size': styling.size+'px',}">Loading..</div>
    </div>
</template>

<script>
export default {
     name: "toptombar",
        props: ['styling'],
        data() {
            return{
                bgcolors: ''

            };
        },
        created() {
            var c;
            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.styling.bgcolor)){
                c= this.styling.bgcolor.substring(1).split('');
                if(c.length== 3){
                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c= '0x'+c.join('');
                this.bgcolors= 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + this.styling.opacity/100 +')';
            }
        }
    
}
</script>


<style scoped>
 #overlay{
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
.loader{
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

  .loader:before, .loader:after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: #ce4233;
    position: absolute;
    animation: load .7s infinite alternate ease-in-out;
  }
  
  .loader:before {
    top: 0;
  }
  
  .loader:after {
    bottom: 0;
  }

  @keyframes load {
  0% { left: 0; height: 30px; width: 15px }
  50% { height: 8px; width: 40px }
  100% { left: 235px; height: 30px; width: 15px}
}


</style>