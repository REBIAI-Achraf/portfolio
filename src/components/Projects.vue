<template>
  <main class="container">

  <!-- Project Banner -->

    <div class="project-banner">
      <div class="projects-title">
        <h3>&lt;h3&gt; My Projects &lt;/h3&gt;</h3>
        <h2>Transforming Ideas into Digital Brilliance</h2>
        <p class="description">
          Explore a selection of my front-end projects that showcase a fusion of design creativity and technical
          proficiency. ⚠️ Due to limitations on GitHub Pages, these projects primarily focus on front-end development.
          If you're interested in exploring more comprehensive web applications with database integration, feel free to
          reach out for a deeper dive.
        </p>
      </div>
      <div class="img-banner">
        <img src="../assets/images/astro-1.png" alt="Astro Project" />
      </div>
    </div>

    <ProjectCard

      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
      :stack="project.stack"
      :stackIcon="project.stackIcon"

      />

    <!-- Projects -->
     <div style="width:100%;margin:20px;">
      <h4>A visual aspect of what I do.</h4>
     </div>
    <div class="project">
      <h5 class="project-title">Webz</h5>
      <div class="devices">
        <a href="https://rebiai-achraf.github.io/webz/">
          <img src="../assets/screens/webz1.png" class="img1" alt="Webz Screenshot 1" />
        </a>
        <a href="https://rebiai-achraf.github.io/webz/">
          <img src="../assets/screens/webz2.png" class="img2" alt="Webz Screenshot 2" />
        </a>
      </div>
    </div>

    <div class="project">
      <h5 class="project-title">Gymzed</h5>
      <div class="devices">
        <a href="https://rebiai-achraf.github.io/gymzed1/">
          <img src="../assets/screens/gymzed1.png" class="img1" alt="Gymzed Screenshot 1" />
        </a>
        <a href="https://rebiai-achraf.github.io/gymzed1/">
          <img src="../assets/screens/gymzed2.png" class="img2" alt="Gymzed Screenshot 2" />
        </a>
      </div>
    </div>

    <div class="project">
      <h5 class="project-title">RB parfums</h5>
      <div class="devices">
        <a href="https://rebiai-achraf.github.io/rbparfum">
          <img src="../assets/screens/rbp1.png" class="img1" alt="RB Parfums Screenshot 1" />
        </a>
        <a href="https://rebiai-achraf.github.io/rbparfum/">
          <img src="../assets/screens/rbp2.png" class="img2" alt="RB Parfums Screenshot 2" />
        </a>
      </div>
    </div>

    <div class="project">
      <h5 class="project-title">Objects Detector</h5>
      <div class="devices">
        <a href="https://rebiai-achraf.github.io/objects-detector/">
          <img src="../assets/screens/od1.png" class="img1" alt="Objects Detector Screenshot 1" />
        </a>
        <a href="https://rebiai-achraf.github.io/objects-detector/">
          <img src="../assets/screens/od2.png" class="img2" alt="Objects Detector Screenshot 2" />
        </a>
      </div>
    </div>

    <div class="project2">
      <h5 class="project-title">E-magazine & FlippBooks</h5>
      <div class="contain2">
        <a href="https://rebiai-achraf.github.io/flipbook/">
          <img src="../assets/screens/vp.png" class="img1 flipbook" alt="Flipbook VP" />
        </a>
        <a href="https://rebiai-achraf.github.io/flipbook3/">
          <img src="../assets/screens/b&w.png" class="img1 flipbook" alt="Flipbook B&W" />
        </a>
        <a href="https://rebiai-achraf.github.io/flipbook2/">
          <img src="../assets/screens/tst.png" class="img1 flipbook" alt="Flipbook Test" />
        </a>
      </div>
    </div>


    <div class="project2">
      <h5 class="project-title">Buisness Factory (App Design)</h5>
      <div class="contain2 bf">
        <a href="../assets/screens/fb-1.JPG">
          <img src="../assets/screens/fb1.png" class="img1" alt="Business Factory Screenshot 1" />
        </a>
        <a href="../assets/screens/fb-2.JPG">
          <img src="../assets/screens/fb2.png" class="img1" alt="Business Factory Screenshot 2" />
        </a>
        <a href="../assets/screens/fb-3.JPG">
          <img src="../assets/screens/fb3.png" class="img1" alt="Business Factory Screenshot 3" />
        </a>
        <a href="../assets/screens/fb-4.JPG">
          <img src="../assets/screens/fb4.png" class="img1" alt="Business Factory Screenshot 4" />
        </a>
        <a href="../assets/screens/fb-5.JPG">
          <img src="../assets/screens/fb5.png" class="img1" alt="Business Factory Screenshot 5" />
        </a>
      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

