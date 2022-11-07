const btn_aceptar = document.querySelector("#aceptar")
const btn_per = document.querySelector("#personalizar")
const btn_sexo = document.querySelector("#sexo_perso")
const btn_clase = document.querySelector("#clase_perso")
const btn_regalo = document.querySelector("#regalo_perso")
const btn_fisico = document.querySelector("#fisico_perso")
const btn_cara = document.querySelector("#cara_perso")
const btn_pelo = document.querySelector("#pelo_perso")
const btn_pelo_ojos = document.querySelector("#pelo_ojos_perso")



let mensaje1 = document.querySelector("#message1")
let mensaje2 = document.querySelector("#message2")


console.log(mensaje1.value)
console.log(mensaje2.value)

const btn = document.querySelector("#boton")
//Elementos de lista

//const lista_sexo = document.querySelector(".sexo_list")
// const hombre = document.querySelector("#hom")
// const mujer = document.querySelector("#muj")

// //console.log(lista_sexo.value)
// console.log(hombre.value)
// console.log(mujer.value)

// let text_area = document.querySelector("#area")

const caracteristicas = "top=200,left=700,height=300,width=500,resizable=no,scrollbars=yes"

const sexo_lista = ["Hombre","Mujer"]



function elegir_sexo(){

    btn_sexo.addEventListener("click", function(){

      
       const ventana = window.open('','nuevaVentana',caracteristicas)
       ventana.document.body.style.backgroundColor = "red"

       lista_sexo.innerHTML = ventana


        if(!ventana) console.log("Ventana no cargada")
    
    })
    }

elegir_sexo()

function elegir_clase(){

    btn_clase.addEventListener("click", function(){
      
        const ventana = window.open('','nuevaVentana',caracteristicas)
        if(!ventana) console.log("Ventana no cargada")
    
    })
    }

elegir_clase()

function elegir_regalo(){

    btn_regalo.addEventListener("click", function(){

       //console.log("Entra en elegir_sexo()")


        const ventana = window.open('','nuevaVentana',caracteristicas)

        if(!ventana) console.log("Ventana no cargada")
    
    })
    }

    elegir_regalo()

function elegir_fisico(){

    btn_fisico.addEventListener("click", function(){

       //console.log("Entra en elegir_sexo()")


        const ventana = window.open('','nuevaVentana',caracteristicas)

        if(!ventana) console.log("Ventana no cargada")
    
    })
    }

    elegir_fisico()

function elegir_cara(){

    btn_cara.addEventListener("click", function(){

       //console.log("Entra en elegir_sexo()")


        const ventana = window.open('','nuevaVentana',caracteristicas)

        if(!ventana) console.log("Ventana no cargada")
    
    })
    }

elegir_cara()

function elegir_pelo(){

    btn_pelo.addEventListener("click", function(){

       //console.log("Entra en elegir_sexo()")


        const ventana = window.open('','nuevaVentana',caracteristicas)

        if(!ventana) console.log("Ventana no cargada")
    
    })
    }

elegir_pelo()

function elegir_pelo_ojos(){

    btn_pelo_ojos.addEventListener("click", function(){

       //console.log("Entra en elegir_sexo()")

            

        const ventana = window.open('','nuevaVentana',caracteristicas)

        if(!ventana) console.log("Ventana no cargada")
    
    })
    }

elegir_pelo_ojos()



function btn_accept(){

    btn_aceptar.addEventListener("click", function(){

      //  console.log("Entra en btn_accept()")


        const ventana = window.open('','nuevaVentana',caracteristicas)

        if(!ventana) console.log("Ventana no cargada")
    
    })
    }

btn_accept()


// function controlErrores(value){

//     if(typeof btn_aceptar !== 'undefined' || typeof btn_aceptar !== 'null'){

//         btn_aceptar.innerHTML = value

//     }else console.log("Boton aceptar es correcto")

// }