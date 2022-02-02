const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

    button.addEventListener('click', function() {

        const li = document.createElement("li");
        const dButton = document.createElement("button");
        

        li.textContent = input.value;
        dButton.textContent = "❌";

        input.focus();
        input.value = '';

        dButton.onclick = function(x) {
            list.removeChild(li);
        }

        li.appendChild(dButton);
        list.appendChild(li);
       
    });