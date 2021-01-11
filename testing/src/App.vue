<template>
    <router-view v-slot="{ Component }">

            <component :is="Component"/>

    </router-view>
</template>

<style>
    body {
        user-select: none;
        background: url(http://192.168.1.175/images/page2.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: 100% auto;
        margin: 0;
    }

    @media (max-width: 1000px) {
        body {
            background-size: auto 100%;
        }
    }

</style>
