import React, { useState } from "react";
import { AddEmpleado } from "../../Service/EmpleadoService";

export const EmpleadoForm = () => {
    const [empleado, setEmpleado] = useState({
        nombre: '',
        apellido: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefaul();
        try {
            const data = await AddEmpleado(empleado);
            setEmpleado(data);
            console.log("Correcto");
        } catch (error) {
            console.error("Error");
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpleado((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre: </label>
                <input
                    type="text"
                    name="nombre"
                    value={empleado.nombre}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Apellido: </label>
                <input
                    type="text"
                    name="apellido"
                    value={empleado.apellido}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default EmpleadoForm;