//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        if (e.target.value.match(/[0-9]/)) {
            if (index < codes.length - 1) {
                codes[index + 1].focus();
            }
        } else {
            e.target.value = "";
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && index > 0 && !e.target.value) {
            codes[index - 1].focus();
        }
    });
});
