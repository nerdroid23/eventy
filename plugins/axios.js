export default (context) => {
  const token = context.$cookies.get('token')
  context.$axios.defaults.headers.authorization = `Bearer ${token}`
}
