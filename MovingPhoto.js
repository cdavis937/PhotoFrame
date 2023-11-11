class MovingPhoto
{
    constructor(img)
    {
        // get how large the image will be after it is scaled down
        this.img = img;
        
        this.width = this.img.width;
        this.height = this.img.height;

        let scaler = random(6, 14);
        if(this.img.width > this.img.height)
        {
            while(this.width > windowWidth)
            {
                this.width = this.width / scaler;
                this.height = this.height / scaler;
            }
        }
        else
        {
            while(this.height > windowHeight)
            {
                this.width = this.width / scaler;
                this.height = this.height / scaler;
            }
        }

        this.x = random(0, windowWidth - this.width);
        this.y = random(0, windowHeight - this.height);

        this.vecX = random(-2, 2);
        this.vecY = random(-2, 2);

        this.fadeFactor = random(0 , 255);
        console.log(this.fadeFactor);
    }

    MovePhoto()
    {
        this.x += this.vecX;
        this.y += this.vecY;

        if(this.x < 0 || this.x > windowWidth - this.width)
        {
            this.vecX = this.vecX * -1;
        }

        if(this.y < 0 || this.y > windowHeight - this.height)
        {
            this.vecY = this.vecY * -1;
        }
    }

    DrawPhoto()
    {
        image(this.img, this.x, this.y, this.width, this.height);
    }

    FadePhoto(backgroundColor)
    {
        tint(255, this.fadeFactor);
    }
}