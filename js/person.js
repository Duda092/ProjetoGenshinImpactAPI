document.addEventListener('DOMContentLoaded', ()=>{
    const urlParam = new URLSearchParams(window.location.search)
    const paramIndex = urlParam.get('index')

    
    const url = `https://gsi.fly.dev/characters/${parseInt(paramIndex)+1}`
    
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error ('Error de rede codigo'+response)
        }
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    
        personagemInfos(data)})
    
    .catch((err)=>console.log(err))

    function personagemInfos(item){
        const personagemImg = document.querySelector('.personagem-img')
        const nome = document.querySelector('.nome')
        const raridade = document.querySelector('.raridade')
        const titulo = document.querySelector('.titulo')
        const arma = document.querySelector('.arma')
        const visao = document.querySelector('.visao')
        const aniversario = document.querySelector('.aniversario')

        personagemImg.src = `../img/person1/img-${paramIndex}.jpg`

        nome.innerHTML = `${item.result.name}`
        raridade.innerHTML = `Raridade: ${item.result.rarity}`
        titulo.innerHTML = `Título: ${item.result.title}`
        arma.innerHTML = `Arma: ${item.result.weapon}`
        visao.innerHTML = `Visão: ${item.result.vision}`
        aniversario.innerHTML = `Aniversário: ${item.result.birthday}`
        
    }
    

})

