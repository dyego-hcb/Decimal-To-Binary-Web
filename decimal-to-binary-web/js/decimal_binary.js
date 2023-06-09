let decInput = document.getElementById("dec-inp");
let binInput = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

decInput.addEventListener("input", () =>{
    let decValue = parseInt(decInput.value);
    binInput.value = decValue.toString(2);
});

binInput.addEventListener("input", () => {
    let binValue = binInput.value();

    if(binValidor(binValue))
    {
        decInput.value = parseInt(binValue, 2);
        errorMsg.textContent = "";
    }
    else
    {
        errorMsg.textContent = "Please Enter An Valid Binary Input"
    }
});

function binValidor(num)
{
    for(let i=0; i<num.length; i++)
    {
        if(num[i] != "0" && num[i] != 1)
        {
            return false;
        }
    }
    return true;
}