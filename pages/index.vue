<template>
  <div>
    <h1 class="tag">Hello {{ name }}!</h1>
    <p class="m-b-10"><span class="red">My Name:</span><b> {{fullname}}</b></p>
    <p class="age m-b-10"><span class="red">Age:</span><strong> {{age}}</strong></p>
    <p class="city m-b-10"><span class="red">My City:</span><strong> {{city}}</strong></p>
    <p class="school m-b-10"><span class="red">School:</span><strong> {{school}}</strong></p>
    <p class="red m-b-10 breakfast">My favourite breakfast:</p>
    <brekfast :list="list"/>
  </div>
</template>

<script>
import brekfast from '~/components/List.vue'
export default {
  components: {brekfast},
  data () {
    return {
      name: 'world',
      age: '10yr',
      school:'St mary school',
      city:'London',
      fullname: "Henry Smith ",
      list: ['Coffee', 'Hersheys', 'Snicker', 'bagel','Donuts','Pritzel']}
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style>
.red {
  color: red;
}
.m-b-10{
  margin-bottom:10px
}
.tag{
  color:coral;
  margin-bottom:10px;
}
</style>
