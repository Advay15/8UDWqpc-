screen_height = 0;
screen_width = 0;
x = 0;
y = 0;
draw_apple = "";
number = "";
apple="";
speak_data="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please tell a number";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);

    content = event.results[0][0].transcript;
    number = Number(content);
    console.log(number);


    if (Number.isInteger(number)) {

        document.getElementById("status").innerHTML = "Start drawing apples";
        console.log(number + " Apples are drawn")
        draw_apple = "set";
    }
    else {

        document.getElementById("status").innerHTML = "The speech has not recognised a number ";
    }
}
function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(10, 150)
}
function preload() {
    // apple = loadImage("https://i.postimg.cc/25vPt0SF/rotten.png");
apple=loadImage('rotten.png');
}
function draw() {
    console.log(draw_apple);
    if (draw_apple == "set") {
        console.log(number);
        document.getElementById("status").innerHTML= number + " Apples are drawn";
        for (i = 1; i <= number; i++) {
            X = Math.floor(Math.random() * 700);
            Y = Math.floor(Math.random() * 500);
            image(apple, X, Y, 29, 29)
        }
        draw_apple = "";
        synth= window.speechSynthesis;
        speak_data= number + " Apples are drawn";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }


}
