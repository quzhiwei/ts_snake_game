import Snake from "./Snake"
import Food from "./Food"
import ScoreBoard from "./ScoreBoard";

class GameControl{
    snake:Snake;
    food:Food;
    scoreBoard:ScoreBoard;
    direction:string = '';
    alive:boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scoreBoard = new ScoreBoard(10,1);
        this.init();
    }

    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this));
        this.run();
    }

    keyDownHandler(event:KeyboardEvent){
        this.direction = event.key;
    }

    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;

        //根据方向修改x, y 值
        switch (this.direction){
            case "ArrowUp":
            case 'Up':
                Y -=10;
                break;
            case "ArrowDown":
            case 'Down':
                Y +=10;
                break;
            case "ArrowLeft":
            case 'Left':
                X -= 10;
                break;
            case "ArrowRight":
            case 'Right':
                X +=10;
                break;
        }
        this.grow(X,Y)

        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            alert(e.message);
            this.alive = false;
        }


        this.alive && setTimeout(this.run.bind(this),300 - (this.scoreBoard.level)*30);
    }

    grow(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.change();
            this.scoreBoard.addScore();
            this.snake.addBody();
        }
    }

}

export default GameControl;