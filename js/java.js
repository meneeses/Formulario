var Nome = [];
var Edit = [];
var Issn = [];
var Autor = [];
var Ano = [];


function gravarDados() {

    alert("Dados Gravados com Sucesso!");

    Nome = JSON.parse(localStorage.getItem("aNome"));
    let livronome = document.getElementById("livronome").value;
    Nome.push(livronome);
    document.getElementById("livronome").value = "";
    localStorage.aNome = JSON.stringify(Nome);

    Edit = JSON.parse(localStorage.getItem("aEdit"));
    let livroedit = document.getElementById("livroedit").value;
    Edit.push(livroedit);
    document.getElementById("livroedit").value = "";
    localStorage.aEdit = JSON.stringify(Edit);

    Issn = JSON.parse(localStorage.getItem("aIssn"));
    let livroissn = document.getElementById("livroissn").value;
    Issn.push(livroissn);
    document.getElementById("livroissn").value = "";
    localStorage.aIssn = JSON.stringify(Issn);

    Autor = JSON.parse(localStorage.getItem("aAutor"));
    let livroautor = document.getElementById("livroautor").value;
    Autor.push(livroautor);
    document.getElementById("livroautor").value = "";
    localStorage.aAutor = JSON.stringify(Autor);

    Ano = JSON.parse(localStorage.getItem("aAno"));
    let livroano = document.getElementById("livroano").value;
    Ano.push(livroano);
    document.getElementById("livroano").value = "";
    localStorage.aAno = JSON.stringify(Ano);
}

function verDados() {

    let Mostrar1 = document.getElementById("nometab");
    Mostrar1.innerHTML = "";
    if (localStorage.aNome) {
        Nome = JSON.parse(localStorage.getItem("aNome"));
    }
    for (var i in Nome) {
        let p = document.createElement("p");
        p.innerHTML = Nome[i];
        Mostrar1.append(p);
    }
    
    let Mostrar2 = document.getElementById("edittab");
    Mostrar2.innerHTML = "";
    if (localStorage.aEdit) {
        Edit = JSON.parse(localStorage.getItem("aEdit"));
    }
    for (var i in Edit) {
        let p = document.createElement("p");
        p.innerHTML = Edit[i];
        Mostrar2.append(p);
    }

    let Mostrar3 = document.getElementById("issntab");
    Mostrar3.innerHTML = "";
    if (localStorage.aIssn) {
        Issn = JSON.parse(localStorage.getItem("aIssn"));
    }
    for (var i in Issn) {
        let p = document.createElement("p");
        p.innerHTML = Issn[i];
        Mostrar3.append(p);
    }

    let Mostrar4 = document.getElementById("autortab");
    Mostrar4.innerHTML = "";
    if (localStorage.aAutor) {
        Autor = JSON.parse(localStorage.getItem("aAutor"));
    }
    for (var i in Autor) {
        let p = document.createElement("p");
        p.innerHTML = Autor[i];
        Mostrar4.append(p);
    }

    let Mostrar5 = document.getElementById("anotab");
    Mostrar5.innerHTML = "";
    if (localStorage.aAno) {
        Ano = JSON.parse(localStorage.getItem("aAno"));
    }
    for (var i in Ano) {
        let p = document.createElement("p");
        p.innerHTML = Ano[i];
        Mostrar5.append(p);
    }
}

function excluirDados() {
    var Nome = [];
    var Edit = [];
    var Issn = [];
    var Autor = [];
    var Ano = [];
    localStorage.aNome = JSON.stringify(Nome);
    localStorage.aEdit = JSON.stringify(Edit);
    localStorage.aIssn = JSON.stringify(Issn);
    localStorage.aAutor = JSON.stringify(Autor);
    localStorage.aAno = JSON.stringify(Ano);
}


