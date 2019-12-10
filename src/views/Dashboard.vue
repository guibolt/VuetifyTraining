<template>
  <div class="dashboard">
    <h1 class="display-1 blue-grey--text text-center mt-5">Dashboard</h1>
      
    <v-container class="my-5">
      
        <v-row
     justify="center"
     align="center"
     class="mb-5"
     >
      
        <v-tooltip top>
          <template v-slot:activator="{ on }">
        <v-btn small text color="grey" icon class="mr-5" @click="sortBy('title')"  v-on="on">
          <v-icon small left>folder</v-icon>
          
          <span class="subheading ">Filtar por nome do projeto</span>
        </v-btn>
            </template>
          <span>Filtrar por projeto</span>
        </v-tooltip>

          <v-tooltip top>
        <template v-slot:activator="{ on }">
        <v-btn small text color="grey" icon @click="sortBy('person')" v-on="on">
          <v-icon small left>person</v-icon>
          <span class="subheading ">Filtrar por Nome do criador</span>
         </v-btn>
            </template>
          <span>Filtrar por criador</span>
        </v-tooltip>
        
        </v-row>
     <v-row
     justify="center"
     align="center"
     >

      <v-card flat v-for="project in projects" :key="project.title" width="1050"  >
       <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Titulo do Projeto</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Criado por:</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Criado em</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
               <div class="caption grey--text">Status</div>
            <div class="right">
              <v-chip small 
              :color="mudarCor(project)"
              :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
              <v-btn icon>
              <v-icon color= "green" class="ml-5">edit</v-icon>

              </v-btn>
              <v-btn icon>
              <v-icon color="red" class="ml-5">delete</v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

     </v-row>
    </v-container>
  </div>
</template>

<script>
import db from '../plugins/firebase'
export default {
  data() {
    return {
      projects: []
    }
  },
  methods:{
    mudarCor(project){
      if(project.status === 'fazendo')
        return 'orange'
      
      else if( project.status === 'atrasado')
      return 'red'

      else
      return 'success'
    },
    sortBy(prop){
      this.projects.sort((a,b)=>a[prop] <b[prop] ? -1 : 1)
    }
  },
  created(){
    db.collection('projects').onSnapshot(resp =>{
      const changes = resp.docChanges() 
      
      changes.forEach(change =>{
        if(change.type === 'added')
        this.projects.push({
          ...change.doc.data(),
          id: change.doc.id
        })
      })
    })
  }
}
</script>

<style>
.project.feito{
  border-left: 4px solid green
}
.project.fazendo{
  border-left: 4px solid orange
}
.project.atrasado{
  border-left: 4px solid red
}

</style>
