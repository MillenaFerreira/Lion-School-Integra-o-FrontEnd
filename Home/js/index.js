'use strict'

import { contatos } from "../js/quantidadeDeTurmas.js";

console.log('entrei');

const criarCard = (contato, indice) => {
    console.log('uiui');

    const card = document.createElement('div')
    card.classList.add('card');

    // card.addEventListener('click', (event) => {
    //     var card = document.getElementById('cardsJSON');
    //     card.replaceChildren(criarCard(indice))
    // })

    const imagem = document.createElement('img')
    imagem.classList.add('img-card')
    imagem.src = `${contato.icone}`

    const sigla = document.createElement('h2')
    sigla.classList.add('nomeCurso')
    sigla.textContent = contato.sigla

    card.append(imagem, sigla)

    return card
}

const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = contatos.map(criarCard)
    card.replaceChildren(...cardsJSON)
}

carregarCard()