import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tareas/'

//crear una tarea
const crearTarea = async (tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)

    return response.data
}

const tareaService = {
    crearTarea
}

export default tareaService