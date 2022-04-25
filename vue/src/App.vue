<template>

    <div id="nav">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/" >WeisVote </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
             <router-link class="nav-link js-scroll-trigger" to="/">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" :to="{name :'polls'}">Polls</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link js-scroll-trigger" to="/team">Team</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/About">About</router-link>
            </li>
            <li v-if="!token">
              <button type="button" class="btn btn-primary custom-btn" data-toggle="modal" data-target="#loginModal">
             login
              </button>
            </li>
            <li v-if="!token">
              <button type="button" class="btn btn-primary custom-btn" data-toggle="modal" data-target="#signupModal">
             sign up
              </button>
            </li>
            <li v-if="token">
             <a class="nav-link js-scroll-trigger" href="#">{{user}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

<router-view></router-view>


    <!-- Services -->





    <!-- Footer -->
    <footer>
      <h2>Made By Khemais & Yassine .</h2>
    </footer>





<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Poll Creation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
     
     <div>Type poll content</div>
      <div><input type="radio" name="" id="r1" value="anis" @change="onClick($event)"> <label>First Suggestion </label> <br>
      <input type="radio" name="" id="r1" value="anis" @change="onClick($event)"> <label>Second Suggestion </label> <br>
      <input type="radio" name="" id="r1" value="anis" @change="onClick($event)"> <label>Third Suggestion </label> </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" v-if="showModal" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
     
     
  <form @submit.prevent="authenticate">
  <div class="form-group"><p style="color: red"> {{errorlogin}}</p></div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Your User Name</label>
    <input type="text" class="form-control" v-model="input.username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Enter Your Password</label>
    <input type="password" class="form-control" v-model="input.password" id="exampleInputPassword1" placeholder="Password">
  </div>
  
  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" >login</button>
      </div>
</form>
      </div>
      
    </div>
  </div>
</div>

  <div class="modal fade" id="signupModal" v-if="this.showModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign up</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
    <form @submit.prevent="signup">
    <div class="form-group"><p style="color: red"> {{errorsign}}</p></div>
    <div class="form-group">
    <label for="exampleInputEmail1">enter your UserName</label>
    <input type="text" class="form-control" v-model="sign.username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
 
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="sign.email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="sign.password" id="exampleInputPassword1" placeholder="Password">
  </div>
     <div class="modal-footer">
        <button type="button" id="close_signup" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" >sign up</button>
      </div>
  
</form>
     
      </div>
   
    </div>
  </div>
</div>
  </div>

  
</template>
<script>
import {login, signUp} from './util';
    export default {
        data() {
            return {
              token : localStorage.getItem('token'),
              user :  localStorage.getItem('user'),
              showModal: true,
                input: {
                    username: "",
                    password: ""
                },
                sign: {
                    email: "",
                    password: "",
                    username:"",
                    role:"user"
                },
                errorlogin:'',
                errorsign:''
            }
        },
        methods: {
            authenticate() {
              console.log(this.$data.input)
              
              login(this.$data.input)
                    .then((res) => {
                       localStorage.setItem("token",res.accessToken);
                       localStorage.setItem("user",res.username);
                       console.log(res)
                      // this.showModal = false
                         console.log('succcccccccccccess')
                        this.$router.push({path: '/'});
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorlogin = error
                        //this.$store.commit("loginFailed", {error});
                    });
            
             // login()
             /*   if(this.input.email != "" && this.input.password != ""){
                    
                  this.$router.replace({ name: "secure" });
                  console.log("The email and / or password is incorrect");
          
                }else {
                    console.log("A email and password must be present");
                }
            }*/
        },
        closeModal() {
   document.getElementById('close_signup').click();
},
            signup() {
              console.log(this.$data.sign)
              signUp({email : this.$data.sign.email,username:this.$data.sign.username,password:this.$data.sign.password,role :[this.$data.sign.role]})
                    .then((res) => {
                       // this.$store.commit("loginSuccess", res);
                          console.log(res)
                          this.closeModal();
   
                         console.log('succcccccccccccess')
                      //  this.$router.push({path: '/polls'});
                    })
                    .catch((error) => {
                          console.log(error)
                          this.errorsign = error
                        //this.$store.commit("loginFailed", {error});
                    });
            
             // login()
             /*   if(this.input.email != "" && this.input.password != ""){
                    
                  this.$router.replace({ name: "secure" });
                  console.log("The email and / or password is incorrect");
          
                }else {
                    console.log("A email and password must be present");
                }
            }*/
        }
    }
    }


</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo-custom{
width: 40%;
    border-radius: 50%;}
body {
  background: black;
}
.custom-btn{
 margin-left: 2%;
}
</style>
