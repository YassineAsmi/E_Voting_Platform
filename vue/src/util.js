import axios from 'axios'
export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('http://localhost:5000/api/auth/signin', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch(() =>{
                rej("Wrong email or password");
            })
    })
}
export function signUp(credentials) {
    return new Promise((res, rej) => {
        axios.post('http://localhost:5000/api/auth/signup', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch(() =>{
                rej("Wrong email or password");
            })
    })
}
export function getRoles() {
    return new Promise((res, rej) => {
        axios.get('http://localhost:5000/api/role')
            .then((response) => {
               console.log(response)
                res(response.data);
            })
            .catch(() =>{
                rej("Wrong email or password");
            })
    })
}
export function getPollsFromApi() {
    return new Promise((res, rej) => {
        axios.get('http://localhost:5000/api/poll')
            .then((response) => {
               // setAuthorization(response.data.access_token);
                console.log(response)
                res(response.data);
            })
            .catch((err) =>{
                rej(err);
            })
    })
}
export function addRoles(role) {
    console.log(role)
    return new Promise((res, rej) => {
        axios.post('http://localhost:5000/api/role',role)
            .then((response) => {
               // setAuthorization(response.data.access_token);
                console.log(response)
                res(response.data);
            })
            .catch((err) =>{
                rej(err);
            })
    })
}
export function addPolls(poll) {
    console.log(poll)
    return new Promise((res, rej) => {
        axios.post('http://localhost:5000/api/poll',poll)
            .then((response) => {
               // setAuthorization(response.data.access_token);
                console.log(response)
                res(response.data);
            })
            .catch((err) =>{
                rej(err);
            })
    })
}