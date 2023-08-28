const button = document.querySelector(".submit")

button.addEventListener("click", (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    if (bmi<18.5) {
        result.innerHTML = `${bmi} <br /> <span>Underweight</span>`
        const status = document.querySelector("span")
        status.style.color = "yellowgreen"
    } else if (bmi>=18.5 && bmi<=24.9) {
        result.innerHTML = `${bmi} <br /> <span>Normal</span>` 
        const status = document.querySelector("span")
        status.style.color = "green"
    }else if (bmi>=25 && bmi<=29.9) {
        result.innerHTML = `${bmi} <br /> <span>Overweight</span>` 
        const status = document.querySelector("span")
        status.style.color = "red"
    }else if (bmi>=30) {
        result.innerHTML = `${bmi} <br /> <span>Obesity</span>` 
        const status = document.querySelector("span")
        status.style.color = "red"
    }else{
        result.innerHTML = `${bmi} is Invalid`
    }

    // switch (bmi) {
    //     case bmi<18.5:
    //         result.innerHTML = `${bmi} <br /> Underweight` 
    //         break;
    //     case 18.5-24.9:
    //         result.innerHTML = `${bmi} <br /> Normal` 
    //         break;
    //     case bmi<25-29.9:
    //         result.innerHTML = `${bmi} <br /> Over Weight` 
    //         break;
    //     case bmi>30:
    //         result.innerHTML = `${bmi} <br /> Obesity` 
    //         break;
    
    //     default:
            
    //         break;
    // }
    // result.innerHTML = `${bmi}`

    
})