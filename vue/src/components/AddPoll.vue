<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex v-responsive__content justify-center text-justify align-center">
        <div class="display-1" test-data-id="title">what is your vote?</div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container  class="mt-7">
        <v-row class="text-center">
          <v-col cols="4">
            <CreatePoll @question= "setQuestion" @options = "setOptions"></CreatePoll>
            <v-btn class="float-left"
  color="danger"
  elevation="18"
  raised
  rounded

  tile
  x-large
><router-link to="/polls"><font color="white"><b>Cancel</b> </font> </router-link></v-btn>
            <v-btn class="float-right"
  color="green"
  elevation="18"
  raised
  rounded
 @click="postQuestion()"
  tile
  x-large
><font color="white"><b>Add Poll</b> </font> </v-btn>
           
          </v-col>
          <v-col cols="4" v-if="options.length>1 && question!== '' && question!== undefined">
            <DisplayPoll :options="options" :question="question" :resetCounter="resetCounter" @resetCounterUpdate="updateResetCounter" @votereport="getVoteReportData"></DisplayPoll>
          </v-col>
          <v-col cols="4" v-if="reportData.length>1">
            <DisplayResult :chartData="reportData" :question="question"></DisplayResult>
          </v-col>
        </v-row>
      </v-container>
          <v-snackbar
      v-model="snackbar"
      color ="green"
    >
     <font color="white"><b> {{ text }}</b></font>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </v-main>
  </v-app>
  
</template>

<script>
import { addPolls } from '../util';

import CreatePoll from "./CreatePoll"
import DisplayPoll from "./DisplayPoll"
import DisplayResult from "./DisplayResult";
export default {
  name: 'App',

  components: {
    CreatePoll,
    DisplayPoll,
    DisplayResult
  },

  data: () => ({
    question: '',
    options: [],
    optionItems:[],
    reportData:[],
    resetCounter: false,
    snackbar: false,
      text: `Poll Added Successfully !!!`,
  }),
  methods: {
    postQuestion () {
      console.log("er")
       console.log(this.question)
       this.optionItems = this.options.map(item=>item.option)
       console.log(JSON.stringify(this.optionItems));
        this.reformQuestion();
        const poll =  {"question":this.question , ...this.reformQuestion()}
        console.log(poll)
        this.createPolls(poll)
        // this.$router.go();
        this.snackbar =true;
    },
    createPolls(poll){
      addPolls(poll).then(data=>{
        console.log(data)
      }).catch(err=>{
        console.log(err)
      })
    },
    reformQuestion(){
      let  questions = {}
      this.options.map((items,i)=>{
        questions['sug'+(i+1)] = items.option
      })
      return questions
    },
    setOptions: function (value){
      this.options = value
      this.options = this.options.filter(x => x.option !== '')
      this.reportData=[]
      this.resetCounter = true
    },
    setQuestion: function (value){
      this.question = value
      this.reportData=[]
    },
    getVoteReportData: function(value){
      this.reportData = value
    },
    updateResetCounter: function (value){
      this.resetCounter = value
    }
  }
};
</script>