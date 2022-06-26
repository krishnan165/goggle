Eyex=0;
Eyey=0;

function preload()
{
   skiing_goggles=loadImage("https://i.postimg.cc/x1ZmHqN8/2.png");
}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    
    video.size(400,400);
    video.center();
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw()
{
   image(video,0,0,400,400);
   image(skiing_goggles,Eyex,Eyey,130,80);
}

function modelLoaded()
{
    console.log("PoseNet is working");

}
function snapshot()
{
    save("sap_img.png");
}
function gotPoses(results)
{
 Eyex=results[0].pose.rightEye.x-40;  
 Eyey=results[0].pose.rightEye.y-60;
    if(results.length>0)
    {
        console.log(results);
        console.log("Right_Eye X="+Eyex);
        console.log("Right_Eye Y="+Eyey);
        console.log("Left_Eye X="+results[0].pose.leftEye.x);
        console.log("Left_Eye Y="+results[0].pose.leftEye.y);
    }
}
