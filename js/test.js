import { Board } from './board.js';
import { MyCanvas } from './canvas.js';

export class Program {
    constructor(width, height) {
      var board = new Board(width, height);
      var canvas = new MyCanvas('mycanvas', width, height);
      // this.world = new LifeWorld(board, canvas);
    }

  run() {
    alert('paa');
    };

}

export function main() {
  alert('ok');
  window.onload = function () {
    var program = new Program(50, 35);
    program.run();
  };
}