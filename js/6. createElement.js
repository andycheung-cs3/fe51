// window.onload = function() {
//     this.alert("Hi,Leon");
// }
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My element");
//a. create a text inside the div element
//div.innerText = "Hello World!";
//b. create a text 'node'
const text = document.createTextNode("Hello");
div.appendChild(text);
//document.querySelector("ul").appendChild(div);
//===============================================
//create a function to build an element group
function createListItem(item) {
    const li = document.createElement("li");
    li.innerHTML = `${item} <button class="remove-item btn-link text-red">
                        <i class="fa-solid fa-xmark"></i>
                    </button>`
                    document.querySelector(".items").appendChild(li);
}
createListItem("egg");
createListItem("milk");
createListItem("water");
function createNewItem(item) {
    const li = document.createElement("li");
    //insert text into li element
    li.appendChild(document.createTextNode(item));
    //build button element
    const button = document.createElement("button");
    //add css class to button element
    button.className = "remove-item btn-link text-red";
    //build icon element
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-xmark";
    //append icon into button element
    button.appendChild(icon);
    li.appendChild(button);
    //append li into ul element
    document.querySelector(".items").appendChild(li);
}
createNewItem("bread");
createNewItem("milk2");
createNewItem("water999");