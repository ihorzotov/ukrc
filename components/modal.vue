<template>
  <div class="modal" :class="{active: isActive}">
    <form class="modal-content">
      <span @click="isActive = false" class="close-modal">x</span>
    </form>
    <add-review is="gfgfg"></add-review>
    <add-review ></add-review>
    <add-review></add-review>
    <add-review></add-review>
    <add-review></add-review>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        isActive:false
      }
    },
    methods: {
    },
  }
</script>
