import { Board } from './board.js';
import { MyCanvas } from './canvas.js';
import { LifeWorld } from './world.js';

export class Program {
    constructor(width, height) {
      var board = new Board(width, height);
      var canvas = new MyCanvas('mycanvas', width, height);
      var world = new LifeWorld(board, canvas);
    }

  run() {
    alert('pyyyuuu');
    };

}

export function main() {
  alert('ok');
  window.onload = function () {
    var program = new Program(50, 35);
    program.run();
  };
}