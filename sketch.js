// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;


// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let colidiu = false;

function preload(){
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}


function setup() {
  createCanvas(600,400);
  trilha.loop();
}


function draw() {
  background(147,112,219);
  mostraBolinha();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  movimentaBolinha();
  mudaTamanho();
  verificaColisaoBorda();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  }

  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;


function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  
 }

function mostraBolinha() {
  fill(106,90,205)
  circle(xBolinha,yBolinha,diametro);

}

function movimentaBolinha(){
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function mudaTamanho(){
  diametro = 30;
  }

// variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

function mostraRaquete(x,y){
  fill(75,0,130)
  rect(x,y,raqueteLargura,raqueteAltura)
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
    }

  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }

}


function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);

  if (colidiu){
    
    velocidadeXBolinha *= - 1;
    raquetada.play();
    
  }
  
}

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente ;


function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteLargura/2 - 30;
  yRaqueteOponente += velocidadeYOponente

}

let meusPontos = 0;
let pontosOponente = 0;

function incluiPlacar(){
  stroke("white");
  textAlign(CENTER, BASELINE);
  textSize(16);
  fill('white')
  
  //placar meusPontos
  fill(131,111,255);
  rect(135,10,35,20);
  fill("white");
  text(meusPontos,150,26);
  
  //placar pontosOponente
  fill(131,111,255);
  rect(430,10,35,20);
  fill("white");
  text(pontosOponente,450,26);
  
}
function marcaPonto(){
  
  if (xBolinha >590){
    meusPontos += 1;
    ponto.play(); 
  }

  if (xBolinha < 10){
    pontosOponente +=1;
    ponto.play();
  }
  
}
function movimentaRaqueteOponente(){
  
  if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }

  if(keyIsDown(83)){
    yRaqueteOponente += 10;
  }
  
  
}

//sons do jogo

let ponto;
let trilha;
let raquetada;



