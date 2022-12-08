<template>
    
    <div id="mainContainer">

        <div id="navBar">

            <h1> Notebook </h1>
            <h1> Editor </h1>
            <h1> Algos </h1>

        </div>

        <div id="dataContainer">

            <div id="treeNavigator">
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
                <h3> Algo 1</h3>
            </div>

            <div id="dataPanel">

                <h1> DataPanel </h1>
            </div>

        </div>
    </div>

</template>

<style scoped>

#mainContainer{

    background:#171D1C;
    display:flex;
    justify-content:center;
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

#dataContainer{

    background:#16838A;
    margin-top:1%;
    width:95%;
    height:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

#treeNavigator{

    border-right:red 1px solid;
    width:11%;
    height:80%;
    padding-top:5%;
    padding-left:4%;
    padding-bottom:5.6%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;

}


</style>

<script>
import VueCanvas from "../components/test.vue";

export default {
  name: "App",
  components: {
    VueCanvas
  }
};


</script>

