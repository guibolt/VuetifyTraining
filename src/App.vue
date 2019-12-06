<template>
  <v-app style="
    background: #8e9eab;
      background: -webkit-linear-gradient(to right, #8e9eab, #eef2f3);
        background: linear-gradient(to right, #8e9eab, #eef2f3); 
  ">
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },


  data: () => ({
    //
  })
}
</script>
