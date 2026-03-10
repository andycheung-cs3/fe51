// window.onload = function() {
//     this.alert("Hi, Amy");
// }
const App = () => {
    // return React.createElement("div", null,"Hello World");
    // return React.createElement("h1", null,"Hello World");
    // return React.createElement("div", { style : {color:"red"}},"Hello World");
    return React.createElement("div", { style : {color:"red"}},[
        // React.createElement("h1",null,"Hello World"),
        // React.createElement("h2",null,"Class Frontend"),
        // React.createElement("h3",null,"FE-5"),
        // H1("Hello World"),
        // H1("Class Frontend"),
        // H1("FE-5"),
        //  H1(1),
        // H1(2),
        // H1(3),
        H1({name:"Andy",age:18,gender:"male"}),
        H1({name:"Gavin",age:19,gender:"male"}),
        H1({name:"Mary",age:20,gender:"female"}),
    ]);
};
const H1 = ({name,age,gender}) => {
    age = age +1;//function part
    //jsx part => html
    // return React.createElement("h1",null,para);
    return [React.createElement("p",null,name),React.createElement("p",null,gender),React.createElement("p",null,age),];
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));