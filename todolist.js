var inputField = document.getElementById('inputField');
var addButton = document.getElementById('addButton');
var container = document.getElementById('container');
addButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    container.appendChild(paragraph);
    inputField.value = '';
    console.log(paragraph);
    paragraph.addEventListener('click', function ()
    {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        container.removeChild(paragraph);
    })
}
)
