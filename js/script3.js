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
                img.setAttribute('width', '100px');
                img.setAttribute('height', '100px');
                img.setAttribute('style', 'border-radius: 50%');
                div.setAttribute('style', 'margin-top: 30px; margin-left: 30px;');

                div.appendChild(img);

            }else{
                txtNome = document.createTextNode('O usuário nao possui nome.');
                
                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '100px');
                img.setAttribute('height', '100px');
                img.setAttribute('style', 'border-radius: 50%');
                div.setAttribute('style', 'margin-top: 30px; margin-left: 30px;');

                div.appendChild(img);
            }

            //adiciona o conteúdo na div
            spanNome.appendChild(txtNome);
            spanNome.setAttribute('style', 'font-size: 24px; font-weight: bold; margin-left: 10px;');
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possível realizar a requisição');
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

        })

        

}