// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            if (formStatus) {
                formStatus.textContent = 'Thanks! Your message has been logged locally.';
                formStatus.classList.remove('hidden');
            }
            contactForm.reset();
            setTimeout(() => {
                if (formStatus) {
                    formStatus.classList.add('hidden');
                }
            }, 4000);
        }
    });
}

// Certificate Lightbox Modal Logic
function openCertModal(imgSrc, title, issuer, date, verifyUrl) {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('modal-cert-img');
    const modalTitle = document.getElementById('modal-cert-title');
    const modalSubtitle = document.getElementById('modal-cert-subtitle');
    const verifyLink = document.getElementById('modal-verify-link');

    if (modal && modalImg && modalTitle) {
        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        if (modalSubtitle) modalSubtitle.textContent = `${issuer} • ${date}`;
        if (verifyLink) {
            if (verifyUrl) {
                verifyLink.href = verifyUrl;
                verifyLink.style.display = 'inline-flex';
            } else {
                verifyLink.style.display = 'none';
            }
        }
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeCertModal() {
    const modal = document.getElementById('cert-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertModal();
    }
});

// Close modal when clicking background overlay
const certModal = document.getElementById('cert-modal');
if (certModal) {
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            closeCertModal();
        }
    });
}