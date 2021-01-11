<template>
    <div class="content-block">
        <h1 class="meeting-title">Давайте знакомиться ближе</h1>
        <img class="meeting-img" src="http://192.168.1.175/images/znakomstvo.jpg" alt="">
        <div class="gradiented"></div>
        <div class="black-text-block meeting-text-one">
            <h2 class="t-title"><span class="blue">S</span>ai<span class="blue">S</span>tudio</h2>
            <p class="text text-meet">SaiStudio - молодая и стремительно
                развивающаяся web-studio. Мы разработаем для вас сайт с уникальным
                дизайном и качественно настроенной
                рекламой. Поможем вам выйти на новый уровень и пробить
                финансовый потолок.</p>
        </div>

        <div class="black-text-block meeting-text-two"><p class="text text-two">Весь мир переходит в новый этап
            информационного развития и SaiStudio
            поможет вам вступить в него.</p></div>


        <div class="black-text-block meeting-text-three"><p class="text">Не будем пугать
            вас своими непонятными
            словами и сложными терминами. Вам
            незачем вникать в подробности, так как мы
            сделаем сайт в точности с предоствленным
            тех. заданием.</p></div>
    </div>
    <div class="principles-content-block">
        <h1 class="page-name">Принципы нашей студии</h1>
        <div class="first-principle  principles-block">
            <span class="big-number big-number-one">1</span>
            <div class="text-block-one">
                <h4 class="principles-title first-title ">Мы не беремся за все заказы подряд</h4>
                <p class="principles-text">Да Винчи не писал по картине в день, но его многолетним трудом
                    над Мона Лизой любуются уже много столетий.
                    Так и у нас, в каждый проект дизайнер вкладывает душу.
                    Нас не привлекает перспектива посредственности</p>
            </div>
        </div>
        <div class="second-principle  principles-block">
            <div class="text-block-two">
                <h4 class="principles-title second-title">Для нас цена равна качеству</h4>
                <p class="principles-text">Любая хорошая работа стоит затраченному времени</p>
            </div>
            <span class="big-number big-number-two">2</span>

        </div>
        <div class="third-principle  principles-block">
            <span class="big-number big-number-three">3</span>
            <div class="text-block-three">
                <h4 class="principles-title third-title">Нам важен каждый заказчик</h4>
                <p class="principles-text">Разработка сайтов для нас-это не просто средство заработка,
                    а целый проект, который отражает наши навыки
                    и позволяет нам становиться лучше</p>
            </div>
        </div>
        <div class="fourth-principle  principles-block">
            <span class="big-number big-number-four">4</span>
            <div class="text-block-four">
                <h4 class="principles-title">За 2-5 дней нельзя создать продающий
                    и уникальный сайт</h4>
                <p class="principles-text">На каждый сайт мы тратим от 15 дней, что бы сделать его
                    максимально качественным и лучшим среди остальных.
                    Спешка портит качество</p>
            </div>
        </div>
        <img class="first-arrow" src="http://192.168.1.175/images/arrow-price.svg" alt="">
        <img class="second-arrow" src="http://192.168.1.175/images/arrow-price.svg" alt="">
    </div>
    <div class="content-block">
        <div class="stage">
            <h2 class="stage-title ">Этапы выполнения заказа</h2>
            <transition-group mode="out-in" :enter-active-class=enterclass
                              :leave-active-class=leaveclass>
                <img :src="'http://192.168.1.175/images/' + WhatisStageImg" :key="WhatisStageImg" alt=""
                     class="stage-image">


                <div class="gradient"></div>
                <div class="black-text-block stage-text">
                    <h2 :key="WhatisStageName" class="stage-name "><span class="stage-number" :key="stagecounter">{{stagecounter}}</span>
                        {{WhatisStageName}} </h2>
                    <p class="stage-detal text" :key="WhatisStageText">{{WhatisStageText}}</p>
                </div>
            </transition-group>
        </div>

        <div class="stagechanger">
            <div style="color:white" v-for="(anystage, index) in stagelist" :key="anystage"
                 @click="stagecounter=index +1 " class="stage-secelt">
                <div class="stage-numbers " :class="{active : (index + 1 === stagecounter)} ">{{anystage}}</div>
            </div>
        </div>
        <div @click="StageChangerMinus" class="icon  arrow-left"></div>
        <div @click="StageChangerPlus"
             class="icon  arrow-right"></div>

    </div>
    <div class="price">
        <h1 class="price-name">Цены и услуги</h1>
        <h4 class="price-info">В нашей студии Вы можете сами выбрать цену за ваш сайт. Предложите свою цену, и мы с вами
            свяжемся в
            ближайшее время.</h4>
        <div class="products">
            <div class="store">
                <div class="product-block">
                    <h4 class="product-name">Интернет магазин</h4>
                    <p class="product-info">От 30 дней</p>
                    <p class="product-info">Адаптивность</p>
                    <p class="product-info">SEO-оптимизация</p>
                    <p class="product-info">Формы заказа</p>
                </div>
            </div>
            <div class="landing">
                <div class="product-block">
                    <h4 class="product-name">Landing Page</h4>
                    <p class="product-info">От 15 дней</p>
                    <p class="product-info">Адаптивность</p>
                    <p class="product-info">SEO-оптимизация</p>
                    <p class="product-info">6-12 страниц</p>
                    <p class="product-info">Формы обратной связи </p>
                </div>
            </div>
            <div class="corporate">
                <h4 class="product-name">Корпоративный</h4>
                <div class="product-block">
                    <p class="product-info">От 45 дней</p>
                    <p class="product-info">Адаптивность</p>
                    <p class="product-info">SEO-оптимизация</p>
                    <p class="product-info">Формы заявок</p>
                </div>
            </div>
        </div>
        <router-link to="/send-price">
            <button class="price-btn">Предложить цену</button>
        </router-link>
    </div>
    <div class="portfolio">
        <div class="top-block">
            <img class="portfolio-img" src="http://192.168.1.175/images/portfolio-1.jpg" alt="">
            <router-link to="/portfolio">
            <div v-on:click="showinfo = !showinfo" class="portfolio-text ">Landing Page для фирмы свадебного фотографа
            </div>
            </router-link>
        </div>
    </div>
    <div class="footer">
        <div class="tel"><span style="color:#035386">+7 </span>(967) 746-39-18</div>
        <p class="footer-text">Оставьте заявку на консультацию online, чтобы мы могли пообщаться лично
            и рассказать о себе подробнее</p>
        <router-link to="/send-application">
            <button class="call-back">Записаться</button>
        </router-link>
        <p class="email">saiwebstudios@gmail.com</p>
    </div>
