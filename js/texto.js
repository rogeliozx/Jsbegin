$(document).ready(()=>{

    Agregar();
    $('#add_button').click(function(){
  $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
  Agregar();   
});


})
function Agregar(){
    $('a').each(function(index){
        let that=$(this);
        let enlace=that.attr("href");
        that.text(enlace);
    });
}