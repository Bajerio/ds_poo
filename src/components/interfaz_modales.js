 import {
        
         nombre,
         hombre,
         hombre_foto,
         imagen_logo,
         cerrarModelo,
         sexo_modal,
         btn_sexo,
         cuadros,
         btn_clase,
         estadisticas_personaje,
         clase_modal,
         guerrero,
         caballero,
         vagabundo,
         ladron,
         bandido,
         cazador,
         hechicero,
         piromante,
         clerigo,
         marginado,
         btn_regalo,
         regalo_modal,
         bomba,
         prisma,
         bendicion,
         llave,
         anillo,
         colgante,
         diminuto,
         human,
         ninguno,
         vitalidad,
         resumen_personaje_modal,
         sex,
         cls,
         reg
        
        }from "./botones.js"


const mujer_foto = document.createElement('img')

console.log("Nombre personaje: "+nombre.value)


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
                inp_sex.setAttribute('value',valor)
                
                
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
            sex.setAttribute('value',valor)

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


        //*********************** MODAL CLASE ********************* */


                    guerrero.addEventListener('click',function(){

                        cerrarModelo(clase_modal)
                        console.log("Entra guerrero")
                        let valor = guerrero.getAttribute('value')
                        btn_clase.setAttribute('value',valor)
                        cls.setAttribute('value',valor)
                        
                        estadisticas_personaje(4,11,8,12,13,13,11,9,9,86)
                    
                    })
                    
                                guerrero.addEventListener('mouseover',function(){
                    
                                    des_clase.value = "Intrépido guerrero. Experto en las armas.\nGran fuerza y destreza."
                    
                                })
                    
                                guerrero.addEventListener('mouseout',function(){
                    
                                    des_clase.value = ""
                    
                                })
                                caballero.addEventListener('click',function(){

                                    cerrarModelo(clase_modal)
                                    let valor = caballero.getAttribute('value')
                                    btn_clase.setAttribute('value',valor)
                                    cls.setAttribute('value',valor)
                                    estadisticas_personaje(5,14,10,10,11,11,10,9,11,82)
                                    
                                })
                                
                                caballero.addEventListener('mouseover',function(){
                                
                                    des_clase.value = 'Caballero de baja categoría.\nAltos PS, armadura sólida.\nNo es fácil de derribar.'
                                
                                })
                                
                                caballero.addEventListener('mouseout',function(){
                                
                                    des_clase.value = ""
                                
                                })

                                

vagabundo.addEventListener('click',function(){

    cerrarModelo(clase_modal)
    let valor = vagabundo.getAttribute('value')
    btn_clase.setAttribute('value',valor)
    cls.setAttribute('value',valor)
    estadisticas_personaje(3,10,11,10,10,14,12,11,8,86)
})


vagabundo.addEventListener('mouseover',function(){

    des_clase.value = 'Peregrino sin rumbo.\nLleva una cimitarra.\nGran destreza.\n'
})

vagabundo.addEventListener('mouseout',function(){

    des_clase.value = ""

})

ladron.addEventListener('click',function(){

    cerrarModelo(clase_modal)
    let valor = ladron.getAttribute('value')
    btn_clase.setAttribute('value',valor)
    cls.setAttribute('value',valor)
    estadisticas_personaje(5,9,11,9,9,15,10,12,11,86)
}) 

ladron.addEventListener('mouseover',function(){

    des_clase.value = 'Con remordimientos.\nImpactos críticos altos.\nTiene llave maestra.'
})

ladron.addEventListener('mouseout',function(){

    des_clase.value = ""

})


bandido.addEventListener('click',function(){

    cerrarModelo(clase_modal)
    let valor = bandido.getAttribute('value')
    btn_clase.setAttribute('value',valor)
    cls.setAttribute('value',valor)
    estadisticas_personaje(4,12,8,14,14,9,11,8,10,86)
})

bandido.addEventListener('mouseover',function(){

    des_clase.value = 'Bandido salvaje.\nGran fuerza.\nLleva una pesada hacha de guerra.'
})

