function showPass(){
    passInfo.revealedState();
}

function showStrength(){
    passInfo.password = document.getElementById('password');
    passInfo.stateUpdate();
}

class Login{
    constructor(password){
        this.password;
    }

    password(pass){
        this.password = pass;
    }

    stateUpdate(){
        let msg = "";
        let strengthInfo = "";
        let strengthColor = "";
        let smile = "none";
        let neutral = "none";
        let sad = "none";
    
        if(password.value.length == 0){
            msg = "Original State";
            sad = "none";
        }else if(password.value.length <= 3){
            msg = "Strength State: ";
            strengthInfo = "BAD";
            strengthColor = "red";
            sad = "block";
        }else if( password.value.length > 3 && password.value.length <= 6){
            msg = "Strength State: ";
            strengthInfo = "MEDIUM";
            strengthColor = "olive";
            neutral = "block";
        }else if(password.value.length > 6){
            msg = "Strength State: ";
            strengthInfo = "GOOD";
            strengthColor = "green";
            smile = "block";
        }

        document.getElementById("msg").innerText = msg;
        document.getElementById("strength").innerText = strengthInfo;
        document.getElementById("strength").color = strengthColor;
        document.getElementById("smile").style.display = smile;
        document.getElementById("neutral").style.display = neutral;
        document.getElementById("sad").style.display = sad;
    }

    revealedState(){
        let passType = "text";
        let show = "none";
        let hide = "none";

        if(this.password.type === 'password'){
            hide = "block";
        }else{
            passType = "password";
            show = "block";
        }

        document.getElementById("show").style.display = show;
        document.getElementById("hide").style.display = hide;
        this.password.type = passType;
    }
}

let passInfo = new Login(document.getElementById('password'));