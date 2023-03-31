'use strict'

const curso = localStorage.getItem('curso')
console.log(curso);

export const getFitragem = async () => {

    const url = `http://localhost:8080/v1/lion-school/alunos?curso=${curso}`
    const response = await fetch(url)
    const dado = await response.json()
    return dado
}