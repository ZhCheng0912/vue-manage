<template>
  <div class="hello">
    <!--<input type="text" v-model="todo" @keydown="doAdd($event)" />
    <h2>todo</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="changeList()"/>{{item.title}} --<button @click="removeData()">delete</button>
      </li>
    </ul>
    <h2>done</h2>
    <ul>
      <li v-for="(item,key) in list" v-if = "item.checked">
        <input type="checkbox" v-model="item.checked" @change="changeList()"/>{{item.title}} -- <button @click="removeData()">delete</button>
        
      </li>
    </ul>
    <button @click="increase"></button>
    <button @click="decrease"></button>-->

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      todo: '',
      list: []
    }
  },
  methods:{
    doAdd(e) {
      if(e.keyCode ==13) {
        this.list.push({
          title: this.todo,
          checked: false
        });
        localStorage.setItem('list',JSON.stringify(this.list));
      }
      
    },
    removeData(key) {
      this.list.splice(key,1);
      localStorage.setItem('list',JSON.stringify(this.list));
    },
    changeList() {
      localStorage.setItem('list',JSON.stringify(this.list));
    },
    // ...mapMutations['increment','decrement'],
    // increase(){
    //   this.$store.increment;
    // },
    // decrease(){
    //   this.$store.decrement;
    // }
  },
  mounted(){
    var list = JSON.parse(localStorage.getItem('list'));
    if(list.length > 0) {
      this.list =list;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
