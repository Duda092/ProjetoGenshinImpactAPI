const data = [
    {
      "id": 1,
      "usuario": "Duda",
      "senha": "123456"
    },
    {
      "id": 2,
      "usuario": "Raquel",
      "senha": "654321"
    },
    {
      "id": 3,
      "usuario": "Deyse",
      "senha": "123654"
    }
  ]
  

const btn = document.getElementById('btn-login')
btn.addEventListener('click', (event)=>{
    event.preventDefault()

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    const login = data.find((obj)=>obj.usuario === user && obj.senha === password)

    if(login) { 
        window.location.href = `../index.html`
    }
    else {
        alert('Usuário não encontrado')
    }

})