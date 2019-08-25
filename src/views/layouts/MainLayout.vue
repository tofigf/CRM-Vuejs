<template>
   <div class="app-main-layout">
  <!-- Navbar -->
  <Navbar @click="isOpen =!isOpen"/>

<!-- Sidebar -->
<Sidebar v-model="isOpen"/>

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        
<!-- RenderBody() -->
<router-view/>

</div>
</main>

<div class="fixed-action-btn">
  <router-link class="btn-floating btn-large blue" to="/record">
    <i class="large material-icons">add</i>
  </router-link>
</div>
</div>
</template>

<script>
import Navbar from '@/views/components/include/Navbar'
import Sidebar from '@/views/components/include/Sidebar'

export default {
  name: 'main-layout',
  data:() => ({

    isOpen: true
  }),
  components:{
  Navbar,
  Sidebar
  }
}
</script>