const projects = [
  {
    title: "Trinity web app",
    description: "I’m working on Trinity, a web application aimed at optimizing stock and sales management. The backend is developed with NestJS and PostgreSQL, while the frontend uses Vue.js and Tailwind CSS for a responsive, modern UI. The app allows managers to track stock, manage customers and sales,visualize key performance indicators. It integrates with the Open Food Facts API for automatic product updates and ensures secure API interactions with JWT tokens. I designed the UI using Figma to ensure a user-friendly experience.",
    stack: ['Figma', 'Vue.js', 'Tailwind', 'Nest.js', 'PostgreSQL', 'API Rest'],
    stackIcon: "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-website-developmet-programming-pack-design-icons-9531441.png?f=webp"
  },
  {
    title: "TIME MANAGER",
    description: " I developed Time Manager, a time tracking application created as part of a school project in collaboration with my team. The application was built using Vue.js for the frontend and Phoenix (Elixir framework) for the backend, with PostgreSQL as the database. It supports three user roles: employees, managers, and the general manager.Employees can track their work hours and access dashboards,while managers can oversee teams, analyze work hours, and monitor performance.",
    stack: ['Vue.js', 'Phoenix (Elixir)', 'PostgreSQL'],
    stackIcon: "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-website-developmet-programming-pack-design-icons-9531441.png?f=webp"
  },
  {
    title: "LibraTrack",
    description: " I developed a library management project to streamline book lending. The backend is built with Node.js and Express.js, while the frontend uses React for a dynamic user interface. Data is managed with PostgreSQL, ensuring reliable handling of books, borrowers, and transactions. The design leverages Bootstrap for a responsive and user-friendly experience. This project combines modern technologies to deliver an efficient library management solution.",
    stack: ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'Bootstrap'],
    stackIcon: "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-website-developmet-programming-pack-design-icons-9531441.png?f=webp"
  },
  {
    title: "OD",
    description: "I developed a web application for reporting and detecting stolen objects. The app features a secure user registration system with email confirmation. It includes a detailed form allowing users to report stolen items, which must be approved by an administrator. A search function was also integrated,enabling users to easily find stolen objects based on their nature, with seamless interaction with the database. The application was built using HTML, CSS, JavaScript, PHP, and MySQL to provide a reliable and user-friendly solution.",
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    stackIcon: "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-website-developmet-programming-pack-design-icons-9531441.png?f=webp"
  }
];
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.project-banner {

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 70vh;

}

.projects-title {
  width: 60%;
}

.img-banner {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 50%;
}

.img-banner img {
  height: 370px;
  animation: flotter 4.5s ease-in-out infinite;
}

.project-banner h2 {
  font-size: 1.3em;
  font-weight: bold;

}

.project {
  margin: 10px;
  padding: 20px;
  width: 48%;
  border: 1px solid #0099e0;
  border-radius: 20px;
}

.project2 {

  margin: 10px;
  padding: 20px;
  width: 100%;
  border: 1px solid #0099e0;
  border-radius: 20px;
}

.contain2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

a img {

  scale: 1;
  transition: all .5s;
}

a:hover img {

  scale: 1.1;
  transition: all .5s;
}

.img0 {
  height: 60px;
}

.img1 {

  height: 180px;
  margin: 20px;
}

.img2 {
  height: 150px;
  margin: 20px;
}

.flipbook {
  border-radius: 2px;
  box-shadow: 0 0 4px black;
}

.techno {
  color: #0099e0;
  margin: 3px;
}

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************   Mobile screen   ***************************************/

@media only screen and (max-width: 600px) {

  .project-banner {
    margin-top: 20px;
    flex-direction: column;
    height: 120vh;
  }

  .projects-title {
    width: 95%;
  }

  .project {
    margin-bottom: 40px;
    width: 95%;

  }

  .devices {
    display: flex;
    flex-direction: row;
  }

  .img1 {

    height: 120px;
    margin: 5px;
  }

  .img2 {
    height: 120px;
    margin: 5px;
  }

  .project2 {
    margin-bottom: 40px;
    padding: 20px;
    width: 95%;

  }

  .bf {
    display: flex;
    flex-wrap: wrap;

  }

}
</style>
