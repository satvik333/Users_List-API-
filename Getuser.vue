<template>
<div>
    <label>Enter the name</label>
    <input type="text"/>
    <button type="submit" @click="gett()">Submit</button>
    
</div>
</template>

<script>
export default {
  data(){
    return{
      fnduser:"",
    }
    },
//     computed:{
//   userr(){
//      return this.$store.state.users;
//   }
// },
methods:{
    gett(){
         this.$store.dispatch('getoneuser',this.fnduser)
         this.fnduser=""
    }
}
}
</script>

<style>

</style>