import { Board } from './board.js';

export class Program {
    constructor(width, height) {
      var board = new Board(width, height);
    }

  run() {
    alert('op');
    };

}

export function main() {
  alert('okkk');
  window.onload = function () {
    var program = new Program(50, 35);
    program.run();
  };
}