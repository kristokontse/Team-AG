<template>
    <aside class="left-main"></aside>
    <section class="center-main">
      <div class="button-container">
        <button v-if="authResult" @click="Logout" class="center">Logout</button>
      </div>

      <div class="post-list">
        <div class="post" v-for="post in posts" :key="post.id" @click="goToPost(post.id)">
          <p> {{ formatDate(post.created_at) }}</p>
          <p> {{ post.body }}</p>
        </div>
      </div>

      <div class="bottom-buttons-box">
        <button @click="$router.push('/add-post')" class="bottom-buttons">Add Post</button>
        <button v-if="authResult" @click="deleteAll" class="bottom-buttons">Delete all</button>
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
    goToPost(id) {
  if (!this.authResult) {
    alert("You must be logged in to view a post!");
    return;
  }
  this.$router.push(`/post/${id}`);
},
  addPost() {
  const body = prompt("Write a post:");

  if (!body || body.trim() === "") {
    alert("Post cannot be empty!");
    return;
  }

  fetch("http://localhost:3000/api/posts/", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ body })
  })
    .then((response) => {
      if (!response.ok) throw new Error("Unauthorized or error");
      return response.json();
    })
    .then((data) => {
      console.log("Post added:", data);
      this.posts.unshift(data);
      this.sortPosts();
    })
    .catch((err) => {
      console.error(err.message);
      alert("You must be logged in to add posts!");
    });
},
updatePostInList(updatedPost) {
  const index = this.posts.findIndex(p => p.id === updatedPost.id);
  if (index !== -1) this.posts[index] = updatedPost;
  this.sortPosts();
},
sortPosts() {
    this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },
  deleteAll() {
  if (!confirm("Are you sure you want to delete ALL posts?")) return;

  fetch("http://localhost:3000/api/posts/delete-all", {
    method: "DELETE",
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) throw new Error("Unauthorized or error");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      this.posts = [];
    })
    .catch((err) => {
      console.error(err.message);
      alert("You must be logged in to delete posts!");
    });
},
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
    .then(data => {
      this.posts = data;
      this.sortPosts(); 
    })
    .catch(err => console.log(err.message));
    }
};
</script>


<style>

.bottom-buttons {
  margin-bottom: 10px;
}

.button-container{
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
}

.center-main{
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* post-list ülaossa, nupud alla */
  min-width: 600px;
  border: var(--border-1) 1px solid;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(71, 85, 105, 0.9) 0%, rgba(100, 116, 139, 0.85) 50%, rgba(148, 163, 184, 0.8) 100%);
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
  flex:1;
  flex-direction: column;
  padding: 15px;
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