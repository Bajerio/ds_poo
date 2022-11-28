let titulo = "Importacion desde ejemplos_export.js"
let anno = 2022
let mes = "Octubre"
let ciudad = "Madrid"
//export{anno}
// export {mes as mes_actual}
// export {anno,mes as month}

export {

    
    anno,
//Para llamar a mes podria llamarlo a traves de "mes" ó mes_actual
    mes, mes as mes_actual,
    ciudad, ciudad as city,
    Prueba

 }


 export default{

    viviendas_piso,
    letras_puerta,
    titulo
    
 }



 function viviendas_piso(pisos,viviendas){

    return pisos*viviendas

 }

 
 function letras_puerta(){


    return "A, B, C, D"

 }

// export class Prueba{

//         prueba_clase(){

//             return "Has entrado en la clase Prueba"

//         }

//  }
class Prueba{

        prueba_clase(){

            return "Has entrado en la clase Prueba"

        }

 }


//  let r = new Prueba()
//  r.prueba_clase()
 
 //Se podrian añadir las variables tambien pero no permite alias mejor usarlo para metodos y clases
//  export default{ 
//     viviendas_piso,
//     letras_puerta,
//     titulo,
//     anno,
// //Para llamar a mes podria llamarlo a traves de "mes" ó mes_actual
//     mes,
//    // mes, mes as mes_actual,
//     ciudad
//  }