import axios from "axios";

const API_URL = '/empleado'

export const GetAll = async () =>{
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.error("error");
        throw error;
    }
};

export const GetbById = async (id) =>{
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("error");
        throw error;
    }
};

export const AddEmpleado = async (Empleado) =>{
    try {
        const response = await axios.get(`${API_URL}`, empleado);
        return response.data;
    } catch (error) {
        console.error("error");
        throw error;
    }
};
