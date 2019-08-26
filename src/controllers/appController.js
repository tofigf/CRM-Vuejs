import AuthLayout from "@/views/layouts/AuthLayout";
import MainLayout from "@/views/layouts/MainLayout";
// const { $, jQuery } = require('jquery');
// global.$ = $;
// global.jQuery = jQuery;

// require( './components/assets/js/hs.core.js')
// window.$ = window.jQuery = require('jquery');
// import Raphael from 'raphael/raphael'
// global.Raphael = Raphael
// import { DonutChart } from 'vue-morris'

export default {
  computed: {
    layout() {
    
      return (this.$route.meta.layout || 'auth')+ '-layout';
    }
  },
  components: {
    AuthLayout,
    MainLayout
  }
};
