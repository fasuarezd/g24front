import axios from 'axios';

//const API_URL = 'http://localhost:5000/api/tareas/'
const API_URL = 'https://faithful-rose-katydid.cyclic.app/api/tareas/'

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

//obtener lista de tareas del usuario
const getTareas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

//borrar una tarea
const deleteTarea = async (idtarea, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + idtarea, config)

    return response.data
}

const tareaService = {
    crearTarea,
    getTareas,
    deleteTarea
}

export default tareaService