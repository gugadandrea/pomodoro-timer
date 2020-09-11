
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');
var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

// Declarando as variáveis dos inputs
var wm_init = 11 
var ws_init = 22
var bm_init = 33
var bs_init = 44

wm.innerText = wm_init;    
ws.innerText = ws_init;    
bm.innerText = bm_init;    
bs.innerText = bs_init;

// Criando variáveis para os valores dos minutos e segundos
var wm_input = document.getElementById('wm_init');
var ws_input = document.getElementById('ws_init');
var bm_input = document.getElementById('bm_init');
var bs_input = document.getElementById('bs_init');

wm_input.value = wm_init
ws_input.value = ws_init
bm_input.value = bm_init
bs_input.value = bs_init

//Atualiza as variáveis init com o input
wm_input.addEventListener("change", function(e){
    wm_init = e.target.value
})

ws_input.addEventListener("change", function(e){
    ws_init = e.target.value
})

bm_input.addEventListener("change", function(e){
    bm_init = e.target.value
})

bs_input.addEventListener("change", function(e){
    bs_init = e.target.value
})


//store a reference to a timer variable
var startTimer;

// Reduz o contador do cronômetro
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

// Configura os valores iniciais do relógio
reset.addEventListener('click', function(){
    wm.innerText = wm_init;
    ws.innerText = ws_init;
    bm.innerText = bm_init;
    bs.innerText = bs_init;


    //reseta o counter para 0
    document.getElementById('counter').innerText = 0;

    //para o loop
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = wm_init;
        ws.innerText = ws_init;

        bm.innerText = bm_init;
        bs.innerText = bs_init;

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}