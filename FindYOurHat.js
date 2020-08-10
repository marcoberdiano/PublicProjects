const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const currentPosition = {x : 0, y: 0};
let win = false;

class Field {

  constructor(field){
    this._field = field;
  }

  print(){
    this._field.forEach(fout => {
     let stringField='';
     fout.forEach(fin =>{
      stringField+=fin;
     }) 
     console.log(stringField);
    });
  }

  incremetPosition(position){
      if(position=='r'){
        currentPosition.x++;
      } else if(position=='d'){
        currentPosition.y++;
      } else if(position=='l'){
        currentPosition.x--;
      } else if(position=='u'){
        currentPosition.y--;
      }
  }

  move(direction){
    let gameOver = false;

    if(direction!=='r' && direction!=='d' && direction !=='l' && direction!=='u'){
        console.log('Invalid input.');
    } else {
        this.incremetPosition(direction);
        if(this._field[currentPosition.y][currentPosition.x]==fieldCharacter){
            this._field[currentPosition.y][currentPosition.x] = pathCharacter;
        } else if(this._field[currentPosition.y][currentPosition.x]==hole) {
            gameOver = true;
            console.log('Game Over! You fell down into the hole!');
        } else if(this._field[currentPosition.y][currentPosition.x]==hat) {
            gameOver = true;
            console.log('Congrats! You found the hat!');
        }else {
            gameOver = true;
            console.log('Game Over! Out of limit');
        }
    }
        
    return gameOver;

    }

    static generateField(heigth, width){
      // 16% of hole in the field
      const fieldElements = [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter,hole];
      const field = [];
      //const startField = [pathCharacter];
      let hatPositionCoordx=0;
      let hatPositionCoordy=0;
    
      /* start field in the coord (0,0)
      let s = 1;
      while(s<width){
        let randomElement = Math.floor(Math.random()*fieldElements.length);
        startField.push(fieldElements[randomElement]);
        s++;
      }
      field.push(startField);*/

      // gen holes and fild
      for(let i=0; i<heigth;i++) {
        let  fieldCompenent= [];
        for(let j=0;j<width;j++) {
          let randomElement = Math.floor(Math.random()*fieldElements.length);
          fieldCompenent.push(fieldElements[randomElement]);
        }
        field.push(fieldCompenent);
      }

      // place hat in the field and never in the coord (0,0)
      while(true){
        hatPositionCoordx = Math.floor(Math.random()*width);
        hatPositionCoordy = Math.floor(Math.random()*heigth);
        if(hatPositionCoordx!==0 || hatPositionCoordy!==0){
          field[hatPositionCoordy][hatPositionCoordx] = hat;
          break;
        }
      }

      // place start position random in the field
      while(true){
        currentPosition.x = Math.floor(Math.random()*width);
        currentPosition.y = Math.floor(Math.random()*heigth);
        if(currentPosition.x!==hatPositionCoordx || currentPosition.y!==hatPositionCoordy){
          field[currentPosition.y][currentPosition.x] = pathCharacter;
          break;
        }
      }
      return field;
    }
}

let genField=1;
console.log('1 - Small');
console.log('2 - Normal');
console.log('3 - Large');
const size = prompt('Choose the size of the map: ');
switch(size) {
  case '1':
    genField = Field.generateField(8,8);
    break;
  case '2':
    genField = Field.generateField(16,16);
    break;
  case '3':
    genField = Field.generateField(32,32);
    break;
  default:
    console.log('Invalid input. The map is normal by default.')
    genField = Field.generateField(16,16);
    break;
}

const myField = new Field(genField);
myField.print();
while(!win){
    const direction = prompt('Which diretion? ');
    win = myField.move(direction);
    myField.print();
}
