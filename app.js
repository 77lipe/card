'use strict'


const disciplinas = [
    {nome: 'PWBE', cor: '#db6b6b', icon: 'pwbe.png'},
    {nome: 'PWFE', cor: '#db6b6b', icon: 'pwfe.png'},
    {nome: 'PPDM', cor: '#db6b6b', icon: 'ppdm.png'},
    {nome: 'PRO', cor: '#db6b6b', icon: 'pro.png'}
]

function criarItemMenu (disciplina){
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novoImg = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    //document.documentElement.style.setProperty('--cor-hover', disciplina.cor)
    novoLink.style = `--cor-hover: ${disciplina.cor}`
    novoImg.src = `./icon/${disciplina.icon}`

    novoItem.appendChild(novoImg)
    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)
}

disciplinas.forEach(criarItemMenu)


    
const cardConteudo = [
    {titulo: 'Jett', imagem: 'jett.webp', texto: 'Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.'},
    {titulo: 'Raze', imagem: 'raze.png', texto: 'Raze chega do Brasil com uma explosão de carisma e armas enormes. Com seu estilo de jogo "porradeiro", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!'},
    {titulo: 'Gekko', imagem: 'gekko.webp', texto: 'Gekko, de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho.'},
    {titulo: 'Yoru', imagem: 'yoru.png', texto: 'Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.'},
]

function criarCard(cards) { 
    cards.forEach(card => { 
        const container = document.getElementById('container')
        const novocard = document.createElement('div')
        novocard.classList.add('card')

        const novoTitulo = document.createElement('h2')
        novoTitulo.textContent = card.titulo

        const novoParagrafo = document.createElement('p')
        novoParagrafo.textContent = card.texto

        const novoImagem = document.createElement('img')
        novoImagem.src = `./img/${card.imagem}`
        novoImagem.classList.add('img') 

        novocard.appendChild(novoImagem)
        novocard.appendChild(novoTitulo)
        novocard.appendChild(novoParagrafo)

        container.appendChild(novocard)
    })
}

criarCard(cardConteudo)