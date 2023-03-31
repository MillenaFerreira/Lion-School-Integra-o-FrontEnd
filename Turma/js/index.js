'use strict'

//import { alunos } from "../js/alunos.js"
import { getFitragem } from "../js/main.js"

const alunos = await getFitragem()

const criarTitulo = (aluno) => {

    const pai = document.getElementById('titulo') 

    const nomeTitulo = document.createElement('h2')
    nomeTitulo.classList.add()
    nomeTitulo.textContent = aluno.NomeCurso
    // console.log(aluno.NomeCurso);

    pai.append(nomeTitulo)
    

    
}


const criarCard = (aluno) => {
    console.log('uiui');


    const card = document.createElement('a')
    card.classList.add('card');
    card.href = "../../Aluno/html/index.html"

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

    
    card.append(foto, nome)


    card.addEventListener('click', () => {
        localStorage.setItem('matricula', matricula.textContent)
    })

    return card

}

const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = alunos.aluno.map(criarCard)

    card.replaceChildren(...cardsJSON)
}

criarTitulo(alunos)
carregarCard()