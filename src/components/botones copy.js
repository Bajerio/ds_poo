import * as nombre from "./modal_paneles.js"

//****** ELEMENTOS BOTONES DEL index.html ******** */

const btn_aceptar = document.querySelector("#aceptar")
const btn_per = document.querySelector("#personalizar")
const btn_sexo = document.querySelector("#sexo_perso")
const btn_clase = document.querySelector("#clase_perso")
const btn_regalo = document.querySelector("#regalo_perso")
const btn_fisico = document.querySelector("#fisico_perso")
const btn_cara = document.querySelector("#cara_perso")
const btn_pelo = document.querySelector("#pelo_perso")
const btn_pelo_ojos = document.querySelector("#pelo_ojos_perso")

//***************************************** */

const caracteristicas = "top=200,left=700,height=300,width=500,resizable=0,scrollbars=yes"

const sexo_lista = ["Hombre","Mujer"]

let ventana


function elegir_sexo(){
    
    btn_sexo.addEventListener("click", function(){
       interfaz_sexo()
      // botones_internos_sexo()
    })
}

elegir_sexo()






















function botones_internos_sexo(){


    ventana = window.open('','nuevaVentana',caracteristicas)
    btn_sexo.disabled = true

    // ventana.appendChild(pSex)
     ventana.document.write(parra.outerHTML)
     //ventana.document.write(pSex.outerHTML)
    ventana.document.body.style.backgroundColor = "red"

    ventana.onbeforeunload = function(event){

        btn_sexo.disabled = false
        return true
   
       }


}



function interfaz_sexo(){


    //Creacion de parrafo en el body


      
    ventana = window.open('','nuevaVentana',caracteristicas)
    btn_sexo.disabled = true


    //Elementos dinamicos HTML
     

    let divElement = document.createElement("div")
    let divElementEmpty = document.createElement("div")


    let inputMen = document.createElement("input")
    inputMen.setAttribute('type','button')
    inputMen.setAttribute('value','Hombre')
    inputMen.setAttribute('id','sub_btn_hombre')

    let prueba_btn = document.querySelector("#sub_btn_hombre")

    let campo = document.createElement("input")
    campo.setAttribute('type','text')

   

            
      const inputWoman = document.createElement("input")
    //  let inputWoman = document.createElement("button")
     inputWoman.setAttribute('type','button')
     inputWoman.setAttribute('value','Mujer')

     //ESTILOS CSS

     divElement.style.cssText += 'display:flex; justify-content:center; flex-direction:column;align-items:center;margin-top:100px;'
     inputMen.style.cssText += 'align-items:center;background:black;font-size:30px;color:red;font-family:Montserrat sans-serif'
     inputWoman.style.cssText += 'align-items:center;background:black;font-size:30px;color:red;font-family:Montserrat sans-serif'
 

    
    //AÑADIR A LA VENTANA

     divElement.appendChild(inputMen)
     divElement.appendChild(divElementEmpty)
     divElement.appendChild(inputWoman)
     divElement.appendChild(campo)
     ventana.document.write(divElement.outerHTML)
     ventana.document.body.style.backgroundColor = "red"



//ACCIONES DE BOTONES DENTRO DE LA VENTANA

    //METODO ASPA BOTON VENTANA CERRAR

    ventana.onbeforeunload = function(event){

     btn_sexo.disabled = false
     return true

    }

    //BOTON HOMBRE

   // btn_hombre(inputMen)

  
        inputMen.addEventListener('click',function(e){ //Undefined

            try{
                console.log("Entra en prueba_btn")
                campo.focus()
            }

            catch(e){
                alert(e.message)
            }

            })
        
    

/*
inputMen.addEventListener('click',(e)=>{ 

    console.log("Entra hombre")
    document.write("TEXTO")
   

})

inputWoman.addEventListener('click',function(){


    console.log("Entra mujer")


})


   divElement.inputMen.addEventListener('click',function(){ //Undefined


        console.log("Entra en prueba_btn")
        campo.focus()



    })

 

    prueba_btn.addEventListener('click',(e)=>{ 

        console.log("Entra hombre")
        btn_sexo.value = valorMen
        campo.focus()

    })
    inputMen.addEventListener('click',(e)=>{ 

        console.log("Entra hombre")
        btn_sexo.value = valorMen
        campo.focus()

    })

    inputMen.addEventListener('click',function(){ 

        console.log("Entra hombre")
        btn_sexo.value = valorMen
        campo.focus()

    })

    inputWoman.addEventListener('click',function(){

        console.log("Entra mujer")
        btn_sexo.value = valorMen

    })
    
    */
 }


 function btn_hombre(elementoListener){

    let elementoListenerd = document.createElement("input")

    elementoListenerd = elementoListener

    console.log("Entra en btn_hombre")

    elementoListenerd.addEventListener('click',(e)=>{ 

        console.log("Entra hombre")
        btn_sexo.value = valorMen
        campo.focus()
        
        return elementoListenerd
    })
    
 }


