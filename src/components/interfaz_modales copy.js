// import { cerrarModelo,sexo_modal,btn_sexo,cuadros,imagen_logo,mujer } from "./botones"
 import { mujer } from "./botones.js"


const mujer_foto = document.createElement('img')

console.log("Entra en interfaz_modales: "+mujer)

  //*********************** SEXO MUJER ********************* */

            //Cuando paso el raton encima del boton
            mujer.addEventListener("mouseover",function(){

                console.log("Entra en mouseover")
                //des_sexo.append("Mujer descripcion")
                des_sexo.value = "Has elegido mujer"
            

            })


            mujer.addEventListener("mouseout",function(){
                des_sexo.value = ""
            })

mujer.addEventListener('click',function(){

    console.log("Has hecho click en mujer")
    sexo_mujer()

})

    function sexo_mujer(){

                console.log("Has hecho click en mujer")
                cerrarModelo(sexo_modal)

                //ESTABLECER NOMBRE DE BOTON EN CONFIGURACION PERSONAL
                let valor = mujer.getAttribute('value')
                btn_sexo.setAttribute('value',valor)
                
                
                mujer_foto.src = './recursos/cust_personaje/woman.PNG'
                mujer_foto.alt = 'mujer'
                
                mujer_foto.height="426"
                mujer_foto.width="283"

                //des_sexo.appendChild("Entra mujer")


                if(cuadros.contains(imagen_logo)){

                    console.log("Contiene imagen logo y lo elimino")
                    imagen_logo.remove()
                    cuadros.appendChild(mujer_foto)
                    
                }else if(cuadros.contains(hombre_foto)){

                    console.log("No contiene imagen logo")
                    hombre_foto.remove()
                    cuadros.appendChild(mujer_foto)

                }

    }
    