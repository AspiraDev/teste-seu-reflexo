let output = document.getElementById('contador');
let ms = 0;
let sec = 0;
let min = 0;

function timer() {
    ms++;
    if(ms >= 100){
        sec++
        ms = 0
    }
    if(sec === 60){
        min++
        sec = 0
    }
    if(min === 60){
        ms, sec, min = 0;
    }
    let milli = ms < 10 ? `0`+ ms : ms;
    let seconds = sec < 10 ? `0`+ sec : sec;
    let minute = min < 10 ? `0` + min : min;
    var timer= `${minute}:${seconds}:${milli}`;
    output.innerHTML =timer;
};

function comecar(){
 time = setInterval(timer,10);
}
function parar(){
    clearInterval(time)
}
function reset(){
    ms = 0;
    sec = 0;
    min = 0;
    output.innerHTML = `00:00:00`
}



var i = 1


dados = JSON.parse(localStorage.getItem('myItems'))

for (y = 0; y < dados?.length; y++){
  console.log(dados[y])

  $("#tempo").append(`    
<tr>
    <td>${dados[y].tentativa}</td>
    <td>${dados[y].quantidade}</td>	
    <td>${dados[y].media} seg</td>	
    <td>${dados[y].tempo}</td>	
    	</tr>
`)
}






function botao(val){

    
if (val == 'reiniciar'){
    
    var $res = $("#resultado");
    $res.empty();

    var $cax = $("#caixas");
    $cax.empty();

    var $rei = $("#reiniciar");
    $rei.empty();

    $("#resultado").text('COMECE 😉')
    
    $("#caixas").append(`<label class="container">
    <input id='cbx1' value='1' class='box' onclick='botao(this.value)' type="checkbox">
    <div class="checkmark"></div>
</label> `)
i = 1
reset()
}

var selecao = $("#selecao").val()





  
if (val == 1 & selecao != 0){
  $("#resultado").text('BORA⌛')
comecar()
}
var soma = sec + (ms/100)

var str = soma/selecao
str = str.toFixed(3)

if(dados == null) dados = [];
if (i == selecao){
var tamanho = dados?.length+1
if (tamanho == 0)  {
  tamanho = 1
}



  $("#tabela").css("visibility", "visible")
    $("#resultado").text('GANHOU🎉')
    $("#reiniciar").append(`<button class='reiniciar' value="reiniciar" onclick='botao(this.value)'>RENICIAR</button>`)

  $("#tempo").append(`    
  <tr>
    <td>${tamanho}</td>
    <td>${selecao}</td>	
    <td>${str} seg</td>	
    <td>${min}:${sec}:${ms}</td>	
    </tr>
    	
`)
  
    parar()
    i = 0 


  itens = {'tentativa': tamanho,
          'quantidade': selecao,
          'media': str,
          'tempo': `${min}:${sec}:${ms}`
}

    dados.push(itens);
     localStorage.setItem('myItems', JSON.stringify(dados));

    
}

if (i < parseInt(selecao)){
  
    
    if (parseInt(val) === i){
        document.getElementById("cbx"+i).disabled = true;
        i++
            var top = Math.floor(Math.random() * 400);
            var left = Math.floor(Math.random() * 1000);
        $("#caixas").append(`<label class="container" style="position: fixed; bottom: ${top}px; left: ${left}px;">
        <input id='cbx${i}' value='${i}' class='box' onclick='botao(this.value)' type="checkbox">
        <div class="checkmark"></div>
    </label>`)
    }
}}












$("#selecao").change(function(){
  $cax = $("#caixas") 
  $cax.empty()

  $cax = $("#iniciar") 
  $cax.empty()

      var $rei = $("#reiniciar");
    $rei.empty();

  
  $("#caixas").append(`<label class="container">
      <input id='cbx1' value="1" class='box' onclick='botao(this.value)' type="checkbox">
      <div class="checkmark"></div>
    </label> `)

      $("#iniciar").append(`<p >ClIQUE PARA INICIAR</p> `)
reset()
  i = 1

  
})




    


