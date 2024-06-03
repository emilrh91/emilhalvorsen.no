<template>
    <section id="about" class="about">
    <div class="intro">
      <h2 class="text-center">Hi there, I'm Emil Halvorsen!</h2>
      <p>Hey there! I'm a first-year Front-End Development student at Noroff, and I love creating engaging and user-friendly web experiences.</p>
      <p>I got into web development because I was curious about HTML, CSS, and JavaScript, and I quickly got hooked! Now, I've also picked up Vue.js, SCSS, and working with APIs like the WordPress REST API.</p>
      <p>I've also been diving into Bootstrap, Vite, React, Git, and Figma. I'm all about continuous learning and always on the lookout for the next cool thing to master or explore!</p>

    </div>
    <div class="skills">
    <ul class="skills-list">
        <li><a href="https://reactjs.org" target="_blank"><img src="@/assets/logos/react.svg" alt="React logo"></a></li>
        <li><a href="https://vuejs.org" target="_blank"><img src="@/assets/logos/vuedotjs.svg" alt="Vue.js logo"></a></li>
        <li><a href="https://vitejs.dev" target="_blank"><img src="@/assets/logos/vite.svg" alt="Vite logo"></a></li>
        <li><a href="https://getbootstrap.com" target="_blank"><img src="@/assets/logos/bootstrap.svg" alt="Bootstrap logo"></a></li>
        <li><a href="https://sass-lang.com" target="_blank"><img src="@/assets/logos/sass.svg" alt="SCSS logo"></a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="@/assets/logos/javascript.svg" alt="JavaScript logo"></a></li>
        <li><a href="https://www.figma.com" target="_blank"><img src="@/assets/logos/figma.svg" alt="Figma logo"></a></li>
        <li><a href="https://git-scm.com" target="_blank"><img src="@/assets/logos/git.svg" alt="Git logo"></a></li>
        <li><a href="https://nodejs.org" target="_blank"><img src="@/assets/logos/nodedotjs.svg" alt="Node.js logo"></a></li>
        <li><a href="https://wordpress.org" target="_blank"><img src="@/assets/logos/wordpress.svg" alt="WordPress logo"></a></li>
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
  