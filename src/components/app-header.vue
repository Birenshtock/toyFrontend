<template>
  <header class="full ">
       <div class="header-container main-layout ">
        <img class="logoImg" src="../assets/img/toyLogo.png" alt="">
         


         <nav class="nav-bar">
             
            
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/toy">toys</router-link>
          <router-link to="/dashboard">dashboard</router-link>
          <!-- <user-msg></user-msg> -->
         </nav>


       </div>
    </header>
</template>

<script>


export default {
 
  props: {
   
  },
  components: {
   
  },
  methods: {
   
  },
}
</script>
