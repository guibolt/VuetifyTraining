<template>
  <div class="projects">
    <h1 class="display-1 text-center blue-grey--text mt-3">Projects</h1>

    <v-container class="my-5">
   

  <v-expansion-panels>
    <v-expansion-panel v-for="project in projects"
    :key="project.title" class="mt-5" >
  


   
        
      <v-expansion-panel-header>
        
        {{project.title}}
        </v-expansion-panel-header>

      <v-expansion-panel-content >
         <v-card>
            <v-card-text>
              <div class="font-weight-bold">{{project.due}}</div>
              <div>{{project.content}} </div>
            </v-card-text>
          </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>


    </v-container>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'projects',
  data:()=>({
    projects: [
        { title: 'Fazer um novo Website', person: 'Rafael', due: '1 de Janeiro 2019', status: 'fazendo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Codificar a pagina home', person: 'Jose', due: '10 de Janeiro 2019', status: 'feito', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Fazer a thumbnail', person: 'Matheus', due: '20 de Dezembro 2018', status: 'feito', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Criar o forum da comunidade', person: 'Andre', due: '20 de Outubro 2018', status: 'atrasado', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
  }),
  computed:{
  myProjects(){
    return this.projects.filter(p =>{
      return project.person ==='Rafael'
    })
  }
  }


}
</script>
