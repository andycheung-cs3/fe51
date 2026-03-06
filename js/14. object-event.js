// window.onload = function() {
//     this.alert("Hi, Kevin");
// }
//a. add event listener with callback function
// const logo = document.querySelector("img");
// const logo = document.querySelector(".logo");
const logo = document.querySelector("header");
logo.addEventListener("click",(e) => {
    console.log(e);
    console.log(e.currentTarget);
});
//b. rewrite to callback function
function onClick(e) {
    //return element that trigger the event, in this case is img
    console.log(e.target);
    //element that event is attached to, in this case is img
    console.log(e.currentTarget);
    e.target.style.backgroundColor = "red";
    //from page position
    console.log(e.clientX);
    console.log(e.clientY);
    //from element position
    console.log(e.offsetX);
    console.log(e.offsetY);
}
logo.addEventListener("click", onClick);
document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("link is clicked");
});
function onDrag(e) {
    document.querySelector("h1").textContent = `x:${e.clientX},y: ${e.clientY}`;
}
logo.addEventListener("drag",onDrag);