function elegir_clase(){

        // BOTON DE CLASE, AL DARLE, DEBERIA ABRIRSE EL MODEL DE LA CLASE 
        // "MODAL_PANELES.JS"

        btn_clase.addEventListener('click',function(){

                //console.log("Entra en elegir_clase()")
                // modelo_sexo()

                console.log(nombre.modelo_sexo())

        })



}

elegir_clase()

function elegir_regalo(){

    btn_regalo.addEventListener("click", function(){

        ventana = window.open('','nuevaVentana',caracteristicas)
        btn_regalo.disabled = true
        ventana.document.body.style.backgroundColor = "red"
 
        ventana.onbeforeunload = function(event){
 
            btn_regalo.disabled = false
         return true
 
        }
    
    })
    }

    elegir_regalo()

  /*  ventana = window.open('','nuevaVentana',caracteristicas)
    btn_clase.disabled = true
    ventana.document.body.style.backgroundColor = "red"

    ventana.onbeforeunload = function(event){

     btn_clase.disabled = false
     return true

    }*/

    function elegir_fisico(){

        btn_fisico.addEventListener("click", function(){
    
            ventana = window.open('','nuevaVentana',caracteristicas)
            btn_fisico.disabled = true
            ventana.document.body.style.backgroundColor = "red"
        
            ventana.onbeforeunload = function(event){
        
                btn_fisico.disabled = false
             return true
        
            }
        
        })
        }
    
        elegir_fisico()



        function elegir_cara(){

            btn_cara.addEventListener("click", function(){
        
                ventana = window.open('','nuevaVentana',caracteristicas)
                btn_cara.disabled = true
                ventana.document.body.style.backgroundColor = "red"
            
                ventana.onbeforeunload = function(event){
            
                    btn_cara.disabled = false
                 return true
            
                }
            
            })
            }
        
        elegir_cara()


        function elegir_pelo(){

            btn_pelo.addEventListener("click", function(){
        
                ventana = window.open('','nuevaVentana',caracteristicas)
                btn_pelo.disabled = true
                ventana.document.body.style.backgroundColor = "red"
            
                ventana.onbeforeunload = function(event){
            
                    btn_pelo.disabled = false
                 return true
            
                }
            
            })
            }

            elegir_pelo()


            
        function elegir_pelo_ojos(){

            btn_pelo_ojos.addEventListener("click", function(){

                ventana = window.open('','nuevaVentana',caracteristicas)
                btn_pelo_ojos.disabled = true
                ventana.document.body.style.backgroundColor = "red"
            
                ventana.onbeforeunload = function(event){
            
                    btn_pelo_ojos.disabled = false
                 return true
            
                }
            
            })
            }

        elegir_pelo_ojos()

/*

//ACEPTAR Y PERSONALIZAR


function btn_accept(){

    btn_aceptar.addEventListener("click", function(){

      //  console.log("Entra en btn_accept()")
      let ventana

         ventana = window.open('','nuevaVentana',caracteristicas)

        if(!ventana) console.log("Ventana no cargada")
    
    })
    }

btn_accept()*/


// function controlErrores(value){

//     if(typeof btn_aceptar !== 'undefined' || typeof btn_aceptar !== 'null'){

//         btn_aceptar.innerHTML = value

//     }else console.log("Boton aceptar es correcto")

// }