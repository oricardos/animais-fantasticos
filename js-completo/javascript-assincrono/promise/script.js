const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Login efetuado com sucesso!');
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      nome: 'Luiz Ricardo Silva',
    });
  }, 1500);
});

const tudo = Promise.all([login, dados]);

tudo.then((res) => console.log(res));
