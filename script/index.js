// Variáveis úteis
let userNumbers    = []; // Array que guardará as tentativas do usuário
let computerNumber = 0;  // Número aleatório gerado pela máquina
let maxGuesses     = 10; // Número máximo de tentativas por partida

// Obtém um numero aleatório ao iniciar a página
function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1)
}

// Recarrega a página quando clicado
function newGame() {
  window.location.reload()
}

// Realiza a comparação entre os números gerados e os informados pelo usuário
function compareNumbers() {

  // Obtém o número digitado pelo usuário
  let userNumber = Number(document.getElementById("inputBox").value);

  // Se digitar um número maior que 100 perde o jogo
  if (userNumber > 100) {
    // Retorna a mensagem do perdedor
    document.getElementById("textOutput").innerHTML = "You Lose! The maximum number is 100!"
    document.getElementById("textOutput").style.color = "red"
    document.getElementById("welcomeScreen").innerHTML = ""
    // Desabilita o campo de digitação
    document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
    // Finaliza a execução
    return
  }

  // Caso o número de tentativas ainda não tenha sido atingido, o jogo continua
  if (userNumbers.length < maxGuesses) {

    // Número informado maior que o número gerado pelo PC
    if (userNumber > computerNumber) {
      // Limpa o campo de digitação
      document.getElementById("inputBox").value = "";
      // Mensagem
      document.getElementById("textOutput").innerHTML = "Too High!"
    }
    // Número informado menor que o número gerado pelo PC
    else if (userNumber < computerNumber) {
      // Limpa o campo de digitação
      document.getElementById("inputBox").value = "";
      // Mensagem
      document.getElementById("textOutput").innerHTML = "Too Low!"
    }
    // Número informado igual ao número gerado pelo PC
    else {
      // Desabilita o campo de digitação
      document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
      // Mensagem
      document.getElementById("textOutput").innerHTML = "CONGRATULATIONS!<br>You Win 🎉"
      document.getElementById("textOutput").style.color = "green"
      document.getElementById("welcomeScreen").innerHTML = ""
    }
  }
  // Caso o número de tentativas já tenha sido atingido, o jogo é encerrado
  else {
    // Desabilita o campo de digitação
    document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
    // Mensagem
    document.getElementById("textOutput").innerHTML = "You Lose! The computer number was " + computerNumber
    document.getElementById("textOutput").style.color = "red"
    document.getElementById("welcomeScreen").innerHTML = ""
    // Finaliza a execução
    return
  }

  // Adiciona o valor digitado pelo usuário ao array
  userNumbers.push(" " + userNumber);

  // Insere no HTML da página as tentativas do usuário
  document.getElementById("guesses").innerHTML = userNumbers

  // Insere no HTML da página o número de tentativas do usuário
  document.getElementById("attempts").innerHTML = userNumbers.length
}