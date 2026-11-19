let productID =1001;

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    //captura dos valores
    const name = document.getElementById('name'). value;
    const category = document.getElementById('category').value;
    const priceValue = parseFloat(document.getElementById('price').value);
    const qty = parseInt(document.getElementById('qty').value);

    //Formação: transforma o número em moeda brasileira R$
    const priceFormatted = priceValue.toLocaleString('pt-BR', {minimumFractionDigits: 2});

    //Logica de status:

    let statusLabel, statusClass;

    if(qty === 0){
        statusLabel = "Esgotado";
        statusClass = "esgotado";
    }else if (qty <= 5){
        statusLabel = "Baixo Estoque";
        statusClass = "baixo-estoque";
    }else{
        statusLabel = "Em Estoque";
        statusClass = "em-estoque";
    }

    // criação da linha: faz a linha da tabela

    const tableBody = document.querySelector('#productsTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td data-label="ID">#${productId++}</td>
    <td data-label="Produto"> <strong>${name}}</td>
    <td data-label="Categoria"> ${category}</td>
    <td data-label="Preço" class="price"> R$ ${priceFormatted}</td>
    <td data-label="Otd.">${qty}</td>
    <td data-label=Status"> <span class"status ${statusClass}"> ${statusLabel}</span></td>`;

    // Inserção: Adiciona a nova linha da tabela

    tableBody.appendChild(newRow);

    // Limpeza: Reseta os campos do formulário para o proximo cadastro
    this.reset();

});