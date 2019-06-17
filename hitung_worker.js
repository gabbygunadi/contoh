self.onmessage = function(e) {
  var amount = e.data[0];
  var bunga = e.data[1] / 100;
  var lama = e.data[2];
  var result = amount;

  for (var i = 0; i < lama; i++) {
    var akhir = result * bunga;
    result = parseInt(result) + (result * bunga);
  }

  result = Math.floor(result);

  postMessage(result);
}
