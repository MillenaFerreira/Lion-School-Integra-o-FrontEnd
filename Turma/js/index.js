'use strict'

//import { alunos } from "../js/alunos.js"
import { getFitragemCurso } from "../js/main.js"
import { getFitragemStatus } from "../js/main.js";

const alunos = await getFitragemCurso()

const criarTitulo = (aluno) => {
    const pai = document.getElementById('titulo')

    const nomeTitulo = document.createElement('h2')
    nomeTitulo.classList.add()
    nomeTitulo.textContent = aluno.NomeCurso.toUpperCase()

    pai.append(nomeTitulo)
}

const criarCard = (aluno) => {
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
    nome.textContent = aluno.nome.toUpperCase()

    const matricula = document.createElement('span')
    matricula.textContent = aluno.matricula

    card.append(foto, nome)

    card.addEventListener('click', () => {
        localStorage.setItem('matricula', matricula.textContent)
    })

    return card
}

const CursandoEFinalizado =  () => {

    const buttons = document.querySelectorAll('.card-');

    buttons.forEach(button => {
        button.addEventListener('click', async () => {
                      
            const idClicado = button.id;

            if(button.id == "status"){
               carregarCard()
            }else{
                const retorna = await getFitragemStatus(idClicado)
                const cardJSON = retorna.aluno.map(criarCard);
                const card = document.getElementById('cardsJSON')
                card.replaceChildren(...cardJSON)
            }
           
        });

    });

}

const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = alunos.aluno.map(criarCard)

    card.replaceChildren(...cardsJSON)
}

//cria uma array que vai conter anos de conclusão daquele curso em especifico
const pegarAnoConclusao = (alunos) => {
    let anos = []

    alunos.forEach(aluno => {
        anos.push(aluno.curso[0].conclusao)
    })

    let anosNovo = anos.filter((este, i) => anos.indexOf(este) === i)
    return anosNovo.sort()
}

//cria um json com todos os alunos daquele curso especifico
const anos = pegarAnoConclusao(alunos.aluno);

const anoNovo = async (ano) => {
    const alunoJson = {}
    const alunoArray = []
    alunos.aluno.forEach(aluno => {
        if(aluno.curso[0].conclusao == ano){
            alunoArray.push(aluno)
        }
        
    })
    alunoJson.aluno = alunoArray
    return alunoJson
    
}

//cria as opções de ano do usuario e adiciona o evento de clique neles
const criarAnos = (anos) => {
    const pai = document.getElementById('dropdown-content')
    anos.forEach(ano => {
        const card = document.createElement('a')
        card.id = `${ano}`
        card.innerHTML = ano
        card.addEventListener('click', async () => {
            const retorna = await anoNovo(ano)
            const cardJSON =  retorna.aluno.map(criarCard)
            const card = document.getElementById('cardsJSON')
                card.replaceChildren(...cardJSON)
        })
        pai.append(card)
    })
}



criarAnos(anos)
CursandoEFinalizado()
criarTitulo(alunos)
carregarCard()