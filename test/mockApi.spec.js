const api = require('../src/mockApi');

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.

Faça um mock da função fetchURL() de forma que,
independa de chamadas de API e retorne as seguintes informações do Tunico:
- Gênero: Masculino
- Primeiro nome: Antônio
- Último nome: Britto
- País: Brasil
- Email: tunico@bol.com.br (Sim, é um email do bol mesmo...)
- Nome de usuário: tunicao123
- Senha: 1234567890 (Usem senhas fortes, crianças!)

Note que as informações devem estar de acordo com o JSON
presente no README.md do projeto.

Dica: Utilizem os métodos jest.fn() ou jest.spyOn().

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/


describe('verifica o usuário', () => {
  // Crie sua mock da função fetchURL() aqui

  const user =
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Antônio', last: 'Britto' },
      location: {
        street: { number: 2588, name: "Miller Ave" },
        city: "Devonport",
        state: "Victoria",
        country: 'Brazil',
        postcode: 1849,
        coordinates: { latitude: "-84.0505", longitude: "-121.7178" },
        timezone: { offset: "+5:45", description: "Kathmandu" },
      },
      email: 'tunico@bol.com.br',
      login: {
        uuid: "1ac485dd-e1c1-4e99-b4f1-a16697393a56",
        username: 'tunicao123',
        password: '1234567890',
        salt: "3fUf3KL0",
        md5: "6cb112394b1d2605276a2b4e7343ae3e",
        sha1: "8b8e54ad8b086f73aa19a6a86bea6d0787bdcab8",
        sha256:
          "d1c6cdf6f1c6d1e5e80fa6ee21c4fbb2c01d822f259427efbbaf8c901437aca4",
      },
      dob: { date: "1950-06-30T21:21:18.467Z", age: 71 },
      registered: { date: "2008-11-30T06:44:56.008Z", age: 13 },
      phone: "05-4252-6343",
      cell: "0477-343-295",
      id: { name: "TFN", value: "251768691" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/42.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
      },
      nat: "AU",
    };

  api.fetchURL = jest.fn().mockResolvedValue(user);
  // api.fetchURL();
  // const apiURL = jest.spyOn(api, "fetchURL").mockResolvedValue(user);
  // apiURL();

  test('verifica se o usuário é o tunico', async () => {
    return api.fetchURL().then((user) => {
      expect(user.gender).toEqual('male');
      expect(user.name.first).toEqual('Antônio');
      expect(user.name.last).toEqual('Britto');
      expect(user.location.country).toEqual('Brazil');
      expect(user.email).toEqual('tunico@bol.com.br');
      expect(user.login.username).toEqual('tunicao123');
      expect(user.login.password).toEqual('1234567890');
    });
  });
});
