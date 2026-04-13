function validarPassword(password)
{
    let caracteresPassword = password.length;
    let cantNumerosEnPassword=0;
    let cantMayusculasEnPassword=0;
    for(let i =0 ; i<password.length; i++)
    {
        if (password[i] >= 0){
        cantNumerosEnPassword++;
        } 
         else if(password[i] === password[i].toUpperCase()){
            cantMayusculasEnPassword++;
        }
    }
    console.log(caracteresPassword, cantNumerosEnPassword, cantMayusculasEnPassword); //para testear

    if(caracteresPassword > 8 && cantNumerosEnPassword > 1 && cantMayusculasEnPassword >1){
        console.log("Password valida");
    }

    else{
        console.log("Password invalida");
    }



}

validarPassword("URITOSUPREMO17");
