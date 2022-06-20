const exibirResposta = document.querySelector("#resposta")
const conteudoPergunta = document.querySelector("#input-text")
const perguntarBtn = document.querySelector("#perguntar")
let respostas = [
  "Sim",
  "Não",
  "Talvez",
  "Com toda certeza!",
  "Duvido Muito!",
]

let cooldown = 0;

// Faz a Pergunta e Verifica se contém argumentos
async function VerificarPergunta() {

  if (conteudoPergunta.value == '') {
    alert("Você não colocou uma pergunta!")
    return
  }

  if (cooldown == 1) {
    alert("Aguarde para fazer outra pergunta!")
    return
  }

  perguntarBtn.setAttribute("disabled", true)

  const pergunta = "<div>" + conteudoPergunta.value + "</div>"

  // Gera uma resposta aleatória
  const pegaRespostas = respostas.length
  const randomResposta = Math.floor(Math.random() * pegaRespostas)

  // Exibe a resposta no elemento #resposta
  exibirResposta.innerHTML = respostas[randomResposta]
  cooldown = 1;

  exibirResposta.style.opacity = 1;

  // Desabilita a resposta após 3 segundos
  setTimeout(function () {
    cooldown = 0;
    conteudoPergunta.value = '';
    exibirResposta.style.opacity = 0;
    perguntarBtn.removeAttribute("disabled")
  }, 3000)
}