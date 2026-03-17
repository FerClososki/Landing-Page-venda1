function scrollToBooking(){
document.getElementById("agendar").scrollIntoView({
behavior:"smooth"
});
}
function whatsapp(){
let numero = "5541999999999";
let mensagem = "Olá! Gostaria de agendar um horário.";
let url = `https://wa.me/${5541987426394}?text=${encodeURIComponent(mensagem)}`;
window.open(url,"_blank");

}