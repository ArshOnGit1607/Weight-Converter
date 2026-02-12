const container = document.getElementById('container')
const input = document.getElementById("weight")
const btn = document.getElementById("btn")
const ans=document.getElementById("ans")
btn.addEventListener('click', () => {
    const InputValue = parseFloat(input.value);
    if (isNaN(InputValue)){
        return;
    }
    const convertedValue = InputValue * 0.453592;
    let output = document.getElementById('ans1');
    if (!output) {
        output = document.createElement('p');
        output.id = 'output';
        ans.appendChild(output);
    }
    output.textContent = `${convertedValue.toFixed(2)}Kg`;
})

