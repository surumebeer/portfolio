<template>
  <div>
    <ul class="profile">
      <li>西野修史（Shuji Nishino）</li>
      <li>1989/6/9</li>
      <li>Frontend Engineer</li>
      <li>HTML, CSS, Javascript, node.js, Vue.js, Wordpress</li>
    </ul>
    <ul class="history">
      <li>
        <p>2013 ~ :</p>
        <p>web制作会社にてマークアップエンジニアとしてWordpressのオリジナルテーマを用いたサイト構築・運用と、HTML, CSSでのマークアップを担当。</p>
      </li>
      <li>
        <p>2016 ~ :</p>
        <p>大規模求人サイトにてフロントエンドエンジニアとしてJavascriptを用いたサイトの開発、運用、A/Bテストを用いたUI/UX改善、SPサイトのリニューアルを担当</p>
      </li>
      <li>
        <p>2017 ~ :</p>
        <p>大規模クチコミサイトにて、フロントエンドエンジニアとして、node.jsを用いたgulp,webpackなど開発環境の管理、vue.jsを用いたUI/UXコンポーネントの作成などを担当</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
li {
  line-height: 1.5;
}

.profile {
  margin-bottom: 10px;
}
.history {

  li {
    margin-bottom: 10px;
  }
  p {
    display: table-cell;
    vertical-align: top;

    &:first-child {
      width: 70px;
    }
  }
}
</style>
