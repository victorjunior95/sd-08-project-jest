// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.

const phrase = [
  'Fiquem longe dele, o negócio aqui é entre ele e eu!',
  'Relaxa, pode mandar a bola de fogo que eu aguento o tranco!',
  'A morte é um dia que vale a pena viver.',
  'Não precisa, eu consigo segurar os inimigos.',
  'Cadê o sup?',
  'Relaxa, não tem nenhuma armadilha nesse corredor, eu mesmo conferi',
  'Como assim critico?',
  'O plano é perfeito! Nada pode dar errado!',
  'Ei não rasgue minha FICHA!',
  'Quem são vocês criaturas insignificantes?',
];

const specialists = [{
  nome: 'Tunico',
  classe: 'Mestre dos Magos',
  message: 'Às vezes olhando para trás vocês podem ver mais claramente o caminho que está adiante.',
},
{
  nome: 'Cremoso',
  classe: 'Cavaleiro Negro',
  message: 'Faça seus medos terem medo de você.',
},
{
  nome: 'Gordinho',
  classe: 'Pirata',
  message: 'Precisa se perder para achar lugares que não se acham, se não todos saberiam onde fica.',
},
{
  nome: 'Lobo Solitário',
  classe: 'Samurai',
  message: 'Eles se perderam novamente, Bando de idiotas!',
},
{
  nome: 'Ousado',
  classe: 'Mago',
  message: 'Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz.',
},
{
  nome: 'Anjo Loiro',
  classe: 'Clérigo',
  message: 'Para enganar teu inimigo, pareça fraco quando for fote e pareça forte quando for fraco.',
}];

const enemies = [{ nome: 'Barata', ataque: 'Voado' },
{ nome: 'Esquilo', ataque: 'Mordido' },
{ nome: 'Pé da mesa', ataque: 'Tropicado' },
{ nome: 'Dragão', ataque: 'Soprado' }];

const randomAttack = () => {
  const randomMonster = enemies[Math.floor(Math.random() * 4)];
  const randomSpecialistIndex = Math.floor(Math.random() * specialists.length);
  const randomSpecialist = specialists[randomSpecialistIndex];
  const randomDeathPhrase = phrase[Math.floor(Math.random() * phrase.length)];
  console.log(`${randomSpecialist.nome}, the ${randomSpecialist.classe} has been ${randomMonster.ataque} by a ${randomMonster.nome}`);
  console.log(`Pouco antes de morerrer ${randomSpecialist.nome} diz: ${randomDeathPhrase}`);
  specialists.splice(randomSpecialistIndex, 1);
};

module.exports = { specialists, randomAttack };
