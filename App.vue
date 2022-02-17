<template>
  <div id="app">
   <h1>API APP</h1>
   <!-- <div class="card">
    <router-link to="/getuser">GET USER</router-link>
   </div> -->
   <div class="card">
    <router-link  to="/getalluser">LIST OF USERS</router-link>
   </div>
   <div class="card">
    <router-link to="/adduser">ADD USER</router-link>
   </div>
   <div class="card">
    <router-link to="/edituser">EDIT USER</router-link>
   </div>
   <div class="card">
    <router-link to="/deleteuser">DELETE USER</router-link>
   </div>
   <div class="card">
    <router-view></router-view>
   </div>
</div>

</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
.card{
  margin-top: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
