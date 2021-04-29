var random = function(max) {
    return Math.floor(Math.random() * max) + 1 ;
};

export class LifeWorld {
    constructor(board, canvas) {
        this._canvas = canvas;
        this._board = board;

        this.timer = {};
        this.generationCountDom = document.getElementById('generationCount');
        this.generationCount = 0;
        // 状態が変化した時の処理 Boardオブジェクトが呼び出す
        this._board.onChange = (index, cell) => {
            var loc = this._board.toLocation(index);
            var color = cell.IsAlive ? '#508030' : '#FFFFFF';
            this._canvas.drawPoint(loc.x, loc.y, color);
        };
    }
    static lineCells = 50;

    // 開始
    start() {
        this.timer = setInterval(() => {
            this.generationCount++;
            var surviveCount = this._board.survive();
            this.generationCountDom.textContent = this.generationCount + "世代";
            if (surviveCount == 0) {
                this.stop();
                this.generationCountDom.textContent = 0 + "世代";
            }
        }, 200);
    };

    // 停止
    stop() {
        clearInterval(this.timer);
    };

    // クリア
    clear() {
        this._canvas.clearAll();
        this._board.clearAll();
        this.generationCountDom.textContent = 0 + "世代";
        this.generationCount = 0;
    };

    // ランダムに点を打つ
    random() {
        this.clear();
        var count = random(200) + 100;
        for (var i = 0; i < count; i++) {
            var x = random(this._board.width - 1);
            var y = random(this._board.height - 1);
            var ix = this._board.toIndex(x, y);
            this._board.reverse(ix);
        }
    };

    // ブロックを作成
    createBlock() {
        var count = 6;
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < count; j++) {
                this._board.clear(j + LifeWorld.lineCells * i);
            }
        }
        this._board.set(2 + LifeWorld.lineCells * 2);
        this._board.set(3 + LifeWorld.lineCells * 2);
        this._board.set(2 + LifeWorld.lineCells * 3);
        this._board.set(3 + LifeWorld.lineCells * 3);
    };

    // ブリンカーを作成
    createBlinker() {
        var count = 6;
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < count; j++) {
                this._board.clear(j + LifeWorld.lineCells * i);
            }
        }
        this._board.set(2 + LifeWorld.lineCells * 2);
        this._board.set(2 + LifeWorld.lineCells * 3);
        this._board.set(2 + LifeWorld.lineCells * 4);
    };

    // グライダーを作成
    createGlider() {
        var count = 6;
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < count; j++) {
                this._board.clear(j + LifeWorld.lineCells * i);
            }
        }
        this._board.set(2 + LifeWorld.lineCells * 2);
        this._board.set(3 + LifeWorld.lineCells * 2);
        this._board.set(4 + LifeWorld.lineCells * 2);
        this._board.set(2 + LifeWorld.lineCells * 3);
        this._board.set(3 + LifeWorld.lineCells * 4);
    };
}

