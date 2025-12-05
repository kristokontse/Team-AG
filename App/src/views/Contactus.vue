<template>
  <div class="contactus">
    <p>Email: torujuss336@gmail.com</p>
    <p>Phone: +372 1111 2222</p>
    <p>Address: Lai 99, Tartu</p>
  </div>
</template>

<script>
export default {
  name: "Contactus",
}
</script>

<style scoped>
.contactus {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  color: white;
  padding: 60px;
  border-radius: 10px;
  background: linear-gradient(135deg, 
    rgba(71, 85, 105, 0.9) 0%, 
    rgba(100, 116, 139, 0.85) 50%, 
    rgba(148, 163, 184, 0.8) 100%);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
</style>
