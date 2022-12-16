function preload()
{
}
function setup()
{
    canvas= createCanvas(600,550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,100,70,400,400);
    fill("red");
    stroke("green");
    circle(50,50,100);
    circle(550,50,100);
    circle(50,500,100);
    circle(550,500,100);
}
function takeSnapshot()
{
    save('Snapshot');
}