<template>

    <div id="app">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top" >WeisVote </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio"><router-link to="/polls">Polls</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#team"><router-link to="#team">Team</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about"><router-link to="/About">About</router-link></a>
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

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Welcome To Our Platform!</div>
          <div class="intro-heading text-uppercase">It's Nice To make a vote</div>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
              <button type="button" class="btn btn-primary custom-btn" data-toggle="modal" data-target="#exampleModal">
             Launch Demo Poll
              </button>
        </div>
      </div>
    </header>

    <!-- Services -->
    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Features</h2>
            
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">An E-Voting</h4>
            <p class="text-muted">E-voting, a form of computer-mediated voting in which voters make their selections with the aid of a computer.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Easy to Use</h4>
            <p class="text-muted">our website is Accessible to All Users we deliver quality and offer an intuitive, comfortable overall experience.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Privacy and Protection</h4>
            <p class="text-muted">Your voting secrecy will be preserved thanks to the high security standards and an anonymous counting of your vote follows. </p>
          </div>
        </div>
      </div>
    </section>


    <!-- Team -->
    <section class="bg-light" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Our  Team</h2>
           
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="../src/assets/img/yassine.jpg" alt="">
              <h4>Yassine Asmi</h4>
              <p class="text-muted">Software Engineer</p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="../src/assets/img/khemais.jpg" alt="">
              <h4>Khemais Ismail</h4>
              <p class="text-muted">Software Engineer</p>
            </div>
          </div>
      
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
          </div>
        </div>
      </div>
    </section>

    <!-- Clients -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">Stay in touch !</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

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
   <div class="form-group">
    <label for="exampleInputPassword1">Role</label>
    <input type="text" class="form-control" v-model="sign.role" id="exampleInputPassword1" placeholder="Role">
  </div>
     <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
                    role:""
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
                       this.showModal = false
                         console.log('succcccccccccccess')
                       // this.$router.push({path: '/home'});
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
            signup() {
              console.log(this.$data.sign)
              signUp({email : this.$data.sign.email,username:this.$data.sign.username,password:this.$data.sign.password,role :[this.$data.sign.role]})
                    .then((res) => {
                       // this.$store.commit("loginSuccess", res);
                          console.log(res)
                         this.showModal = false
                         console.log('succcccccccccccess')
                       // this.$router.push({path: '/home'});
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

