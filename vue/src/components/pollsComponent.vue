<template>
<section id=poll>
<h1>Hello world</h1>
<Pagination></Pagination>
</section>


  
</template>
<script>
import Pagination from './Pagination.vue'

export default {
  name: 'pollsComponent',
  props: {
    msg: String
  },
  components:{
    Pagination
  }
}
</script>
