<template>
  <ul class="toy-container">
    <li  v-for="toy in toys"  :key="toy.id" class="toy-preview">
    <toy-preview :toy="toy"/>

   <button @click="removeToy(toy.id)" >Remove</button>

    <router-link  :to="'/toy/'+toy.id">Details</router-link>|

     <router-link :to="'/toy/edit/'+toy.id">Edit</router-link>


    </li>



  
  </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'

export default {
  props: {
    toys: {
      type: Array,
      required: true,
    },
  },
  components: {
    toyPreview,
  },
  methods: {
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>
