<template>

    <div id="mainContainer">

        <div id="joinIn">

            <h1> Join In! </h1>

        </div>

        <div id="loginForm">
            <div class="loginInput">
                <h3 id="usernamePlaceHolder">Username</h3>
                <input @input="placeHolderRemover('usernameInput', 'usernamePlaceHolder', 'Username')" id="usernameInput">
            </div>
            <div class="loginInput">
                <h3 id="emailPlaceHolder">Email</h3>
                <input @input="placeHolderRemover('emailInput', 'emailPlaceHolder', 'Email')" id="emailInput">
            </div>

            <div class="loginInput">
                <h3 id="passwordPlaceHolder">Password</h3>
                <input @input="placeHolderRemover('passwordInput', 'passwordPlaceHolder', 'Password')" id="passwordInput">
            </div>

            <div class="loginInput">
                <h3 id="confirmPasswordPlaceHolder">Confirm Password</h3>
                <input @input="placeHolderRemover('confirmPasswordInput', 'confirmPasswordPlaceHolder', 'Confirm Password')" id="confirmPasswordInput">
            </div>

            <div id="loginButtonAndRegister">
                <button @click="registerUser" id="LogInButton">Register</button>
                <router-link id="LogInButtonContainer" to="/login"><h2>Already have an account? Log in!</h2></router-link>
            </div>

        </div>

    </div>


</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    #mainContainer{
       
        background:#171d1c;
        font-family:Inter;
        display:flex;
        flex-direction:row-reverse;
        width:100%;
        height:100%;
        align-items:center;
        justify-content:space-between;
    }

    #loginForm{

        display:flex;
        flex-direction:column;
        background:#16BAC5;
        width:50%;
        height:80%;
        justify-content:space-around; align-items:center;
        border-radius: 10px;
        margin-left:5%;

    }
    #loginButtonAndRegister{

        display:flex;
        flex-direction:column;
        align-items:center;
    }

    #mainContainer h1{
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        color:#171d1c;
        font-size: 600%;
        margin-top:-150%;
        margin-left:-60%;
    }

    #loginForm .loginInput input{
        width:90%;
        height:60%;
        border: none;
        border-radius: 10px;
        background-color:#171D1C;
        color:#D9D9D9;
        font-size:30px;

    }

    .loginInput{

        width:100%;
        height:15%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }

    .loginInput h3{
        margin-right:70%;
    }

    #loginForm div h3{
        position:absolute;
        margin-left:32%;
        text-align:left;
        color:white;
        font-size:140%;
    }

    #LogInButton{

        font-size: 40px;
        padding: 5% 29% 5% 29%;
        width:100%;
        height:100%;
        border: none;
        border-radius:10px;
        background-color:#171D1C;
        color:#D9D9D9;
 
    }

    #LogInButton:hover{


        background-color:#167E85;

    }

    #LogInButtonContainer{

        width: 100%;

    }


</style>


<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
  export default {
    methods: {
      placeHolderRemover (inputId, placeHolderId, originalText) {
          let value = document.getElementById(inputId).value;
          if(value != ""){
            document.getElementById(placeHolderId).innerText = "";
          }else{
            document.getElementById(placeHolderId).innerText = originalText;
          }
      },
        async registerUser(){
        const res = await axios.post('http://localhost:8000/api/user', {
              username:document.getElementById('usernameInput').value,
              email:document.getElementById('emailInput').value,
              password:document.getElementById('passwordInput').value,
              })
        if(res.data == 'account was taken')
          alert("This account was taken")
        else
          this.$router.push("/algorithms");


      }
    }
        }
</script>
