var cervejas = [];
function Salvar()
{
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("nome").value;
    let tipo = document.getElementById("tipo").value;
    let cerv = {"id":id,"nome":nome,"tipo":tipo};
    if (cervejas.findIndex(cer => cer.id == id) != -1)
    {
        alert("Editado com sucesso!");
        cervejas[cervejas.findIndex(cer => cer.id == id)] = cerv;  
        Listar();
    }else
    {
        confirm("Salvo com sucesso!");
        cervejas.push(cerv);
        localStorage.setItem("cervejas",JSON.stringify(cervejas)); 
    };
}
function Listar()
{
    let tabela = document.getElementById("cervejas");
    console.log(tabela);
    let corpo = tabela.getElementsByTagName("tbody")[0];
    corpo.innerHTML = "";
    cervejas.forEach(b => {
        corpo.innerHTML += `<tr><td>${b["id"]}</td><td>${b["nome"]}</td><td>${b["tipo"]}</td><td class="opcoes"><label for="editar" class="editarLabel" onclick=editar(${b["id"]})>Editar</label><label for="excluir" class="excluirLabel" onclick=excluirItemSelecionado(${b["id"]})>Excluir</label></td> </tr>`;
    });
}

function excluirItemSelecionado(id)
{
    let item = cervejas.findIndex(x => x.id == id);
    let nom = cervejas[item];
    console.log(nom);
    var resultado = confirm("Deseja excluir a Banda?");
    if (resultado == true) {
    alert(`O item  ${nom.nome}  será excluído da lista!`);    
    cervejas.splice(cervejas.findIndex(x => x.id == id),1);
    localStorage.setItem("bandas", JSON.stringify(cervejas));
    Listar();
           
        }
        else{}
}
function editar(id)
{
    let item = cervejas.findIndex(x => x.id == id);
    let nom = cervejas[item];
    console.log(nom);
    request.open('GET','crud_cerveja.html');
    request.onload = function () 
    {
        let conteudoResponse = this.responseText;
        let elemento = document.getElementById('listagem');
        elemento.innerHTML = conteudoResponse;
        console.log(nom)
        document.getElementById("id").value = nom.id;
        document.getElementById("nome").value = nom.nome;
        document.getElementById("tipo").value = nom.tipo;
    }
    request.send();
}

window.onload = function()
{
    let cervejasJson = localStorage.getItem("cervejas");
    if (cervejasJson != null)
    {
        cervejas = JSON.parse(cervejasJson);
    }
    
}