const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
    //console.log(this.status);
    //console.log(this.statusText);
    //console.log(this.responseText);
    const dados_contatos = JSON.parse(this.responseText);
    listacontatos("contatos",dados_contatos);
    //console.log(JSON.stringify(dados_contatos));
}
xmlhttp.open("GET", "contatos.json", true);
xmlhttp.send();
