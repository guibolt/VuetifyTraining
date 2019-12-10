<template>
<v-dialog  max-width="600px">
 <template v-slot:activator="{ on }">
    <v-btn color="success"  v-on="on" > 
      <v-icon left >add</v-icon>
       ADICIONAR NOVO PROJETO
    </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <v-col
          justify="center"
          align="center"
          >
          <h2 class="display-1   blue-grey lighten-5 green--text">Adicionar Novo Projeto</h2>
          </v-col>
        </v-card-title>
          <v-card-text>
            <v-form class="px-3" ref="form">
              <v-text-field label= "Titulo" color="blue-grey" v-model="projeto.titulo" prepend-icon="folder" :rules ="regrasTitulo"> </v-text-field>
              <v-textarea label= "Informações" color="blue-grey" v-model="projeto.informacao" prepend-icon="edit" :rules="regrasInfo"></v-textarea>

                <v-menu
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field label="Data de entrega" prepend-icon="date_range" v-on="on 
                    " :value= "formatteDate"
                    readonly
                    color="blue-grey"
                    :rules="regrasData"
                    >
                    </v-text-field>
                  </template>
                      <v-date-picker v-model="projeto.data"
                      locale="pt-br"
                      color="blue-grey" ></v-date-picker>

                </v-menu>

              <v-btn
              @click="submit"
              text
              class="success mx-0 mt-3"
                            >
              Adicionar!
              </v-btn>
            </v-form>
          </v-card-text>
     </v-card>
</v-dialog>

</template>

<script>
import 'moment/locale/pt-br'
import moment from 'moment'

export default {
data:()=>({
  projeto: {
    titulo:'',
    informacao: '',
    data: undefined
  },
  regrasTitulo: [
    v =>  v && v.length >= 3 || 'Tamanho mínimo é 3'
  ],
  regrasInfo: [
    v =>  v && v.length >= 8 || 'Tamanho mínimo é 8'
  ],
  regrasData: [
    v =>  v && v.length >= 0 || 'É necessario escolher!'
  ]
}),
methods: {
  submit(){
    if(this.$refs.form.validate()){
      console.log('Novo projeto: ', this.projeto)
    }

    console.log('wrong!')
  }
},
computed:{
  formatteDate(){
    moment.locale('pt-br')
    return this.projeto.data ? moment(this.projeto.data).format('LL') : ''
  }
}

}
</script>

<style>

</style>