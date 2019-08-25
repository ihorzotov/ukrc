<template>
  <div class="wrap-drop" @click="toggleClass" v-bind:class="{ active: isActive }">
    <div class="selected-el el-c"><span>{{ currentIndex }}</span></div>
    <ul class="drop">
      <li v-bind:class="{ selected: currentIndex == cities['' + key + ''] }" @click="(currentIndex = cities[''+ key +'']), $emit('change', key)" v-for='(item, key) in cities'>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        cities: this.dataCities,
        currentIndex: Object.values(this.dataCities)[0],
        isActive: false,
      }
    },
    props: ['dataCities','dataPrices'],
    methods: {
      toggleClass: function() {
        this.isActive = !this.isActive;
      },
    },
    created:function(){
      this.$emit('change', Object.keys(this.cities)[0]);
    }
  }
</script>
