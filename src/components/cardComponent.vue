<template>
<div class="mt-4">
  <div class="card m-auto w-50 rounded shadow p-3 mb-5 bg-white">
    <h3>{{friend.firstName}} {{friend.lastName}}</h3>
    <p>{{friend.content}}</p>
    <section>
      <subject-card v-for="subject of friend.subjects" :key="subject" :subject="subject"></subject-card>
    </section>
  </div>
</div>
</template>

<script>
import skillComponentVue from './skillComponent.vue'
export default {
  components:{
    'subject-card':skillComponentVue
  },
  props:{
    friend:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>