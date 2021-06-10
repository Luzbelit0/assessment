new Vue({
  el: '#app',
  data () {
    return {
      users: null
    }
  },
  mounted () {
    axios
      .get('https://api.github.com/users', {
        params: {
          per_page: 5
        }
      })
      .then(response => (this.users = response.data))
  }
})