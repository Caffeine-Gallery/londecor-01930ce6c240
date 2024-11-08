import { backend } from "declarations/backend";

// Initialize portfolio
async function loadPortfolio() {
    try {
        const projects = await backend.getProjects();
        const portfolioGrid = document.getElementById('portfolio-grid');
        
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'col-md-4 mb-4';
            projectElement.innerHTML = `
                <div class="card">
                    <img src="${project.imageUrl}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                    </div>
                </div>
            `;
            portfolioGrid.appendChild(projectElement);
        });
    } catch (error) {
        console.error('Error loading portfolio:', error);
    }
}

// Initialize testimonials
async function loadTestimonials() {
    try {
        const testimonials = await backend.getTestimonials();
        const testimonialsContainer = document.getElementById('testimonials-container');
        
        testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.className = 'col-md-4 mb-4';
            testimonialElement.innerHTML = `
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p>${testimonial.content}</p>
                        <div class="testimonial-author">
                            <strong>${testimonial.author}</strong>
                            <div class="rating">${'★'.repeat(testimonial.rating)}${'☆'.repeat(5-testimonial.rating)}</div>
                        </div>
                    </div>
                </div>
            `;
            testimonialsContainer.appendChild(testimonialElement);
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        await backend.submitContact(name, email, message);
        alert('Thank you for your message. We will get back to you soon!');
        e.target.reset();
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your message. Please try again.');
    }
});

// Initialize the page
window.addEventListener('load', () => {
    loadPortfolio();
    loadTestimonials();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
