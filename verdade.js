function verdade() {
  let patrimonio = prompt("Informe seu patrimônio (sem pontos, por favor)");
  let taxa = (patrimonio * 0.009) / 12;
  alert("Você paga R$" + taxa.toFixed(2) + " em taxas para a MCdP mensalmente");
}
document.getElementById("buttonverdade").addEventListener("click", verdade);
