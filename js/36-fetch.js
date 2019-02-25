'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest 

var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');
var div_profesor=document.querySelector('#profesor');

getUsuarios()
.then(data=>data.json())
.then(users=>{

    listadousuarios(users.data);
    
    
    return getInfo();

}).then(data=>{
   div_profesor.innerHTML=data;
    return getJanet();
})
.then(data=>data.json())
.then(user=>{
mostrarJanet(user.data);

}).catch(error=>{
    console.log(error+"pues valio verga :v");
});


function getUsuarios() {
   
 return   fetch('https://reqres.in/api/users');
}
function getJanet() {

  return  fetch('https://reqres.in/api/users/2');
}
function getInfo(){
  
        var profesor={
            nombre:'Rogelio',
            Apellido:'Romero',
            url:'https://scontent.fhmo1-1.fna.fbcdn.net/v/t1.0-9/35164774_2030642430301369_2638841925435654144_n.jpg?_nc_cat=109&_nc_ht=scontent.fhmo1-1.fna&oh=8eca6a15247bd2ade0a020deee232308&oe=5CCE8271'
        };
        return new Promise((resolve, reject)=>{
            var profesor_string= '';
            setTimeout(()=>{ 
                profesor_string=JSON.stringify(profesor);
                 if(typeof profesor_string !='string' || profesor_string =='') return reject('error valio verga ;c'); 
                return resolve(profesor_string);
                },3000);
       
       
      
       

        
    });
 
 
}

function listadousuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        let avatar=document.createElement('img');
        nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
       
        avatar.src=user.avatar;
        avatar.width='100';
        div_usuarios.appendChild(nombre);
        div_usuarios.appendChild(avatar);
        document.querySelector('.loading').style.display = 'none';

    });
}
function mostrarJanet(user) {
  
        let nombre = document.createElement('h4');
        let avatar=document.createElement('img');
        avatar.src=user.avatar;
        avatar.width='100';
        nombre.innerHTML =user.first_name + " " + user.last_name;
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector('#janet .loading').style.display = 'none';

   
}

