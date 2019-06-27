<template>
  <div>
    <div>1: {{method1duration || '...'}}</div>
    <div>2: {{method2duration || '...'}}</div>
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
    await Promise.all([this.initPinyin(), this.getStockList()]);
    this.test()
  },
  data() {
    return {
      list: [],
      p: undefined,
      method1duration: 0,
      method2duration: 0,
    }
  },
  methods: {
    async test() {
      if (!(this.p && this.list.length)) return;
      const p = this.p;
      const list = this.list;
      async function x1() {
        this.method1duration = null;
        const startAt = window.performance.now();
        const result = await Promise.all(list.map(l => t(l, 'c')))
        const endAt = window.performance.now();
        this.method1duration = endAt - startAt;
      }

      async function x2() {
        this.method2duration = null;
        const startAt = window.performance.now();
        for (const i of list) {
          const result = await t(i, 'c')
        }
        const endAt = window.performance.now();
        this.method2duration = endAt - startAt;
      }

      x1.call(this)
      x2.call(this)

      function t(text, test) {
        return new Promise(function(resolve, reject) {
          setTimeout(() => {
            try {
              resolve(p.test(text, test));
            } catch(e) {
              reject(e)
            }
          }, 0);
        });
      }
    },
    async initPinyin() {
      const resp = await fetch('./word.json');
      const dict = await resp.json();
      this.p = new Pinyin(dict);
    },
    async getStockList() {
      const resp = await fetch('./stock-list.json');
      this.list = await resp.json();
    },
    // getFilteredList() {
    //   const startTime = window.performance.now();
    //   if (!this.word || !this.word.trim()) {
    //     this.timeDuration = 0;
    //     return this.list.map(x => ({ text: x }))
    //   }
    //   if (this.p) {
    //     const r = this.list.map(x => ({
    //       text: x,
    //       arr: this.p.test(x, this.word),
    //     })).filter(x => x && x.arr && x.arr.length)
    //     this.timeDuration = window.performance.now() - startTime;
    //     return r;
    //   }
    //   this.timeDuration = window.performance.now() - startTime;
    //   return [];
    // }
  },
  computed: {
    // isInited() {
    //   return this.p && this.list.length;
    // },
    // filteredList() {
    //   return this.getFilteredList();
    // }
  }
}
</script>
