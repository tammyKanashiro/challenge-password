function showPass(){
    passInfo.revealedState();
}

function showStrength(){
    passInfo.setPass(document.getElementById('password'));
    passInfo.stateUpdate();
}

class Login{
    constructor(password){
        this.password;
    }

    setPass(pass){
        this.password = pass;
    }

    stateUpdate(){
        let msg = document.getElementById("msg");
        let strength = document.getElementById("strength");
        const smile = document.getElementById("smile");
        const neutral = document.getElementById("neutral");
        const sad = document.getElementById("sad");
    
        if(password.value.length == 0){
            msg.innerText = "Original State";
            strength.innerText = "";
            smile.style.display = "none";
            neutral.style.display = "none";
            sad.style.display = "none";
        }else if(password.value.length <= 3){
            msg.innerText = "Strength State: ";
            strength.innerText = "BAD";
            strength.style.color = "red";
            smile.style.display = "none";
            neutral.style.display = "none";
            sad.style.display = "block";
        }else if( password.value.length > 3 && password.value.length <= 6){
            msg.innerText = "Strength State: ";
            strength.innerText = "MEDIUM";
            strength.style.color = "olive";
            smile.style.display = "none";
            neutral.style.display = "block";
            sad.style.display = "none";
        }else if(password.value.length > 6){
            msg.innerText = "Strength State: ";
            strength.innerText = "GOOD";
            strength.style.color = "green";
            smile.style.display = "block";
            neutral.style.display = "none";
            sad.style.display = "none";
        }
    }

    revealedState(){
        let show = document.getElementById("show");
        let hide = document.getElementById("hide");

        if(password.type === 'password'){
            password.type = "text";
            show.style.display = "none";
            hide.style.display = "block";
        }else{
            password.type = "password";
            show.style.display = "block";
            hide.style.display = "none";
        }
    }
}

let passInfo = new Login(document.getElementById('password'));