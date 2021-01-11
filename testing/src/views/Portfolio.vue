<template>
    <div class="content-block">
        <div class="sidebar">
            <div class="link-list">
                <router-link class="linked" to="/"><p class="link">Главная</p></router-link>
                <router-link class="linked" to="/main"><p class="link">Назад</p></router-link>
            </div>
            <h1 class="page-name">Портфолио</h1>
        </div>
        <div class="description">
            <transition-group mode="out-in" enter-active-class="animate__animated animate__fadeIn"
                              leave-active-class="animate__animated animate__fadeOut">
                <h2 class="desc-title first-title">Задача</h2>
                <p :key="WhatisPortfolioText[0]" class="desc-text first-text">{{WhatisPortfolioText[0]}}</p>
                <h2  class="desc-title second-title">Решение</h2>
                <p :key="WhatisPortfolioText[1]" class="desc-text second-text">{{WhatisPortfolioText[1]}}
                </p>
                <h2 :key="portfoliocounter" class="desc-title third-title">Цвета</h2>
                <div :key="WhatisBingColors" class="color-items">
                    <div class="color first-color">
                        <div  :style="WhatisBingColors[0]" class="colored "></div>
                        <p  class="color-name">{{WhatisPortfolioColor[0]}}</p>
                    </div>
                    <div class="color">
                        <div  :style="WhatisBingColors[1]" class="colored "></div>
                        <p  class="color-name">{{WhatisPortfolioColor[1]}}</p>
                    </div>
                    <div class="color">
                        <div  :style="WhatisBingColors[2]" class="colored "></div>
                        <p  class="color-name">{{WhatisPortfolioColor[2]}}</p>
                    </div>
                </div>
            </transition-group>
        </div>
       <div class="any-work"> <transition-group mode="out-in" enter-active-class="animate__animated animate__fadeIn"
                              leave-active-class="animate__animated animate__fadeOut"><img :key="WhatisPortfolioImg" class="portfolio-img"
                                   :src="'http://192.168.1.175/images/portfolio-' + WhatisPortfolioImg" alt="">

            <div v-if="portfoliocounter === 1" @click="portfoliocounter--"  class="pre-work"><a  class="unlinked" href="#"><img
                    class="arrow-img left"
                    src="http://192.168.1.175/images/portfolio-arrow.svg"
                    alt="">Предыдущий проект </a>
            </div>
            <div v-if="portfoliocounter === 0" @click="portfoliocounter++" class="next-work"><a class="unlinked" href="#">Следующий проект <img
                    class="arrow-img"
                    src="http://192.168.1.175/images/portfolio-arrow.svg"
                    alt=""></a>
            </div>
           </transition-group>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                portfoliotitle: ['Решение', 'Задача', 'О клиенте'],
                portfoliotext: [['Виктория Лужанская - свадебный фотограф\n' + '“Хочу свой современный и привлекательный сайт в берюзовой цветовой гамме.  Нужно, что бы сайт не был перегруженинформацией и был минималистичным. Отдельное внимание нужно уделить порфолио.”', 'Было решено создать лендинг в берюзовом и белом цвете, так какэти цвета у многих ассоциируются сосвадебным торжеством. Бирюзовый цвет взят в разной насыщенности.Был выбран всего один шрифт - Montserrat Alternates, так как онлегко читаем и приятен. '], ['Фирма Repairs for you - разрабатывает дизайн квартир более 20 лет. Repairs for you-делает ремонт в разных стилях от скандинавского до современной классики.', 'Обратившись к нам клиент уже имел свой сайт и решил его сделать более привлекательным и более простым в использовании. Так же изменить цвет и повысить конвертацию, для привлечения новых клиентов. ']],
                portfoliocolors: [["27B99F 80%", "27B99F 40%", "27B99F 15%"], ["1D4D57", "4F7AA1", "96C9D5"]],
                portfolioimg: ['photo.jpg', 'firma.jpg'],
                portfoliocounter: 0,
                bindcolors: [['background-color: #27B99F; opacity: 80%;', 'background-color: #27B99F; opacity: 40%;', 'background-color: #27B99F; opacity: 15%;'], ['background-color: #1D4D57;', 'background-color: #4F7AA1;', 'background-color: #96C9D5;']]
            }
        },
        computed: {
            WhatisPortfolioText: function () {
                return this.portfoliotext[this.portfoliocounter]
            },
            WhatisPortfolioImg: function () {
                return this.portfolioimg[this.portfoliocounter]
            },
            WhatisPortfolioColor: function () {
                return this.portfoliocolors[this.portfoliocounter]
            },
            WhatisBingColors: function () {
                return this.bindcolors[this.portfoliocounter]
            }


        }
    }

</script>

<style scoped>
    .sidebar {
        height: 80px;
        background: linear-gradient(90.18deg, #035386 0.12%, #247CB5 49.22%, #67B2E2 99.85%);
        position: fixed;
        width: 100%;
        z-index: 10;
    }

    .link-list {
        display: flex;
    }

    .linked {
        text-decoration: none;
        margin: 0 50px;
    }

    .link {
        color: white;
        font: 14px 'Alegreya SC', sans-serif;
    }

    .page-name {
        color: white;
        margin: 0 45%;
        margin-top: -20px;
        font: 100 20px 'Alegreya SC', sans-serif;
    }

    .description {
        margin-top: 80px;
        width: 25%;
        color: white;
        padding: 10px 20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
        position: fixed;
        height: 100%;

    }

    .desc-title {
        color: #247CB5;
        font-weight: 400;
        position: absolute;
    }
    .first-title{
        top:0;
    }
    .second-title{
        top: 23%;
    }
    .third-title{
        top:47%;
    }

    .desc-text {
        font-size: 10px;
        position: absolute;
        top:50%;
        white-space: pre-wrap;
    }
        .first-text{
        top:8%;
    }

        .second-text{
            top:30%;
        }

    .color-items {
        display: flex;
        position: absolute;
        top:60%;
    }

    .color {
        display: flex;
        flex-direction: column;
        width: 50px;
        margin: 0 10px;

    }

    .first-color {
        margin-left: 0;
    }

    .color-name {
        width: 50px;
    }

    .colored {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin: 0 2%;
    }


    .color-name {
        font-size: 10px;
    }

    .any-work {
        margin-left: 30%;
        width: 70%;
        padding-top: 100px;
    }

    .portfolio-img {
        position: absolute;
        width: 70%;
        z-index: 0;
    }

    .pre-work {
        margin-right: 50%;
        color: white;
        text-align: left;
        padding: 30px;
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        top:615%;
        width: 30%;
    }

    .next-work {
        margin-left: 33%;
        color: white;
        text-align: right;
        padding: 30px;
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        top: 585%;
        width: 30%;
    }

    .left {
        transform: rotate(180deg);

    }

    .arrow-img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
        margin-left: 10px;
        margin-bottom: -13px;
    }
    .arrow-img:hover{
        cursor: pointer;
    }
    .unlinked{
        color: white;
        text-decoration: none;
    }

</style>