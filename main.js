left_wrist_x = ""

left_wrist_y = "";

right_wrist_x = "";

right_wrist_y = "";

function setup(){

    canvas = createCanvas(400,400);

    canvas.position(650,120);

    video = createCapture(VIDEO);

    video.size(550,500);

    posenet = ml5.poseNet(video , modelLoaded);

    posenet.on("pose" , getResults)

}

function modelLoaded(){

    console.log("Model loaded successfully");

}