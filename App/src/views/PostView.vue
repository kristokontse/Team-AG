<template>
  <div class="signup-container">
    <h3>A post</h3>

    <textarea v-model="body"></textarea>

    <div class="button-row">
      <button @click="updatePost">Update</button>
      <button @click="deletePost">Delete</button>
    </div>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "PostView",
  data() {
    return {
      body: "",
      errorMessage: "",
      postId: null
    };
  },
  methods: {
    fetchPost() {
  fetch(`http://localhost:3000/api/posts/${this.postId}`, { credentials: "include" })
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch post");
      return res.json();
    })
    .then(data => {
      this.body = data.body || ""; // täidab textarea
    })
    .catch(err => {
      console.error(err);
      this.errorMessage = "Failed to load post";
    });
},
    updatePost() {
      if (!this.body.trim()) {
        this.errorMessage = "Body cannot be empty";
        return;
      }
      fetch(`http://localhost:3000/api/posts/${this.postId}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: this.body })
      })
        .then(res => {
          if (!res.ok) throw new Error("Update failed");
          return res.json();
        })
        .then(data => {
          this.$router.push("/").then(() => window.location.reload());
        })
        .catch(err => {
          console.error(err);
          this.errorMessage = "Failed to update post.";
        });
    },
    deletePost() {
      if (!confirm("Are you sure you want to delete this post?")) return;
      fetch(`http://localhost:3000/api/posts/${this.postId}`, {
        method: "DELETE",
        credentials: "include"
      })
        .then(res => {
          if (!res.ok) throw new Error("Delete failed");
          return res.json();
        })
        .then(() => {
          this.$router.push("/").then(() => window.location.reload());
        })
        .catch(err => {
          console.error(err);
          this.errorMessage = "Failed to delete post.";
        });
    }
  },
  mounted() {
    this.postId = this.$route.params.id;
    this.fetchPost();
  }
};
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

textarea {
  width: 100%;
  resize: none;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin-bottom: 20px;
}

.button-row {
  display: flex;
  gap: 20px;
  justify-content: flex-start;
}

button {
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
}

button:first-child {
  background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
  color: white;
}

button:first-child:hover {
  background: linear-gradient(135deg, #35ff83 0%, #408250 100%);
}

button:last-child {
  background: linear-gradient(135deg, #e53e3e 0%, #9b2c2c 100%);
  color: white;
}

button:last-child:hover {
  background: linear-gradient(135deg, #ff6b6b 0%, #cc0000 100%);
}

.error-message {
  color: #d32f2f;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
}

@media screen and (max-width: 800px) {
  .signup-container {
    max-width: 100%;
    padding: 15px;
    margin: 10px auto;
  }
}
</style>
