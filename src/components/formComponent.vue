<template>
<div class="card text-center mt-5 rounded w-50 m-auto shadow p-3 mb-5 bg-white">
    <form @submit.prevent="addName()" class="form p-2">
        <input type="text" class="form-control p-4 mb-3" placeholder="First Name" v-model="first_name">
        <input type="text" class="form-control p-4 mb-3" placeholder="Last Name" v-model="last_name">
        <input type="text" class="form-control p-4 mb-3" placeholder="Comment" v-model="comment">
        <button class="btn bg-primary w-100 p-3 mb-3">ADD</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      first_name:"",
      last_name:"",
      comment:"",
    }
  },
  methods:{
    addName(){
        this.$emit("")
        console.log(this.listName);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>