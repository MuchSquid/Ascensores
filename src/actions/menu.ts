'use server';

import { createclient } from "@/utils/supabase/client";

export async function getUsuarios() {
    const supabase = createclient();
    const { data: usuarios, error } = await supabase.from('usuarios').select('*');

    if (error) {
        console.error(error);
        return [];
    }
    return usuarios;
}

export async function addUsuario(name: string, password: string) {
    const supabase = createclient();
    const { error } = await supabase.from('usuarios').insert([{ name, password }]);
    if (error) {
        console.error(error);
        return { success: false, message: error.message };
    }   
    return { success: true };
}

export async function editUsuario(id: number, name: string, password: string) {
    const supabase = createclient();
    const { error } = await supabase.from('usuarios').update({ name, password }).eq('id', id);
    if (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
    return { success: true };
}

export async function deleteUsuario(id: number) {
    const supabase = createclient();
    const { error } = await supabase.from('usuarios').delete().eq('id', id);
    if (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
    return { success: true };
}