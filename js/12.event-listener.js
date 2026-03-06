// window.onload = function() {
//     this.alert("Hi, Jacky");
// }
const clearBtn = document.querySelector("#clear");
function onClear() {
    const itemList = document.querySelector("ul");
    const items = itemList.querySelectorAll("li");
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}
//clearBtn.addEventListener("click", onClear);
//classic way to add function to the button
clearBtn.onclick = () => alert("Clear items");
//clearBtn.onclick = onClear;
clearBtn.onclick = () => console.log("Clear Items1");
//use evenListener to attach a function to button
clearBtn.addEventListener("click", () => console.log("Clear items2"));
clearBtn.addEventListener("click",onClear);
setTimeout(() => clearBtn.removeEventListener("click",onClear),5000);
setTimeout(() => clearBtn.click(),5000);