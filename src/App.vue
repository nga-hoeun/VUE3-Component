<template>
  <section>
    <friend-nav></friend-nav>
    <friend-form></friend-form>
    <friend-card v-for="friend of listFriends" :key="friend" :friend="friend"/>
  </section>
</template>

<script>
export default{
  data(){
    return{
      listFriends:[
        {firstName:"Ronan",lastName:"Ogor",content:"The best",subjects:["Math","Technology"]},
        {firstName:"Him",lastName:"Hey",content:"Teacher",subjects:["Python","JavaScript"]},
      ]
    }
  }
}
</script>

<style>

</style>
