const { users, findUserById, getUserName } = require('./exercise.js')

test('Teste usuário encontrado', () => {
  // expect.assertions(1)
  return getUserName(5).then(e => {
    expect(e).toEqual('Paul');
  })
})
test('Teste não usuário encontrado', () => {
  expect.assertions(1)
  return getUserName(3).catch(e => {
    expect(e).toEqual({ error: 'User with ' + 3 + ' not found.' });
  })
})


test('Teste usuário encontrado', async () => {
  // expect.assertions(1)
  try {
    const resolve = await getUserName(3)
    expect(resolve).toEqual('Paul');
  }
  catch (error) {
    expect(error).toEqual({ error: 'User with ' + 3 + ' not found.' })
  }

})
// test('Teste não usuário encontrado', async () => {
//   expect.assertions(1)
//   const reject = await getUserName(3).catch(e => {
//     expect(e).toEqual();
//   })
// })

/* Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users para saber quais IDs existem.

Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

Dica: Utilize o try/catch para o caso de erro. */

/* const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
} */