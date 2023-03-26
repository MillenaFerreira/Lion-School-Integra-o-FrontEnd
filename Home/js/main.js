'use strict'


export const getDadosCurso = async (curso) => {

    const url = `http://localhost:8080/v1/whatsapp/perfil/telefone/${curso}`
    const response = await fetch(url)
    const dado = await response.json()
    return dado
}