<template>
    <section id="about" class="about">
    <div class="intro">
      <h2 class="text-center">Hi there, I'm Emil Halvorsen!</h2>
      <p>As a first-year student studying Front-End Development at Noroff, I've developed a knack for creating engaging and user-friendly web experiences.</p>
      <p>I dove into the world of web development out of a curiosity for HTML, CSS, and JavaScript, and soon I was hooked! Since then, I've broadened my horizons to include Vue.js, SCSS, and working with APIs like the WordPress REST API.</p>
      <p>I believe in continuous learning and am always on the lookout for the next skill to master or technology to explore.</p>
    </div>
      <div class="skills">
        <ul class="skills-list">
          <li><a href="https://vuejs.org" target="_blank"><img src="@/assets/logos/vuedotjs.svg" alt="Vue.js logo"></a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><img src="@/assets/logos/html5.svg" alt="HTML logo"></a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="@/assets/logos/css3.svg" alt="CSS logo"></a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="@/assets/logos/javascript.svg" alt="JavaScript logo"></a></li>
        <li><a href="https://www.figma.com" target="_blank"><img src="@/assets/logos/figma.svg" alt="Figma logo"></a></li>
        <li><a href="https://sass-lang.com" target="_blank"><img src="@/assets/logos/sass.svg" alt="SCSS logo"></a></li>
        <li><a href="https://wordpress.org" target="_blank"><img src="@/assets/logos/wordpress.svg" alt="WordPress logo"></a></li>
        <li><a href="https://getbootstrap.com" target="_blank"><img src="@/assets/logos/bootstrap.svg" alt="Bootstrap logo"></a></li>
        <li><a href="https://nodejs.org" target="_blank"><img src="@/assets/logos/nodedotjs.svg" alt="Node.js logo"></a></li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
  };
  </script>
  
  <style scoped>

.intro {
  font-family: 'Roboto', sans-serif; 
  color: #333;
  line-height: 1.6;
  font-size: 1.1rem;
  text-align: justify;
  padding: 0 1rem;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 760px;
  margin: 0 auto;
  margin-bottom: 2rem;
}

.skills-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.skills-list li {
  display: flex;
  align-items: center;
  margin: 10px;
}

.skills-list img {
  width: 50px; 
  height: 50px; 
  margin-right: 10px;
}

.skills {
    margin-top: 1rem;

}

.about {
  margin-top: 2rem;
  color: black;
  font-size: 1.1rem;
}

.skills-list li a img:hover {
  transform: scale(1.15); 
  transition: all 0.2s ease-in-out; 
}

.skills-list li a img {
  cursor: pointer;
}

  </style>
  