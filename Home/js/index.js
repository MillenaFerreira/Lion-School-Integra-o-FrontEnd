'use strict'

//import { contatos } from "../js/quantidadeDeTurmas.js";
import { getDadosCurso } from "../js/main.js"

const contatos = await getDadosCurso()
console.log('entrei');

const criarCard =  (contato) => {
    console.log('uiui');

    const card = document.createElement('a')
    card.classList.add('card');
    card.href = '../../Turma/html/index.html'

    const imagem = document.createElement('img')
    imagem.classList.add('img-card')
    imagem.src = `${contato.icone}`

    const sigla = document.createElement('h2')
    sigla.classList.add('nomeCurso')
    sigla.textContent = contato.sigla

    card.addEventListener('click', () => {
        localStorage.setItem('curso', sigla.textContent)
        console.log('cliquei');
    })

    card.append(imagem, sigla)

    return card
}

const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = contatos.cursos.map(criarCard)
    card.replaceChildren(...cardsJSON)
}

carregarCard()