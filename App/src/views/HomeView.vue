<template>
  <div>
    <main>
      <aside class="left-main"></aside>
      
      <Posts />
      
      <aside class="right-main"></aside>
    </main>
  </div>
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
  }, 
  mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
</script>


<style>

main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #f2f2f2;
  gap: 20px;
  margin: 0;
}

.left-main, .right-main {
  min-height: 600px;
  min-width: 80px;
  flex: 0 1 200px;
  background-color: lightgray;
  border-radius: 15px;
}

@media (max-width: 600px) {
  main {
    flex-direction: row;
    gap: 10px;
    padding: 5px;
  }

  .left-main, .right-main {
    display: none;
  }
}
</style>