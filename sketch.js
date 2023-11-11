let numOfPhotos = 44;

let photos = [];
let movingPhotos = [];

var backgroundColor;

let img;

let numArr = [];

function preload()
{
    for(i = 0 ; i < numOfPhotos ; i++)
    {
        photos[i] = loadImage((i + 1) + ".JPG");
        numArr[i] = i;
    }
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);

    backgroundColor = color(155,155,155);

    for(i = 0 ; i < numOfPhotos ; i++)
    {
        chosenPhoto = random(numArr);

        index = numArr.indexOf(chosenPhoto);
        numArr.splice(index, 1);
        
        movingPhotos[i] = new MovingPhoto(photos[chosenPhoto]);
    }
}

function draw()
{
    background(backgroundColor);
    for(i = 0; i < numOfPhotos ; i++)
    {
        //movingPhotos[i].FadePhoto(backgroundColor);
        movingPhotos[i].DrawPhoto();
        movingPhotos[i].MovePhoto();
    } 
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}