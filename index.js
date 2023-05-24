// INPUT - OUTPUT
let input = document.getElementById("length");
let output = document.getElementById("output");
// CHECKBOX
let symbols = document.getElementById("symbols");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");

// STRING RESULT AND N
let s = "";
let result = "";
let n = 0;

// EVENT LISTNER ON RANGE
output.textContent = input.value;
n = input.value;

input.addEventListener("input", (e) => {
    output.textContent = e.target.value;
    n = e.target.value;

    res = "";
})

// EVENT LISTNER ON CHECKBOXES
numbers.addEventListener("change", (e) => {
    if (e.target.checked) {
        s = s + "0123456789";
    }
    else {
        s = s.replace("0123456789", "");
    }
});
uppercase.addEventListener("change", (e) => {
    if (e.target.checked) {
        s = s + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else {
        s = s.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
    }
});
lowercase.addEventListener("change", (e) => {
    if (e.target.checked) {
        s = s + "abcdefghijklmnopqrstuvwxyz";
    }
    else {
        s = s.replace("abcdefghijklmnopqrstuvwxyz", "");
    }
});
symbols.addEventListener("change", (e) => {
    if (e.target.checked) {
        s = s + "!@#$%";
    }
    else {
        s = s.replace("!@#$%", "");
    }
});


// ONCLICK FUNCTION ON BUTTON
function oneclick() {

    result = ""
    let errorf = false;

    for (let i = 0; i < n; i++) {

        if (s.length == 0) {
            errorf = true;
            break;
        } else {
            let randomN = Math.floor(Math.random() * s.length);
            result = result + s[randomN];
        }

    }
    if (errorf) {
        document.getElementById("result").innerText = "CHECK ATLEAST ONE CHECKBOX";
    } else {
        document.getElementById("result").innerText = result;
    }

}

//ON REFRESH
window.onbeforeunload = function () {
    document.getElementById("form").reset();
};
