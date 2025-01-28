<script setup>
import Logo from '../assets/images/logo1.png';
import Moon from '../assets/images/moon.png';
import Sun from '../assets/images/sun.png';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const isDarkMode = ref(false);
const imagetoggler = ref(Sun);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;

  const root = document.documentElement;
  if (isDarkMode.value) {
    imagetoggler.value = Sun;
    root.style.setProperty('--color-darkest', '#131313'); // Sombre
    root.style.setProperty('--color-light', '#f5f5f5'); // Clair
  } else {
    imagetoggler.value = Moon;
    root.style.setProperty('--color-darkest', 'rgb(232, 239, 252)'); // Clair
    root.style.setProperty('--color-light', '#131313'); // Sombre
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-darkest">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img :src="Logo" class="Logo" alt="logo" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ active: route.path === '/' }">
              <span>&lt;</span> Profile <span>/&gt;</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link" :class="{ active: route.path === '/services' }">
              <span>&lt;</span> Services <span>/&gt;</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" :class="{ active: route.path === '/projects' }">
              <span>&lt;</span> Projects <span>/&gt;</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" :class="{ active: route.path === '/contact' }">
              <span>&lt;</span> Contact <span>/&gt;</span>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
    <button class="togller" @click="toggleDarkMode">
      <img :src="imagetoggler" />
    </button>
  </nav>
  <button class="togllerphone" @click="toggleDarkMode">
    <img :src="imagetoggler" />
  </button>

</template>


<style>
.btn {
  font-size: 14px;
  background: linear-gradient(to bottom right, #0091f2, #0091f2, #fff);
  border: none;
  color: var(--color-light);
}

.togller {
  background-color: transparent;
  border: none;

}

.togller img {
  height: 35px;
  width: 35px;
}

.togllerphone {
  display: none
}

nav {
  padding: 10px 40px !important;
  ;

}

.nav-link {
  font-size: 20px;
  color: var(--color-light) !important;
}

.nav-link:hover {
  color: var(--color-light) !important;
}

a .Logo {
  height: 50px;
  width: 65px;
  margin: 0 5px;
  filter: drop-shadow(0 0 1px white);
}

.nav-link.active {
  color: rgb(16, 135, 240) !important;
}

.nav-link:visited {
  color: var(--color-light);
}

.navbar-toggler {
  color: transparent;
  border-color: #0099ff;
}

.nav-link span {
  opacity: 0 !important;
  opacity: 1;
  position: relative;
  top: 10px;
  transition: .5s;
  color: rgb(16, 135, 240) !important;
}

.nav-link:hover span,
.nav-link.active span,
.nav-link a:visited span {
  opacity: 1 !important;
  ;
  top: 0px;
  transition: .5s;
}

.FiAlignRight {
  color: var(--color-light) !important;
}

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************   Mobile screen   ***************************************/

@media only screen and (max-width: 600px) {
  .Logo {
    height: 40px !important;
    width: 55px !important;
  }

  .togller {
    display: none;
  }

  .togllerphone {
    display: block;
    margin: auto;
    background-color: transparent;
    border: none;
  }

  .togllerphone img {
    height: 30px;
    width: 30px;
  }
}
</style>
