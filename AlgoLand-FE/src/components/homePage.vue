<template>

    <div id="mainContainer">

        <div id="logoPart">

            <img src="../assets/Group 1.png">
            

        </div>


        <div id="mottoAndJoin">
            
            
            <h1 id="WebsiteName" class="outline white"> AlgoLand </h1>
            <div id="motto">
                <h4 class="outline white"> The place where you can learn</h4>
                <h4 class="outline white"> and experience coding</h4>
            </div>

            <router-link to="/login" class='hoverButtonContainer'><button class="hoverButton">Join in!</button></router-link>
            

        </div>



    </div>



</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');


    #mainContainer{
        width:100%;
        display:flex;
        justify-content: space-between;
        height:100%;
        background:#171d1c;


    }

    #mottoAndJoin{

        display:flex;
        height:100%;
        align-items:center;
        flex-direction:column;
        justify-content:space-between;
        width:100%;
        font-family:Inter;
        color:#171d1c;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;


    }

    #mottoAndJoin h1{
        font-size:600%;
        margin-top:10%;
    }

    #mottoAndJoin #motto{
        font-size:300%;
        margin-top:-10%;
    }

    .hoverButtonContainer{
        width:25%;
        height:10%;
        border: none;
        background-color:#16BAC5;
        margin-bottom:20%;
        border-radius:20px;
        color:white;


    }

    .hoverButton{
        width:100%;
        height:100%;
        border: none;
        background-color:#16BAC5;
        margin-bottom:20%;
        font-size:300%;
        border-radius:20px;
        color:white;

    }

    .hoverButton a{
        color:white;
        text-decoration:none;
    }

    .hoverButton:hover{
        background-color:#167A80;
    }

    #logoPart{
        display:flex;
        align-items:end;
    }


</style>
