'use strict'


export const getDadosCurso = async () => {

    const url = `http://localhost:8080/v1/lion-school/cursos`
    const response = await fetch(url)
    const dado = await response.json()
    return dado
}