$(document).ready(()=>{
    let caja=$('#caja');
    $('#mostrar').hide();
         $("#mostrar").click(function(){
             $(this).hide();
             $('#ocultar').show();
             caja.fadeTo('fast',0.79);
         })
         $("#ocultar").click(function(){
            $(this).hide();
            $('#mostrar').show();
            caja.fadeTo('fast',0.29);
         })
         $('#Allforone').click(()=>{
            caja.toggle('normal');
         });
         $("#animar").click(()=>{
            caja.animate({marginLeft:'50vw',
            fontSize:'40px',
        height:'20vw',
        padding:'4vw'
    },'slow').animate({
        borderRadius:'900px',
        marginTop:'5vw'

    },'slow').animate({
        borderRadius:'0px',
        marginLeft:'0vw'

    },'slow').animate({
        borderRadius:'100px',
        marginTop:'0vw'

    },'slow').animate({marginLeft:'50vw',
    fontSize:'40px',
height:'20vw',
padding:'4vw'
},'slow')
         })
})