bandido.addEventListener('mouseout',function(){

    des_clase.value = ""

})


cazador.addEventListener('click',function(){

    cerrarModelo(clase_modal)
    let valor = cazador.getAttribute('value')
    btn_clase.setAttribute('value',valor)
    cls.setAttribute('value',valor)
    estadisticas_personaje(4,11,9,11,12,14,11,9,9,86)
})

cazador.addEventListener('mouseover',function(){

    des_clase.value = 'Caza con arco.\nLucha a corta distancia.\nNo es bueno con la magia.'
})

cazador.addEventListener('mouseout',function(){

    des_clase.value = ""

})

 
hechicero.addEventListener('click',function(){

    cerrarModelo(clase_modal)
    let valor = hechicero.getAttribute('value')
    btn_clase.setAttribute('value',valor)
    cls.setAttribute('value',valor)
    estadisticas_personaje(3,8,15,8,9,11,8,15,8,82)
})

hechicero.addEventListener('mouseover',function(){

    des_clase.value = 'De la Escuela de Dragones de Vinheim.\nUsa magia de Almas.'
})

hechicero.addEventListener('mouseout',function(){

    des_clase.value = ""

})


piromante.addEventListener('click',function(){

    cerrarModelo(clase_modal)
    let valor = piromante.getAttribute('value')
    btn_clase.setAttribute('value',valor)
    cls.setAttribute('value',valor)
    estadisticas_personaje(1,10,12,11,12,9,12,10,8,84)
})

piromante.addEventListener('mouseover',function(){

    des_clase.value = 'Piromántico del Gran Pantano.\nTira hechizos de fuego y porta hacha de mano.'
})

piromante.addEventListener('mouseout',function(){

    des_clase.value = ""

})

        
clerigo.addEventListener('click',function(){

    cerrarModelo(clase_modal)
    let valor = clerigo.getAttribute('value')
    btn_clase.setAttribute('value',valor)
    cls.setAttribute('value',valor)
    estadisticas_personaje(2,11,11,9,12,8,11,8,14,84)
})
clerigo.addEventListener('mouseover',function(){

    des_clase.value = 'Clérigo peregrino.\nTiene una maza.\nHace milagros curativos.'
})

clerigo.addEventListener('mouseout',function(){

    des_clase.value = ""

})
        

marginado.addEventListener('click',function(){

    cerrarModelo(clase_modal)
    let valor = marginado.getAttribute('value')
    btn_clase.setAttribute('value',valor)
    cls.setAttribute('value',valor)
    estadisticas_personaje(6,11,11,11,11,11,11,11,11,88)
})

marginado.addEventListener('mouseover',function(){

    des_clase.value = 'Enigma sin ropa.\nArmado solo con un garrote y un viejo escudo de tablas.'
})

marginado.addEventListener('mouseout',function(){

    des_clase.value = ""

})

     
                                        //************* ELEGIR REGALO ******** */


let des_bomba = "Objeto que se lanza a un enemigo para incendiarlo, es mucho más potente que las bombas de fuego ordinarias y tiene mayor alcance."
let des_prisma = "Binoculares que se usan para observar a gran distancia.\nPara usarlos, debes equiparlos en lugar de un arma.\nUna herramienta extraña creada en Volgen.\nNo te ayudarán en combate, pero con un poco de creatividad podrás darles un buen uso."
let des_bendicion = "Agua sagrada de la Diosa Gwynevere.\nCura y devuelve todo PS.\nGwynevere, Diosa de la Luz Solar e hija del gran señor de almas Gwyn, es considerada por todos el símbolo de recompensa y fertilidad."
let des_llave = "Llave universal que abre cualquier cerradura básica.\nImprescindible para ladrones.\nDe todas formas, en la tierra maldita de los no muertos es mejor no abrir muchas de sus puertas."
let des_anillo = "Un anillo antiguo de una antigua bruja.\nEl anillo tiene una inscripción en una extraña lengua inhumana, pero al parecer sin uso alguno."
let des_colgante = "Un simple colgante sin efecto alguno.\nPero los recuerdos agradables son vitales para sobrevivir a los viajes más arduos."

