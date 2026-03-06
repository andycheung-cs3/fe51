// window.onload = function() {
//     this.alert("Hi,Aaron");
// }
//select multiple elements and return a NodeList(array-like object)
//a. select by className
const listItems = document.querySelectorAll('.item');
console.log(listItems);
//listItems.style.color="red";//won't work because listItems is NodeList,not an element
//get all text content including children
console.log(listItems[0].innerText);
//get first element in the NodeList and change its color to red
listItems[0].style.color="brown";
listItems.forEach((item, index) => {
    item.style.color = "blue";
    if (index === 1) {
        item.remove();
    }
    if (index === 0) {
        //be careful:replace the html structure with text content
        item.innerText = 'orange123';
        item.innerHTML=`Apple777
                    <button class="remove-item btn-link text-red">
                        <i class="fa-solid fa-xmark"></i>
                    </button>`;
    }
});
//NodeList has internal forEach, HTMLCollection doesn't have forEach,but we can convert it to an array and use forEach
