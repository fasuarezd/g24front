import axios from 'axios';

//const API_URL = 'http://localhost:5000/api/users/'
const API_URL = 'https://faithful-rose-katydid.cyclic.app/api/users/'

//login un usuario
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


//registrar un usuario
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    return response.data
}

//logout del usuario
const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService