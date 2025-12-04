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


body {
background-color:#556;
background-image: linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), 
linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a);
background-size:80px 140px;
background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
}

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
  background-color: gray;
}

.main-content{
  background:transparent;
}

.header a {
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  color: rgb(255, 255, 255);
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
  color: rgb(255, 255, 255);
}

/* Footer */
.footer {
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  text-align: center;
  padding: 25px;
  margin-top: auto;
  border-radius: 15px;
  background-color: gray;

}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
}

@media (max-width: 600px) {
  .footer {
    padding: 15px;
    border-radius: 10px;
  }
}

</style>
