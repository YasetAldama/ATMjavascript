var usuarios = [
    {nombre: 'Liam', saldo: 15000, pass: 1234},
    {nombre: 'Aitana', saldo: 13000, pass: 2341},
    {nombre: 'Azul', saldo: 10000, pass: 3412},
];
var user = '';
var saldoInicial = '';

function validarUsuario() {
    if (document.getElementById("user").value.trim() == "") {
        alert("Ingresa tu usuario");
        return false;
    }

    if (document.getElementById('pass').value === '') {
        alert("Ingresa tu contraseña");
        return false;
    }

    const pass = document.getElementById('pass').value;
    console.log('pass', pass);

    const usuario = document.getElementById("user").value;
    console.log('usuario', usuario);
    var checkUsuario = usuarios.find((name) => name.nombre === usuario);
    
    user = checkUsuario;
   
    if (!checkUsuario || checkUsuario === undefined) {
        alert('El usuario no existe');
        salir();
        return false;
    }
    var checkPass = checkUsuario.pass === parseInt(pass);

    if(checkUsuario && checkPass) {
        console.log('checkUsuario', checkUsuario)
        document.getElementById('ingreso').classList.remove('show');
        document.getElementById('ingreso').classList.add('hide');
        document.getElementById('info').classList.remove('hide');
        document.getElementById('info').classList.add('show');

        document.getElementById("saldo").innerHTML = 'Saldo: $' + checkUsuario.saldo;
        document.getElementById("nombre").innerHTML = checkUsuario.nombre;

    } else if ( !checkPass ){
        alert('La clave es incorrecta');
        salir();
        console.log('contraseña incorrecta')
    } else if ( checkUsuario === undefined ){
        console.log('error usuario no encontrado')
        alert('El usuario no existe');
        salir();
    }

};

function retirar() {
    console.log('user', user)
    var saldoRetirar = document.getElementById('nuevoSaldo').value;
    console.log('saldoRetirar', saldoRetirar)
    saldoInicial = user.saldo ;
    console.log(saldoInicial)
    if(saldoRetirar > saldoInicial){
        alert('No hay fondos suficientes');
        return false;
    }
   var nuevoSaldo = saldoInicial - saldoRetirar;

    document.getElementById("saldo").innerHTML = 'Nuevo Saldo: $' + nuevoSaldo;
   document.getElementById('btns').classList.add('hide');
   document.getElementById('btns').classList.remove('show');
   console.log('nuevoSaldo', nuevoSaldo)
}

function ingresar() {
    console.log('user', user)
    var saldoIngreso = document.getElementById('nuevoSaldo').value;
   var saldoInicial = user.saldo;
   var nuevoSaldo = parseFloat(saldoInicial) + parseFloat(saldoIngreso);
    document.getElementById("saldo").innerHTML = 'Nuevo Saldo: $' + nuevoSaldo;

   document.getElementById('btns').classList.add('hide');
   document.getElementById('btns').classList.remove('show');


   console.log('nuevoSaldo', nuevoSaldo)
}
function salir() {
    document.getElementById('ingreso').classList.add('show');
    document.getElementById('ingreso').classList.remove('hide');
    document.getElementById('info').classList.add('hide');
    document.getElementById('info').classList.remove('show');
    document.getElementById("myForm").reset();
    document.getElementById('btns').classList.add('show');
    document.getElementById("nuevoSaldo").value = "Saldo: $0";
}