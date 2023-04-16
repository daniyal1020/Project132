Status = "";
function preload(){
    img = loadImage('bedroom.jpg');
}
function setup(){
    canvas = createCanvas(550, 500);
    canvas.center();
}
function start(){
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = ' Status : Detecting Objects';
}
function modelLoaded(){
    console.log('CocoSSD is Initialised');
    Status = 'true';
    object_detector.detect(img, gotResults);
}
function gotResults(error, result){
    if(error){
        console.error(error);
    }
    console.log(result);
}