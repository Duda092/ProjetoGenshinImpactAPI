document.addEventListener('DOMContentLoaded', ()=>{
    const baseURL = `https://gsi.fly.dev/characters`
   
    fetch(baseURL)
    .then((reponse)=>{
         if(!reponse.ok){
            throw new Error('Erro de rede! Código:'+reponse.status)
         }
         return reponse.json()
    })
    .then((data)=>{
        renderizarPersonagens(data)
        // console.log(data.results[0].name) // quando to pesquisando uso o Array
})
    .catch((err)=>console.log(err))
}) 

function renderizarPersonagens(items){
    const container = document.getElementById('personagem-container');
    items.results.forEach((item,index)=>{
    const divPersonagens = document.createElement('div')
    divPersonagens.innerHTML = `
    <section class="personagens-box">
            <div class="box">
            <img class="img-box" src="./img/person/img-${index}.jpg">
            </div>
    </section>
        <section class="container">
              <h3 class="personagem-name">${item.name}<h3>
        </section>
    `;
    divPersonagens.addEventListener('click', ()=>{
        destalhesPersonagem(index)

    })
     divPersonagens.classList.add('personagem')
    container.appendChild(divPersonagens)
    })
    console.log(items)
}

function destalhesPersonagem(index){
    window.location.href = `./pages/person.html?index=${index}`
}
