<template>
  <div class="page-wrap">
    <ul>
      <li @click="onPageButton('introduce')">introduce</li>
      <li><a href="https://github.com/nishinoshuji" target="_blank">github</a></li>
      <li><a href="http://sayonarbuncho.hatenablog.com/" target="_blank">blog</a></li>
      <li><a href="https://qiita.com/surumebeer" target="_blank">qiita</a></li>
      <li @click="onPageButton('portfolio')">portfolio</li>
    </ul>
    <div v-if="isIntroduce" class="right-column">
      <Introduce />
    </div>
    <div v-if="isPortfolio" class="right-column">
      <Portfolio />
    </div>
  </div>
</template>

<script>
import Introduce from './components/introduce.vue';
import Portfolio from './components/portfolio.vue';

export default {
  components: {
    Introduce,
    Portfolio
  },
  data: function () {
    return {
      page: ''
    }
  },
  computed: {
    isIntroduce: function() {
      return this.page === 'introduce' ? true : false;
    },
    isPortfolio: function() {
      return this.page === 'portfolio' ? true : false;
    },
  },
  methods: {
    onPageButton(page) {
      this.page = page;
      console.log(this.page);
    }
  }
}
</script>

<style lang="scss">
// reset
@import '~reset-css/_reset';
</style>

<style lang="scss" scoped>
.page-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 1px;
  height: 100vh;
  background: #000;
}
ul {
  display: grid;
  grid-gap: 1px;
  grid-template-rows: repeat(5, 1fr);
}
li {
  position: relative;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #fff;
    background: #aaa;
  }
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-decoration: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  &:hover {
    color: #fff;
  }
}
.right-column {
  padding: 10px;
  background: #fff;
}
</style>
