class Tabungan{
  constructor(nama = "", id = "", uang = 0){
    this.nama = nama
    this.id = id
    this.uang = uang
  }
  set setnama(nama) {
          this.nama = nama
  }
  set setid(id) {
          this.id = id
  }
  set setuang(uang) {
          this.uang = uang
  }

  get getnama() {
          return `${this.nama}`
  }
  get getid() {
          return `${this.id}`
  }
  get getuang() {
          return `${this.uang}`
  }

  hitung_bunga(bunga, lama){
    var hasil = this.uang
    var suku = bunga / 100
    for (var i = 0; i < lama; i++) {
      hasil = hasil + (hasil* suku)
    }
    hasil = Math.floor(hasil)
		return hasil
	}
}
