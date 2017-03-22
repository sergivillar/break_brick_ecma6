class Board {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.brickColumnCount = 3;
		this.brickRowCount = 5;
		this.brickWidth = 75;
		this.brickHeight = 20;
		this.brickPadding = 10;
		this.brickOffsetTop = 30;
		this.brickOffsetLeft = 30;
		this.score = 0;
		this.lives = 3;
		this.bricks = this.initBricks();
	}

	initBricks() {
		let bricks = []
		for (let brickCol = 0; brickCol < this.brickColumnCount; brickCol++) {
		    bricks[brickCol] = [];
		    for (let brickRow = 0; brickRow < this.brickRowCount; brickRow++) {
		        bricks[brickCol][brickRow] = { x: 0, y: 0, status: 1 };
		    }
		}
		return bricks
	}

	update() {
		this.drawBricks();
		this.drawScore();
		this.drawLives();
	}

	drawBricks() {
	    for(let brickCol = 0; brickCol < this.brickColumnCount; brickCol++) {
	        for(let brickRow = 0; brickRow < this.brickRowCount; brickRow++) {
	            if(this.bricks[brickCol][brickRow].status == 1) {
	                let brickX = (brickRow * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
	                let brickY = (brickCol * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
	                this.bricks[brickCol][brickRow].x = brickX;
	                this.bricks[brickCol][brickRow].y = brickY;
	                this.ctx.beginPath();
	                this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
	                this.ctx.fillStyle = "#0095DD";
	                this.ctx.fill();
	                this.ctx.closePath();
	            }
	        }
	    }
	}

	drawScore() {
	    this.ctx.font = "16px Arial";
	    this.ctx.fillStyle = "#0095DD";
	    this.ctx.fillText(`Score: ${this.score}`, 8, 20);
	}

	drawLives() {
	    this.ctx.font = "16px Arial";
	    this.ctx.fillStyle = "#0095DD";
	    this.ctx.fillText(`Lives: ${this.lives}`, this.canvas.width - 65, 20);
	}	
}