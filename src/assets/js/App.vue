<template>
  <div class="page-wrap">
    <div class="header">
      <div class="menu">
        <h1>Nishino Shuji</h1>
        <ul>
          <li>
            <p @click="onPageButton('introduce')">profile</p>
          </li>
          <li>
            <p @click="onPageButton('portfolio')">portfolio</p>
          </li>
          </li>
          <li>
            <a href="https://github.com/nishinoshuji" target="_blank">github</a>
          </li>
          <li>
            <a href="http://sayonarbuncho.hatenablog.com/" target="_blank">blog</a>
          </li>
          <!--<li>
            <a href="https://qiita.com/surumebeer" target="_blank">qiita</a>
          </li>-->
        </ul>
      </div>
    </div>
    <div v-if="isIntroduce" class="content">
      <Introduce />
    </div>
    <div v-if="isPortfolio" class="content">
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
  padding: 120px 100px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: #fff;
}
.menu {
  position: absolute;
  top: 50%;
  left: 0;
  padding: 0 100px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
h1 {
  padding: 0 10px;
  font-weight: bold;
}
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0 0;
}
li {
  position: relative;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  &:hover {
    text-decoration: underline;
  }
  p {
    cursor: pointer;
  }
}
a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
.content {
  padding: 20px 10px;
  background: #fff;
}
</style>
