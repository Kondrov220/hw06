import {name} from "./name.js"
export const listener = () => {
    document.querySelector("button").addEventListener("click", ()=>{
        name(prompt("Як вас звати?"));
    });
}
