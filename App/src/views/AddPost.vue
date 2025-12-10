<template>
  <div class="addPost-container">
    <h3>Add Post</h3>

    <form @submit.prevent="addPost">
      <textarea
        placeholder="Write your post here..."
        v-model="content"
        required
      ></textarea>

      <button id="add-button" type="submit">Add</button>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPostView",

  data() {
    return {
      content: "",
      errorMessage: ""
    };
  },

  methods: {
        addPost() {
    console.log("AddPost method triggered");
    if (!this.content.trim()) {
        this.errorMessage = "Content cannot be empty";
        console.log("Post content is empty");
        return;
    }

    fetch("http://localhost:3000/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ body: this.content }) 
    })
    .then(response => {
        console.log("Response status:", response.status);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        console.log("Post added:", data);
        this.$router.push("/").then(() => window.location.reload());
    })
    .catch(e => {
        console.error("Error adding post:", e);
        this.errorMessage = "Failed to add post.";
    });
    }
  },
};
</script>

<style scoped>
/* reused signup page style */
body {
  background: #f2f2f2;
  flex-direction: column;
}

h3 {
  text-align: center;
  color: rgb(255, 255, 255);
  font-weight: bold;
  margin-bottom: 15px;
}

.addPost-container {    
  max-width: 420px;
  margin: 20px auto;
  text-align: left;
  padding: 45px;
  border-radius: 10px;
  background: linear-gradient(135deg, 
    rgba(71, 85, 105, 0.9) 0%, 
    rgba(100, 116, 139, 0.85) 50%, 
    rgba(148, 163, 184, 0.8) 100%);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.addPost-container form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

textarea {
  resize: none;
  height: 120px;
  padding: 10px;
  border-radius: 10px;
  border: none;
}

button, #add-button {
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 15px;
}

#add-button {
  background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
  color: white;
}

#add-button:hover {
  background: linear-gradient(135deg, #35ff83 0%, #408250 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
}

.error-message {
  color: #d32f2f;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
}

@media screen and (max-width: 800px) {
  .addPost-container {
    max-width: 100%;
    padding: 15px;
    margin: 10px auto;
  }
}
</style>