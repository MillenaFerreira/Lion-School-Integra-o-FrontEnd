'use strict'

const curso = localStorage.getItem('curso')
console.log(curso);

export const getFitragemCurso = async () => {
    
    const url = `https://tired-slug-hat.cyclic.app/v1/lion-school/alunos?curso=${curso}`
    const response = await fetch(url)
    const dado = await response.json()
    
    return dado
}

export const getFitragemStatus = async (idDoBotaoClicado) => {
    
    const url = `https://tired-slug-hat.cyclic.app/v1/lion-school/alunos?curso=${curso}&status=${idDoBotaoClicado}`
    const response = await fetch(url)
    const dado = await response.json()
    //console.log(dado);
    return dado
}