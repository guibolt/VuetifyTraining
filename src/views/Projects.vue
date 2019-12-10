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

import db from '../plugins/firebase'
export default {
  name: 'projects',
  data:()=>({
    projects: []
  }),
  computed:{
  myProjects(){
    return this.projects.filter(p =>{
      return project.person ==='Rafael'
    })
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
