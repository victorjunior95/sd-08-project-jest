// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const https = require('https');

const url = 'https://randomuser.me/api/';

const fetchURL = () => new Promise(function (resolve, reject) {
  https.get(url, (res) => {
    res.setEncoding('utf8');
    let userInfo = '';
    res.on('data', (data) => {
      userInfo += data;
    });
    res.on('error', reject);
    res.on('close', () => resolve(JSON.parse(userInfo).results[0]));
  });
});

module.exports = { fetchURL };

const test = new Promise(function (resolve, reject) {
  resolve({
    user: {
      gender: 'Masculino',
      name: {
        first: 'Antônio',
        last: 'Britto',
      },
      location: {
        country: 'Brasil'
      },
      email: 'tunico@bol.com.br',
      login: {
        username: 'tunicao123',
        Senha: 1234567890,
      },
    }
  });
});

test.then((data) => console.log(data.user))