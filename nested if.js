document.write("<hr>");
document.write(" Nested If ");
document.write("<hr>");
var username = prompt("Username:");
var password = prompt("Password:");

if(username == "DewiSuhartini"){
    if(password == "dewisuhartini13"){
        document.write("<h2>Selamat Kamu Berhasil Login!</h2>");
    } else {
        document.write("<h2>Password Yang Anda Masukin salah, coba lagi!</h2>");
    }
} else {
    document.write("<h2>Anda tidak terdaftar!</h2>");
}