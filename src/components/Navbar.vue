<template>
 <nav>
   
   <v-toolbar>
    <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title text app class="text-uppercase grey--text">
      <span class="font-weight-light">
        Tarefas
      </span>
      <span>
        Para fazer
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text color="grey">
      <span>Sign Out</span>
      <v-icon right>exit_to_app</v-icon>
    </v-btn>
   </v-toolbar>
   <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list class="indigo">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon left class ="white--text">dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >
            <v-list-tile-title class="white--text">
              DashBoard
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

  
 </nav>
</template>

<script>
export default {
data:() =>({
  drawer: false,
  itens: [
    {icon:'dashboard', text:'Dashboard', route: '/'},
    {icon:'folder', text:'My Projects', route: '/projects'},
    {icon:'person', text:'Team', route: '/team'}
  ],
})
}
</script>

<style>

</style>