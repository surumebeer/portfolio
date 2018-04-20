<template lang="html">
  <div class="header">
    <div class="menu">
      <h1>Nishino Shuji</h1>
      <ul>
        <li>
          <nuxt-link to="/profile">profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/portfolio">portfolio</nuxt-link>
        </li>
        </li>
        <li>
          <a href="https://github.com/surumebeer" target="_blank">github</a>
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
</template>

<style scoped lang="scss">
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
  color: #333;

  &:hover {
    text-decoration: underline;
  }
}
</style>
