<script>
export default {
  asyncData({ $axios, $cookies, query, redirect, store }) {
    return $axios
      .$post(`login/${query.service}/callback`, query)
      .then((response) => {
        $cookies.set('token', response)
        store.commit('login')
        $axios.defaults.headers.authorization = `Bearer ${response}`
        redirect('/')
      })
  },
  render(createElement, context) {
    return createElement('div')
  },
}
</script>
