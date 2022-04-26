<template>
    <div class="role" >
        <v-container fluid>
      <v-row dense>
          <v-card v-for="(answer, index) in this.role" :key="index"
    class="mx-auto"
    max-width="344"
  >


    <v-card-title>
        <v-chip
      class="ma-2"
      color="blue"
      label
      text-color="white"
    >
      <v-icon left>
        mdi-label
      </v-icon>
       {{answer.name}}
    </v-chip>
     
    </v-card-title>

    <v-card-subtitle>
      Description
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="green"
        text
      >
       <b>Join</b> 
      </v-btn>

      <v-spacer></v-spacer>


    </v-card-actions>


  </v-card>
  </v-row>
    </v-container>
    </div>
</template>
    <script> 
import { getRoles } from '../util'
    export default {
        name:'TeamComponent',
        data() {
            return {
                role:null,
                 show: false,
            }
        },
        methods: {
            getRole(){
                getRoles().then(data=>{
                    this.role = data
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        mounted() {
            this.getRole();
        },
    }
    </script>
<style>
.role{
    margin-top: 126px;
}
</style>