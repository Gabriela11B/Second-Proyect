/*  let btn= document.getElementById(btn)
let btnborrar = document.getElementById('btnborrar')
  */

/* if(localStorage.getItem('content1')){
    const savedData = localStorage.getItem('content1')
    content1.innerText= savedData 
}
     */
    /*Esto del inicio lo intente usar profe, trato de entenderlo lo mejor que puedo, y ahi voy intentandolo, pero no supe como hacerlo, perdoneme*/

    /*Lo que esta de aqui para abajo, fue basado en la clase del viernes, trate de interpretarlo de la misma forma, y le cambie los nombres, sin embargo, no tuve la oportunidad de ver las clases completas pero me esforce mucho por darle sentido y replicarlo para cada necesidad*/ 

content1.addEventListener('click', function(){
    let answer1= prompt ('Insert Your Answer')
    content1.innerText = answer1
    
})
content2.addEventListener('click', function(){
    let answer2= prompt ('Insert Your Answer')
    content2.innerText = answer2
    
})
content3.addEventListener('click', function(){
    let answer3= prompt ('Insert Your Answer')
    content3.innerText = answer3
})

 
question1.addEventListener('click', function(){
    let que1= prompt ('Insert Your Answer')
    question1.innerText = que1
    
})
question2.addEventListener('click', function(){
    let que2= prompt ('Insert Your Answer')
    question2.innerText = que2
    
})
question3.addEventListener('click', function(){
    let que3= prompt ('Insert Your Answer')
    question3.innerText = que3
    
})



final.addEventListener('click', function(){
    let fin= prompt ('Insert Your Choice')
    final.innerText = fin
    
})

final2.addEventListener('click', function(){
    let fin2= prompt ('Insert Your Choice')
    final2.innerText = fin2
    
})

final3.addEventListener('click', function(){
    let fin3= prompt ('Insert Your Choice')
    final3.innerText = fin3
    
})


