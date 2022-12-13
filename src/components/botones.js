//****** ELEMENTOS BOTONES DEL index.html ******** */

export const btn_clase = document.querySelector("#clase_perso")
export const btn_regalo = document.querySelector("#regalo_perso")
const btn_fisico = document.querySelector("#fisico_perso")
const btn_cara = document.querySelector("#cara_perso")
const btn_pelo = document.querySelector("#pelo_perso")
const btn_pelo_ojos = document.querySelector("#pelo_ojos_perso")
const btn_aceptar = document.querySelector("#aceptar")
const btn_per = document.querySelector("#personalizar")
const mensaje = document.querySelector("#parrafo")
const salir_sexo = document.querySelector(".salir_sexo")
const salir_clase = document.querySelector(".salir_clase")
const salir_regalo = document.querySelector(".salir_regalo")
const salir_resumen = document.querySelector(".salir_resumen")
export const btn_sexo = document.querySelector("#sexo_perso")
export const sexo_modal = document.querySelector(".sexo_modal")
export const imagen_logo = document.querySelector("#imagen")
export const hombre_foto = document.createElement('img')
export const hombre = document.querySelector("#hombre")
export const mujer = document.querySelector("#mujer")

export const clase_modal = document.querySelector(".clase_modal")
export const guerrero = document.querySelector("#gue")
export const caballero = document.querySelector("#cab")
export const vagabundo = document.querySelector("#vag")
export const ladron = document.querySelector("#lad")
export const bandido = document.querySelector("#ban")
export const cazador = document.querySelector("#caz")
export const hechicero = document.querySelector("#mago")
export const piromante = document.querySelector("#piro")
export const clerigo = document.querySelector("#cle")
export const marginado = document.querySelector("#mar")

export const regalo_modal = document.querySelector(".regalo_modal")
export const resumen_personaje_modal = document.querySelector(".resumen_personaje_modal")
export const bomba = document.querySelector("#bomba")
export const prisma = document.querySelector("#prisma")
export const bendicion = document.querySelector("#bendi")
export const llave = document.querySelector("#llave")
export const anillo = document.querySelector("#ani")
export const colgante = document.querySelector("#colg")
export const diminuto = document.querySelector("#dim")
export const human = document.querySelector("#human")
export const ninguno = document.querySelector("#ning")


export const sex = document.querySelector("#inp_sex")
export const cls = document.querySelector("#inp_cls")
export const reg = document.querySelector("#inp_reg")
export const nombre = document.querySelector("#nombre")
export const inp_nom = document.querySelector("#inp_nom")

const nivel = document.querySelector("#inp_nivel")
export const vitalidad = document.querySelector("#inp_vitalidad")
const aprendizaje = document.querySelector("#inp_aprendizaje")
const aguante = document.querySelector("#inp_aguante")
const fuerza = document.querySelector("#inp_fuerza")
const destreza = document.querySelector("#inp_destreza")
const resistencia = document.querySelector("#inp_resistencia")
const inteligencia = document.querySelector("#inp_inteligencia")
const fe = document.querySelector("#inp_fe")
const humanidad = document.querySelector("#inp_humanidad")
let valores_aleatorios = Math.floor(Math.random()*100)


export const cuadros = document.querySelector(".cuadros")

//***************************************** */




/*
const abrirModelo = function(){

    sexo_modal.classList.remove("hidden")

}


const cerrarModelo = function(){

    sexo_modal.classList.add("hidden")

}
*/

const abrirModelo = function(modal){

    modal.classList.remove("hidden")

}

export const cerrarModelo = function(modal){

    modal.classList.add("hidden")

}



salir_sexo.addEventListener('click',function(){

    cerrarModelo(sexo_modal)

})
salir_clase.addEventListener('click',function(){

    cerrarModelo(clase_modal)

})
salir_regalo.addEventListener('click',function(){

    cerrarModelo(regalo_modal)

})
salir_resumen.addEventListener('click',function(){

    cerrarModelo(resumen_personaje_modal)

})


                        //****** ELEGIR SEXO ******** */


btn_sexo.addEventListener('click',function(){

    abrirModelo(sexo_modal)
    
})


                        //****** ELEGIR CLASE ******** */

btn_clase.addEventListener("click", function(){

        abrirModelo(clase_modal)
    
})


btn_regalo.addEventListener('click',function(){

    abrirModelo(regalo_modal)
})


btn_aceptar.addEventListener('click',function(){

    abrirModelo(resumen_personaje_modal)
    console.log("Tu nombre es: "+nombre.value)
    let valor = nombre.value
    console.log(valor)
    inp_nom.setAttribute('value',valor)

})



            
export function estadisticas_personaje(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10){


    let valor_nivel = nivel.setAttribute("value",v1)
    let valor_vitalidad = vitalidad.setAttribute("value",v2)
    let valor_aprendizaje = aprendizaje.setAttribute("value",v3)
    let valor_aguante = aguante.setAttribute("value",v4)
    let valor_fuerza = fuerza.setAttribute("value",v5)
    let valor_destreza = destreza.setAttribute("value",v6)
    let valor_resistencia = resistencia.setAttribute("value",v7)
    let valor_inteligencia = inteligencia.setAttribute("value",v8)
    let valor_fe = fe.setAttribute("value",v9)
    let valor_humanidad = humanidad.setAttribute("value",v10)

    let array = 
            [
                valor_nivel,
                valor_vitalidad,
                valor_aprendizaje,
                valor_aguante,
                valor_fuerza,
                valor_destreza,
                valor_resistencia,
                valor_inteligencia,
                valor_fe,
                valor_humanidad
            ]

    return array

}

function modificadores(valor,modificador){



}