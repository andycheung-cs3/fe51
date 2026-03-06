// window.onload = function() {
//     this.alert("Hi, Tracy");
// }

function createNewItem(item) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    
    // const button = document.createElement("button");
    // button.className = "remove-item btn-link text-red";
    //const button = createButton("remove-item btn-link text-red");
    const button = createItem("remove-item btn-link text-red", "button");

    // const icon = document.createElement("i");
    // icon.className = "fa-solid fa-xmark";
    //const icon = createIcon("fa-solid fa-xmark");
    const icon = createItem("fa-solid fa-xmark", "i");

    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector(".items").appendChild(li);
}
createNewItem("bread");
createNewItem("coke");
createNewItem("milk");
// function createIcon(classes) {
//     const icon = document.createElement("i");
//     icon.className = classes;
//     return icon;
// }
// function createButton(classes) {
//     const button = document.createElement("button");
//     button.className = classes;
//     return button;
// }
function createItem(classes, element) {
    const item = document.createElement(element);
    item.className = classes;
    return item;
}