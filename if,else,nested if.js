document.write("<hr>");
document.write("If , Else");
document.write("<hr>");
var nilai = prompt("Inputkan nilai semester 5:");
    var grade = "";

    if (nilai >= 100){
        grade = "A+"
    } else if(nilai >= 90) {
        grade = "A"
    } else if(nilai >= 80) {
        grade = "B+"
    } else if(nilai >= 70) {
        grade = "B"
    } else if(nilai >= 60) {
        grade = "C+"
    } else if(nilai >= 50) {
        grade = "C"
    } else if(nilai >= 40) {
        grade = "D"
    } else if(nilai >= 30) {
         grade = "E"
    } else { 
        grade = "F";
    }
    document.write(`<h2>Nilai semester 5 anda: ${grade}</h2>`);