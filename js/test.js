
export class Program {
  constructor(width, height) {
      import { Board } from './board.js';
      import { MyCanvas } from './canvas.js';
      import { LifeWorld } from './lifeWorld.js';
      var board = new Board(width, height);
      var canvas = new MyCanvas( 'mycanvas', width, height);
      this.world = new LifeWorld(board, canvas);
    }

  run() {
    alert('o');
    };

}

export function main() {
  alert('okkk');
  window.onload = function () {
    var program = new Program(50, 35);
    program.run();
  };
}