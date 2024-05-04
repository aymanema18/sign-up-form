document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector("button");
    let psw = document.querySelector("#user-psw");
    let psw2 = document.querySelector("#user-psw-2");
    let output = document.querySelector("output");
    btn.addEventListener('click', (event) => {
        if (psw.value.length < 8) {
            output.innerHTML = "* Minimum is eight characters.";
            output.style.color = "red";
            psw.style.border = "1px solid lightgray";
            psw2.style.border = "1px solid lightgray";
            event.preventDefault();

        } else if (psw.value !== psw2.value) {
            output.innerHTML = "* Passwords do not match";
            output.style.color = "red";
            psw.style.border = "1px solid red";
            psw2.style.border = "1px solid red";
            event.preventDefault();
        } else {
            output.innerHTML = "* Minimum is eight characters.";
          }
    });

    psw.addEventListener("input", () => {
        if (psw.value.length < 8) {
            output.innerHTML = "* Minimum is eight characters.";
            output.style.color = "rgb(60, 60, 60)";
            psw.style.border = "1px solid lightgray";
            psw2.style.border = "1px solid lightgray";

        }
    });

    psw2.addEventListener("input", () => {
        if (psw.value.length < 8) {
            output.innerHTML = "* Minimum is eight characters.";
            output.style.color = "rgb(60, 60, 60)";
            psw.style.border = "1px solid lightgray";
            psw2.style.border = "1px solid lightgray";

        }
    });
})