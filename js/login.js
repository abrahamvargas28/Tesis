
//document.querySelector('#btn-boton').addEventListener('click', iniciarSesion);

function iniciarSesion()
{
    var Correo = '';
    var Contrasena= '';
    var bAcceso = false;

    Correo = document.getElementById('txtcorreo').value;
    Contrasena = document.getElementById('txtpass').value;

    bAcceso = ValidarCredenciales(Correo,Contrasena);
    
    if (bAcceso == true){
        ingresar();
    }
    else if (bAcceso != true){
        alert(" Estos datos no son correctos ");
    }
    else{
        alert(" Ingrese los datos correspondientes");
    }
    
}

function ingresar()
{
    var rol = sessionStorage.getItem('rolUsuarioActivo')
    switch (rol) 
    {
        case '1':
            window.location.href = 'administrador.html';
            break;

            case '2':
                window.location.href = 'Usuario.html';
                break;
        default:
            break;
    }
}