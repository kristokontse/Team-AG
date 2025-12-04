<template>
    <aside class="left-main"></aside>
    <section class="center-main">
      <div class="button-container">
        <button v-if="authResult" @click="Logout" class="center">Logout</button>
      </div>

      <div class="post-list">
        <div class="post" v-for="post in posts" :key="post.id">
          <p> {{ formatDate(post.created_at) }}</p>
          <p> {{ post.body }}</p>
        </div>
      </div>
    </section>
    <aside class="right-main"></aside>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "HomeView",
  components: {
  },
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },

    formatDate(datetime) {
    if (!datetime) return "";
    const date = new Date(datetime);
    return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  },
  
  mounted() {
        fetch('http://localhost:3000/api/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
</script>


<style>

.button-container{
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
}

.center-main{
  min-width: 700px;
  border: 3px solid rgb(53, 53, 53);
  border-radius: 15px;
}

.left-main, .right-main {
  min-width: 200px;
  min-height: 600px;
  background-color: rgb(184, 169, 169);
  border-radius: 15px;
}

/* POSTITUSTE STIILID */
.post-list {
  display: flex;
  flex-direction: column;
  gap: 5px; /* Postituste vahe */
}

.post {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Kuupäeva stiil */
.post p:first-child {
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
  text-align: left;
}

/* Postituse teksti stiil */
.post p:last-child {
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  word-break: break-word;
}


@media (max-width: 800px) {
  .button-background {
    gap: 15px;
    padding: 0px;
    width: 100%;
  }

  .center-main {
    min-width: 100% !important; 
    max-width: 100% !important;
    width: 100% !important;
    gap: 15px;

  }

  .left-main, .right-main {
    display: none;
  }
}
</style>