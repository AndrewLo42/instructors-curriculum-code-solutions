const takeAChance = require('./take-a-chance');

const chance = takeAChance('Donkey Kong');

chance.then(response => {
  console.log(response);
});

chance.catch(error => {
  console.error(error.message);
});
