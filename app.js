const btn1 = document.querySelector('.button1')
const btn2 = document.querySelector('.button2')
const btn3 = document.querySelector('.button3')
const btn4 = document.querySelector('.button4')
const btn5 = document.querySelector('.button5')
const btn6 = document.querySelector('.button6')
const btn7 = document.querySelector('.button7')
const btn8 = document.querySelector('.button8')
const btn9 = document.querySelector('.button9')
const btn0 = document.querySelector('.button0')
const btn_enviar = document.querySelector('.button-send')
const btn_clean = document.querySelector('.btn-clean')

const modal = document.querySelector('#exampleModalCenter')
var title_modal = document.querySelector('.modal-title')
var text_modal = document.querySelector('.text-modal')
var space = document.querySelector('.space-writer')
var numero;

var paragraph = document.createElement('p')
paragraph.classList.add('asterisco')
space.appendChild(paragraph)


var asterisco;

let contador = 0;

btn1.addEventListener('click', () =>
{
    contador++ 
    numero_1()
})
btn2.addEventListener('click', () =>
{
    contador++;
    numero_2()
})
btn3.addEventListener('click', () =>
{
    contador++;
    numero_3()
})
btn4.addEventListener('click', () =>
{
    contador++;
    numero_4()
})
btn5.addEventListener('click', () =>
{
    contador++;
    numero_5()
})
btn6.addEventListener('click', () =>
{
    contador++;
    numero_6()
})
btn6.addEventListener('click', () =>
{
    contador++;
    numero_6()
})
btn7.addEventListener('click', () =>
{
    contador++;
    numero_7()
})
btn8.addEventListener('click', () =>
{
    contador++;
    numero_8()
})
btn9.addEventListener('click', () =>
{
    contador++;
    numero_9()
})
btn0.addEventListener('click', () =>
{
    contador++;
    numero_0()
})

btn_enviar.addEventListener('click', () =>
{
    enviar_resposta()
})

btn_clean.addEventListener('click', () =>
{
    limpar()
})

function numero_1 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "1"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "1"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
    
}
function numero_2 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "2"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "2"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
}
function numero_3 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "3"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "3"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
    
}
function numero_4 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "4"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "4"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
    
}
function numero_5 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "5"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "5"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
    
}
function numero_6 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "6"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "1"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
    
}
function numero_7 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "7"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "7"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
    
}
function numero_8 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "8"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "8"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
    
}
function numero_9 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "9"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "9"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
    
    
}
function numero_0 ()
{
    if (contador == 1)
    {
        asterisco = "*"
        paragraph.innerHTML = "*"
        numero = "0"
    }
    else if (contador <= 4)
    {
        asterisco += "*"
        paragraph.innerText += "*"
        numero += "0"  
    }
    if (contador > 4)
    {
        contador = 4;
    }
    
}

function enviar_resposta ()
{
    if (contador >= 4)
    {
        if (numero == "1210")
        {
            contador = 0
            numero = " "
            paragraph.innerHTML = ""
            text_modal.innerHTML = "Parabéns, você acertou!"
            title_modal.innerHTML = "Acertou"
            title_modal.style.color = "green"
        }
        else 
        {
            contador = 0
            numero = " "
            paragraph.innerHTML = ""
            text_modal.innerHTML = "Eita, tente de novo..."
            title_modal.innerHTML = "Errou"
            title_modal.style.color = "red"
        }
    }
    else 
    {
        text_modal.innerHTML = "Dica: a senha tem 4 dígitos"
        title_modal. innerHTML = "Dica"
    }
}

function limpar ()
{
    numero = numero.slice(0,-1)
    asterisco = asterisco.slice(0,-1)
    paragraph.innerHTML = asterisco
    contador--;
}