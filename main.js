difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(300,250);

    canvas = createCanvas(550,500)
    canvas.position(0,0)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded()
{
    console.log('Model is Loaded')
}