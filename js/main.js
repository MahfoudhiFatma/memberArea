//Check for submit all
let fn = false;
let ps = false;
let ml = false;
let pwd = false;
let pwdc = false;

//check full name input
let fullName = document.querySelector('#contactName');
let p1 = document.querySelector('#msg1');
fullName.onblur = function () {
    if ((fullName.value.length < 6) || (fullName.value.length > 20)) {
        p1.innerHTML = 'Votre nom doit contenir au min 6 caractères et au max 20';
    } else {
        p1.innerHTML = "";
        fn = true;
    }
    return fn;
}
fullName.onfocus = function () {
    p1.innerHTML = "";
    fn = true;
    return fn;
}

//check pseudo input
let pseudo = document.querySelector('#contactPsd');
let p2 = document.querySelector('#msg2')
pseudo.onblur = function () {
    let letters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/;
    if (pseudo.value.match(letters)) {
        p2.innerHTML = "";
        ps = true;
    } else {
        p2.innerHTML = 'Votre pseudo doit etre alphanumerique';
    }
    return ps;
}
pseudo.onfocus = function () {
    p2.innerHTML = "";
    ps = true;
    return ps;
}

//check email input
let email = document.querySelector('#contactEmail');
let p3 = document.querySelector('#msg3');
email.onblur = function () {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
        p3.innerHTML = "";
        ml = true;
    } else {
        p3.innerHTML = 'Votre email est invalid';
    }
    return ml;
}
email.onfocus = function () {
    p3.innerHTML = "";
    ml = true;
    return ml;
}

//check password input
let mp = document.querySelector('#contactPwd');
let p4 = document.querySelector('#msg4');
mp.onblur = function () {
    let letters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{7,}$/;
    if (mp.value.match(letters)) {
        p4.innerHTML = "";
        pwd = true;
    } else {
        p4.innerHTML = 'Votre mot de passe doit etre alphanumerique et avec au moins 7 caractères';
    }
    return pwd;
}
mp.onfocus = function () {
    p4.innerHTML = "";
    pwd = true;
    return pwd;
}

//check confirm password input
let mpc = document.querySelector('#contactPwdc');
let p5 = document.querySelector('#msg5');
mpc.onblur = function () {
    if (mpc.value === mp.value) {
        p5.innerHTML = "";
        pwdc = true;
    } else {
        p5.innerHTML = 'SVP confirmer votre mot de passe';
    }
    return pwdc;
}
mpc.onfocus = function () {
    p5.innerHTML = "";
    pwdc = true;
    return pwdc;
    //return true
}

function valid() {
    if (fn == false || ps == false || pwd == false || pwdc == false || ml == false || document.getElementById('exampleCheck1').checked == false) {
        alert("Please fill in all fields");
        return false;

    }
}


