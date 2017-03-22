class Player {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.rightPressed = false;
		this.leftPressed = false;
		this.paddleHeight = 10;
		this.paddleWidth = 75;
		this.paddleX = (this.canvas.width - this.paddleWidth) / 2;

		document.addEventListener('keyup', (e) => this.keyUpHandler(e));
		document.addEventListener('keydown', (e) => this.keyDownHandler(e));
	}

    keyUpHandler (event) {
		if (event.keyCode === 39) this.rightPressed = false;
	    else if (event.keyCode === 37) this.leftPressed = false;
    }

    keyDownHandler(event) { 
		if (event.keyCode === 39) this.rightPressed = true;
		else if(event.keyCode === 37) this.leftPressed = true;
	}

	update () {
		this.draw();
	}

	draw() {
	    this.ctx.beginPath();
	    this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
	    this.ctx.fillStyle = "#0095DD";
	    this.ctx.fill();
	    this.ctx.closePath();
	}
}