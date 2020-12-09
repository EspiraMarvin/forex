import { mapGetters } from 'vuex'

const commonMixins = {
  created () {

  },

  data () {
    return {

    }
  },

  computed: {
    ...mapGetters({
      notification: 'GET_NOTIFICATION',
      errors: 'GET_ERRORS'
    })
  },

  methods: {
    forexNotifyColor (color, message, position) {
      this.$q.notify({
        color: color,
        message: message,
        position: position
      })
    },

    formatString (string) {
      return string.replace(/_/g, ' ')
    },

    forexNotifyType (type, message, position) {
      this.$q.notify({
        type: type,
        message: message,
        position: position
      })
    },

    goHome () {
      this.$router.push('/home')
    }
  },

  mounted () {

  },

  watch: {
    notification: {
      deep: true,
      handler () {
        if (
          Object.entries(this.notification).length !== 0 &&
          this.notification.constructor === Object
        ) {
          this.$q.notify(this.notification)
          // reset the store for the next action call
          this.$store.commit('SET_NOTIFICATION', {})
        }
      }
    },
    errors: {
      deep: true,
      handler () {
        if (this.errors.length !== 0) {
          this.errors.forEach(error => {
            this.forexNotifyType('negative', error, 'top')
          })
          // reset the store for the next action call
          this.$store.commit('SET_ERRORS', [])
        }
      }
    }
  }
}

export default commonMixins
