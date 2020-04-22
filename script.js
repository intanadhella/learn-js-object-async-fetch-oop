const manusia = {
    name: 'intan'
    lasName: 'adela'
    // getFullName: function(){
    getFullName(){
        return (`${this.name} ${this.lastName}`)
    },
    changeName(namaYangDiubah){
        this.name = namaYangDiubah;
    }
}

console.log(manusia.getFullName());
let namaLengkap = manusia.getFullName();
console.log(namaLengkap);

manusia.changeName('putri');
namaLengkap = manusia.getFullName();
console.log(namaLengkap)

// Date function

const date = new Date();

const tanggal = `${date.getDate()} / ${}`
    