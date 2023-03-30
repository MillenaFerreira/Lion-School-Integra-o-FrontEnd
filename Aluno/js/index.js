'use strict'

import { matriculaAluno } from "../js/matriculaAluno.js"

console.log('entrei');


const matriculaTurma = localStorage.getItem('matricula');
console.log(matriculaTurma);

const criarCardAluno = () =>{
    console.log('uiiui');

    const cardAluno = document.createElement('div')
    cardAluno.classList.add('container-aluno')

    const imgAluno = document.createElement('img')
    imgAluno.classList.add('img-aluno')
    imgAluno.src = matriculaAluno.aluno.foto

    const nomeAluno = document.createElement('p')
    nomeAluno.classList.add('name-aluno')
    nomeAluno.textContent = matriculaAluno.aluno.nome

    cardAluno.append(imgAluno, nomeAluno)

    return cardAluno
}
const criarCardGrafico = () =>{
    console.log('=fdbkondfb');

    const cardGrafico = document.createElement('div')
    cardGrafico.classList.add('container-grafico')

    const numeros = document.createElement('div')
    numeros.classList.add('numeros')

    matriculaAluno.aluno.curso[0].disciplinas.forEach(disciplina => {
        const numerosGrafico = document.createElement('span')
        numerosGrafico.classList.add()
        numerosGrafico.textContent = disciplina.media
        numeros.append(numerosGrafico)
        
    })

    const chart = document.createElement('div')
    chart.classList.add('chart')

    const preenchimento = document.createElement('div')
    preenchimento.classList.add('preenchimento')

    const valor = document.createElement('div')
    valor.classList.add('bar')

    cardGrafico.append(numeros)
    

    chart.append(preenchimento)
    preenchimento.append(valor)
    

    return cardGrafico
}

const carregarCard = () => {
    const cardsAlunos = document.getElementById('container-aluno-grafico')
    const container = criarCardAluno(matriculaAluno)
    const containera = criarCardGrafico(matriculaAluno)
    cardsAlunos.append(container, containera)
}

carregarCard()

