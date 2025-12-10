<template>
  <div id="app">
    <!-- Nav / Header osa -->
    <nav class="header">
      <router-link to="/" exact>Home</router-link>
      <span>|</span>
      <router-link to="/contactus" exact>Contacts</router-link>
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
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(135deg, 
    rgba(71, 85, 105, 0.9) 0%, 
    rgba(100, 116, 139, 0.85) 50%, 
    rgba(148, 163, 184, 0.8) 100%);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: var(--border-1) 1px solid;
}

.main-content{
  background:transparent;
}


.header a {
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease;
  padding: 10px 25px;
  border-radius: 8px;
  display: inline-block;
}

.header a:hover {
  color: #fff;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #65c6f791,
    0 0 20px #65c6f78d,
    0 0 25px #65c6f782,
    0 0 30px #00aaff47;
  transform: scale(1.05);
}

.header .router-link-exact-active {
  color: rgb(255, 255, 255) !important;
}

.header span {
  display: inline-block;
  margin: 0 10px;
  font-size: 30px;
  font-weight: bold;
  color: white;
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
  background: linear-gradient(135deg, 
    rgba(71, 85, 105, 0.9) 0%, 
    rgba(100, 116, 139, 0.85) 50%, 
    rgba(148, 163, 184, 0.8) 100%);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: var(--border-1) 1px solid;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
}

</style>
