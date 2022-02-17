import axios from 'axios';
const API_URL = 'http://localhost:4000';

export class APIService{

constructor(){
}

getusers() {

const url = `${API_URL}/api/users/`;

return axios.get(url).then(response => response.data);
}
getuser(pk) {

const url = `${API_URL}/api/users/${pk}`;

return axios.get(url).then(response => response.data);

}

deleteuser(user){

const url = `${API_URL}/api/users/${user.pk}`;
    return axios.delete(url);
}

adduser(user){
    const url = `${API_URL}/api/users/`;
    return axios.post(url,user);
}

updateuser(user){
const url = `${API_URL}/api/users/${user.pk}`;
return axios.put(url,user);
}
}