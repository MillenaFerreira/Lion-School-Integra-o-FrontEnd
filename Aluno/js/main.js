'use strict'

const matriculaTurma = localStorage.getItem('matricula');
console.log(matriculaTurma);

export const getMatricula = async () => {

    const url = `https://tired-slug-hat.cyclic.app/v1/lion-school/alunos/${matriculaTurma}`
    const response = await fetch(url)
    const dado = await response.json()
    return dado
}