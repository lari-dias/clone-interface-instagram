const erroLogin = document.getElementById("erro-login");
const erroSenha = document.getElementById("erro-senha");
const campoUsuario = document.getElementById("login");
const campoSenha = document.querySelector("input[type='password']");

function loginValidade() {
  const loginInput = document.getElementById("login");
  const loginValue = loginInput.value;

  if (loginValue.length < 3) {
    campoUsuario.style.borderColor = "red";
    erroLogin.textContent = "O campo deve ser preenchido!";
    erroLogin.style.color = "red";
    erroLogin.style.fontSize = "12px";
  } else {
    campoUsuario.style.borderColor = "green";
    erroLogin.textContent = "Validado com sucesso!";
    erroLogin.style.color = "green";
    erroLogin.style.fontSize = "12px";
  }
}

function passwordValidade() {
  const senhaInput = document.querySelector("input[type='password']");
  const senhaValue = senhaInput.value;

  if (senhaValue.length < 6) {
    campoSenha.style.borderColor = "red";
    erroSenha.textContent = "A senha deve ter no mínimo 6 caracteres!";
    erroSenha.style.color = "red";
    erroSenha.style.fontSize = "12px";
  } else {
    campoSenha.style.borderColor = "green";
    erroSenha.textContent = "Validado com sucesso!";
    erroSenha.style.color = "green";
    erroSenha.style.fontSize = "12px";
  }
}
