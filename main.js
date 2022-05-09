left_wrist = ""

right_wrist = "";

difference = "";


function setup(){

    canvas = createCanvas(400,400);

    canvas.position(650,120);

    video = createCapture(VIDEO);

    video.size(400,400);

    posenet = ml5.poseNet(video , modelLoaded);

    posenet.on("pose" , getResults)

}


function modelLoaded(){

    console.log("Model loaded successfully");

}

function getResults(results){

  if (results.length > 0) { 
      
    console.log(results);

    left_wrist = results[0].pose.leftWrist.x;

    right_wrist = results[0].pose.rightWrist.x;

    difference = floor(left_wrist- right_wrist);

    console.log(difference);

    

    }
}

function draw(){

    background('#6C91C2');

    textSize(difference);
    
    fill('#FFE787');

    text('Text',50,400);


}