</template>

<script>
    export default {
        name: "second-block",
        data() {
            return {
                showinfo: false,
                enterclass: "animate__animated animate__fadeIn",
                leaveclass: "animate__animated animate__fadeOutLeft",
                stagecounter: 1,
                stagelist: [
                    '01', '02', '03', '04', '05'
                ],
                stageimages: ['stage-one.jpg', 'stage-two.jpg', 'stage-three.jpg', 'stage-four.jpg', 'stage-five.jpg',
                ],
                stagenames: ["Получение заявки",
                    "Online встреча",
                    "Создание прототипа",
                    "Разработка дизайна",
                    "Настройка рекламы",
                ],
                stagetexts: ["Вы оставляете  заявку на заказ сайта или \nна бесплатную консультацию с нашим менеджером.  После  личного общения мы приступаем к выполнению задачи.",
                    "При встрече мы обсудим проект, утвердим стоимость, заключим договор и зададим вам вопросы,что бы лучше понять ваш бизнес .",
                    "Мы создаем прототип будущего сайта \nи проводим анализ конкурентов, компании, целевой аудитории. После чего прототип отправляется на проверку заказчику.",
                    "После утверждения прототипа мы начинаем создавать дизайн, добавляя в него продающие элементы. Делаем адаптивные версии для телефонов, планшетов и ноутбуков.",
                    "Утвердив дизайн,мы начнем верстку сайта. Далее делаем настройку рекламы в Яндекс Директ и Google Adwords. \n\nВаш сайт готов к работе."]
            }
        },
        computed: {
            WhatisStageText: function () {
                return this.stagetexts[this.stagecounter - 1]
            },
            WhatisStageImg: function () {
                return this.stageimages[this.stagecounter - 1]
            },
            WhatisStageName: function () {
                return this.stagenames[this.stagecounter - 1]
            },
        },
        methods: {
            StageChangerMinus: function () {
                if (this.stagecounter < 2) {
                    return this.stagecounter = 5
                } else {
                    this.stagecounter--
                }
                this.enterclass = "animate__animated animate__fadeInLeft"
                this.leaveclass = "animate__animated animate__fadeOut"
            },
            StageChangerPlus: function () {
                if (this.stagecounter > 4) {
                    return this.stagecounter = 1
                } else {
                    this.stagecounter++
                }
                this.enterclass = "animate__animated animate__fadeIn"
                this.leaveclass = "animate__animated animate__fadeOutLeft"
            }
        },
        created: function () {
            window.addEventListener('keyup', (e) => {
                if (e.key == 'Left') {
                    this.stagecounter--
                }
            });
        },

    }
