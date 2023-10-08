document.write("<hr>");
document.write("Switch Case");
document.write("<hr>");
var jawab = prompt("undian berhadiah! Silahkan pilih hadiahmu dengan memasukan angka 1 sampai 10");
var hadiah = "";

switch(jawab){
    case "1":
        hadiah = "aqua sedang 1 kotak";
        break;
    case "2":
        hadiah = "1 Kotak bubuk teh";
        break;
    case "3":
        hadiah = "gula 1 kg";
        break;
    case "4":
        hadiah = "Minyak 2 kg";
        break;
    case "5":
        hadiah = "Uang Rp 100.000";
        break;
     case "6":
        hadiah = "pulsa senilai Rp 20.000";
        break;
    case "7":
         hadiah = "tiket trevelling ke-bali";
        break;
    case "8":
        hadiah = "tiket umroh";
        break;
     case "9":
        hadiah = "uang tunai Rp.1.000.000 ";
       break;
    case "10":
         hadiah = "1 karung goni";
       break;
    default:
        document.write("<p>Opps! anda salah pilih</p>");
}

if(hadiah === ""){
    document.write("<p>Kamu gagal mendapat hadiah,coba lagi!</p>");
} else {
    document.write("<h2>Selamat kamu mendapatkan " + hadiah + "</h2>");
}