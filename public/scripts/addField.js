// Procurar o botão
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener('click', cloneField)

// executar ação
function cloneField() {

    // Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //node = elementos HTML

    //pegar os campos: que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    console.log(fields[0].value = "") // limpa o valor

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa 
        fields.value = ""
    })

    //colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
