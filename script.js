function comecar() {
    let nome = document.getElementById("nome_id").value;
    let nivel = document.getElementById("nivel_id").value;
    let numero_de_cartas = 0;
    let tabuleiro = document.getElementById("tabuleiro_id");
    
    

    switch (nivel) {
        case "facil":
          numero_de_cartas = 20;
            
        break;

        case "medio":
          numero_de_cartas = 40;
            
        break;

        case "dificil":
          numero_de_cartas = 60;
            
        break;

        default:
            break;
    } 
    let divCard = null;
    let face_back = null
    let img_back = null
    let face_front = null
    let img_front = null

    for (let i = 0; i < numero_de_cartas; i++) {   
    
        divCard=document.createElement("div");
        divCard.setAttribute("class", "card");
        
        face_back=document.createElement("div");
        face_back.setAttribute("class", "face_back");
        
        img_back=document.createElement("img");
        img_back.setAttribute("src", "img.png");
        img_back.setAttribute("width", "80px");
        img_back.setAttribute("height", "80px");
        img_back.setAttribute("style","opacity:85%");

        /*face_front=document.createElement("div");
        face_front.setAttribute("class", "face_front");

        img_front=document.createElement("img");
        img_front.setAttribute("src","imag.png");*/
        
        
    }
    /*<div class="card">
    <div class = "face_back"><img src="img.png" width="80px" height="80px" style="opacity: 85%;" />
    //<div class = "face_font"><img src="imag">
     </div>  
    */
}