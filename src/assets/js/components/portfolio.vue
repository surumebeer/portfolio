<template>
  <div class="menu">
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
      list: [
        {
          'name': 'vue-task-manage',
          'url': 'https://vue-task-manage.firebaseapp.com/',
          'github': 'https://github.com/nishinoshuji/vue-task-manage'
        },
        {
          'name': 'react-markdown-viewer',
          'url': 'https://react-markdown-viewer.firebaseapp.com/',
          'github': 'https://github.com/nishinoshuji/react-markdown-viewer'
        },
        {
          'name': 'nodejs-env-test',
          'github': 'https://github.com/nishinoshuji/nodejs-env-test'
        }
      ]
    }
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
