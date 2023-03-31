'use strict'

//import { matriculaAluno } from "../js/matriculaAluno.js"
import { getMatricula } from '../js/main.js'

console.log('entrei');
const matriculaAluno = await getMatricula()


const criarCardAluno = (matricula) => {
    console.log('uiiui');

    const cardAluno = document.createElement('div')
    cardAluno.classList.add('container-aluno')

    const imgAluno = document.createElement('img')
    imgAluno.classList.add('img-aluno')
    imgAluno.src = matricula.aluno.foto

    const nomeAluno = document.createElement('p')
    nomeAluno.classList.add('name-aluno')
    nomeAluno.textContent = matricula.aluno.nome

    cardAluno.append(imgAluno, nomeAluno)

    return cardAluno
}
const criarCardGrafico = () => {
    console.log('entrei rapaz');

    const cardGrafico = document.createElement('div')
    cardGrafico.classList.add('container-grafico')

    const numeros = document.createElement('div')
    numeros.classList.add('numeros')

    const chart = document.createElement('div')
    chart.classList.add('chart')

    const nomesDisciplinas = document.createElement('div')
    nomesDisciplinas.classList.add('nomes')

    matriculaAluno.aluno.curso[0].disciplinas.forEach(disciplina => {

        // numeros do grafico
        const numerosGrafico = document.createElement('span')
        numerosGrafico.classList.add()
        numerosGrafico.textContent = disciplina.media

        numeros.append(numerosGrafico)

        //valores do grafico
        const preenchimento = document.createElement('div')
        preenchimento.classList.add('preenchimento')

        const valor = document.createElement('div')
        valor.classList.add('bar')
        //valor.textContent = numerosGrafico 

        setTimeout(() => {
            valor.style.height = disciplina.media + '%'
        }, 100);

        chart.append(preenchimento)
        preenchimento.append(valor)

        //sigla de todas as materias
        const nomesGrafico = document.createElement('span')
        nomesGrafico.classList.add()
        nomesGrafico.textContent = disciplina.sigla

        nomesDisciplinas.append(nomesGrafico)
        
    })

    cardGrafico.append(numeros)
    cardGrafico.append(chart)
    cardGrafico.append(nomesDisciplinas)

    return cardGrafico
}

const carregarCard = () => {
    const cardsAlunos = document.getElementById('container-aluno-grafico')
    const containerAluno = criarCardAluno(matriculaAluno)
    const containerGrafico = criarCardGrafico(matriculaAluno)
    cardsAlunos.append(containerAluno, containerGrafico)
}

carregarCard()

