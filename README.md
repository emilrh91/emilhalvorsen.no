
## emilhalvorsen.no

### Components

- PortfolioHome.vue: This component is the main home page of the portfolio. It incorporates the 'About Me' component and showcases a list of school projects using a swiper slide. Each project is rendered in the ProjectCard component.

- AboutMe.vue: This component renders an 'About Me' section that includes a brief description of the user and a list of the user's skills with corresponding logos.

- ExpandableContent.vue: A Vue component that displays content in an expandable/collapsible format. It starts collapsed and expands upon the user's interaction. It's designed to hold content that exceeds the provided visibleLines prop. If the content exceeds the visible lines, a toggle button appears to expand or collapse the content.

- NavigationBar.vue: This component handles the navigation bar, which includes a responsive collapsing and expanding feature. When the page is scrolled, the navigation bar will hide and reappear based on the scroll direction.


- ProjectCard.vue: This component is responsible for displaying individual project details. The details include the project image, title, description, a link to the Github repository, and a link to the live site.

### Setup and Run
Here's how you can set up this project:

- Clone this repository.
    
    git clone https://github.com/emilrh91/emilhalvorsen.no

- Navigate to the project folder.
    
    cd portfolio-home

### Project Structure
This project uses the following structure:

assets: This folder contains any images or icons used in the project.

components: This folder contains all the Vue.js components used in the project.

data: This folder contains data that's used in the project, such as project details.
