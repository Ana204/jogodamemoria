//fução para resetar 
function reset(){
  let resetar = document.getElementById("tabuleiro_id")
  let numero_de_cartas = resetar.children.length
  
  for (let i = numero_de_cartas -1; i >= 0; i--) 
    resetar.children[i].remove()
}

//array para setar os id das cartas
 let setId = [];

 for (let i = 0; i < 30; i++) {
   setId[i]= "carta"+(i+1);
 }
//array para setar as imagens no front-end

let DadosImg = [
  {class: "carta1", src:"alse.png"},
  {class:"carta2", src:"animalzinho.png"},
  {class:"carta3", src:"coala.png"},
  {class: "carta4", src:"elefante.png"},
  {class:"carta5", src:"esquilo.png"},
  {class:"carta6", src:"gato.png"},
  {class: "carta7", src:"girafa.png"},
  {class:"carta8", src:"papagaio.png"},
  {class:"carta9", src:"passaro.png"},
  {class: "carta10", src:"pato.png"},
  {class:"carta11", src:"ra.png"},
  {class:"carta12", src:"tartaruga.png"},
  {class: "carta13", src:"tigre.png"},
  {class:"carta14", src:"urso.png"},
  {class:"carta15", src:"urso2.png"}

];
//variaveis global
//variavel de controle para contabilizar a posição do array
//armazena osn atributos dizendo se é iguais ou não 
//as cartas viradas serão armazenada no array cardVirada
 let cardVirada_controle = 0;
 let verificar_Cartas_Igual = [];
 let cardVirada = [];


function virarCarta()
{
  //peguei o id do tabuleiro, e armazenei na variavel tabuleiro
  //pegando o número de cartas do tabuleiro,e armazenando na variavel tabuleiro
  //iniciando um array de cartas_selecionadas
  let tabuleiro = document.getElementById("tabuleiro_id");
  let numeros_de_cartas = tabuleiro.children.length
  let cartas_selecionada = []

  
  //estrutura de petição: se o meu array for menor que dois, então faça:
  if (cardVirada.length < 2)
   {

    //a carta que for virada, ou seja disparar o evento o id da propria será armazenado na variavel carta
    let carta = document.getElementById(event.currentTarget.id);

    //Função para virar e desvirar as cartas 
    carta.children[0].classList.toggle("invisivel");
    carta.children[1].classList.toggle("invisivel");

    carta.children[0].classList.toggle("visivel");
    carta.children[1].classList.toggle("visivel");

    //formando um array que mostra o estado da carta,se esta visivel ou invisivel do front
    for (let i = 0; i < numeros_de_cartas; i++) {
      cartas_selecionada[i] = tabuleiro.children[i].children[1].classList[1]
      
    }
    //logica da pontuação, e finalização do jogo
    let ponto = 0
    cartas_selecionada.forEach(element => {
      if (element == "visivel"){
        ponto++
      }else{
        return
      }
      if (ponto == numeros_de_cartas ) {
        alert("Você ganhou!!")
      }
      
    });
    
    
    //Armazena a carta selecionada, ou seja a carta na qual esta virada e guarda no array cardVirada
    cardVirada[cardVirada_controle] = carta;

    //pegando um array que verrifica se as classes das cartas viradas são iguais
    verificar_Cartas_Igual[cardVirada_controle] = carta.classList[1];
    cardVirada_controle++
    return

  }
  //se as cartas forem iguais, torna o front permanentemente visivel 
  else if(verificar_Cartas_Igual[0] == verificar_Cartas_Igual[1]){
  
  cardVirada[0].children[1].classList.add("visivel")
  cardVirada[1].children[1].classList.add("visivel")

  //reseta a variavel de controle e array, para a proxima chamada da função
  cardVirada_controle = 0;  cardVirada = [];
  return
  }

   else{
      for (let i = 0; i < 2; i++) 
      {
       
        card_back = cardVirada[i].children[0].classList;
        card_back.remove("invisivel");
        card_back.add("visivel");
        console.log(card_back);

        card_front = cardVirada[i].children[1].classList;
        card_front.remove("visivel");
        card_front.add("invisivel");
        console.log(card_front);
      }

      //reseta a variavel de controle e array, para a proxima chamada da função
      cardVirada_controle = 0;
      cardVirada = [];
   }
}

function comecar() {

    let nome = document.getElementById("nome_id").value;
    let nivel = document.getElementById("nivel_id").value;
    let numero_de_cartas = 0;
    let tabuleiro = document.getElementById("tabuleiro_id");

    switch (nivel) {
        case "Fácil":
          numero_de_cartas = 12;
            
        break;

        case "Médio":
          numero_de_cartas = 20;
            
        break;

        case "Difícil":
          numero_de_cartas = 30;
            
        break;

        default:
            break;
    } 


    //array para buscar no banco de dados, imagens aleatorias
    let array_img = [];

    //Enquanto o tamanho do meu array(setImg) for menor que o meu número de cartas, o loop vai se repetir até o determinado das cartas
    while(array_img.length < numero_de_cartas)
    {

      //gerando um número aleatorio de 0 a 15
      let num_aleatorio = Math.floor(Math.random() * 15);

      console.log(num_aleatorio)

       //esta variavel irá pegar um src aleatorio do meu banco de dados da img
       let verifica = DadosImg[num_aleatorio]

       //verificando se o meu src ja existe no meu array_img, se sim 
       if (array_img.indexOf(verifica) == -1)
       {
        //Dois push porque vou precisar de 2 imagens com o mesmo src.
            array_img.push(verifica);
            array_img.push(verifica);


       }

    }

    //estrutura para embaralhar as cartas 3 vezes;
    for (let i = 0; i < 3; i++) 
    {
      array_img.sort(function(a,b){return 0.5 - Math.random()});
      
    }
    let divCard = null;
    let face_back = null;
    let img_back = null;
    let face_front = null;
    let img_front = null;
    let set_id = null;
    let imgCard= null;
    let class_card = null;
  
    for (let i = 0; i < numero_de_cartas; i++) {   
    
           set_id = setId[i];

           //O array_img vai pegar uma carta, jogar para a variavel imgCard, e depois exluir para não repetir a carta
           class_card = array_img[0].class;
           imgCard = array_img[0].src;
           array_img.shift();
           

        divCard=document.createElement("div");
        divCard.setAttribute("class", "card");
        divCard.classList.add(class_card);
        divCard.setAttribute("id",set_id);
        divCard.setAttribute("onclick","virarCarta()");

        face_back=document.createElement("div");
        face_back.setAttribute("class", "face_back visivel");
        
        img_back=document.createElement("img");
        img_back.setAttribute("src", "img.png");
        img_back.setAttribute("width", "60%");
        img_back.setAttribute("height", "60%");
        img_back.setAttribute("style","opacity:70%");

        
        face_front=document.createElement("div");
        face_front.setAttribute("class", "face_front invisivel");

        img_front=document.createElement("img");
        img_front.setAttribute("src",imgCard);
        img_front.setAttribute("width", "60%");
        img_front.setAttribute("heigth", "60%");
        img_front.setAttribute("style","opacity:90%");
        
        face_back.appendChild(img_back);
        face_front.appendChild(img_front);
        divCard.appendChild(face_back);
        divCard.appendChild(face_front);
        tabuleiro.appendChild(divCard);

    }
}