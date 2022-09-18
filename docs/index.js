function changeTheme1(){
    let id_old_body = document.getElementsByClassName('body')
    let id_old_options = document.getElementsByClassName('options')
    let id_old_buttonoption = document.getElementsByClassName('buttonoption')
    let id_old_btn1 = document.getElementsByClassName('btn1')
    let id_old_btn2 = document.getElementsByClassName('btn2')
    let id_old_btn3 = document.getElementsByClassName('btn3')
    let id_old_screen = document.getElementsByClassName('screen')
    let id_old_tools = document.getElementsByClassName('tools')
    let id_old_del = document.getElementsByClassName('del')
    let id_old_reset = document.getElementsByClassName('reset')
    let id_old_igual = document.getElementsByClassName('igual')

    document.getElementById(`${id_old_body[0].id}`).id = 'themet1' 
    document.getElementById(`${id_old_options[0].id}`).id = 'optionst1'  
    document.getElementById(`${id_old_buttonoption[0].id}`).id = 'buttonoptiont1'  
    document.getElementById(`${id_old_btn1[0].id}`).id = 'btnt11' 
    document.getElementById(`${id_old_btn2[0].id}`).id = 'btnt12'
    document.getElementById(`${id_old_btn3[0].id}`).id = 'btnt13' 
    document.getElementById(`${id_old_screen[0].id}`).id = 'screent1' 
    document.getElementById(`${id_old_tools[0].id}`).id = 'toolst1' 
    document.getElementById(`${id_old_del[0].id}`).id = 'delt1' 
    document.getElementById(`${id_old_reset[0].id}`).id = 'resett1' 
    document.getElementById(`${id_old_igual[0].id}`).id = 'igualt1' 
}

function changeTheme2(){
    let id_old_body = document.getElementsByClassName('body')
    let id_old_options = document.getElementsByClassName('options')
    let id_old_buttonoption = document.getElementsByClassName('buttonoption')
    let id_old_btn1 = document.getElementsByClassName('btn1')
    let id_old_btn2 = document.getElementsByClassName('btn2')
    let id_old_btn3 = document.getElementsByClassName('btn3')
    let id_old_screen = document.getElementsByClassName('screen')
    let id_old_tools = document.getElementsByClassName('tools')
    let id_old_del = document.getElementsByClassName('del')
    let id_old_reset = document.getElementsByClassName('reset')
    let id_old_igual = document.getElementsByClassName('igual')

    document.getElementById(`${id_old_body[0].id}`).id = 'themet2' 
    document.getElementById(`${id_old_options[0].id}`).id = 'optionst2'  
    document.getElementById(`${id_old_buttonoption[0].id}`).id = 'buttonoptiont2'  
    document.getElementById(`${id_old_btn1[0].id}`).id = 'btnt21' 
    document.getElementById(`${id_old_btn2[0].id}`).id = 'btnt22'
    document.getElementById(`${id_old_btn3[0].id}`).id = 'btnt23' 
    document.getElementById(`${id_old_screen[0].id}`).id = 'screent2' 
    document.getElementById(`${id_old_tools[0].id}`).id = 'toolst2' 
    document.getElementById(`${id_old_del[0].id}`).id = 'delt2' 
    document.getElementById(`${id_old_reset[0].id}`).id = 'resett2' 
    document.getElementById(`${id_old_igual[0].id}`).id = 'igualt2' 
}


