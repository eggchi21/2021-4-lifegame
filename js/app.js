import { Board } from './board.js';
import { MyCanvas } from './canvas.js';
import { LifeWorld } from './lifeWorld.js';
export class Program {
    constructor(width, height) {
        var board = new Board(width, height);
        var canvas = new MyCanvas( 'mycanvas', width, height);
        this.world = new LifeWorld(board, canvas);

        this.dragState = 0;

        canvas.onMouseDown = (x, y, shiftKey) => {
            this.dragState = 1;
        };

        canvas.onMouseMove = (x, y, shiftKey) => {
            if (this.dragState >= 1) {
                if (shiftKey)
                    board.clear(board.toIndex(x, y));
                else
                    board.set(board.toIndex(x, y));
                this.dragState = 2;
            }
        };

        canvas.onMouseUp = (x, y, shiftKey) => {
            if (this.dragState === 1) {
                board.reverse(board.toIndex(x, y));
            }
            this.dragState = 0;
        };

    }

    run() {
        document.getElementById('startButton').addEventListener('click', () => this.start(), false);
        document.getElementById('stopButton').addEventListener('click', () => this.stop(), false);
        document.getElementById('clearButton').addEventListener('click', () => this.clear(), false);
        document.getElementById('randomButton').addEventListener('click', () => this.random(), false);
        document.getElementById('createBlockButton').addEventListener('click', () => this.createBlock(), false);
        document.getElementById('createBlinkerButton').addEventListener('click', () => this.createBlinker(), false);
        document.getElementById('createGliderButton').addEventListener('click', () => this.createGlider(), false);
    };

    start() {
        this.world.start();
    };

    stop() {
        this.world.stop();
    };

    clear() {
        this.world.stop();
        this.world.clear();
    };

    random() {
        this.world.random();
    };

    createBlock() {
        this.world.createBlock();
    };

    createBlinker() {
        this.world.createBlinker();
    };

    createGlider() {
        this.world.createGlider();
    };
}

export function main() {
    alert('okooo');
    window.onload = () => {
        var program = new Program(50, 35);
        program.run();
    };
}
