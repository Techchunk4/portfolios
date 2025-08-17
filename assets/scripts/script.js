
// Interactive Features
let animationActive = false;

function startAnimation() {
    if (animationActive) return;
    animationActive = true;

    // Add flowing data indicators
    const sources = document.querySelectorAll('[data-type="source"]');
    const elkComponents = document.querySelectorAll('[data-type="logstash"], [data-type="elasticsearch"], [data-type="kibana"]');
    const workflows = document.querySelectorAll('[data-type="workflow"]');

    // Animate data sources
    sources.forEach((source, index) => {
        setTimeout(() => {
            source.classList.add('pulse', 'glow');
        }, index * 200);
    });

    // Animate ELK components
    setTimeout(() => {
        elkComponents.forEach((component, index) => {
            setTimeout(() => {
                component.classList.add('pulse', 'glow');
            }, index * 500);
        });
    }, 1000);

    // Animate workflows
    setTimeout(() => {
        workflows.forEach((workflow, index) => {
            setTimeout(() => {
                workflow.classList.add('pulse', 'glow');
            }, index * 200);
        });
    }, 3000);

    // Reset after animation
    setTimeout(() => {
        resetView();
        animationActive = false;
    }, 8000);
}

function highlightWorkflows() {
    const workflows = document.querySelectorAll('[data-type="workflow"]');
    workflows.forEach(workflow => {
        workflow.style.transform = 'scale(1.1) translateX(-10px)';
        workflow.style.borderColor = '#ff6b35';
        workflow.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.4)';
    });

    setTimeout(resetView, 3000);
}

function resetView() {
    const allComponents = document.querySelectorAll('.component, .elk-component, .workflow-component');
    allComponents.forEach(component => {
        component.classList.remove('pulse', 'glow');
        component.style.transform = '';
        component.style.borderColor = '';
        component.style.boxShadow = '';
    });
}

// Add hover effects and tooltips
document.querySelectorAll('.component, .elk-component, .workflow-component').forEach(component => {
    component.addEventListener('mouseenter', function () {
        if (!animationActive) {
            this.classList.add('glow');
        }
    });

    component.addEventListener('mouseleave', function () {
        if (!animationActive) {
            this.classList.remove('glow');
        }
    });
});

// Initialize with a welcome animation
window.addEventListener('load', () => {
    setTimeout(() => {
        startAnimation();
    }, 1000);
});

// Add connection lines dynamically
function createConnectionLines() {
    const diagram = document.querySelector('.architecture-diagram');

    // Create animated connection lines between sections
    const line1 = document.createElement('div');
    line1.className = 'connection-line animated';
    line1.style.cssText = `
                position: absolute;
                top: 50%;
                left: calc(33% - 1.5rem);
                width: 3rem;
                transform: translateY(-50%);
            `;

    const line2 = document.createElement('div');
    line2.className = 'connection-line animated';
    line2.style.cssText = `
                position: absolute;
                top: 50%;
                right: calc(33% - 1.5rem);
                width: 3rem;
                transform: translateY(-50%);
            `;

    diagram.appendChild(line1);
    diagram.appendChild(line2);
}




const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle menu when hamburger is clicked
mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const button = this.querySelector('.cta-button');
    button.innerHTML = 'Sending...';
    button.disabled = true;
});


// Add connection lines after DOM load
document.addEventListener('DOMContentLoaded', createConnectionLines);


