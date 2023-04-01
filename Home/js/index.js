'use strict'

//import { contatos } from "../js/quantidadeDeTurmas.js";
import { getDadosCurso } from "../js/main.js"

const contatos = await getDadosCurso()

const criarCard =  (contato) => {

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
    })

    card.append(imagem, sigla)

    return card
}

const imagem = document.querySelector('.sair')

imagem.addEventListener('mouseover', function(){
    imagem.classList.add('imagem-sair')
})
imagem.addEventListener('mouseout', function(){
    imagem.classList.add('sair')
    imagem.classList.remove('imagem-sair')
})

const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = contatos.cursos.map(criarCard)
    card.replaceChildren(...cardsJSON)
}

carregarCard()