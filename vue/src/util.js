import axios from 'axios'
export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('http://localhost:5000/api/auth/signin', credentials)
            .then((response) => {
               // setAuthorization(response.data.access_token);
                res(response.data);
            })
            .catch(() =>{
                rej("Wrong email or password");
            })
    })
}