// window.onload = function() {
//     this.alert("Hi, Anson");
// }
function insertElement() {
    const filter = document.querySelector(".filter");

    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjacentElement123";
    filter.insertAdjacentElement("beforebegin",h1);
    
    
    const h1after = document.createElement("h1");
    h1after.textContent = "insertAdjacentElement321";

    const filter1 = document.querySelector(".filter");
    filter1.insertAdjacentElement("afterend",h1after);
}
insertElement();
function insertText() {
    const item = document.querySelector('li:first-child');
    item.insertAdjacentText("beforebegin", "before-begin");
    item.insertAdjacentText("afterbegin","after-begin");
}
insertText();
function insertHTML() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.insertAdjacentHTML("beforebegin","<h2><u>before-begin</u></h2>");
    clearBtn.insertAdjacentHTML("afterend","<h2>after-end</h2>");
}
insertHTML();
function insertBeforeItem() {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insert-Before";
    const thirdItem = document.querySelector("li:nth-child(3)");
    //from parent insert before selected item, involves parent and child
    ul.insertBefore(li,thirdItem);
}
insertBeforeItem();
function insertAfter(newEl,existingEl) {
    existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling);
}
function insertAfterItem() {
    //const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insert-After8888";
    const firstItem = document.querySelector("li:first-child");
    //ul.insertBefore(li,thirdItem);
    insertAfter(li,firstItem);
}
insertAfterItem();