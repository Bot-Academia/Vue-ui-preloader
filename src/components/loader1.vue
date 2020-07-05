<template>
    <div id="overlay" :style="{'background-color': bgcolors}">
        <div class="loader" :style="{'border': styling.size + 'px solid ' + styling.wheelbg,'border-top': styling.size + 'px solid ' + styling.wheelcolor}"></div>
    </div>
</template>

<script>
    export default {
        name: "static-loader",
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
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index:2000;
    }

    @keyframes spin {
        0%{ transform: rotate(0deg);}
        100%{ transform: rotate(360deg);}

    }

</style>