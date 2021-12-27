/*  Roles
1. Administrador
2. Usuario 
*/

function ObtenerListaUsuarios()
{
    var ListadoUsuarios = JSON.parse(localStorage.getItem('ListadoUsuariosLs'));

    if (ListadoUsuarios == null){
        ListadoUsuarios = 

        // *? datos del administrador y del usuario
        [   ['1','abraham','vargas','av14-0199@unphu.edu.do','12345','1'],
            ['2','jose','marte','jm14-0099@unphu.edu.do','3456','2'] 
        ]

    }
    return ListadoUsuarios;
}

function ValidarCredenciales(Pcorreo , Pcontrasena)
{
    var ListadoUsuarios = ObtenerListaUsuarios();
    var bAcceso = false;

    for (var i = 0; i < ListadoUsuarios.length; i++){
        if(Pcorreo == ListadoUsuarios[i][3] && Pcontrasena == ListadoUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('UsuarioActivo', ListadoUsuarios[i][1] + ' ' + ListadoUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', ListadoUsuarios[i][5]);

        }
    }
        return bAcceso;
}