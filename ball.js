class Ball {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.x = this.canvas.width / 2;
		this.y = this.canvas.height - 30;
		this.ballRadius = 10;
	}

	update () {
		this.draw();
	}

	draw() {
	    this.ctx.beginPath();
	    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
	    this.ctx.fillStyle = "#0095DD";
	    this.ctx.fill();
	    this.ctx.closePath();
	}
}