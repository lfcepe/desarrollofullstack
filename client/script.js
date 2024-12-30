let buttom = document.getElementById("guardar");
buttom.addEventListener("click", guardarDatos)

async function guardarDatos(){
    buttom.addEventListener("click", ()=>{
        let nombre = document.getElementById("nombre").value;
        let artista = document.getElementById("artista").value;
        let url = document.getElementById("url").value;
        let body =JSON.stringify({nombre,artista,url_video:url});
        try{
            let response = await fetch('http://localhost:3000/canciones',{
                method:'POST',
                headers:{'Content-Type': 'application/json' },
                body : body,
            }); 
            if(response.status == 201){
                let cancion = await response.JSON();
                console.log(cancion);
            }
        } catch(error){
            console.error = (error);
        }
    })
};