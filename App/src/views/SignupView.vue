<template>
  <div class="signup-container">
    <h3>Welcome to PostIt</h3>

    <form @submit.prevent="signup">
      <input type="email" name="email" placeholder="Email" required v-model="email">
      <input type="password" placeholder="Password" required v-model="password" @input="validatePassword">
      <button id="signup-button" type="submit" :disabled="passwordErrors.length > 0">Signup</button>
      <div v-if="passwordErrors.length > 0" class="error-messages">
        <p>The password is not valid</p>
        <ul>
          <li v-for="error in passwordErrors" :key="error">{{ error }}</li>
        </ul>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupView",

  data() {
    return {
      email: '',
      password: '',
      passwordErrors: []
    }
  },
  methods: {
    validatePassword() {
      const errors = [];
      const passwordValue = this.password;

      if (passwordValue.length < 8 || passwordValue.length >= 15) {
        errors.push("Password should be at least 8 characters and less than 15 characters");
      }
      if (!/^[A-Z]/.test(passwordValue)) {
        errors.push("Password should start with an uppercase alphabet");
      }
      if (!/[A-Z]/.test(passwordValue)) {
        errors.push("Password should include at least one uppercase alphabet character");
      }
      const lowercaseMatches = passwordValue.match(/[a-z]/g);
      if (lowercaseMatches.length < 2) {
        errors.push("Password should include at least two lowercase alphabet characters");
      }
      if (!/\d/.test(passwordValue)) {
        errors.push("Password should include at least one numeric value");
      }
      if (!/_/.test(passwordValue)) {
        errors.push("Password should include the character '_'");
      }
      this.passwordErrors = errors;
    },
    signup() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
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
      this.$router.push("/");
      //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    }
  },
}
</script>

<style scoped>
body {
    background: #f2f2f2;
    flex-direction: column;
}

h3 {
  text-align: center;
  color: rgb(255, 255, 255);
  font-weight: bold;
}

.signup-container {    
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

.signup-container form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.signup-container input,
.signup-container button {                      
    padding: 8px;
    margin-top: 10px;
}

.error-messages {
  color: #d32f2f;
  background-color: #ffebee;
  border: 1px solid #f44336;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
}

.error-messages p {
  margin: 0 0 8px 0;
  font-weight: bold;
  text-align: center
}

.error-messages ul {
  margin: 0;
  padding-left: 20px;
}

.error-messages li {
  margin-bottom: 4px;
}

button, #signup-button {
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

#signup-button, 
.container button:first-child {
  background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
  color: white;
}

#signup-button:hover,
.container button:first-child:hover {
  background: linear-gradient(135deg, #35ff83 0%, #408250 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
}

div > h3 {
    font-size: x-large;
    margin-bottom: 15px;
}

@media screen and (max-width: 350px) {
  .signup-container {
    max-width: 100%;
    padding: 15px;
    margin: 10px auto;
  }
}
</style>