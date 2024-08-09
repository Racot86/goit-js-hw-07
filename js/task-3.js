let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (e) => {
    let input = e.target.value.trim();
    if (input.length > 0) {
        nameOutput.innerText = input;
    } else {
        nameOutput.innerText = "Anonymous";
    }

})