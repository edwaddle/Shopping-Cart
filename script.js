const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");
console.log("working");

function whenClicked(){
    let userInput = input.value;
    input.value = '';
    console.log(userInput);

    const li = document.createElement("li"); 
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.textContent = userInput;
    button.textContent = "delete";
    ul.append(li);

    button.onclick = () => {
        li.remove();
        span.remove();
        button.remove();
    }
}




btn.onclick = () => whenClicked();