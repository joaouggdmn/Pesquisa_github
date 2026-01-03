// AJAX (XMLHttpRequest) - Asynchronous JavaScript and XML

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function(){
    div.innerHTML = '';

    // Instanciando o objeto AJAX
    let ajax = new XMLHttpRequest();

    //abrir uma conexão
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    // Enviar a requisição
    ajax.send(null);

    ajax.onreadystatechange = function(){
        //criar elemento span
        let span = document.createElement('span');

        //criar variável nome
        let txtnome = '';

        if(ajax.readyState === 4){
            if(ajax.status === 200){

                // transformar os dados JSON para array
                usuario = JSON.parse(ajax.responseText);

                if(usuario['name'] !== null){
                    txtnome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', 'Foto de perfil do usuário');
                    img.setAttribute('width', '100px');
                    img.setAttribute('height', '100px');
                    img.setAttribute('style', 'border-radius: 50%; margin-top:20px; display: block; margin-left: auto; margin-right: auto;');

                    div.appendChild(img);
                }else{
                    txtnome = document.createTextNode(`Usuário nao encontrado ${input.value} `);
                }

                //adiciona o texto ao span e o span na div
                span.appendChild(txtnome);
                div.appendChild(span);

                //limpar o input
                input.value= '';
            }else{
                txtnome = document.createTextNode(`Nao encontrei o usuário ${input.value}`);
                //adiciona o texto ao span e o span na div
                span.appendChild(txtnome);
                div.appendChild(span);
            }
        }
    }
}