</script>

<style scoped>
    .content-block {
        height: 100%;
        width: 100%;
        position: relative;
        
    }


    .meeting-title {
        margin-left: 12.5%;
        margin-top: 0;
        padding-top: 3%;
        padding-bottom: 1%;
        color: white;
        font-weight: normal;
    }

    .meeting-img {
        width: 75%;
        margin-left: 12.5%;
        margin-right: 12.5%;
    }

    .gradiented {
        position: absolute;
        width: 75%;
        height: 78.5%;
        margin-left: 12.5%;
        margin-right: 12.5%;
        bottom: 3.5%;
    }


    .black-text-block {
        position: absolute;
        background-color: #000000;
        opacity: 68%;
        color: white;
    }

    .meeting-text-one {
        left: 17.5%;
        top: 33.5%;
        height: 35%;
        width: 32%;
    }

    .meeting-text-two {
        left: 50%;
        top: 33.5%;
        height: 12.5%;
        width: 32%;
    }

    .meeting-text-three {
        left: 50%;
        top: 48%;
        height: 20.5%;
        width: 32%;
    }

    .t-title {
        margin-left: 5%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
    }

    .text {
        margin: 5% 5%;
        font-family: Montserrat sans-serif;
    }

    .text-two {
        margin: 2.5% 5%;
    }

    .stage {
        position: relative;
        height: 70%;
        width: 60%;
        margin-left: 40%;
        box-sizing: border-box;
    }

    .stage-title {
        font-family: Alegreya SC, sans-serif;
        margin-top: 0;
        color: white;
        font-weight: normal;
        font-size: 35px;
        padding-top: 2%;
    }

    .stage-image {
        width: 100%;
        height: 100%;
        position: absolute;
        animation-duration: 1s;
    }

    .stage-text {
        height: 40%;
        width: 60%;
        bottom: 30%;
        left: 5%;
    }

    .stage-detal {
        margin-left: 13%;
        margin-top: -3%;
        font-weight: 100;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        white-space: pre-wrap;
    }

    .stage-number {
        position: absolute;
        top: 5%;
        left: 4%;
        font-size: 40px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }


    .stagechanger {
        position: absolute;
        bottom: 8.5%;
        right: 13%;
    }


    .stage-secelt {
        display: inline-block;
        padding: 4px 7px;

    }

    .stage-name {
        margin-left: 13%;
        font-weight: 100;
        font-family: Alegreya SC, sans-serif;
    }

    .stage-numbers {
        color: #898686;
        font-size: 20px;

    }

    .stage-numbers:hover {
        color: #84B6F1;
        cursor: pointer;
    }

    .icon {
        position: absolute;
        background-size: 100% 100%;
    }

    .icon:hover {
        transition: 0.2s;
        transform: scale(1.1);
        cursor: pointer;
    }

    .arrow-left {
        height: 50px;
        width: 50px;
        bottom: 9%;
        right: 7%;
        background-image: url(http://192.168.1.175/images/arrow-left.svg)
    }

    .arrow-right {
        height: 50px;
        width: 50px;
        bottom: 9%;
        right: 2%;
        background-image: url(http://192.168.1.175/images/arrow-right.svg);
    }


    .active {
        color: #84B6F1;
        font-size: 40px
    }

    .gradient {
        position: absolute;
        top: 22%;
        left: 0;
        height: 102.5%;
        width: 100%;
    }

    .blue {
        color: #0000FF
    }

    .principles-content-block {
        
        height: 200%;
        width: 100%;
        position: relative;
    }


    .page-name {
        color: white;
        position: absolute;
        top: 2%;
        left: 10%;
        font-weight: 100;
    }

    .principles-block {
        position: absolute;
        background: rgba(0, 0, 0, 0.87);
        border: 2px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 5px;
        display: flex;
        color: white;
        transition: 1s;
    }

    .principles-block:hover {
        background: #C0C0C0;
        color: black;
        border: 2px solid black;
    }

    .first-principle {
        width: 75%;
        height: 15%;
        top: 10%;
        left: 15%;
    }

    .principles-title {
        font-family: 'Alegreya SC', sans-serif;
        font-weight: 100;
    }

    .first-title {
        margin-top: 6.5%;
    }

    .second-title {
        margin-top: 15%;
    }

    .principles-text {
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
        font-size: 13px;
    }


    .second-principle {
        width: 70%;
        height: 14%;
        top: 30%;
        left: 5%;
    }

    .third-principle {
        width: 77%;
        height: 12%;
        top: 50%;
        left: 10%;
    }

    .fourth-principle {
        width: 70%;
        height: 20%;
        top: 70%;
        left: 22%;
    }

    .text-block-one {
        margin-right: 8%;
    }

    .text-block-two {
        margin-left: 5%;
    }

    .text-block-three {
        margin-top: 1%;
        font-weight: 100;
        margin-right: 3%;
    }

    .text-block-four {
        margin-top: 7%;
        margin-right: 5%;
    }

    .big-number {
        font-size: 150px;
        font-family: Montserrat, sans-serif;
        font-weight: 100;
        margin-left: 80px;
        margin-right: 50px;
    }

    .big-number-one {
        margin-right: 8%;
        margin-left: 10%;
    }

    .big-number-two {
        margin-top: -1%;
        margin-left: 30%;
    }

    .big-number-three {
        font-size: 120px;
    }

    .big-number-four {
        font-size: 200px
    }

    .first-arrow {
        position: absolute;
        right: 2%;
        top: 5%;
        height: 40%;
    }

    .second-arrow {
        position: absolute;
        left: 2%;
        bottom: 5%;
        height: 40%;
    }

    .price {
        
        width: 100%;
        height: 100%;
        position: relative;
        color: white;
    }

    .price-name,
    .price-info {
        margin: 0;
        margin-left: 5%;
        font-family: 'Alegreya SC', sans-serif;
        font-size: 30px;
        font-weight: 400;
    }

    .price-info {
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        padding-top: 1.5%;
    }

    .products {
        height: 57.5%;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 4%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
    }

    .store,
    .corporate,
    .landing {
        height: 90%;
        width: 22.5%;
        border: 2px white solid;
        border-radius: 2px;
    }

    .landing {
        height: 100%;
        margin-top: -1.5%;
    }

    .product-name {
        margin: 5% 20%;
        text-align: center;
        background-color: #035386;
        border-radius: 2px;
        height: 10%;
        font-size: 15px;
        padding-top: 2%;
        box-sizing: border-box;
        font-weight: 100;
        padding-bottom: 2%;
    }

    .landing .product-name {
        padding-top: 3%;
        padding-bottom: 3%;
    }

    .product-info {
        padding: 2% 20%;
    }

    .product-block {
        margin-top: 2%;
        margin-bottom: 20%;
        box-sizing: border-box;
    }

    .price-btn {
        height: 6%;
        width: 15%;
        margin: 2% 42.5%;
        background-color: #12299D;
        font: 15px 'Montserrat', sans-serif;
        color: white;
        font-weight: 400;
        border: none;
        border-radius: 2px;
        transition: 0.5s;
    }

    .price-btn:focus {
        outline: none;
    }

    .price-btn:hover {
        cursor: pointer;
        border: 1px solid black;
        color: black;
    }

    .portfolio {
        background-color: white;
    }

    .top-block {
        position: relative;

    }

    .portfolio-img {
        width: 100%;
        height: auto;
    }

    .portfolio-text {
        color: white;
        text-align: center;
        font-size: 30px;
        font-family: Alegreya SC, sans-serif;
        padding-top: 13.5%;
        position: absolute;
        top: 0;
        width: 100%;
        height: 58.5%;
        transition: 0.5s;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%);
    }

    .portfolio-text:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.5s;
        border-top: solid 5px black;
        border-bottom: solid 5px black;
        transform: scaleX(0);
    }

    .portfolio-text:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.5s;
        border-left: solid 5px black;
        border-right: solid 5px black;
        transform: scaleY(0);
    }

    .portfolio-text:hover:before,
    .portfolio-text:hover:after {
        transform: scale(1);
        cursor: pointer;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);;
    }


    .tel {
        padding-top: 4%;
        color: white;
        font-size: 50px;
        font-family: 'Montserrat', sans-serif;
        margin: 0 3% 3% 3%;
    }

    .footer-text {
        width: 60%;
        color: white;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        margin: 2% 3%;
    }

    .call-back {
        width: 15%;
        height: 10%;
        font-size: 20px;
        margin-left: 3%;
        background-color: #12299D;
        border-radius: 5px;
        border: 1px solid #12299D;
        color: white;
        transition: 0.5s;
    }

    .call-back:hover {
        cursor: pointer;
        border: 1px solid black;
        color: black;
    }

    .call-back:focus {
        outline: none;
    }

    .email {
        color: rgba(142, 153, 153, 0.99);
        position: absolute;
        right: 3%;
        bottom: 1%;
        font-size: 20px;

    }

    .footer {
        position: relative;
        width: 100%;
        height: 60%;
        
    }

    @media (orientation: portrait){
        .content-block,
        .footer,
        .price,
        .principles-content-block {
            background-size: auto 100%;
            height: 50%;
        }

        .content-block, .footer {
            height: 37%;
        }

        .principles-content-block {
            height: 75%;
        }

        .price {
            height: 70%;
        }

        .meeting-title {
            font-size: 18px;
            margin: 0;
            padding: 4% 4%;
            text-align: center;
        }

        .meeting-img {
            margin: 0;
            width: 100%;

        }

        .meeting-text-one {
            top: 27.5%;
            left: 12.5%;
            height: 47.5%;
            width: 75%;
        }

        .t-title {
            font-size: 15px;
        }

        .text {
            font-size: 8px;
        }

        .text-meet {
            font-size: 10px
        }

        .gradiented {
            width: 100%;
            margin-left: 0;
            background: none;
        }

        .meeting-text-two {
            display: none;
            left: 12.5%;
            top: 52%;
            width: 30%;
            height: 34%;
        }

        .meeting-text-three {
            display: none;
            top: 52%;
            width: 44%;
            left: 43.5%;
            height: 34%;
        }

        .page-name {
            margin-top: 0;
            font-size: 18px;
        }

        .principles-block {
            border: 1px solid white;
            border-radius: 2px;
        }

        .first-principle {
            top: 10%;
            height: 17%;
        }

        .big-number {
            font-size: 24px;
        }

        .big-number-one {
            margin-right: 2%;
            margin-left: 2%;
        }

        .text-block-one {
            margin: 1.5% 1%;
        }

        .text-block-two {
            margin-top: 3%;
        }

        .text-block-three {
            margin-top: 3%;
        }


        .first-title {
            margin-top: 4%;
            margin-bottom: 1%;
        }

        .principles-text {
            font-size: 8px;
        }

        .second-principle {
            top: 32%;
            width: 75%;
            height: 12%;
        }

        .big-number-two {
            margin-top: 1%;
            margin-right: 3%;
            margin-left: 5%;
        }

        .principles-title {
            font-size: 12px;
            margin-top: 1%;
            margin-bottom: 1%;
        }

        .third-principle {
            top: 48%;
            height: 16%;
        }

        .big-number-three {
            margin: 1% 3%;
        }

        .third-title {
            margin: 1%;
        }

        .fourth-principle {
            top: 72%;
            height: 20%;
        }

        .big-number-four {
            font-size: 24px;
            margin: 1% 3%;
        }

        .text-block-four {
            margin: 3% 2%;
        }

        .stage {
            margin: 0;
            width: 100%;
        }

        .stage-title {
            font-size: 18px;
            text-align: center;
        }

        .gradient {
            top: 25%;
        }

        .stage-text {
            height: 45%;
            bottom: 17.5%;
        }

        .stage-number {
            font-size: 18px;
        }

        .stage-name {
            font-size: 10px;
        }

        .stagechanger {
            right: 20%;
        }

        .arrow-left {
            height: 25px;
            width: 25px;
            left: 5%;
            bottom: 14%;
        }

        .arrow-right {
            height: 27px;
            width: 27px;
            right: 5%;
            bottom: 14%;
        }

        .price-name {
            padding-top: 6.5%;
        }

        .price-info {
            font-size: 10px;
        }

        .products {
            margin-top: 10%;
            height: 45%;
        }

        .store, .corporate {
            width: 30%;
            height: 80%;
        }

        .landing {
            margin-top: -4%;
            width: 30%;
            height: 100%;
        }

        .product-name {
            font-size: 9px;
            margin: 5%;
            height: 9.5%;
        }

        .product-info {
            font-size: 10px;
        }

        .price-btn {
            width: 40%;
            margin: 12.5% 30%;
            font-size: 12px;
        }

        .portfolio {
            display: none;
        }

        .portfolio-text {
            font-size: 15px;
        }

        .portfolio-text:before,
        .portfolio-text:after {
            border: none;
        }

        .tel {
            font-size: 24px;
        }

        .footer-text {
            font-size: 12px;
            width: 100%;
        }

        .call-back {
            width: 40%;
            height: 15%;
        }

        .email {
            font-size: 15px;
        }
    }


</style>