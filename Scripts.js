function WhatsappLink() {

  // Coletar os dados do input e do textarea
  
  const numero = document.getElementById("numero").value;
  const mensagem = document.getElementById("mensagem").value;
 
  // Montar o link do Whatsapp com o número e a mensagem
 
  const link =  "whatsapp://send?phone=" + numero + "&text=" + encodeURIComponent(mensagem);
  
  // Adicionar o link à div especificada
  document.getElementById("linkarea").innerHTML = `<a id="link" href="${link}" target="_blank">${link}</a>`;
}

function copiarLink() {
  // Obtém o valor do link
  var link = document.getElementById("link").href;
  
  // Cria um elemento de área de transferência
  var tempInput = document.createElement("input");
  
  // Define o valor do elemento de área de transferência para o link
  tempInput.value = link;
  
  // Adiciona o elemento de área de transferência ao DOM da página
  document.body.appendChild(tempInput);
  
  // Seleciona o valor do elemento de área de transferência
  tempInput.select();
  
  // Copia o valor do elemento de área de transferência para a área de transferência do usuário
  document.execCommand("copy");
  
  // Remove o elemento de área de transferência do DOM da página
  document.body.removeChild(tempInput);
  alert("O link foi copiado para a área de transferência")
}



