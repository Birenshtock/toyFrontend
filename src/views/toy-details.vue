

<template v-if="toy">
  <h1>details</h1>
   <h1>Toy: {{toy.id}} </h1>
   <h1>Created at: {{toy.createdAt}} </h1>
   <h1>Toy name: {{toy.name}} </h1>
   <h1>Catagories: {{toy.labels}} </h1>
   <h1>Price: {{toy.price}} </h1>

   <router-link  :to="'/toy'" >Back</router-link>

     
   

</template>

<script>
import { toyService } from '../services/toy-service.js'


export default {
    data() {
        return {
            toy: {},
        }
    },
  
  components: {
    
  },
  methods: {
   
  },
   created() {
        const { toyId } = this.$route.params
        if (toyId) toyService.getById(toyId)
        .then((currToy) => {
        //  console.log('toyId:',toyId)
        this.toy = currToy
        //  console.log('toy details:',currToy)
        })

        else this.$router.push('/toy')
    },
}
</script>
