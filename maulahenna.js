//<![CDATA[ 
$(document).on('click','.send_form', function(){ 
var alamat 			= document.getElementById('wa_alamat');

/* Whatsapp Settings */ 
var walink = 'https://web.whatsapp.com/send', 
    phone = '6285773412824', 
    walink2 = 'Halo .. saya ingin booking henna dengan motif ini ', 
    text_yes = 'Terkirim.', 
    text_no = 'Isi semua Formulir lalu klik Pesan.'; 
 
/* Smartphone Support */ 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
var walink = 'whatsapp://send'; 
} 
 
 /* Call Input Form */
if(alamat.value !=""){
var 
	input_warna = $("#wa_warna :selected").text(), 
    input_kuku = $("#wa_kuku :selected").text(),
	input_pembayaran = $("#wa_pembayaran :selected").text(),
    input_nama = $("#wa_nama").val(), 
    input_tanggal_nikah = $("#wa_tanggal_nikah").val(),
 	input_akad = $("#wa_akad").val(),
    input_alamat = $("#wa_alamat").val(),
    input_select = $("#wa_url :selected").text(); 

/* Final Whatsapp URL */ 
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    '*Nama* : ' + input_nama + '%0A' + 
    '*Tanggal Pernikahan* : ' + input_tanggal_nikah + '%0A' +
 	'*Jam akad* : ' + input_akad + '%0A' +
    '*Warna* : ' + input_warna + '%0A' + 
	'*Kuku palsu* : ' + input_kuku + '%0A' +
 	'*Pembayaran* : ' + input_pembayaran + '%0A' +
    '*Alamat* : ' + input_alamat + '%0A'+
     '*URL/Link* : ' + input_select + '%0A'; 
 
/* Whatsapp Window Open */ 
window.open(blanter_whatsapp,'_blank'); 
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>'; 
} else { 
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>'; 
} 
}); 
//]]> 
