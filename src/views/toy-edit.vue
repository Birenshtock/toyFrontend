
<template>
<h1>edit</h1>

<form @submit.prevent="saveToy">

    <label>edit name:</label>
            <input required v-model="toyToEdit.name"  type="text"
              placeholder="Enter your toy name here..." />


    <label>edit price:</label>
            <input required v-model="toyToEdit.price"  type="text"
              placeholder="Enter new price..." />






<button  >save</button>
</form>

  

   <router-link  :to="'/toy'" >Back</router-link>

     
   

</template>

<script>
import { toyService } from '../services/toy-service'


export default {
    data() {
        return {
             toyToEdit: {
              name:null,
              price: null,
             },
          
        }
    },
  
  components: {
    
  },
  methods: {
    saveToy() {
        console.log('hi')
      this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit }).then(() => {
        this.$router.push('/toy')
      })
    },
   
  },
   created() {
    const { toyId } = this.$route.params
    if (toyId) {
      toyService.getById(toyId).then((toy) => {
        this.toyToEdit = toy
      })
    } else this.toyToEdit = toyService.getEmptyToy()
  },
}
</script>
