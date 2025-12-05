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
  min-width: 600px;
  border: var(--border-1) 1px solid;
  border-radius: 15px;
  background: linear-gradient(135deg, 
    rgba(71, 85, 105, 0.9) 0%, 
    rgba(100, 116, 139, 0.85) 50%, 
    rgba(148, 163, 184, 0.8) 100%);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 32px rgba(131, 131, 131, 0.3);
}

.left-main, .right-main {
  min-width: 200px;
  min-height: 600px;
  background: linear-gradient(135deg, 
    rgba(71, 85, 105, 0.9) 0%, 
    rgba(100, 116, 139, 0.85) 50%, 
    rgba(148, 163, 184, 0.8) 100%);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 32px rgba(131, 131, 131, 0.3);
  border-radius: 15px;
  border: var(--border-1) 1px solid;
}

/* POSTITUSTE STIILID */
.post-list {
  display: flex;
  flex-direction: column;
  padding: 15px
}

.post {
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(131, 131, 131, 0.3);
  border: 1px solid #717171;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(231, 239, 249, 0.85) 50%, 
    rgba(255, 255, 255, 0.8) 100%);
  backdrop-filter: blur(px);
  box-shadow: 0 8px 32px rgba(131, 131, 131, 0.3);
  border-radius: 15px;
  border: var(--border-1) 1px solid;
}

.post:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Kuupäeva stiil */
.post p:first-child {
  color: #555555;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
  text-align: left;
}

/* Postituse teksti stiil */
.post p:last-child {
  color: #000000;
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