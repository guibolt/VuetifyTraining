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
            <div class="right">
              <v-chip small 
              :color="mudarCor(project)"
              :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
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
export default {
  data() {
    return {
      projects: [
        { title: 'Fazer um novo Website', person: 'Rafael', due: '1 de Janeiro 2019', status: 'fazendo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Codificar a pagina home', person: 'Jose', due: '10 de Janeiro 2019', status: 'feito', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Fazer a thumbnail', person: 'Matheus', due: '20 de Dezembro 2018', status: 'feito', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Criar o forum da comunidade', person: 'Andre', due: '20 de Outubro 2018', status: 'atrasado', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
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
  }
}
</script>

<style>
.project.feito{
  border-left: 4px solid #3CD1C2;
}
.project.fazendo{
  border-left: 4px solid orange
}
.project.atrasado{
  border-left: 4px solid tomato;
}

</style>
