function listacontatos(destino, objcontatos) {    
    let nrocontatos = objcontatos.contatos.length;
    resultado = "<ul>";
    for(i=0;i<nrocontatos;i++) {
        resultado += "<li>Nome: "+objcontatos.contatos[i].nome+" - Cidade: "+objcontatos.contatos[i].cidade+"</li>";
    }
    resultado += "</ul>";
    document.getElementById(destino).innerHTML = resultado;
}