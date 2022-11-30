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

const salir_sexo = document.querySelector(".salir_sexo")
const salir_clase = document.querySelector(".salir_clase")
const salir_regalo = document.querySelector(".salir_regalo")
// const salir_modal = document.querySelector(".salir_modal")


const sexo_modal = document.querySelector(".sexo_modal")
const mujer = document.querySelector("#mujer")
//const img_mujer = document.querySelector("#img_mujer")
const hombre = document.querySelector("#hombre")
//const img_hombre = document.querySelector("#img_hombre")
const imagen_logo = document.querySelector("#imagen")

const hombre_foto = document.createElement('img')
const mujer_foto = document.createElement('img')

const des_sexo = document.querySelector('#des_sexo')


const clase_modal = document.querySelector(".clase_modal")
const guerrero = document.querySelector("#gue")
const caballero = document.querySelector("#cab")
const vagabundo = document.querySelector("#vag")
const ladron = document.querySelector("#lad")
const bandido = document.querySelector("#ban")
const cazador = document.querySelector("#caz")
const hechicero = document.querySelector("#mago")
const piromante = document.querySelector("#piro")
const clerigo = document.querySelector("#cle")
const marginado = document.querySelector("#mar")


const regalo_modal = document.querySelector(".regalo_modal")
const bomba = document.querySelector("#bomba")
const prisma = document.querySelector("#prisma")
const bendicion = document.querySelector("#bendi")
const llave = document.querySelector("#llave")
const anillo = document.querySelector("#ani")
const colgante = document.querySelector("#colg")
const tribal = document.querySelector("#trib")
const human = document.querySelector("#human")
const ninguno = document.querySelector("#ning")




const nivel = document.querySelector("#inp_nivel")
const vitalidad = document.querySelector("#inp_vitalidad")
const aprendizaje = document.querySelector("#inp_aprendizaje")
const aguante = document.querySelector("#inp_aguante")
const fuerza = document.querySelector("#inp_fuerza")
const destreza = document.querySelector("#inp_destreza")
const resistencia = document.querySelector("#inp_resistencia")
const inteligencia = document.querySelector("#inp_inteligencia")
const fe = document.querySelector("#inp_fe")
const humanidad = document.querySelector("#inp_humanidad")

let valores_aleatorios = Math.floor(Math.random()*100)


const cuadros = document.querySelector(".cuadros")

//***************************************** */

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
salir_regalo.addEventListener('click',function(){

    cerrarModelo(regalo_modal)

})


//****** ELEGIR SEXO ******** */


btn_sexo.addEventListener('click',function(){

    abrirModelo(sexo_modal)
    

})

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

            })





        //*********************** SEXO HOMBRE ********************* */

            hombre.addEventListener("mouseover",function(){
                des_sexo.value = "Has elegido hombre"
            })

            hombre.addEventListener("mouseout",function(){
                des_sexo.value = ""
            })



            hombre.addEventListener('click',function(){

                //MODIFICACION DE VALOR EN TABLA ESTADISTICA CON VALUE
                cerrarModelo(sexo_modal)
                let valor = hombre.getAttribute('value') //Hombre
                btn_sexo.setAttribute('value',valor)

                hombre_foto.src = './recursos/cust_personaje/man.PNG'
                hombre_foto.alt = 'hombre'
                
                hombre_foto.height="426"
                hombre_foto.width="283"

                if(cuadros.contains(imagen_logo)){

                    console.log("Contiene imagen logo y lo elimino")
                    imagen_logo.remove()
                    cuadros.appendChild(hombre_foto)
                    
                }else if(cuadros.contains(mujer_foto)){

                    console.log("No contiene imagen logo")
                    mujer_foto.remove()
                    cuadros.appendChild(hombre_foto)
                    
                }
            })


//****** ELEGIR CLASE ******** */

btn_clase.addEventListener("click", function(){

        abrirModelo(clase_modal)
    
})

            guerrero.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = guerrero.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                // estadisticas_personaje(,,,,,,,,,)
                estadisticas_personaje(4,11,8,12,13,13,11,9,9,86)

            })

            caballero.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = caballero.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                estadisticas_personaje(5,14,10,10,11,11,10,9,11,82)
            })

            vagabundo.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = vagabundo.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                estadisticas_personaje(3,10,11,10,10,14,12,11,8,86)
            })
 
            ladron.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = ladron.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                estadisticas_personaje(5,9,11,9,9,15,10,12,11,86)
            })


            bandido.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = bandido.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                estadisticas_personaje(4,12,8,14,14,9,11,8,10,86)
            })


            cazador.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = cazador.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                estadisticas_personaje(4,11,9,11,12,14,11,9,9,86)
            })

            hechicero.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = hechicero.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                estadisticas_personaje(3,8,15,8,9,11,8,15,8,82)
            })

            piromante.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = piromante.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                estadisticas_personaje(1,10,12,11,12,9,12,10,8,84)
            })


            clerigo.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = clerigo.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                estadisticas_personaje(2,11,11,9,12,8,11,8,14,84)
            })

            marginado.addEventListener('click',function(){

                cerrarModelo(clase_modal)
                let valor = marginado.getAttribute('value')
                btn_clase.setAttribute('value',valor)
                estadisticas_personaje(6,11,11,11,11,11,11,11,11,88)
            })




btn_regalo.addEventListener('click',function(){

    abrirModelo(regalo_modal)
    
    bomba.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = bomba.getAttribute('value')
        btn_regalo.setAttribute('value',valor)

    })

    prisma.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = prisma.getAttribute('value')
        btn_regalo.setAttribute('value',valor)

    })

    bendicion.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = bendicion.getAttribute('value')
        btn_regalo.setAttribute('value',valor)

    })

    llave.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = llave.getAttribute('value')
        btn_regalo.setAttribute('value',valor)

    })

    anillo.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = anillo.getAttribute('value')
        btn_regalo.setAttribute('value',valor)

    })

    colgante.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = colgante.getAttribute('value')
        btn_regalo.setAttribute('value',valor)

    })

    tribal.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = tribal.getAttribute('value')
        btn_regalo.setAttribute('value',valor)

    })

    human.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = human.getAttribute('value')
        btn_regalo.setAttribute('value',valor)

    })

    ninguno.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = ninguno.getAttribute('value')
        btn_regalo.setAttribute('value',valor)

    })
    

    
            
})

            
function estadisticas_personaje(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10){


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