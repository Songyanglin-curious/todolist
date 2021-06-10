<template>
    <section class="todo-inpute">
        <input type="text" placeholder="请输入需要添加的事项" @input="inputText" v-on:keyup.enter.stop="addItem" v-model="text">
        <button @click="addItem">添加</button>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                text: '',
            }
        },
        methods: {
            inputText(e) {
                this.text = e.target.value;
            },
            addItem() {
                // this.$emit('addItem', this.text);
                this.$store.dispatch('addItem', this.text)
                this.text = '';
            }
        }
    }
</script>

<style>
    .todo-inpute {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
    }

    .todo-inpute button {
        font-weight: 800;
        color: white;
        width: 70px;
        height: 30px;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;

        background-color: #4e6ef2;
        border: none;
        outline: none;
    }

    .todo-inpute input {
        margin: 0;
        padding: 0;
        flex-grow: 1;
        height: 30px;
        border: 1px solid #acacac;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        outline: none;
    }
</style>