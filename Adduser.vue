<template>
  <div>
    <div>
    <label>Name</label>
    <input type='text' v-model="newuser"/>
    </div>
     <div style="margin-top:20px">
    <button type='submit' @click="addnewuser()">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newuser:"",
      
    }
  },
  methods: {
    addnewuser() {
      this.$store.dispatch("adduser", this.newuser);
      this.newuser = "";  
    }
  }
}
</script>

<style>

</style>