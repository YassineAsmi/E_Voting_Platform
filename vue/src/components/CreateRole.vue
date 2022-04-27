<template>
<div class="createrole">
<h1>Create Role</h1>
 <v-form>
    <v-container>
      
          <v-text-field
            v-model="RoleName"
            label="Role Name"
            outlined
          ></v-text-field>
          <v-textarea
          v-model="Description"
      counter
      label="Description"
      :rules="rules"
      :value="value"
    ></v-textarea>


        <v-btn
          color="pink"
          text
          class="float-left"
          v-bind="attrs"
          @click="snackbar = false"
        >
            <router-link to="/team" > <font color="white"><b>  Close</b></font></router-link> 
        </v-btn>
        <v-btn 
  color="green"
  elevation="18"
  raised
  class="float-right"
 @click="postQuestion()"
  tile
  x-large
><font color="white"><b>Add Poll</b> </font> </v-btn>


    </v-container>
  </v-form>

</div>
 
</template>

<script>
  export default {
    data: () => ({
      RoleName: '',
      Description: '',
      rules: [v => v.length <= 25 || 'Max 25 characters'],
      value: 'Description!',
          snackbar: false,
      text: `Role Created Successfully !!!`,
    }),
  }
</script>
<style>
.createrole{
    margin-top: 126px;
}
</style>