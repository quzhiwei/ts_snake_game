class Snake{
    snakeHead:HTMLElement;
    snakeBody:HTMLCollection;
    snake:HTMLElement;
    constructor() {
        this.snake = document.getElementById('snake')!;
        this.snakeHead = document.querySelector('#snake>div')!;
        this.snakeBody = this.snake.getElementsByTagName('div');
    }

    get X(){
        return this.snakeHead.offsetLeft;
    }
    get Y(){
        return this.snakeHead.offsetTop;
    }
    set X(value){
        if(this.X === value) return;
        if(value < 0 || value > 290)throw new Error('Game Over');
        if(this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetLeft===value) {
            if(value>this.X){
                value = this.X -10;
            }else{
                value = this.X + 10;
            }
        }


        this.moveBody();
        this.snakeHead.style.left = value + 'px';
        this.collision();

    }
    set Y(value){
        if(this.Y === value) return;
        if(value < 0 || value > 290)throw new Error('Game Over');
        if(this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetTop===value) {
            if(value>this.Y){
                value = this.Y -10;
            }else{
                value = this.Y + 10;
            }
        }


        this.moveBody();
        this.snakeHead.style.top = value+ 'px';
        this.collision();
    }

    addBody(){
        this.snake.insertAdjacentHTML("beforeend","<div></div>");
    }

    moveBody(){
        for(let i= this.snakeBody.length -1; i>0 ;i--){
            let X = (this.snakeBody[i-1] as HTMLElement).offsetLeft;
            let Y = (this.snakeBody[i-1] as HTMLElement).offsetTop;
            (this.snakeBody[i] as HTMLElement).style.left = X + 'px';
            (this.snakeBody[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    collision(){
        for(let i = 1; i<this.snakeBody.length; i++){
            let bd = this.snakeBody[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('Game Over');
            }
        }
    }
}

export default Snake;