function changeTheme3(){
    let id_old_body = document.getElementsByClassName('body')
    let id_old_options = document.getElementsByClassName('options')
    let id_old_buttonoption = document.getElementsByClassName('buttonoption')
    let id_old_btn1 = document.getElementsByClassName('btn1')
    let id_old_btn2 = document.getElementsByClassName('btn2')
    let id_old_btn3 = document.getElementsByClassName('btn3')
    let id_old_screen = document.getElementsByClassName('screen')
    let id_old_tools = document.getElementsByClassName('tools')
    let id_old_del = document.getElementsByClassName('del')
    let id_old_reset = document.getElementsByClassName('reset')
    let id_old_igual = document.getElementsByClassName('igual')

    document.getElementById(`${id_old_body[0].id}`).id = 'themet3' 
    document.getElementById(`${id_old_options[0].id}`).id = 'optionst3'  
    document.getElementById(`${id_old_buttonoption[0].id}`).id = 'buttonoptiont3'  
    document.getElementById(`${id_old_btn1[0].id}`).id = 'btnt31' 
    document.getElementById(`${id_old_btn2[0].id}`).id = 'btnt32'
    document.getElementById(`${id_old_btn3[0].id}`).id = 'btnt33' 
    document.getElementById(`${id_old_screen[0].id}`).id = 'screent3' 
    document.getElementById(`${id_old_tools[0].id}`).id = 'toolst3' 
    document.getElementById(`${id_old_del[0].id}`).id = 'delt3' 
    document.getElementById(`${id_old_reset[0].id}`).id = 'resett3' 
    document.getElementById(`${id_old_igual[0].id}`).id = 'igualt3' 
}

let arr = []
let result = 0
let number = 0
let character = ""
let operator = ""

function clickNumber(num){    
    //number = parseFloat(num)
    arr.push(num)
    console.log(arr)
    //result = arr.join('')
    character = arr.join('')
    console.log(character)
    onchangeDisplay(character)
}

function resetOperation(){
    console.log(arr)
    arr = []
    console.log(arr)
    console.log(result)
    result = 0
    console.log(result)
    number = 0
    console.log(number)
    character = ""
    console.log(character)
    onchangeDisplay(result)
   
}

function delNumber(){
    console.log(arr)
    arr.pop()
    console.log(arr)
    character = arr.join('')
    console.log(character)
    onchangeDisplay(character)
}

function suma(){
    if(character.length !== 0){
        number = parseFloat(character)
        result = result + number
    }
    else{
        number = 0
        result = result + number
    }   
    character = ""
    arr = []
    number = 0
    operator = '+'
    console.log(result)
    onchangeDisplay(operator)
}

function resta(){
    if(character.length !== 0){
        number = parseFloat(character)
        if(result !== 0){
            result = result - number
        }
        else{
            result = number
        } 
    }
    else{
        number = 0
        if(result !== 0){
            result = result - number
        }
        else{
            result = number
        } 
    }  
    character = ""
    arr = []
    number = 0
    operator = '-'
    onchangeDisplay(operator)
}

function dividir(){
    if(character.length !== 0){
        number = parseFloat(character)
        if(result === 0){
            result = number
        }else{
            result = result / number
        }
        
    }
    else{
        number = 1
        result = result / number
    }   
    character = ""
    arr = []
    number = 0
    operator = '/'
    console.log(result)
    onchangeDisplay(operator)
}

function multiplicar(){
    if(character.length !== 0){
        number = parseFloat(character)
        if(result === 0){
            result = number
        }else{
            result = result * number
        }
        
    }
    else{
        number = 1
        result = result * number
    }   
    character = ""
    arr = []
    number = 0
    operator = '*'
    console.log(result)
    onchangeDisplay(operator)
}

function igual(){
    if(operator.length > 0){
        if(operator === '+'){
            number = parseFloat(character)
            result = result + number
            character = ""
            arr = []
            operator = ''
            number = 0
        }
        if(operator === '-'){
            number = parseFloat(character)
            result = result - number
            character = ""
            arr = []
            operator = ''
            number = 0
        }
        if(operator === '/'){
            number = parseFloat(character)
            result = result / number
            character = ""
            arr = []
            operator = ''
            number = 0
        }
        if(operator === '*'){
            number = parseFloat(character)
            result = result * number
            character = ""
            arr = []
            operator = ''
            number = 0
        }
    }
    console.log(result)
    onchangeDisplay(result)
}

function onchangeDisplay(result, number, character, operator){
    let location = document.getElementsByClassName('screen')
    console.log(location)
    if(result){
        location[0].innerText = result
    }else if(number){
        location[0].innerText = number
    }else if(character){
        location[0].innerText = character
    }else if(operator){
        location[0].innerText = operator
    }else{
        location[0].innerText = 0
    }

    

}

onchangeDisplay()