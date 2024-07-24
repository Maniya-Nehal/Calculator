let result = localStorage.getItem("result") || "";
display(result);
function calculateResult(result) {
    return eval(result);
}
function display() {
    document.querySelector('.screen').innerHTML = result;
}
function add(number) {
    result += number;
    localStorage.setItem("result", result)
    display(result);
}