class Game {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.board = new Board(this.canvas, this.ctx);
        this.player = new Player(this.canvas, this.ctx);
        this.ball = new Ball(this.canvas, this.ctx);

        this.dx = 2;
        this.dy = -2;
    }

    update () {
        this.board.update();
        this.player.update();
        this.ball.update();
    }

    collisionDetection() {
        for (let brickCol = 0; brickCol < this.board.brickColumnCount; brickCol++) {
            for (let brickRow = 0; brickRow < this.board.brickRowCount; brickRow++) {
                let brick = this.board.bricks[brickCol][brickRow];
                if (brick.status === 1) {
                    if(this.ball.x > brick.x && this.ball.x < brick.x + this.board.brickWidth && this.ball.y > brick.y && this.ball.y < brick.y + this.board.brickHeight) {
                        this.dy = -this.dy;
                        brick.status = 0;
                        this.board.score++;
                        if(this.board.score === this.board.brickRowCount * this.board.brickColumnCount) {
                            alert("YOU WIN, CONGRATS!");
                            document.location.reload();
                        }
                    }
                }
            }
        }   
    }

    play() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.update();
        this.collisionDetection();
        
        if (this.ball.x + this.dx > this.board.canvas.width - this.ball.ballRadius || this.ball.x + this.dx < this.ball.ballRadius) {
            this.dx = -this.dx;
        }
        if (this.ball.y + this.dy < this.ball.ballRadius) {
            this.dy = -this.dy;
        } else if (this.ball.y + this.dy > this.board.canvas.height - this.ball.ballRadius) {
            if(this.ball.x > this.player.paddleX && this.ball.x < this.player.paddleX + this.player.paddleWidth) {
                this.dy = -this.dy;
            } else {
                this.board.lives--;
                if(!this.board.lives) {
                    alert("GAME OVER");
                    document.location.reload();
                } else {
                    this.ball.x = this.board.canvas.width / 2;
                    this.ball.y = this.board.canvas.height - 30;
                    this.player.paddleX = (this.board.canvas.width - this.player.paddleWidth) / 2;
                }
            }
        }
        if (this.player.rightPressed && this.player.paddleX < this.board.canvas.width - this.player.paddleWidth) {
            this.player.paddleX += 7;
        }
        else if (this.player.leftPressed && this.player.paddleX > 0) {
            this.player.paddleX -= 7;
        }
        
        this.ball.x += this.dx;
        this.ball.y += this.dy;
        requestAnimationFrame(() => { this.play() });
    }
}

let game = new Game();
game.play();