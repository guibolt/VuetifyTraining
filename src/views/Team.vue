<template>
  <div class="team">
    <h1 class="display-2 blue-grey--text mt-5 text-center" >Time</h1>

    <v-container class="my-5">
      <v-layout row wrap>
          <v-flex 
          v-for="person in team"
          :key="person.name"
          xs12
          sm6
          md4
          lg3
          >
            <v-card flat class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="250" class="grey lighten-2">
                <v-img :src="person.urlImg" height="250"></v-img>
                </v-avatar>
              </v-responsive>

              <v-card-text>
                <div class="subheading">{{person.name}}</div>
                <div class="grey--text">{{person.role}}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="grey">
                  <v-icon small right>message</v-icon>
                  <span>Mandar mensagem</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'teams',
  data:()=>({
    team: [
      {name: 'Guilherme Reis', role: 'Full Stack Develope',urlImg: 'http://www.alignthoughts.com/wp-content/uploads/2017/07/alignthoughts-how-to-be-a-well-rounded-person-768x513.jpeg'},
      {name: 'Andre Victor', role: 'Back-end Developer',urlImg:'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?cs=srgb&dl=men-s-wearing-black-suit-jacket-and-pants-937481.jpg&fm=jpg'},
      {name: 'Matheus', role: 'Black-end Developer',urlImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=adult-beard-boy-casual-220453.jpg&fm=jpg'},
      {name: 'Rafael Vieira', role: 'Full Stack Developer',urlImg: 'https://media.licdn.com/dms/image/C4E03AQGwneiBmrZTNA/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=e6l-kKuRXM23VDCbRB-hiOo3_3qMzRGnuNNQ1shfJNg'},
      {name: 'Cavalo ', role: 'Universitario',urlImg: 'https://yupthatexists.com/wp-content/uploads/2019/03/not-real.jpg'},
      {name: 'Gabriel', role: 'Faz de Tudo',urlImg: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/10/12/markk-strong.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70'}
    ]
  })
 
}
</script>
