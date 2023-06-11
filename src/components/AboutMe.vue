<template>
    <section id="about" class="about">
      <p>Hello, my name is Emil Halvorsen, and I am a first-year student studying Front-End Development at Noroff. I like to create engaging and user-friendly web experiences. My journey into web development began with a curiosity for HTML, CSS, and JavaScript, and I have since expanded my skills to include various technologies such as Vue.js, SCSS, and working with APIs like the WordPress REST API.</p>
      <div class="skills">
        <ul class="skills-list">
          <li><img src="@/assets/logos/vuedotjs.svg" alt="Vue.js logo"></li>
          <li><img src="@/assets/logos/html5.svg" alt="HTML logo"></li>
          <li><img src="@/assets/logos/css3.svg" alt="CSS logo"></li>
          <li><img src="@/assets/logos/javascript.svg" alt="JavaScript logo"></li>
          <li><img src="@/assets/logos/sass.svg" alt="SCSS logo"></li>
          <li><img src="@/assets/logos/wordpress.svg" alt="WordPress logo"></li>
          <li><img src="@/assets/logos/bootstrap.svg" alt="Bootstrap logo"></li>
          <li><img src="@/assets/logos/nodedotjs.svg" alt="Node.js logo"></li>
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

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
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
  width: 50px;  /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
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


  </style>
  