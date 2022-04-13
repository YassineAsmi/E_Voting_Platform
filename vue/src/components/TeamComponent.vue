<template>
    <div class="role">
        <ul>

            <li  v-for="(answer, index) in this.role" :key="index">{{answer.name}}</li>
        </ul>
    </div>
</template>
    <script> 
import { getRoles } from '../util'
    export default {
        name:'TeamComponent',
        data() {
            return {
                role:null,
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