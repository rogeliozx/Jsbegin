$(document).ready(()=>{
//mover elementos
    $('.elemento').draggable();
//Rendimensionar
$(".elemento").resizable();

//Seleccionar elementos
//$('.lista').selectable();
//acomodar como quieras
$('.lista').sortable({
    update:(event,ui)=>{console.log("cambio la lista");
    }
});
//drop para soltar en un elemento
$('#movido').draggable();
$('#area').droppable({
    drop:(e,ui)=>{
       let prueba= ui.helper
       console.log(prueba);
      
      let pieza=prueba[0].cloneNode(true);
        prueba.remove(prueba.id)
      $('#area').append(pieza);
     
    }
});

$('#mostrar').click(()=>{
    $('#caja').toggle("blind");
})
//tooltip
$(document).tooltip();
$("#pop").dialog();
})
