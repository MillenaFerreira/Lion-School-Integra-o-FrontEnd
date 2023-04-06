'use strict'


export const getDadosCurso = async () => {

    const url = `https://tired-slug-hat.cyclic.app/v1/lion-school/cursos`
    const response = await fetch(url)
    const dado = await response.json()
    return dado
}