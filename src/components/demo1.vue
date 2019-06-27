<template>
  <div>
    <div>筛选耗时 <span style="color: red">{{timeDuration.toFixed(2)}}</span>ms</div>
    <div><input type="text" v-model="word" placeholder="输入以过滤：pufa银行"></div>
    <ol v-if="isInited">
      <li v-for="(x, index) in filteredList" :key="index">
        <span
          :class="{
            'word': true,
            'red-color': x.arr && x.arr.includes(index)
          }"
          v-for="(t, index) of x.text.split('')"
          :key="index"
          @click="genPinyin(t)"
        >{{t}}</span>
      </li>
    </ol>
    <div v-else>loading</div>
  </div>
</template>

<style scoped>
  input {
    height: 35px;
    width: 250px;
    margin: 20px 0;
    font-size: 20px;
  }
  li {
    list-style: none;
  }

  .word.red-color {
    color: red
  }
  .word:hover {
    color: forestgreen;
    cursor: pointer;
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
      window.pinyin = this.p;
    },
    genPinyin(str) {
      if (!this.p) return null;
      const x = this.p.genPinyin(str);
      if (x && x.length) {
        console.log("拼音：", x.join(' '))
      }
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
