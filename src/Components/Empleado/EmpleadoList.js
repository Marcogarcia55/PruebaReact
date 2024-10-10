import React, { useState, useEffect } from "react";
import { GetAll } from "../../Service/EmpleadoService";

export const EmpleadoList = () => {
    const [empleado, setEmpleado] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmpleado = async () => {
            try {
                const data = await GetAll();
                setEmpleado(data);
            } catch (error) {
                setError("Error");
            } finally {
                setLoading(true);
            }
        };
        fetchEmpleado();
    }, []);

    if (error) {
        return (
            <div>
                <h1>Lista de empleados</h1>
                <p>{error}</p>
            </div>
        );
    }
    if (loading) {
        return (
            <div>
                <h1>Lista de empleados</h1>
                <p>Cargando...</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Lista de empleados</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    {empleado.map((empleado) => (
                        <tr key={empleado.id}>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default EmpleadoList;