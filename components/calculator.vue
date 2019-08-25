<template>
  <div class="education-calc">
    <p class="education-calc__title">Расчитать стоимость корпоративного обучения</p>
    <div class="el-c ct-prt">
      <div class="education-calc__content">
        <p class="title">Раздаточных материалов</p>
        <range-input :data-min="data.materials.min" :data-max="data.materials.max" :data-price="data.materials.price" v-on:change="materialChange"></range-input>
      </div>
      <div class="education-calc__content">
        <p class="title">Количество сертификатов</p>
        <range-input :data-min="data.sertificate.min" :data-max="data.sertificate.max" :data-price="data.sertificate.price" v-on:change="sertChange"></range-input>
      </div>
      <div class="education-calc__content">
        <p class="title">Дней обучения</p>
        <range-input :data-min="data.days.min" :data-max="data.days.max" :data-price="1"  v-on:change="daysChange"></range-input>
      </div>
      <div class="education-calc__content">
        <p class="title">Где находится предприятие?</p>
        <wrap-drop v-bind:class="{disabled: click }" :data-cities="data.cities"  v-on:change="regionChange"></wrap-drop>
      </div>
    </div>
    <div class="education-calc__sum el-c">
      <div class="calc-text">
        <p>Расчитаная сумма является приблизительной. Конечная стоимость может отличаться от указанной как в большую так и в меньшую сторону.</p>
        <q>Стоимость указана без НДС. «КЦ УкрКонсалтинг» не является плательщиком НДС.</q>
      </div>
      <div class="calc-info el-c">
        <p class="calc-info__price">{{ totalPrice }} <span class="currency">грн.</span></p>
        <button class="wb-btn modal-btn" @click="(dayPrice == 0)? click = 1 : click = 0" >Заказать</button>
      </div>
    </div>
  </div>
</template>
<button class="disabled" data-attr='1'>1</button>
<button>2</button>
<button>3</button>
<button>4</button>
<button>5</button>

<div class="modal" data-attr='1'>1</div>
<div class="modal">2</div>
<div class="modal">3</div>
<div class="modal">4</div>
<div class="modal">5</div>
<script>
  import wrapDrop from './wrap-drop.vue';
  import rangeInput from './range-input.vue';
  
  export default {
    data: function () {
      return {
        data:this.dataContent,
        materialsPrice: 0,
        sertPrice: 0,
        days: 1,
        dayPrice: 0,
        click: 0
      }
    },
    components: {
      wrapDrop,
      rangeInput
    },
    props: ['dataContent'],
    methods: {
      regionChange: function(data) {
        this.dayPrice = this.data.prices[data];
      },
      materialChange: function(data){
        this.materialsPrice = data;
      },
      sertChange: function(data){
        this.sertPrice = data;
      },
      daysChange: function(data){
        this.days = data;
      }
    },
    computed:{
      totalPrice: function(){
        console.log(this.dayPrice)
       return this.materialsPrice + this.sertPrice + (this.days * this.dayPrice);
      },

    },
    created: function () {
      function regionChange(data) {
        this.dayPrice = this.data.prices[data];
        console.log(this.dayPrice ,'calc');
      }
  }
  }
</script>
