<template>
    <div class="container">
      <!-- Service Banner -->
      <div class="service-banner">
        <div class="title-service">
          <h3>&lt;h3&gt; My Services &lt;/h3&gt;</h3>
          <h2>Elevate Your Digital Presence:</h2>
          <p class="description">
           I bring a blend of modern design aesthetics and cutting-edge development skills to the table. From crafting responsive designs and visually engaging interfaces to full-stack development, I offer a comprehensive suite of services. Additionally, my proficiency in Python extends to creating machine learning models for tasks like classification and regression, adding an intelligent layer to your projects
          </p>
        </div>
        <div class="img-banner">
          <img src="../assets/images/IA.png" alt="AI Illustration" />
        </div>
      </div>

      <!-- Services -->
      <div class="service">
        <!-- Responsive Design -->
        <div class="contain">
          <h4 class="title">Responsive Design:</h4>
          <p class="description">
            I specialize in creating responsive and user-friendly designs. Utilizing frameworks like Bootstrap and Tailwind CSS, I ensure your website looks and performs well across all devices.
          </p>
          <img src="../assets/images/css.png" alt="" />
          <img src="../assets/images/tailwind.png" alt="" class="icondiff" />
          <img src="../assets/images/bootstrap.png" alt="" /><br />
        </div>
        <div class="type">
          <sub>&lt; Web Development /&gt;</sub>
        </div>
      </div>

      <!-- Modern Design Approach -->
      <div class="service">
        <div class="contain">
          <h4 class="title">UX/UI Design:</h4>
          <p class="description">
            I specialize in creating intuitive and user-centric designs. Using tools like Figma and Photoshop, I ensure that each interface is visually appealing, functional, and aligned with modern UX/UI principles.
          </p>
          <img src="../assets/images/figma.png" alt="" />
          <img src="../assets/images/ps.png" alt="" />
        </div>
        <div class="type">
          <sub>&lt; Design /&gt;</sub>
        </div>
      </div>

      <!-- Front-end Development -->
      <div class="service">
        <div class="contain">
          <h4 class="title">Front-end Development:</h4>
          <p class="description">
            With expertise in HTML, CSS, JavaScript, and frameworks like React, Vue.js, and Tailwind CSS, I build dynamic and interactive user interfaces. I also use Docker for containerized, consistent development and deployment environments.
          </p>
          <img src="../assets/images/react.png" alt="" />
          <img src="../assets/images/html.png" alt="" />
          <img src="../assets/images/css.png" alt="" />
          <img src="../assets/images/Js.png" alt="" />
          <img src="../assets/images/bootstrap.png" alt="" />
          <img src="../assets/images/jquery.png" alt="" />
          <img src="../assets/images/vue.png" alt="" class="icondiff" />
          <img src="../assets/images/tailwind.png" alt="" class="icondiff" />
          <img src="../assets/images/docker.png" alt="" />
        </div>
        <div class="type">
          <sub>&lt; Web Development /&gt;</sub>
        </div>
      </div>

      <!-- Full Stack Development -->
      <div class="service">
        <div class="contain">
          <h4 class="title">Full Stack Development:</h4>
          <p class="description">
            I deliver end-to-end web applications by combining front-end frameworks (React.js, Vue.js, Bootstrap, Tailwind CSS) with back-end technologies (Node.js, Nest.js). I design and integrate robust RESTful APIs, ensuring seamless communication between your front-end and back-end. I also ensure scalability and reliability using databases like MySQL, PostgreSQL, and MongoDB.          </p>
          <img src="../assets/images/react.png" alt="" />
          <img src="../assets/images/vue.png" alt="" class="icondiff" />
          <img src="../assets/images/nestjs.png" alt="" class="icondiff" />
          <img src="../assets/images/php.png" alt="" />
          <img src="../assets/images/mysql.png" alt="" />
          <img src="../assets/images/nodejs.png" alt="" class="icondiff" />
          <img src="../assets/images/typescript.png" alt="" class="icondiff" />
          <img src="../assets/images/docker.png" alt="" />
        </div>
        <div class="type">
          <sub>&lt; Web Development /&gt;</sub>
        </div>
      </div>

      <!-- Machine Learning Expertise -->
      <div class="service">
        <div class="contain">
          <h4 class="title">Machine Learning Expertise:</h4>
          <p class="description">
            Using Python, I develop machine learning models for tasks like classification, regression, and predictions. These models can add intelligence to your projects.
          </p>
          <img src="../assets/images/python.png" alt="" />
        </div>
        <div class="type">
          <sub>&lt; Data Sciences /&gt;</sub>
        </div>
      </div>

      <!-- Data Cleaning and Visualization -->
      <div class="service">
        <div class="contain">
          <h4 class="title">Data Cleaning and Visualization:</h4>
          <p class="description">
            I provide data cleaning and preparation services, as well as insightful visualizations to help communicate data patterns effectively.
          </p>
          <img src="../assets/images/python.png" alt="" />
        </div>
        <div class="type">
          <sub>&lt; Data Sciences /&gt;</sub>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  </script>

  <style scoped>
  .icondiff {
    margin-left: 10px;
  }


  .container{
    display:flex;
    flex-wrap: wrap;
}
.services{
    height: 150vh;
}
.service-banner{

    position: relative;
    display:flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height:75vh;

}
.service-banner h2{
    font-size:1.3em;
    font-weight:bold;

}
.title-service{
    width:50%;
}
.img-banner{
    display: flex;
    justify-content: center;
    text-align: center;
    width:50%;
}
.img-banner img{
    height:370px;
    height: 370px;    animation:flotter 4.5s ease-in-out infinite;
}

@keyframes flotter{
    0% {
           transform: translateY(0px);
         }
       50%{
           transform: translateY(-15px);
         }
         100%{
           transform: translateY(0px);
         }
       }

.icondiff {
 height: 55px !important;
 margin: 10px 5px !important;
}
.service img {
    margin: 5px 0 ;
    height:70px;
}
/* .diffIcon {
    margin: 5px 0 ;

} */
.service{
    position: relative;
    margin: 15px;
    padding: 30px;
    width:45%;
    border: 1px solid #0099e0;
    border-radius:20px;
}
.contain{
    height: 90%;
}
.type{
    position: relative;
    bottom:0;
    height:10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.type sub{
    font-size: .7em;
    width: 35%;
    height:45px;
    display: flex;
    justify-content:center;
    align-items:center;
    text-align: center;
    background-color:#0383be5b;
}
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************   Mobile screen   ***************************************/

@media only screen and (max-width: 600px){
    .container{
        margin-top:40px;

    }
    .service-banner{
        margin-top: 20px;
        flex-direction: column;
        height: 110vh;
    }
    .title-service{
        width:95%;
    }
    .service .title{
        font-size:1.2em;
        font-weight:bold;
    }
    .img-banner{
        margin-top:30px;
        width:95%;
    }
    .img-banner img{
        margin-top: 20px;
        height:320px;
    }
    .container{
        display:block;
    }
    .service{
        margin-top: 30px;
        width:95%
    }
    .type sub{
        font-size: .7em;
        width: 48%;
        height:40px;
    }
    .service img {
        margin: 10px 5px ;
        height:45px;
    }
    .icondiff{
      height:36px !important;
    }

}
</style>