// Aumenta la salud máxima un 5%.
let des_dim = "Este anillo está hecho por una antigua joya pequeña roja.\nAumenta ligeramente los PS.\nEl anillo concede poderes grandes y pequeños.\nPuede hacerte el camino más fácil si se usa adecuadamente."

let des_hum = "Extraño duendecillo negro que aparece en algunos cadáveres.\nÚsalo para ganar 1 punto de humanidad y recuperar una gran cantidad de PS.\nEste duende negro se llama humanidad, pero poco sabemos de su verdadera naturaleza.\nSi el alma es fuente de toda vida, ¿qué distingue la humanidad de lo que tenemos dentro de nosotros mismos?"




    bomba.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = bomba.getAttribute('value')
        btn_regalo.setAttribute('value',valor)
        reg.setAttribute('value',valor)

    })


    bomba.addEventListener('mouseover',function(){

        des_regalo.value = des_bomba
    
        })

    prisma.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = prisma.getAttribute('value')
        btn_regalo.setAttribute('value',valor)
             reg.setAttribute('value',valor)
    })



    prisma.addEventListener('mouseover',function(){

    des_regalo.value = des_prisma
    
    })



    bendicion.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = bendicion.getAttribute('value')
        btn_regalo.setAttribute('value',valor)
         reg.setAttribute('value',valor)
    })
    

    bendicion.addEventListener('mouseover',function(){

        des_regalo.value = des_bendicion
        
    })

    

    llave.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = llave.getAttribute('value')
        btn_regalo.setAttribute('value',valor)
        reg.setAttribute('value',valor)
    })


    
    llave.addEventListener('mouseover',function(){

        des_regalo.value = des_llave
        
    })





    anillo.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = anillo.getAttribute('value')
        btn_regalo.setAttribute('value',valor)
        reg.setAttribute('value',valor)
    })


    anillo.addEventListener('mouseover',function(){

        des_regalo.value = des_anillo
        
    })





    colgante.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = colgante.getAttribute('value')
        btn_regalo.setAttribute('value',valor)
 reg.setAttribute('value',valor)
    })

   

    colgante.addEventListener('mouseover',function(){

        des_regalo.value = des_colgante
        
    })

    //SI SE ELIGE ANILLO DE DIMINUTO, SE DEBE SUMAR UN 5% A LA VITALIDAD

    diminuto.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = diminuto.getAttribute('value')
        btn_regalo.setAttribute('value',valor)
        console.log("Valor vitalidad: "+vitalidad.value)    
        let cambio = parseInt(vitalidad.value,10) // Paso de String a int
        console.log("Cambio "+cambio)
        console.log(typeof cambio) //Number
        reg.setAttribute('value',valor)
        let operacion = (vitalidad.value*5)/100
        console.log("Operacion: "+operacion)
        let valor_final = cambio+operacion
        console.log("valor_final2: "+valor_final)
        vitalidad.value = valor_final
      
    })

    /*


    Valor vitalidad: 11 interfaz_modales.js:473:17
    Cambio 11 interfaz_modales.js:475:17
    number interfaz_modales.js:476:17
    Operacion: 0.55 interfaz_modales.js:479:17
    valor_final2: 11.55


    */

    diminuto.addEventListener('mouseover',function(){

        des_regalo.value = des_dim
        
    })



    human.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = human.getAttribute('value')
        btn_regalo.setAttribute('value',valor)
 reg.setAttribute('value',valor)
    })

    human.addEventListener('mouseover',function(){

        des_regalo.value = des_hum
        
    })


    ninguno.addEventListener('click',function(){

        cerrarModelo(regalo_modal)
        let valor = ninguno.getAttribute('value')
        btn_regalo.setAttribute('value',valor)
        reg.setAttribute('value',valor)

    })
    
    ninguno.addEventListener('mouseover',function(){

        des_regalo.value = "Sin ningún objeto."
        
    })