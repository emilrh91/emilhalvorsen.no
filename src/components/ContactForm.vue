<template>
    <div class="page-content">
      <h1>Contact me</h1>
      <form action="https://formspree.io/f/mqkvkedq" method="POST" class="contact-form">
        <label class="form-label">
          Your Name:
          <input type="text" name="name" v-model="form.name" class="form-input" required/>
        </label>
        <label class="form-label">
          Your Email:
          <input type="email" name="email" v-model="form.email" class="form-input" required/>
        </label>
        <label class="form-label">
          Your Message:
          <textarea name="message" v-model="form.message" class="form-textarea" required></textarea>
        </label>
        <button type="submit" class="form-button">Submit</button>
      </form>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .page-content {
  padding-top: 70px; 
  min-height: calc(100vh - 140px); 
}


.page-content {
  min-height: calc(100vh - 70px); 
  padding-bottom: 70px; 
}

  .contact-form {
    max-width: 600px;
    margin: 2rem auto;
    padding: 15px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.7); 
    backdrop-filter: blur(10px); 
    border-radius: 10px; 
    border: 1px solid rgba(255, 255, 255, 0.2); 
  }
  
  .form-label {
    display: block;
    margin-bottom: 10px;
    color: #333;
    font-size: 1.1em; 
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    margin-bottom: 20px;
    transition: border 0.2s ease-in-out;
  }
  
  .form-input::placeholder,
  .form-textarea::placeholder {
    color: #aaa;
  }
  
  .form-button {
    display: block;
    width: 100%;
    padding: 10px;
    color: white;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
  }
  
  .form-button:hover {
    background-color: #444;
  }

  .form-input:focus,
.form-textarea:focus {
  outline: 2px solid #333;
}

  </style>
  