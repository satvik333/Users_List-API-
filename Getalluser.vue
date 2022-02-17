<template>
<div>
  <div v-for="(user) in users" :key="user.id">
      {{user.name}}
  </div>
  </div>
</template>

<script>
export default {
computed:{
  users(){
     this.$store.dispatch("getuser1")
     return this.$store.state.users;
  }
},

}

</script>

<style>

</style>