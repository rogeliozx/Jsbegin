$(document).ready(()=>{
 
//Selector de ID
var rojo= $("#rojo").css("background","red")
.css("color","white")
;
var amarillo= $("#amarillo").css("background","yellow")
.css("color","white");
var verde= $("#verde").css("background","green")
.css("color","white");
//selectores de clases
var miclase= $(".zebra").css("padding","10px");

$(".brdclick").click(function(){
    console.log("hiciste click :v");
$(this).addClass('zebra');
});
//selectores de etiquetas
var parrafos=$("p").css("cursor","pointer");
 
parrafos.click(function(){
    var esta=$(this);
    if(!esta.hasClass('grande')){
        esta.addClass('grande');
    }else{
        esta.removeClass('grande');
    }
   
});
//Selectores de atributo
$('[title="Google"]').css("background",'#ccc');

$('[title="Facebook"]').css("background",'blue');
$('[title="Youtube"]').css("background",'red');

//otros
$('p,a').addClass('margen');

var busqueda= $("#caja").find('.resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
console.log(busqueda);
});