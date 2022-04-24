<template>
<section id=poll>
<div class="container">
<Poll></Poll>


</div>

</section>


  
</template>
<script>
import Poll from './PollView.vue'
export default {
  name: 'pollsComponent',
  props: {
    msg: String
  },
  components:{
    Poll,  
  },data: function() {
                return {
                    options: {
                        question: 'What\'s your favourite <strong>JS</strong> framework?',
                        answers: [
                            { value: 1, text: 'Vue', votes: 53 },
                            { value: 2, text: 'React', votes: 35 },
                            { value: 3, text: 'Angular', votes: 30 },
                            { value: 4, text: 'Other', votes: 10 } 
                        ]
                    }
                }
            },
            methods: {
                addVote: function(obj){
                    console.log('You voted ' + obj.value + '!');
                }
            }
}
</script>
