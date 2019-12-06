<template>
  <div class="home">
    <h1>This is the homepage</h1>
    <v-divider></v-divider>

    <v-btn class="hidden-md-and-down red" >Apenas para gradnes</v-btn>
    <v-btn class="hidden-md-and-up gren" >Apenas para medios</v-btn>
    <v-btn class="hidden-sm-only gray">Apenas para pequenos</v-btn>

  </div>
    
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home'
 
}
</script>
