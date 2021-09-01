noseX="";
noseY="";

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    model=ml5.poseNet(video,modelLoaded);
    model.on("pose",getResults);
}

function preload(){
    mustache=loadImage("https://i.postimg.cc/TPYr2NdH/image.png")
}

function draw(){
    image(video,0,0,600,400);
    image(mustache,noseX,noseY,100,50)
}

function modelLoaded(){
    console.log("Model loaded.")
}

function getResults(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-65;
        noseY=results[0].pose.nose.y-30;
    }
}

function downloadImage(){
    save("myStache.png");
}