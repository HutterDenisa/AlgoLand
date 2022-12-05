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
                <h3 id="passwordPlaceHolder">Password</h3>
                <input @input="placeHolderRemover('passwordInput', 'passwordPlaceHolder', 'Password')" id="passwordInput">
            </div>

            <div id="loginButtonAndRegister">
                <router-link id="LogInButtonContainer" to="/algoritms"><button id="LogInButton">Log in!</button></router-link>
            <h2>Don't have an account? Register!</h2>
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
        flex-direction:column;
        width:100%;
        height:100%;
        align-items:center;
        justify-content:center;
    }

    #loginForm{

        display:flex;
        flex-direction:column;
        background:#16BAC5;
        width:30%;
        height:40%;
        justify-content:space-around; align-items:center;
        border-radius: 10px;

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
        margin-top:-40%;
    }

    #loginForm .loginInput input{
        width:90%;
        height:100%;
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
        margin-left:50%;
        color:white;
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
    }
  }
</script>
