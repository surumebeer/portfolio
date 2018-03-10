<template>
  <div class="list">
    <ul>
      <li v-for="item in list">
        <a v-if="item.url" :href="item.url" target="blank">{{item.name}}</a>
        <p v-else>{{item.name}}</p>
        <a :href="item.github" target="blank">github</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      list: []
    }
  },
  mounted() {
    fetch('json/portfolio.json')
      .then(res =>
        res.json()
      )
      .then(json => {
        this.list = json.list;
      });
  },
}
</script>

<style lang="scss" scoped>
li {
  display: table;
  width: 100%;
  line-height: 1.5;

  a,
  p {
    display: table-cell;
    width: 50%;
  }
}
</style>
