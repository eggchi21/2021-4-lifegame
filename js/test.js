export class Program {
    constructor() {

    }

  run() {
    alert('k');
    };

}

export function test() {
  alert('okkk');
  window.onload = function () {
    var program = new Program();
    program.run();
  };
}