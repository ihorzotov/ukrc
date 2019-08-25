import calculator from './calculator.vue';
import modal from './modal.vue';

new Vue({
      el:'.app',
      components: { 
        calculator,
        modal,
      },
      data:{
        screenWidth: 0,
        ifScroll: false,
        isActive: false 
      },
      mounted: function(){
        this.$nextTick(function() {
          window.addEventListener('resize', this.myEventHandler);
        });
        window.addEventListener('scroll', this.scrollM);
      },
      methods: {
        toggleClass: function() {
          this.isActive = !this.isActive;
        },
        scrollM: function(){
          this.ifScroll = (window.scrollY >= 5)? true : false;
        },
        myEventHandler: function(){
          this.screenWidth = document.documentElement.clientWidth;
        },
      },
      computed: {
        screenSize: function(){
          return this.screenWidth > 720 && this.screenWidth < 960 ? 'tablet': 'desktop';
        },
      },
});
