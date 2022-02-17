<template>
  <div>
    <div v-for="(user) in users" :key="user.id" >
        <input type="text" id="user.name" :disabled:="disabled" :value="user.name" >
        <span>
        <button @click="removeuser(user)">Delete</button>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      disabled:false
    }
  },
  computed:{
    users(){
     return this.$store.state.users;
  }
  },
methods:{
  removeuser(user){
    //console.log(user,'uuuuuuuuuuuuuuuu')
     this.$store.dispatch('deleteuser',user)
  }
}
}
</script>

<style>

</style>