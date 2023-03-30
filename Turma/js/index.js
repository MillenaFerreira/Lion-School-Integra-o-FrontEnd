'use strict'

import { alunos } from "../js/alunos.js"

console.log('entrei');

const curso = localStorage.getItem('curso')
console.log(curso);

const criarCard = (aluno) => {
    console.log('uiui');

    const card = document.createElement('div')
    card.classList.add('card');

    if (aluno.status == 'Cursando') {
        card.classList.add('card-cursando')
    } else {
        card.classList.add('card-finalizado')
    }

    const foto = document.createElement('img')
    foto.classList.add('img-card')
    foto.src = `${aluno.foto}`

    const nome = document.createElement('h2')
    nome.classList.add('nomeCurso')
    nome.textContent = aluno.nome

    const matricula = document.createElement('span')
    matricula.textContent = aluno.matricula
    console.log(matricula);

    card.append(foto, nome)

    card.addEventListener('click', () => {
        localStorage.setItem('matricula', matricula.textContent)
    })

    return card


}

const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = alunos.alunos.map(criarCard)
    card.replaceChildren(...cardsJSON)
}

carregarCard()