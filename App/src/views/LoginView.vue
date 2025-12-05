<template>
  <div class="form">
    <h3>LOGIN</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div class="container">
      <button @click="LogIn"  class="center">LogIn</button>
      <button @click='this.$router.push("/signup")' class="center">Signup</button>
    </div>
  </div>
</template>

<script>
export default {
name: "LoginView", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      //this.$router.push("/");
      location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }

</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 60px;
  border-radius: 10px;
  background: linear-gradient(135deg, 
    rgba(71, 85, 105, 0.9) 0%, 
    rgba(100, 116, 139, 0.85) 50%, 
    rgba(148, 163, 184, 0.8) 100%);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
h3 {
  text-align: center;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
label {
  color: rgb(255, 255, 255);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
}
button {
  background: rgb(255, 253, 253);
  border-radius: 20px;
  align-items: center;
  text-align: center;
  width: 60px;
}
.center {
  margin: auto;
  padding: 10px 20px;
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  width: 50%; 
}
.container {
  display: flex;
  justify-content: center;
}
</style>