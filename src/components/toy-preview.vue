<template>
  <li >
   <h1>Toy: {{toy.name}} </h1>
   <h1>Catagories: {{toy.labels}} </h1>
   <h1>Price: {{toy.price}} </h1>
   <h1>in stock: {{toy.inStock}} </h1>

     
   
  </li>
</template>

<script>
// import customCard from './custom-card.vue'

export default {
  name: 'toy-preview',
  props: {
    toy: Object,
  },
  components: {
    // customCard,
  },
  methods: {
    // goToDetail() {
    //   this.$router.push(`/car/${this.car.id}`)
    // },
    // goToEdit() {
    //   this.$router.push(`/car/edit/${this.car.id}`)
    // },
    // removeCar(carId) {
    //   this.$emit('removeCar', carId)
    // },
  },
}
</script>
