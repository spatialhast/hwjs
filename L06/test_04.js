run: function runCircle(arg) {
    var w = arg;
    function runCir(){
      circle.move(w);
      setTimeout(runCir, 15000);
    };
    runCir();
    }