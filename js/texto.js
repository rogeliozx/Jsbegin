$(document).ready(()=>{

    Agregar();
    $('#add_button').click(function(){
  $('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');
  Agregar();   
});

$('#add_button').removeAttr("disabled")
})
function Agregar(){
    $('a').each(function(index){
        let that=$(this);
        let enlace=that.attr("href");
        
        that.attr('target','_blank');
        that.text(enlace);
    });
}