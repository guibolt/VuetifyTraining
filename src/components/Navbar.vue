<template>
 <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Projeto adicionado com Sucesso!</span>
      <v-btn text color="white">Close</v-btn>
    </v-snackbar>

   <v-toolbar>
    <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-btn @click="$router.push('/')" text>
      <v-toolbar-title text app class="text-uppercase grey--text" >
      <span class="font-weight-light">
        Projetos
      </span>
      <span>
        Para fazer
      </span>
    </v-toolbar-title>
    </v-btn>
    
    <v-spacer></v-spacer>

    <v-btn text color="grey">
      <span>Sair</span>
      <v-icon right>exit_to_app</v-icon>
    </v-btn>
   </v-toolbar>
     <v-navigation-drawer v-model="drawer" absolute  temporary>
       
      <v-list nav dense>
       <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <v-img src="https://media.licdn.com/dms/image/C4D03AQGMuqrqzJMfog/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=25sfUGTMLYcxa6gdkkkahQCdByYeaYHRKfRXmGg2lyM"></v-img>
          </v-avatar>
        </v-flex>
          <p class="subheading mt-4">Guilherme</p> 
          <v-flex class=" mt-4 mb-3">
            <Popup @projetoAdicionado="setFalse"/>
          </v-flex>
       </v-layout>

        <v-divider></v-divider>

        <v-divider></v-divider>
    
        <v-list dense>
          <v-list-item
            v-for="item in links"
            :key="item.text"
            router :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
       
      </v-list>
    </v-navigation-drawer>

  
 </nav>
</template>

<script>
import Popup from './Popup'
export default {
  components :{
    Popup
  },
data:() =>({
  drawer: false,
  links: [
    {icon:'dashboard', text:'Dashboard', route: '/'},
    {icon:'folder', text:'Meus Projetos', route: '/projects'},
    {icon:'person', text:'Time', route: '/team'}
  ],
  snackbar: false
}),
methods: {
  setFalse(){
    this.snackbar = true
    this.drawer = false
  }
}
}
</script>
