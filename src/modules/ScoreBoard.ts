
class ScoreBoard{
    score:number = 0;
    level:number = 1;
    scoreElement:HTMLElement;
    levelElement:HTMLElement;

    //最大等级
    maxLevel:number;
    //升级所需经验
    exp:number

    constructor(maxLevel:number = 10, exp:number = 10) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.exp = exp;
    }

    addScore(){
        // this.score++;
        this.scoreElement.innerHTML = ++this.score + '';
        if(this.score%this.exp ===0) this.levelUp()
    }

    levelUp(){
        if(this.level < this.maxLevel) this.levelElement.innerHTML = ++this.level + '';

    }
}

export default ScoreBoard