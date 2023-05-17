$(document).ready(function(){
 
  $('#errores').hide();
  
  // le agregamos que cuando haga click  sobre submit
  $('#miFormulario').submit(function(){
      var nombre= $('#Nombre').val();
       var correo= $('#email').val();
       var telefono= $('#phone').val();
       var asunto= $('#asu').val();
       var Mensajes= $('#msj').val();

      
      var mensaje ='';
      if(nombre=='') mensaje += '<h6>Debe ingresar nombre</h6>';
      if(correo=='') mensaje += '<h6>Debe ingresar correo</h6>';
      if(telefono=='') mensaje += '<h6>ingrese numero de contacto</h6>';
      if(asunto=='') mensaje += '<h6>ingresar Asunto</h6>';
      if(Mensajes=='') mensaje += '<h6>ingrese su mensaje</h6>';
       if(mensaje !=''){
          $('#errores').html(mensaje);
          $('#errores').show();

          event.preventDefault();
       }
  })
  //capturar la informacion
 

 
});