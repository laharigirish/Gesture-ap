prediction="";


Webcam.set({
    width:350,
    height: 300,
    image_format :'png',
    image_quality:90

});

camera= document.getElementById("camera");
Webcam.attach('#camera');

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='captured_image' src='"+ data_uri +"'>";
    });
} 

console.log(ml5.version);
Classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D4ycVTHoV/model.json', modelloaded);

function modelloaded(){
    console.log("Model Loaded");
}

function speak(){
    var Synth= window.speechSynthesis;
    speak_1= "The prediction is" + prediction;
    var utter_this= new SpeechSynthesisUtterance(speak_1);


}