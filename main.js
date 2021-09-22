var camera= document.getElementById("camera");
Webcam.set({
    width:270,
    height:200,
    dest_width:270,
    dest_height:200,
    image_format:'png',
    png_quality:100
});
Webcam.attach(camera);
function speak(){

var speaking = window.speechSynthesis;
    var dontspeakthis = "TAKING PHOTO IN 5 SECONDS";
    anotherobject = new SpeechSynthesisUtterance(dontspeakthis);
    speaking.speak(anotherobject);
    counter();
    setTimeout(function () {
        take_snapshot();

    }, 11000);
}
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}
function counter() {
     var speaking = window.speechSynthesis;
    for (var i = 5; i >= 1; i--) {

        var dontspeakthis = i;
        anotherobject = new SpeechSynthesisUtterance(dontspeakthis);
        speaking.speak(anotherobject);
    }
    var dontspeakthis = "YOUR HAND SAY CHEESE";
    anotherobject = new SpeechSynthesisUtterance(dontspeakthis);
    speaking.speak(anotherobject);
}
alert("Your device has " + ml5.version + " version of machine learning");
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vekF3l3ra/model.json",modelLoaded);
function modelLoaded(){
    alert("THE MODEL HAS LOADED SUCESSFULY");
}
function check(){
    img=document.getElementById("selfie_image");
    classifier.classify(img,gotResult);
}
function speak_pre(){
    var speaking = window.speechSynthesis;
    var dontspeakthis = "PREDICTION 1 IS"+prediction1;
    var dontspeakthis2 = "PREDICTION 2 IS"+prediction2;
    anotherobject = new SpeechSynthesisUtterance(dontspeakthis+dontspeakthis2);
    speaking.speak(anotherobject);
}
function speak_pre(){
    var speaking = window.speechSynthesis;
    var dontspeakthis = "PREDICTION 1 IS"+prediction1;
    var dontspeakthis2 = "PREDICTION 2 IS"+prediction2;
    anotherobject = new SpeechSynthesisUtterance(dontspeakthis+dontspeakthis2);
    speaking.speak(anotherobject);
}
function gotResult(error,results){
    if(error){
        alert("so so so so sorry to say, an error occoured "+error+"     PLEASE RETRY");
    }else{
        console.log(results)
       $("#result_emotion_name").html(results[0].label);
       prediction1=results[0].label;
       $("#result_emotion_name2").html(results[1].label);
       prediction2=results[1].label
       speak_pre();
       if(prediction1== "Victory"){
        $("#update_emoji").html("&#9996;");
       }
       if(prediction1== "Thumbs Up"){
        $("#update_emoji").html("&#128077;");
       } 
        if(prediction1== "Thumbs down"){
        $("#update_emoji").html("&#128078;");
       }
       if(prediction1== "Nice"){
        $("#update_emoji").html("&#128076;");
       }
       if(prediction1== "Clap"){
        $("#update_emoji").html("&#128079;");
       }
       if(prediction2== "Victory"){
        $("#update_emoji2").html("&#9996;");
       }
       if(prediction2== "Thumbs Up"){
        $("#update_emoji2").html("&#128077;");
       } 
        if(prediction2== "Thumbs down"){
        $("#update_emoji2").html("&#128078;");
       }
       if(prediction2== "Nice"){
        $("#update_emoj2").html("&#128076;");
       }
       if(prediction2== "Clap"){
        $("#update_emoji2").html("&#128079;");
       }
    }
}