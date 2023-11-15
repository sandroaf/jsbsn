function listacontatos(destino, objcontatos, query = null) {
    let nrocontatos = objcontatos.contatos.length;
    resultado = "<table><tr><th>Nome</th><th>Cidade</th></tr>";
    for (i = 0; i < nrocontatos; i++) {
        //console.log(query);
        //console.log(objcontatos.contatos[i].nome.search(query));
        if (query != null) {
            if (objcontatos.contatos[i].nome.toUpperCase().search(query.toUpperCase()) >= 0 ||
                objcontatos.contatos[i].cidade.toUpperCase().search(query.toUpperCase()) >= 0) {
                resultado += "<tr><td>" + objcontatos.contatos[i].nome + "</td><td>" + objcontatos.contatos[i].cidade + "</td></tr>";
            }
        } else {
            resultado += "<tr><td>" + objcontatos.contatos[i].nome + "</td><td>" + objcontatos.contatos[i].cidade + "</td></tr>";
        }
    }
    resultado += "</table>";
    document.getElementById(destino).innerHTML = resultado;
}
