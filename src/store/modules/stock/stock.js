import axios from 'axios'

const state = () => ({
  stocks: {},
  fetchingStocks: false,
  addingStock: false
})

const getters = {
  GET_FETCHING_STOCKS: state => state.fetchingStocks
}

const mutations = {
  SET_FETCHING_STOCKS (state, value) {
    state.fetchingStocks = value
  },

  SET_STOCKS (state, value) {
    state.messages = value
  }
}

const actions = {
  FETCH_STOCKS (context, filters) {
    context.commit('SET_FETCHING_MESSAGES', true)
    axios.get(`https://www.scorebat.com/video-api/v1?page=${filters.page} &filters=${JSON.stringify(filters)}`)
      .then(({ data }) => {
        context.commit('SET_FETCHING_STOCKS', false)
        context.commit('SET_STOCKS', data)
      })
      .catch(error => {
        context.commit('SET_FETCHING_STOCKS', false)
        const alert = {
          type: 'negative',
          message: 'Failed to load data',
          position: 'top'
        }
        if (error.response && error.response.data && error.response.data.message) {
          alert.message = error.response.data.message
        }
        context.commit('SET_NOTIFICATION', alert, { root: true })
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
