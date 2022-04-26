<template>
    <div class="role" >
        <v-btn 
  color="success"
  elevation="18"
  raised
  tile
  x-large
  v-if="token"
>
<router-link to="/CreateRole"><font color="white"><b>Create Role</b> </font> </router-link></v-btn><br><br>
        <v-row justify="center">
      <v-col
         v-for="(answer, index) in this.role" :key="index"
        cols="auto"
      >
          <v-card
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
        v-if="token"
      >
       <b>Join</b> 
      </v-btn>
<v-btn
        disabled
        color="error"
        text
        v-if="!token"
      >
       <b>Please Log in to join a group</b> 
      </v-btn>
      <v-spacer></v-spacer>


    </v-card-actions>


  </v-card>
   </v-col>
  </v-row>
   
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
                 token : localStorage.getItem('token'),
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