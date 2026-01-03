// Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){

    //limpar a div
    div.innerHTML = '';

    //criar o span
    let spanNome = document.createElement('span');

    //criando a variável nome
    let txtNome = '';

    //recupera o valor do input
    let github_user = document.querySelector('input[name=github_user]');
    let user = github_user.value;

    github_user.value = '';

    axios.get(`https://api.github.com/users/${user}`)
        .then(function(response){

            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '500px');
                img.setAttribute('height', '500px');

                div.appendChild(img);

            }else{
                txtNome = document.createTextNode('O usuário nao possui nome.')
            }

            //adiciona o conteúdo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possível realizar a requisição');
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

        })

        

}