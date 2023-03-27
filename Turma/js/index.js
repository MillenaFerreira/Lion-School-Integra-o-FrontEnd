'use strict'

import { alunos } from "../js/alunos.js"

console.log('entrei');

const curso = localStorage.getItem('curso')
console.log(curso);

const criarCard = (contato, indice) => {
    console.log('uiui');

    // if (contato.curso == curso) {
        
    // }


    const card = document.createElement('div')
    card.classList.add('card');

    if(contato.status == 'Cursando'){
        card.classList.add('card-cursando')
    }else {
        card.classList.add('card-finalizado')
    }

    const foto = document.createElement('img')
    foto.classList.add('img-card')
    foto.src = `${contato.foto}`

    const nome = document.createElement('h2')
    nome.classList.add('nomeCurso')
    nome.textContent = contato.nome

    card.append(foto, nome)

    return card
}

const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = alunos.alunos.map(criarCard)
    card.replaceChildren(...cardsJSON)
}

carregarCard()