<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script src="./controllers/appController.js"></script>



<style lang="css">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
