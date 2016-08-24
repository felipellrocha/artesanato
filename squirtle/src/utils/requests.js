import axios from 'axios'

export default axios.create({
  headers: {
    'authentication': localStorage.getItem('id_token') || null
  }
})
