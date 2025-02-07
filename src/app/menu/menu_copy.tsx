
'use client'
import React, { useEffect, useState } from 'react';
import { addUsuario, deleteUsuario, editUsuario, getUsuarios } from '../../actions/menu';

interface Usuario {
    id: number;
    name: string;
    password: string;
}


export default function Menu_logged() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [editingId, setEditingId] = useState<number | null>(null);
    
    useEffect(() => {
        async function fetchUsuarios() {
            const data = await getUsuarios();
            setUsuarios(data);
        }
        fetchUsuarios();
    }, [ ]);

    async function handleAddUsuario() {
        if (!name.trim() || !password.trim()) return; 
        const res = await addUsuario(name, password);
        if (res.success) {
            setUsuarios(await getUsuarios());
            setName('');
            setPassword('');
        }
    }

    async function handleEditUsuario() {
        if (!name.trim() || !password.trim() || editingId === null) return;
        const res = await editUsuario(editingId, name, password);
        if (res.success) {
            setUsuarios(await getUsuarios());
            setName('');
            setPassword('');
            setEditingId(null);  
        }
    }

    async function handleDeleteUsuario(id: number) {
        const res = await deleteUsuario(id);
        if (res.success) {
            setUsuarios(await getUsuarios());
        }
    }

 

    return (
        <div className="min-h-screen text-white p-10 flex flex-col">
            <h1 className="text-3xl font-semibold mb-6">Gestión de Usuarios</h1>

            {/* Formulario */}
            <div className="bg-slate-900 p-6 rounded-lg shadow-md w-full max-w-md mb-6">
                <h2 className="text-xl mb-4">{editingId === null ? "Agregar Usuario" : "Editar Usuario"}</h2>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-700 text-white p-2 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-700 text-white p-2 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {editingId === null ? (
                    <button
                        onClick={handleAddUsuario}
                        className="w-full bg-blue-600 hover:bg-blue-500 transition p-2 rounded-md text-white font-semibold"
                    >
                        Agregar Usuario
                    </button>
                ) : (
                    <button
                        onClick={handleEditUsuario}
                        className="w-full bg-green-600 hover:bg-green-500 transition p-2 rounded-md text-white font-semibold"
                    >
                        Guardar Cambios
                    </button>
                )}
            </div>

            {/* Tabla de Usuarios */}
            <div className="w-full max-w-3xl">
                <table className="w-full border-collapse text-left bg-slate-900 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-gray-300">
                        <tr>
                            <th className="p-3">ID</th>
                            <th className="p-3">Nombre</th>
                            <th className="p-3">Contraseña</th>
                            <th className="p-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.length > 0 ? (
                            usuarios.map((usuario) => (
                                <tr key={usuario.id} className="border-b border-gray-700">
                                    <td className="p-3">{usuario.id}</td>
                                    <td className="p-3">{usuario.name}</td>
                                    <td className="p-3">{usuario.password}</td>
                                    <td className="p-3 flex gap-2">
                                        <button
                                            onClick={() => {
                                                setEditingId(usuario.id);
                                                setName(usuario.name);
                                                setPassword(usuario.password);
                                            }}
                                            className="bg-yellow-500 hover:bg-yellow-400 transition p-2 rounded-md text-black font-semibold"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDeleteUsuario(usuario.id)}
                                            className="bg-red-600 hover:bg-red-500 transition p-2 rounded-md text-white font-semibold"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center p-4 text-gray-400">
                                    No hay usuarios registrados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}