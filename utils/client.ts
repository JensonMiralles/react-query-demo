// Place in .env
const BASE_URL = 'https://jsonplaceholder.typicode.com'

const post = async (url: string, data: unknown) => {
  return fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json())
}

const get = async (url: string) => {
  return fetch(`${BASE_URL}${url}`, {
    method: 'GET',
  }).then((response) => response.json())
}

const deleteOpt = async (url: string) => {
  return fetch(`${BASE_URL}${url}`, {
    method: 'DELETE',
  }).then((response) => response.json())
}

export { post, get, deleteOpt }
