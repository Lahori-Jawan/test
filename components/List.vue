<template>
  <ul>
    <li class="list-item" v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'list',
    props: {
      list: {
        type: Array,
        required: true,
      },
    }
  }
</script>
<style>
.list-item {
  color: green;
}
</style>
