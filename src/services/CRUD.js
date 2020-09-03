import { databaseFirebase } from './firebase';

// --------------------------------------------------------------------------------------------------------------------

export const dataFetchFirebase = () => {
  return new Promise((resolve, reject) => {
    databaseFirebase.once('value', (snapshot) => {
      const todo = snapshot.val();
      const todoList = [];
      for (let id in todo) {
        todoList.push({ id, ...todo[id] });
      }
      resolve(todoList);
    });
  });
};

// --------------------------------------------------------------------------------------------------------------------

export const addItemFirebase = (payload) => {
  return databaseFirebase.push(payload)
    .then(data => ({ id: data.getKey(), ...payload }))
    .catch(error => alert(error));
};

// --------------------------------------------------------------------------------------------------------------------

export const deleteItemFirebase = (id) => {
  const todoRef = databaseFirebase.child(id);

  return todoRef.remove()
    .then(() => id)
    .catch(error => alert(error));
};

// --------------------------------------------------------------------------------------------------------------------

export const updateItemFirebase = (payload) => {
  const ref = databaseFirebase.child(payload.id);

  return ref.update(payload)
    .then(() => ({id: payload.id, ...payload}))
    .catch(error => alert(error));
};



