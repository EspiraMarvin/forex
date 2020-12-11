<template>
  <q-page class="q-ml-lg">

    <q-list>
      <q-card
        v-for="(stock, index) in stocks"
        :key="index"
        :value="stock.value"
        v-ripple
        class="q-mb-sm">
        <template v-slot:loading>
          <q-inner-loading showing color="primary" />
        </template>
        {{ stock.title }}
      </q-card>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import commonMixins from '../mixins/commonMixins'

export default {
  name: 'PageIndex',
  created () {
    this.requestData()
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      stocks: 'GET_STOCKS'
    })
  },
  methods: {
    ...mapActions({
      getStocks: 'FETCH_STOCKS'
    }),
    requestData () {
      this.loading = true
      this.loadingStocks = true
      this.$store.dispatch('FETCH_STOCKS')
    }
  },
  watch: {
  }
}
</script>
