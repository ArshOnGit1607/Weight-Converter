const container = document.getElementById('container')
const input = document.getElementById("weight")
const btn = document.getElementById("btn")
const ans=document.getElementById("ans1")

btn.addEventListener('click', () => {
    const InputValue = input.value;
    let convertedValue=(InputValue*0.453592);
    // window.alert(convertedValue.toFixed(2)+"Kg")
    ans.innerText+=` ${convertedValue.toFixed(2)}Kg`
    

    // Output.style.display="inline-block"
    // Outp

})

