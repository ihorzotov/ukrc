<template>
  <div class="el-c">
    <input type="range" v-bind:min="min" v-bind:max="max" v-bind:value="current" v-on:input="onChg($event)" > <span class="num">{{ current }}</span>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        current: this.dataMin,
        min: this.dataMin,
        max:this.dataMax,
      }
    },
    props: ['dataMin','dataMax','dataPrice'],
    methods: {
      onChg: function(e) {
        this.current = e.target.value;
        this.$emit('change', this.sum);
      },
    },
    computed: {
      sum: function(){
        return this.current * this.dataPrice ;
      }
    }
  }
</script>

