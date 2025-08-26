'use strict'

import produtos from './produtos_atualizados.json' with {type: 'json'}

function criarProdutos(dados){
    const main = document.getElementById('main')
    const button = document.createElement('button')
    const divProdutos = document.createElement('div')
    divProdutos.className = 'produtos'

    const divProdutosSuperior = document.createElement('div')
    divProdutosSuperior.className = 'produtos-superior'

    const divProdutosInferior = document.createElement('div')
    divProdutosInferior.className = 'produtos-inferior'

    const nomeProduto = document.createElement('p')
    nomeProduto.textContent = dados.nome
    divProdutosSuperior.appendChild(nomeProduto)

    const img = document.createElement('img')
    img.src = dados.imagem
    divProdutosSuperior.appendChild(img)


    const informacoes = document.createElement('span')
    informacoes.textContent = dados.descricao
    divProdutosInferior.appendChild(informacoes)

    let avaliacao = dados.classificacao
    if (avaliacao <= 1) {
        const div = document.createElement('div')
        const estrela = document.createElement('i')
        estrela.className = 'fa-solid fa-star fa-2xs'
        div.appendChild(estrela)
        divProdutosInferior.appendChild(div)
    } else if(avaliacao >= 2 && avaliacao < 3){
        const div = document.createElement('div')
        for (let i = 0; i <2; i++) {
            const estrela = document.createElement('i')
            estrela.className = 'fa-solid fa-star fa-2xs'
            div.appendChild(estrela)
            divProdutosInferior.appendChild(div)
        }
    }else if(avaliacao >= 3 && avaliacao < 4){
        const div = document.createElement('div')
        for (let i = 0; i <3; i++) {
            const estrela = document.createElement('i')
            estrela.className = 'fa-solid fa-star fa-2xs'
            div.appendChild(estrela)
            divProdutosInferior.appendChild(div)
        }
    }else if(avaliacao >= 4 && avaliacao < 5){
        const div = document.createElement('div')
        for (let i = 0; i <4; i++) {
            const estrela = document.createElement('i')
            estrela.className = 'fa-solid fa-star fa-2xs'
            div.appendChild(estrela)
            divProdutosInferior.appendChild(div)
        }
    }else if(avaliacao >= 5){
        const div = document.createElement('div')
        for (let i = 0; i <5; i++) {
            const estrela = document.createElement('i')
            estrela.className = 'fa-solid fa-star fa-2xs'
            div.appendChild(estrela)
            divProdutosInferior.appendChild(div)
        }
    }else{}
    
    button.addEventListener('click', () => {
        alert(`Você clicou no produto: ${dados.nome}`)
    })

    const valor = document.createElement('p')
    valor.textContent = dados.preco
    divProdutosInferior.appendChild(valor)

    divProdutos.appendChild(divProdutosSuperior)
    divProdutos.appendChild(divProdutosInferior)
    button.appendChild(divProdutos)
    main.appendChild(button)
}



produtos.forEach(criarProdutos)