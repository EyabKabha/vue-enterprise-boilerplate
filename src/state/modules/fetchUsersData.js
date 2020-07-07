import axios from 'axios'

export const state = {
  users: []
}

axios
.get('https://reqres.in/api/users?page=2')
.then((response) => {
  const users = response.data.data
  state.users = users
})
.catch((error) => {
console.error(error)
})
