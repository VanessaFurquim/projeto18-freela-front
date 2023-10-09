import axios from "axios"

function signUp (body) {
    
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/signup`, body)

    console.log(promise)

    return promise
}


function signIn (body) {

    const promise = axios.post(`${import.meta.env.VITE_API_URL}/signin`, body)

    return promise
}

// function signOut (body) {

//     const promise = axios.post(`${import.meta.env.VITE_API_URL}/signout`, body)

//     return promise
// }

const APIConnectionAuthentication = { signUp, signIn }

export default APIConnectionAuthentication