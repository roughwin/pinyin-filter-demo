<template>
  <div>
    <div>筛选耗时 <span style="color: red">{{timeDuration.toFixed(2)}}</span>ms</div>
    <div><input type="text" v-model="word" placeholder="输入以过滤：pufa银行"></div>
    <ol v-if="isInited">
      <li v-for="(x, index) in filteredList" :key="index">
        <span
          v-for="(t, index) of x.text.split('')"
          :key="index"
          :style="{
            color: (x.arr && x.arr.includes(index)) ? 'red' : 'black'
          }"
        >{{t}}</span>
      </li>
    </ol>
    <div v-else>loading</div>
  </div>
</template>

<style scoped>
  input {
    height: 2em;
    width: 200px;
    margin: 1em 0;
  }
  li {
    list-style: none;
  }
</style>


<script>
import Pinyin from 'pinyin-filter';

export default {
  async created() {
    this.initPinyin();
    this.getStockList();
  },
  data() {
    return {
      word: '',
      list: [],
      p: undefined,
      timeDuration: 0,
    }
  },
  methods: {
    async initPinyin() {
      const resp = await fetch('./word.json');
      const dict = await resp.json();
      this.p = new Pinyin(dict);
    },
    async getStockList() {
      const resp = await fetch('./stock-list.json');
      this.list = await resp.json();
    },
    getFilteredList() {
      const startTime = window.performance.now();
      if (!this.word || !this.word.trim()) {
        this.timeDuration = 0;
        return this.list.map(x => ({ text: x }))
      }
      if (this.p) {
        const r = this.list.map(x => ({
          text: x,
          arr: this.p.test(x, this.word),
        })).filter(x => x && x.arr && x.arr.length)
        this.timeDuration = window.performance.now() - startTime;
        return r;
      }
      this.timeDuration = window.performance.now() - startTime;
      return [];
    }
  },
  computed: {
    isInited() {
      return this.p && this.list.length;
    },
    filteredList() {
      return this.getFilteredList();
    }
  }
}
</script>
