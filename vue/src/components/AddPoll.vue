<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex v-responsive__content justify-center text-justify align-center">
        <div class="display-1" test-data-id="title">Sir Vote-a-lot</div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container  class="mt-7">
        <v-row class="text-center">
          <v-col cols="4">
            <CreatePoll @question= "setQuestion" @options = "setOptions"></CreatePoll>
            <button @click="postQuestion()">Add Poll</button>
          </v-col>
          <v-col cols="4" v-if="options.length>1 && question!== '' && question!== undefined">
            <DisplayPoll :options="options" :question="question" :resetCounter="resetCounter" @resetCounterUpdate="updateResetCounter" @votereport="getVoteReportData"></DisplayPoll>
          </v-col>
          <v-col cols="4" v-if="reportData.length>1">
            <DisplayResult :chartData="reportData" :question="question"></DisplayResult>
          </v-col>
        </v-row>
      </v-container>
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