const ENDPOINT = 'http://52.194.189.33/';

export const index = () =>
  fetch(`${ENDPOINT}/todos`)
    .then(response => response.json())

export const create = (title, text) =>
  fetch(`${ENDPOINT}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, title }),
  }).then(response => response.json());

export const destroy = (
  todoId,
) =>
  fetch(`${ENDPOINT}/todos/${todoId}`, {
    method: 'DELETE',
  }).then(response => response.json());
