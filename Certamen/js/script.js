$(document).ready(function(){
 
    $('#errores').hide();
    
    // le agregamos que cuando haga click  sobre submit
    $('#formulario').submit(function(){
        var nombre= $("#nom").val();
        var apellido= $("#ape").val();
        var correo= $("#correo").val();
        var contraseña=$("#pass").val();
        var mensaje ='';
        if(nombre=='') mensaje += '<h6>Debe ingresar nombre</h6>';
        if(apellido=='') mensaje += '<h6>Debe ingresar apellido</h6>';
        if(correo=='') mensaje += '<h6>Debe ingresar email</h6>';
        if(contraseña=='') mensaje += '<h6>Debe ingresar una contraseña</h6>';
         if(mensaje !=''){
            $('#errores').html(mensaje);
            $('#errores').show();

            event.preventDefault();
         }
    })
    //capturar la informacion
   

   
});
    


