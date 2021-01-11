<template>
    <div class="content-block">
        <fieldset v-if="!data.sendprice" class="form-group">
            <input  v-model="data.name" class="name" type="text" placeholder="Ваше имя" required>
            <input class="phone"
                   type="tel"
                   v-model="data.phone"
                   name="phone"
                   id="phone"
                   placeholder="+7 (___) __-__-__"
                   autocomplete="tel"
                   maxlength="16"
                   v-phone
                   pattern="[0-9]{1}{[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"

            />
            <button v-on:click="send_form" type="submit" class="send">Отправить заявку</button>
            <p class="thirdfaces">Мы не передаем информацию третьим лицам</p>
        </fieldset>
        <div v-if="data.sendprice" class="sending">
            <h3 class="sending-text">Спасибо за вашу заявку , мы свяжемся с вами в ближайшее время</h3>
            <router-link class="linked" to="/">
                <button class="send">На главную</button></router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Send-price",
        data() {
            return {
                data: {
                    sendprice: false,
                    name: '',
                    phone: '',
                    price: '',
                    more_info: ''
                }
            }
        },
        methods: {
            send_form: function () {
                if (this.data.phone.length < 13){ alert('Заполните пожалуйста номер телефона')}
                else {const vm = this;
                axios.post(location.origin+'/send/', vm.data)
                this.data.name = ''
                this.data.phone = ''
                this.data.price = ''
                this.data.check = 'landing'
                    this.data.sendprice =!this.data.sendprice

                }
            }


        },
        computed: {
            send_data: function () {
                return {
                    'name': this.name,
                    'phone': this.phone,
                    'price': this.price,
                    'more_info': this.more_info,
                }
            },
        },
        directives: {
            phone: {
                beforeMount(el) {
                    el.oninput = function (e) {
                        if (!e.isTrusted) {
                            return;
                        }

                        const x = this.value.replace(/\D/g, '').match(/(\d)(\d{0,3})(\d{0,3})(\d{0,4})/);
                        this.value = x[1] +(!x[3] ? x[2] :'(' + x[2] + ') ' + x[3]) + (x[4] ? '-' + x[4] : '');
                        el.dispatchEvent(new Event('input'));
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .content-block {
        position: relative;
        background: url(/static/images/price_background.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: 100% auto;
        height: 100%;
        width: 100%;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
    }

    .form-group {
        border: none;
        text-align: center;
    }

    .name {
        margin-top: 14.5%;
        width: 20%;
        height: 40px;
        text-indent: 10px;
        box-sizing: border-box;
        font: inherit;
    }

    input:focus{
        outline: #687ddc 1.5px solid;
    }

    .phone {
        display: block;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
        color: black;
        font: inherit;
        margin-top: 1%;
        height: 40px;
        text-indent: 10px;
        box-sizing: border-box
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    .send {
        display: block;
        margin: 2% auto 0;
        width: 20%;
        height: 40px;
        background-color: #12299D;
        font: inherit;
        border: none;
        color: white;
        transition: 0.5s;
    }

    .send:hover {
        cursor: pointer;
        border: 1px solid black;
        color: black;
    }

    .send:focus {
        outline: none;
    }
    .thirdfaces{
        margin-top:0;
        color:white;
        font-size: 10px;
    }
     .sending{
        width: 100%;
    }
    .sending-text{
            color: white;
            font: 20px 'Montserrat',sans-serif;
            margin: 0;
        padding: 20% 17.5%;
        padding-bottom: 0;
        }
     @media (max-width: 1000px){
        .content-block{
            background-size: auto 100%;
        }
        .form-group{
            padding-top: 40%;
            height: 50%;
        }
        .name,.phone{
            width: 70%;
            border: none;
            border-radius: 2px;
            height: 15% ;
            margin:2% 15.5%;
            font-size: 15px;
        }
        .send{
            margin-top: 10%;
            width: 70%;
            height: 15%;
        }

        @media (max-height: 740px) {
            .content-block{
                height: 740px;
                background-size: auto 740px;
            }

        }
    }
</style>