<template>
    <div class="home">
        <div class="gradient">
            <div class="sqrt"></div>
            <p class="title">SaiStudio</p>
            <p class="sub-title">Разработка сайтов <span class="unvisible">для тех, кто может себе это позволить</span></p>
            <router-link to="/main">
                <button class="start-btn linked">Start</button>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        components: {}
    }
</script>

<style >
    html {
        margin: 0;
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: black;

    }

    #app {
        width: 100%;
        height: 100%;
    }

    .home {
        background: url(/static/images/Home.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: 100% auto;
        height: 100%;
        width: 100%;
        display: flex;
    }

    .gradient {
        width: 100%;
        height: 100%;
    }

    .sqrt {
        position: absolute;
        width: 21%;
        height: 60%;
        margin-left: -10.5%;
        margin-top: -15%;
        border: 20px solid #002B44;
        box-sizing: border-box;
        top: 50%;
        left: 50%;
        z-index: 0;
    }


    .title {
        position: absolute;
        color: white;
        text-align: center;
        font-family: Alegreya SC, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 120px;
        margin: 0;
        left: 30%;
        top: 34%;
    }

    .sub-title {
        position: absolute;
        color: white;
        left: 50%;
        top: 37.5%;
        font-size: 18px;
    }

    .start-btn {
        position: absolute;
        left: 50%;
        margin-left: -30px;
        width: 62px;
        height: 27px;
        top: 67.5%;
        background-color: #002B44;
        color: white;
        font-family: Montserrat, sans-serif;
        font-weight: 200;
        font-style: normal;
        letter-spacing: 1px;
        border : none;
        transition: all 0.5s ease;
        animation: zoom 1s linear infinite;
    }
    @keyframes zoom {
        0%{ transform: scale(1)}
        50%{ transform: scale(1.1)}
        100%{ transform: scale(1)}

    }

    .start-btn:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-top: solid 2px white;
        border-bottom: solid 2px white;
        transition: 0.2s;
        transform: scaleX(0);
    }

    .start-btn:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-left: solid 2px white;
        border-right: solid 2px white;
        transition: 0.2s;
        transform: scaleY(0);
    }

    .start-btn:hover:before,
    .start-btn:hover:after {
        transform: scale(1);
        cursor: pointer;
    }


    @media (max-width: 800px) {

    }

    @media (orientation: portrait) {
        .home {
            background-size: auto 100%;
        }

        .title {
            font-size: 70px;
            left:10%;
            top:40%;
        }
        .sub-title{
            top:39%;
            left:47%;
        }
        .unvisible{
            display: none;
        }
        .sqrt {
            width: 50%;
            height: 50%;
            margin-left: -25%;
            margin-top: -25%;
            border: 15px solid #002B44;
            box-sizing: content-box;
            top: 35%;
            left: 47.5%;
        }
        .start-btn{
            top:50%;
        }
    }
</style>
