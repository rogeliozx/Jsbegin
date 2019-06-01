$(document).ready(function(){


   

    $.get("https://reqres.in/api/users",{page:3},function(response){
 response.data.forEach((element,index) => {
     $('#datos').append(`<p>${element.first_name} ${element.last_name} </p>`)
 });
   
    });
   

    $('#formulario').submit(function(e){
        e.preventDefault();
        var usuario={
            name:$('input[name="name"]').val(),
            Descripcion:$('input[name="apellido"]').val()
        }
        
        /*$.post($(this).attr('action'),usuario,(resp)=>{
    console.log(resp);
        }).done(()=>console.log("Terminado"));*/
        $.ajax({
            type:'POST',
            url:$(this).attr('action'),
            data:usuario,
            beforeSend:console.log('se envio usuario'),
            success:responde=>console.log(responde),
            error:()=>console.log('ocurrio un erro'),
            timeout:1000
        })
        return false;
    })
});
