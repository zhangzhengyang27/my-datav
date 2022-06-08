<template>
  <div class="home">
    <top-view/>
    <sales-view/>
    <bottom-view/>
    <map-view/>
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
import { wordcloud, screenData, mapScatter } from '../api'
// import axios from 'axios'

export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloud() {
      return this.wordCloud
    },
    getMapData() {
      return this.mapData
    }
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    }
  },
  mounted() {
    // 请求本地的json文件
    // axios.get('/json/data.json').then((res) => {
    //   _this.reportData = res.data
    //   console.log(res.data)
    // })
    screenData().then(data => {
      this.reportData = data
    })
    wordcloud().then(data => {
      this.wordCloud = data
    })
    mapScatter().then(data => {
      this.mapData = data
    })
  }
}
</script>

<style>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
