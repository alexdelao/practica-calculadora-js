document.querySelector('.uno').addEventListener('click', function() {
    document.querySelector('#resultado').value += 1;
});
document.querySelector('.dos').addEventListener('click', function() {
    document.querySelector('#resultado').value += 2;
});
document.querySelector('.tres').addEventListener('click', function() {
    document.querySelector('#resultado').value += 3;
});
document.querySelector('.cuatro').addEventListener('click', function() {
    document.querySelector('#resultado').value += 4;
});
document.querySelector('.cinco').addEventListener('click', function() {
    document.querySelector('#resultado').value += 5;
});
document.querySelector('.seis').addEventListener('click', function() {
    document.querySelector('#resultado').value += 6;
});
document.querySelector('.siete').addEventListener('click', function() {
    document.querySelector('#resultado').value += 7;
});
document.querySelector('.ocho').addEventListener('click', function() {
    document.querySelector('#resultado').value += 8;
});
document.querySelector('.nueve').addEventListener('click', function() {
    document.querySelector('#resultado').value += 9;
});
document.querySelector('.cero').addEventListener('click', function() {
    if (document.querySelector('#resultado').value == 0 && document.querySelector('#resultado').value.length == 1) {
        document.querySelector('#resultado').value = 0;
    } else {
        document.querySelector('#resultado').value += 0;
    }
});
document.querySelector('.suma').addEventListener('click', function() {
    let exp = document.querySelector('#resultado').value;
    if (exp.slice(-1) != '+' && exp.slice(-1) != '*' && exp.slice(-1) != '-' && exp.slice(-1) != '/') {
        document.querySelector('#resultado').value += '+';
    }

});
document.querySelector('.resta').addEventListener('click', function() {
    let exp = document.querySelector('#resultado').value;
    if (exp.slice(-1) != '+' && exp.slice(-1) != '*' && exp.slice(-1) != '-' && exp.slice(-1) != '/') {
        document.querySelector('#resultado').value += '-';
    }

});
document.querySelector('.multi').addEventListener('click', function() {
    let exp = document.querySelector('#resultado').value;
    if (exp.slice(-1) != '+' && exp.slice(-1) != '*' && exp.slice(-1) != '-' && exp.slice(-1) != '/') {
        document.querySelector('#resultado').value += '*';
    }

});
document.querySelector('.divi').addEventListener('click', function() {
    let exp = document.querySelector('#resultado').value;
    if (exp.slice(-1) != '+' && exp.slice(-1) != '*' && exp.slice(-1) != '-' && exp.slice(-1) != '/') {
        document.querySelector('#resultado').value += '/';
    }

});
document.querySelector('.borrar').addEventListener('click', function() {
    document.querySelector('#resultado').value = '';
});
document.querySelector('.retro').addEventListener('click', function() {
    let exp = document.querySelector('#resultado').value;
    document.querySelector('#resultado').value = exp.substring(0, exp.length - 1);
});
document.querySelector('.igual').addEventListener('click', function() {
    let op = document.querySelector('#resultado').value;
    if (op) {
        document.querySelector('#resultado').value = eval(op);
    }
});