<template>
    <div id="overlay">
        <div class="loader"></div>
    </div>
</template>

<script>
    export default {
        name: "static-loader"
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
        border: 5px solid grey;
        border-top: 5px solid orange;
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