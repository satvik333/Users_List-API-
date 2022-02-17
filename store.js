import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)


export default new Vuex.Store({
  state: {
    users:[
      ],
   
      },
      mutations:{
        GET_USER(state,res){
          state.users = res
        },
        GET_ONEUSER(state,user){
          axios.get(`http://localhost:4000/getuser/${user._id}`).then(() => {
            // let index = state.users.indexOf(user);
            // state.oneusr=state.users(index)
              }).catch(error => {
                throw new Error(` ${error}`);
              });
         },
        ADD_USER(state,res){
          state.users=res
             
        },
        DELETE_USER(state,index){
          state.users.splice(index, 1);
        },
        UPDATE_USER(){
         
        }
      },
    actions: {
       async getuser1({commit}) {
        axios.get('http://localhost:4000/getuser').then(result => {
          var res=result.data
          commit("GET_USER",res)
        }).catch(error => {
          throw new Error(` ${error}`);
        });
        
          },
        
        async getoneuser({commit},user) {
          
          commit("GET_ONEUSER",user)
          },
         async adduser({commit}, user){
          axios.post('http://localhost:4000/adduser', {name: user}).then(result => {
              if(result.status === 201){
                  var res=result.config.data;
                  commit("ADD_USER",res)
                 }
              }).catch(error => {
                throw new Error(` ${error}`);
              });
          
            },

            deleteuser({commit},user){
              axios.delete(`http://localhost:4000/deleteuser/${user._id}`).then(() => {
                let index = this.state.users.indexOf(user);
                commit("DELETE_USER",index)
                  }).catch(error => {
                    throw new Error(` ${error}`);
                  });
              
            },

            edituser({commit},user){
             console.log(user.name)
              axios.put(`http://localhost:4000/updateuser/${user._id}/${user.name}`).then(() => {
                      let idx=this.state.users.indexOf(user)
                      commit("UPDATE_USER",idx)
                    }).catch(error => {
                      throw new Error(` ${error}`);
                    });
              
            },
          }
        
})
    
     