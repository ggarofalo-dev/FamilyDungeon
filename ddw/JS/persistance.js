function Character(nome, classe, ener) {
  this.nome = nome;
  this.classe = classe;
  this.ener = ener;
}

Character.prototype.getNome = function () {
  return this.nome;
};

Character.prototype.setNome = function (val) {
  if (!val || val.length < 2) {
    throw new Error("Nome non valido");
  }
  this.nome = val;
};







function Utente(nome, cognome, telefono) {
  this.nome = nome;
  this.cognome = cognome;
  this.telefono = telefono;
}

Utente.prototype.getNomeCompleto = function () {
  return this.nome + " " + this.cognome;
};

Utente.prototype.getScheda = function () {
  return `${this.nome} ${this.cognome} - Tel: ${this.telefono}`;
};

Utente.prototype.getNome = function () {
  return this.nome;
};

Utente.prototype.setNome = function (val) {
  if (!val || val.length < 2) {
    throw new Error("Nome non valido");
  }
  this.nome = val;
};




function saveObject(objName, obj) {
  localStorage.setItem(objName, JSON.stringify(obj));
}

function getObject(objName) {
  const raw = localStorage.getItem(objName);
  return raw ? JSON.parse(raw) : null; // <-- torna OGGETTO, non stringa
}

function salvaDato() {
  const myUser = new Utente();//"Anna", "Verdini", "333445566");
  myUser.setNome("prova");
  saveObject("utente", myUser);
}

function leggiDato() {
  const recovered = getObject("utente");
  const outputDiv = document.getElementById("output");

  if (!recovered) {
    outputDiv.innerText = "Nessun dato trovato nello storage.";
    return;
  }

  // ricostruisco un vero Utente (con prototype e metodi)
  const user = new Utente(recovered.nome, recovered.cognome, recovered.telefono);

  outputDiv.innerText = "Dato recuperato: " + user.getNomeCompleto();
  
  console.log(getAllLocalStorageKeys());
}



function getAllLocalStorageKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  return keys;
}
