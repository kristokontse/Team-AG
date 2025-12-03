<template>
  <div id="app">
    <!-- Nav / Header osa -->
    <nav class="header">
      <router-link to="/" exact>Home</router-link>
      <span>|</span>
      <router-link to="/contactus" exact>Contact Us</router-link>
    </nav>

    <!-- Main content -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Team AG - All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Header / nav */
.header {
  width: 95%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  background-color: lightgray;
}

.header a {
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  color: rgba(97, 106, 122, 1);
  transition: color 0.2s ease;
}

.header a:hover {
  color: rgba(97, 120, 154, 1);
}

.header .router-link-exact-active {
  color: rgb(18, 75, 162) !important;
}

.header span {
  display: inline-block;
  margin: 0 10px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(18, 75, 162);
}

/* Main content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
}

/* Footer */
.footer {
  width: 95%;
  max-width: 2000px;
  margin: 0 auto;
  background-color: lightgrey;
  color: rgb(18, 75, 162);
  text-align: center;
  padding: 25px;
  margin-top: auto;
  border-radius: 15px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 600px) {
  .footer {
    padding: 15px;
    border-radius: 10px;
  }
}
</style>
