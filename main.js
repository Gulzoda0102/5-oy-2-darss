    let stringInput = prompt("Matn (string) kiriting:");
    let numberInput = prompt("Son (number) kiriting:");
    let booleanInput = confirm("Bu ma'lumot rostmi? OK = True, Cancel = False");

   
    let convertedString = String(stringInput); 
    let convertedNumber = Number(numberInput);
    let convertedBoolean = Boolean(booleanInput); 

    alert("Kiritilgan ma'lumotlar turlari:\n" +
        "String: " + convertedString + " (" + typeof convertedString + ")\n" +
        "Number: " + convertedNumber + " (" + typeof convertedNumber + ")\n" +
        "Boolean: " + convertedBoolean + " (" + typeof convertedBoolean + ")");