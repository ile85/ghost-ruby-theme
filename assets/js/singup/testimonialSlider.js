document.addEventListener('DOMContentLoaded', function () {
    let currentTestimonialIndex = 0;
    const testimonials = [
        { text: "This AI tool transformed our content strategy, increasing engagement by 50%.", author: "Company A" },
        { text: "A must-have tool for any data-driven marketer.", author: "Company B" },
        { text: "Our team's productivity has doubled since we started using this tool.", author: "Company C" }
    ];

    function changeTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        const testimonial = testimonials[currentTestimonialIndex];
        const textElement = document.getElementById('testimonial-text');
        const authorElement = document.getElementById('testimonial-author');
        
        if (textElement && authorElement) {
            textElement.textContent = `"${testimonial.text}"`;
            authorElement.textContent = `- ${testimonial.author}`;
        }
    }

    setInterval(changeTestimonial, 5000); // Change testimonial every 5 seconds
});
