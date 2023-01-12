<template>
    
    <div id="mainContainer">

        <div id="navBar">

            <h1><router-link to="/notebook">Notebook</router-link></h1>
            <h1><router-link to="/editor">Editor</router-link></h1>
            <h1><router-link to="/algorithms">Algos</router-link></h1>

        </div>

            <div v-if="codeTreeVisible" id="CodeTree">
                <div  v-for="code in currentCode"><h1 @click="loadCode">{{code.title}}</h1><h6 @click="deleteCode">Delete</h6></div>
            </div>


        <div id="dataContainer">
            <div id="codeTitleContainer">
                <input id="codeTitle" >
            </div>

            <div id="codeEditor">
                <textarea id="text" autofocus spellcheck="false"></textarea>
            </div>



            <div id="separator">
                <h4 @click="runCode"> Run </h4>
                <h4 @click="toggleCodeTree"> Tree</h4>
                <h4 @click="saveCode"> Save </h4>
            </div>


            <div id="output">
                <h1 id="outputArea"></h1>
            </div>

        </div>
    </div>

</template>

<style scoped>

#CodeTree h1{
position:relative;
padding-left:35%;
}

#CodeTree{

    padding-top:5%;
    overflow-y: hidden;
    border:1px solid #16838A ;
    position:absolute;
    right:80%;
    width:19.9%;
    background:black;
    opacity: 0.8;
    color:red;
    height:100%;

}

#codeEditor, #separator, #output{
    width:96%;
    height:10%;
    background:black;
    border:#16838A 1px solid;
    color:white;

}

#codeEditor{
    height:70%;
}

#separator{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:2%;
}

#output{
    height:25%;
}

#text{
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    background:black;
    color:white;
    width:99.9%;
    height:100%;
    resize:none;
    font-size:15px;
}


#mainContainer{

    background:#171D1C;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
    flex-direction:column;

}

#navBar{
    display:flex;
    width:100%;
    justify-content:space-between;
    border-bottom:#16BAC5 1px solid;
    margin-bottom:1%;
}

#navBar h1:not(:first-child){
    border-left:#16BAC5 1px solid;
}

#navBar h1{
    color:white;
    width:100%;
    text-align:center;
}

#navBar h1:hover{

    background:#16838A;
    color:black;
}

#dataContainer{

    background:#16838A;
    margin-top:1%;
    width:95%;
    height:90%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
}

#treeNavigator{

    border-right:red 1px solid;
    width:11%;
    height:100%;
    padding-left:4%;
    display:flex;
    flex-direction: column;

}
.treeNavigatorItem{

    margin-bottom:5%;


}

a{

    color:white;
    text-decoration:none;

}

input{

    background:black;
    color:white;
    border:none;
     -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    height:100%;
    font-size:15px;
}

input:focus{
    outline:none;
    height:100%;

}

</style>

<script>

    import axios from 'axios';
    import { useCookies } from "vue3-cookies";

    export default{
         setup() {
            const { cookies } = useCookies();
            return { cookies };
        },
        created(){
            this.getAllCodes();
        },
        data(){
            return{
                currentCode : [],
                codeTreeVisible: false
            }
        },
        methods:{
            runCode(){

                const codeBody = document.getElementById("text").value;
                const result = new Function(codeBody)();
                document.getElementById("outputArea").innerHTML= result;
            },
            async saveCode(){
                const codeBody = document.getElementById("text").value;
                const title = document.getElementById("codeTitle").value;
                const username = $cookies.get("username");


                if(this.findCode(title))
                await axios(
                    {
                        method:"PUT",
                        url:"http://localhost:8000/api/notebook",
                        data :{
                            username: username,
                            notebookEntryTitle: title,
                            newBody : codeBody
                    },
                        withCredentials: false,
                        'Content-Type': 'application/json'
                    }
                ).then(res => {
                    console.log("CodeSaved")
                }).catch(e => {
                    console.log("Saving Failed")
                })
 
                else
                await axios(
                    {
                        method:"POST",
                        url:"http://localhost:8000/api/notebook",
                        data :{
                            username: username,
                            title: title,
                            body : codeBody
                    },
                        withCredentials: false,
                        'Content-Type': 'application/json'
                    }
                ).then(res => {
                    console.log("CodeSaved")
                }).catch(e => {
                    console.log("Saving Failed")
                })
 

                    this.getAllCodes();
            },
            async deleteCode(e){
                const username = $cookies.get("username");
                const title = e.target.parentNode.childNodes[0].innerText
                if(this.findCode(title))
                  await axios(
                      {
                          method:"DELETE",
                          url:"http://localhost:8000/api/notebook",
                          data :{
                              username: username,
                              title: title,
                      },
                          withCredentials: false,
                          'Content-Type': 'application/json'
                      }
                  ).then(res => {
                      console.log("Code Deleted")
                      this.getAllCodes();
                  }).catch(e => {
                      console.log("Saving Failed")
                  })
            },
            async getAllCodes(){
                const username = $cookies.get("username");
                console.log(username);
                await axios(
                    {
                        method:"GET",
                        url:"http://localhost:8000/api/notebook",
                        params:{
                            username: username,
                            singular : false,
                    },
                        withCredentials: false,
                        'Content-Type': 'application/json'
                    }
                ).then(res => {
                    console.log(res);
                    this.currentCode = res.data;
                }).catch(e => {
                    console.log("Saving Failed")
                })

            },
            toggleCodeTree(){
                this.codeTreeVisible = !this.codeTreeVisible;
            },
            findCode(title){
                const currentCode = JSON.parse(JSON.stringify(this.currentCode));
                for(let i = 0; i < currentCode.length; i++){
                    if(currentCode[i]['title'] == title)
                        return currentCode[i];
                }

            },
            loadCode(e){
                const findTitle = e.target.innerText;
                const {body ,title} = this.findCode(findTitle);
                document.getElementById("text").value =body;
                document.getElementById("codeTitle").value = title;
                }

        }
    }

</script>

