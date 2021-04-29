import { Board } from './board.js';
import { MyCanvas } from './canvas.js';
import { LifeWorld } from './lifeWorld.js';
export class Program {
    constructor() {

    }

  run() {
    alert('o');
    };

}

export function main() {
  alert('okkk');
  window.onload = function () {
    var program = new Program();
    program.run();
  };
}