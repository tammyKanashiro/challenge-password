function showPass(){
    let pass = document.getElementById("password");
    let show = document.getElementById("show");
    let hide = document.getElementById("hide");

    if(pass.type === 'password'){
        pass.type = "text";
        show.style.display = "none";
        hide.style.display = "block";
    }else{
        pass.type = "password";
        show.style.display = "block";
        hide.style.display = "none";
    }
}

function showStrength(t){
    let pass = document.getElementById('password').value.length;
    let strength = document.getElementById("strength");
    const smile = document.getElementById("smile");
    const neutral = document.getElementById("neutral");
    const sad = document.getElementById("sad");
   
    console.log("Quantidade: " + pass);
    
    if(pass == 0){
        strength.innerText = "";
        smile.style.display = "none";
        neutral.style.display = "none";
        sad.style.display = "none";
    }else if(pass <= 3){
        strength.innerText = "BAD";
        strength.style.color = "red";
        smile.style.display = "none";
        neutral.style.display = "none";
        sad.style.display = "block";
    }else if( pass > 3 && pass <= 6){
        strength.innerText = "MEDIUM";
        strength.style.color = "olive";
        smile.style.display = "none";
        neutral.style.display = "block";
        sad.style.display = "none";
    }else if(pass > 6){
        strength.innerText = "GOOD";
        strength.style.color = "green";
        smile.style.display = "block";
        neutral.style.display = "none";
        sad.style.display = "none";
    }
}