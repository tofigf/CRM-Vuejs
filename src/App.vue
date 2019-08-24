<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import AuthLayout from "@/views/layouts/AuthLayout";
import MainLayout from "@/views/layouts/MainLayout";

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
</script>

<style lang="css">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
