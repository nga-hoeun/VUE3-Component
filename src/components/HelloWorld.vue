<template>
  <nav class="bg-danger mb-5">
    <ul style="list-style: none;" class="d-flex w-50">
      <li v-for="item in items" :key="item" class="p-3">{{item}}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      items:[
        'HOME',
        'ABOUT US',
        'SERVICES',
        'HELP?'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
