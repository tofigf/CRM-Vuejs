<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link 
    v-for="link in links"
    :key="link.url"
    tag="li" 
    active-class="active"
     :to="link.url"
     :exact="link.exact"
      >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    
    </router-link>
 
  </ul>
</template>
<script>
export default {
  props:['value'],
  data: () => ({
    links: [
      { title: "Hesab", url: "/" ,exact: true},
      { title: "Tarix", url: "/history" },
      { title: "Planlama", url: "/planning" },
      { title: "Yeni Əlavə Etmək", url: "/record" },
      { title: "Kateqoriya", url: "/categories" }
    ]
  })
};
</script>
