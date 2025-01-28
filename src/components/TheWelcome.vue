<script setup lang="ts">
import Profilepic from '../assets/images/image01.png';
import Pc from '../assets/images/r1.png';
import Rocket from '../assets/images/rocket.png';
import Css from '../assets/images/css.png';
import CV from '../assets/cv/MonCV.pdf';

</script>

<template>
  <div className='Hero container-xxl'>
    <div className='container1'>
      <div className='line'>
        <a>
          <img :src="Profilepic" alt='' className='Profilepic' /></a>
        <div className='title-container'>
          <br />
          <h1>Full stack Developer</h1>
        </div>
      </div>
      <div className='block'>
        <p>
          <span className='blue'> &lt;</span> Welcome <span className='blue'>/&gt;</span>

          <span className='highlight'> to my digital space !<br /> Hi, I'm Achraf 👨‍💻, a student at <a href="https://www.epitech.eu/">Epitech</a>, specializing in Artificial Intelligence.
            As Developer, I have a passion for crafting seamless user experiences. I specialize in utilizing technologies like React,Vue,Node.JS, and more... While navigating the exciting realms of web development and AI, I constantly push boundaries and explore new possibilities.Join me on this journey where creativity, functionality, and innovation come together 🌐💻
          </span>
        </p>
        <a
     class="btn"
  :href="CV"
  download="CV.pdf"
>
  Download CV
</a>
      </div>
      <div>

</div>
    </div>

    <div className="container2">
      <img :src="Pc" alt="" className='Pc' />
      <img :src="Css" alt="" className='Css' />
      <img :src="Rocket" alt="" className='Rocket' />
    </div>

  </div>

</template>

<style>
a{
  text-decoration:none;
}
.btn{
  font-size:14px;
  background: linear-gradient(to right, #0091f2, #0091f2);
  border:none;
  color:var(--color-light);
  height:35px;
  width:20%;
  filter: drop-shadow(0 0 2px gray)
}
.Hero {
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: row;

}

.container1 {
  height: 70vh;
  width: 50% !important;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  background: var(--color-darkest);

}

.line {
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 30%;
  width: 100%;
}

.blue {
  color: #0091f2;
}

.block {
  margin: 10px;
  width: 100%;
}

.Profilepic {
  margin-right: 30px;
  background: linear-gradient(to bottom right, #0091f2, #0091f2, #fff);
  border-radius: 100%;
  height: 140px;
  width: 130px;
  cursor: pointer;
  transition: .8s;

}

.Profilepic:hover,
.Profilepic:visited {
  filter: drop-shadow(0 0 10px rgb(0, 81, 255));
  transition: .4s;

}

h3 {
  font-size: 1.5em;
  font-weight: bold;
}

h1 {
  padding-left: 10px;
  margin-top: -10px;
  font-size: 2.2em;
  font-weight: bold;
}

.title-container {
  display: flex;
  flex-direction: column !important;
  justify-content: center;

}

.progress-bar {
  width: 0;
  height: 5px;
  background-color: #0091f2;
  transition: width 0.2s ease-in-out;
}

.Hero .block p::after {
  content: '|';
  font-weight: bold;
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.Hero .block p .highlight {
  background-color: #0091f256
}

.container2 {
  height: 70vh;
  width: 50% !important;
  padding: 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;


}

.container2 .Pc {
  position: absolute;
  height: 400px;
  animation: flotter 5s ease-in-out infinite;
}

.container2 .Rocket {
  left: 53%;
  bottom: 10%;
  position: absolute;
  height: 150px;
  animation: flotter 4s ease-in-out infinite;
}

.container2 .Css {
  right: 10%;
  bottom: 60%;
  position: absolute;
  height: 130px;
  animation: flotter 4.5s ease-in-out infinite;
}

@keyframes flotter {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}


/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************   Mobile screen   ***************************************/

@media only screen and (max-width: 600px) {

  .Hero {
    padding-top:-10px;
    width: 100%;
    height: 120vh;
    display: flex;
    flex-direction: column !important;

  }

  .Profilepic {
    margin: 0px;
    height: 110px;
    width: 100px;
  }

  .banner img {
    max-height: 400px;
    margin-left: 0px;
    width: 90%;
    border-radius: 25% 15%;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .container1 {
    width: 100% !important;
    height: 56vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    ;
  }

  .container2 {
    position: relative;
    padding: 30px;
    margin-top: 70px;
    width: 100% !important;
    display: flex;
  }

  .line {
    padding: 0 10px;
    width: 100% !important;
    height: 25%;
  }

  .block {
    width: 100% !important;
    margin-top: 10px;
    padding: 0 10px;
    justify-content: center;
  }

  .Hero .block p {
    font-size: .9em;
  }

  h3 {
    font-size: 1.6em;
    font-weight: bold;
    padding-left: 10px;
  }

  h1 {
    margin-top:10px;
    display: inline-block;
    width: 100%;
    font-size: 1.7em;
    font-weight: bold;
  }

  .container2 .Pc {
    position: relative;
    height: 300px;
  }

  .container2 .Rocket {
    left: 5%;
    top: 65%;
    position: absolute;
    height: 110px;
  }

  .container2 .Css {
    position: absolute;
    right: 5%;
    top: 67%;
    height: 100px;
  }
  .btn{
    margin: auto !important;

    font-size:14px;
  background: linear-gradient(to right, #0091f2, #0091f2);
  border:none;
  color:var(--color-light);
  height:35px;
  width:35%;
}
}
</style>
