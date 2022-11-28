//****** ELEMENTOS BOTONES DEL index.html ******** */

const btn_sexo = document.querySelector("#sexo_perso")
const btn_clase = document.querySelector("#clase_perso")
const btn_regalo = document.querySelector("#regalo_perso")
const btn_fisico = document.querySelector("#fisico_perso")
const btn_cara = document.querySelector("#cara_perso")
const btn_pelo = document.querySelector("#pelo_perso")
const btn_pelo_ojos = document.querySelector("#pelo_ojos_perso")
const btn_aceptar = document.querySelector("#aceptar")
const btn_per = document.querySelector("#personalizar")
const mensaje = document.querySelector("#parrafo")



const sexo_modal = document.querySelector(".sexo_modal")
const salir_sexo = document.querySelector(".salir_sexo")
const salir_clase = document.querySelector(".salir_clase")
const hombre = document.querySelector("#hombre")
const mujer = document.querySelector("#mujer")

const clase_modal = document.querySelector(".clase_modal")
const guerrero = document.querySelector("#gue")
const caballero = document.querySelector("#cab")


const nivel = document.querySelector("#inp_nivel2")
const vitalidad = document.querySelector("#inp_vitalidad")



//***************************************** */

//NIVEL, VITALIDAD Y APRENDIZAJE
let valores_estadisticas_hombre = [1,15,3]


// const abrirModelo = function(){

//     sexo_modal.classList.remove("hidden")

// }


// const cerrarModelo = function(){

//     sexo_modal.classList.add("hidden")

// }

const abrirModelo = function(modal){

    modal.classList.remove("hidden")

}

const cerrarModelo = function(modal){

    modal.classList.add("hidden")

}



salir_sexo.addEventListener('click',function(){

    cerrarModelo(sexo_modal)

})
salir_clase.addEventListener('click',function(){

  
    cerrarModelo(clase_modal)

})

//****** ELEGIR SEXO ******** */



btn_sexo.addEventListener('click',function(){

    abrirModelo(sexo_modal)

})

            mujer.addEventListener('click',function(){

                //MODIFICACION DE VALOR EN TABLA ESTADISTICA CON PLACEHOLDER
                //NIVEL
                // let obtener_valor = nivel.getAttribute("placeholder")
                // console.log("Valor de nivel: "+obtener_valor)
                
                // nivel.setAttribute("placeholder", "2")
                // let obtener_valor2 = nivel.getAttribute("placeholder")

                // console.log("Valor de nivel modificado: "+obtener_valor2)
                
                
                //NIVEL
                let nivel_est = nivel.getAttribute("value")
                console.log("Valor de nivel: "+nivel_est)

                console.log(nivel.innerHTML)
                
                nivel.setAttribute("value","1")
                
                let nivel_est2 = nivel.getAttribute("value")
                console.log("Valor de nivel modificado: "+nivel_est2)

                //VITALIDAD
                let vit = vitalidad.getAttribute("value")
                console.log("Valor de vitalidad: "+vit)

                console.log(vitalidad.innerHTML)
                
                vitalidad.setAttribute("value","10")

                
                let vit2 = vitalidad.getAttribute("value")
                console.log("Valor de vitalidad modificado: "+vit2)

                cerrarModelo(sexo_modal)

                //ESTABLECER NOMBRE DE BOTON EN CONFIGURACION PERSONAL
                let valor = mujer.getAttribute('value')
                btn_sexo.setAttribute('value',valor)

            })

            hombre.addEventListener('click',function(){

                //MODIFICACION DE VALOR EN TABLA ESTADISTICA CON VALUE

                


                //ESTABLECER NOMBRE DE BOTON EN CONFIGURACION PERSONAL
                let valor = hombre.getAttribute('value') //Hombre
                console.log(valor)
                btn_sexo.setAttribute('value',valor)
                cerrarModelo(sexo_modal)
            })


            

// salir.addEventListener('click',function(){

//     console.log("Entra salir de clase")
    
            
// })




//****** ELEGIR CLASE ******** */

btn_clase.addEventListener("click", function(){

        abrirModelo(clase_modal)
    
})

            guerrero.addEventListener('click',function(){

                let valor = guerrero.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                cerrarModelo(clase_modal)

            })

            caballero.addEventListener('click',function(){

                let valor = caballero.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                cerrarModelo(clase_modal)
            })

