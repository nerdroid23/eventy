export const state = () => ({
  loggedIn: false,
})

export const mutations = {
  login(state) {
    state.loggedIn = true
  },
  logout() {
    state.loggedIn = false
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const token = this.$cookies.get('token')

    if (token) {
      commit('login')
    }
  },
}
