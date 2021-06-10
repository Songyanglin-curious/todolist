<template>
  <div id="app">
    <header>todolist</header>
    <todo-input @addItem="addChildItem" />
    <todo-list :childList='list' @removeItem='removeChildItem' />
  </div>
</template>

<script>
  import TodoInput from './components/input';
  import TodoList from './components/list';
  export default {
    name: 'App',
    components: {
      TodoInput,
      TodoList,
    },
    data() {
      return {
        // list: ['吃饭', '睡觉', '打豆豆',],
        list: this.$store.state.list,
      }
    },
    methods: {
      addChildItem(val) {
        if (!val) {
          return false
        }
        this.list.push(val);
      },
      removeChildItem(index) {
        this.list.splice(index);
      },
    }
  }

</script>

<style>
  #app {
    width: 400px;
    height: 500px;
    margin: 80px auto;
    padding-top: 20px;
  }

  header {
    font-size: 32px;
    line-height: 50px;
    text-shadow: 2px 2px 10px #ACACAC;
    text-align: center;
    padding-bottom: 20px;

  }
</style>