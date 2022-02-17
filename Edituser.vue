<template>
  <div>
      <div v-for="(user,index) in users" :key="index" >
        <input type="text" :id="`input` + index" :value="user.name">
        <span>
          <!-- <button   @click="edit(user,index)">Edit</button> -->
          <button @click="save(user, index)">Save</button>
        </span>
      </div>
  </div>
</template>

<script>
export default {
  data(){
   return{
     //show:true,
     index:"",
     disabled: true,
   }
 },
  computed:{
    users(){
      return this.$store.state.users;
    }
},
  methods: {
      // edit(user){
      //   this.$store.dispatch('edituser',user)
      //  user.disabled = false;
      // },
      save(user, index) {
        this.$store.dispatch('edituser',user)
        this.users.forEach((user1) => {
        if(user1.name == user.name){
          let uservalue = document.getElementById('input' + index);
          user1.name= uservalue.value;
        }
         
      });
        user.disabled = true;
      }
    },
  };
</script>

<style>

</style>