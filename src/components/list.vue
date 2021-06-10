<template>
    <section>
        <ul class="todo-list">
            <li class="todo-item" v-for="(item,index) in childList" v-bind:key='item+index'>
                <span>{{index+1}}</span>
                <p>{{item}}</p>
                <button @click="removeItem(index)">完成</button>
            </li>
        </ul>
        <div class="todo-noda" v-if="!childList.length">
            还没有数据，请及时添加数据
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            childList: { type: Array },
        },
        methods: {
            removeItem(index) {
                // console.log(index)
                // this.$emit('removeItem', index)
                // this.liste.splice(index, 1)
                this.$store.dispatch('removeItem', index)
            }
        }
    }
</script>

<style>
    .todo-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
    }

    .todo-item span {
        font-size: 24px;

    }

    .todo-item p {
        color: rgb(23, 20, 219);
        font-size: 24px;
        letter-spacing: 20px;
        font-weight: 600px;
    }


    .todo-item button {
        width: 60px;
        height: 30px;
        background-color: rgb(248, 47, 11);
        color: white;
        letter-spacing: 5px;
        outline: none;
        border: none;
        border-radius: 6px;
        font-size: 18px;
        justify-content: center;
        align-items: center;

    }

    .todo-noda {
        color: #4e6ef2;
        font-size: 24px;
        text-align: center;
    }
</style>