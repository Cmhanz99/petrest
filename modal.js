// Modal functionality for property details

// Elements
const propertyModal = document.getElementById('property-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalLocation = document.getElementById('modal-location');
const modalPrice = document.getElementById('modal-price');
const modalRating = document.getElementById('modal-rating');
const modalBeds = document.getElementById('modal-beds');
const modalBaths = document.getElementById('modal-baths');
const modalSize = document.getElementById('modal-size');
const modalPetPolicy = document.getElementById('modal-pet-policy');
const modalDescription = document.getElementById('modal-description');

// Property descriptions - This could be moved to HTML data attributes if needed
const propertyDescriptions = {
    1: "This charming cottage is perfect for families with pets. The fenced backyard provides a safe play area for your furry friends, while the spacious interior ensures comfort for everyone.",
    2: "Modern luxury apartment with panoramic city views. The building features a dedicated pet area and is located near pet-friendly parks.",
    3: "Peaceful riverside house with a large garden. Perfect for pets who love to play outdoors. The neighborhood is quiet and has many walking trails.",
    4: "Stylish modern condo in the heart of the city. Features a small balcony perfect for pets to enjoy fresh air. Close to pet shops and veterinary clinics.",
    5: "Beautiful villa with a spacious garden. Your pets will love the open space to run around. The house is fully fenced and secure for pets of all sizes.",
    6: "Cozy bungalow near the beach. Dogs will love the short walk to the dog-friendly beach. The property has a small yard and is fully fenced.",
    7: "Rustic cabin in the mountains. Perfect for nature-loving pets with hiking trails nearby. The property is secluded and has plenty of outdoor space.",
    8: "Stylish loft in the city center. Ideal for cat owners with climbing spaces and window perches. Close to pet-friendly cafes and shops.",
    9: "Spacious country home on a large plot of land. Pets can run freely in the fenced property. Perfect for families with multiple pets.",
    10: "Peaceful cottage by the lake. Dogs can enjoy swimming and playing in the water. The property has a dock and small beach area."
};

// Pet policies
const petPolicies = {
    1: "All pets welcome",
    2: "Cats and small dogs only",
    3: "All pets welcome",
    4: "Small pets only",
    5: "All pets welcome",
    6: "Dogs welcome",
    7: "All pets welcome",
    8: "Cats only",
    9: "All pets welcome",
    10: "Dogs welcome"
};

// Function to open property modal with details
function openPropertyModal(propertyId) {
    // Find the property card in the DOM
    const propertyCard = document.querySelector(`.property-card[data-id="${propertyId}"]`);
    
    if (propertyCard) {
        // Get information from the DOM
        const propertyImage = propertyCard.querySelector('.property-image').style.backgroundImage.slice(5, -2);
        const propertyName = propertyCard.querySelector('h3').textContent;
        const propertyLocation = propertyCard.querySelector('p').textContent.split(' - ')[0];
        const propertySize = propertyCard.querySelector('p').textContent.split(' - ')[1];
        const propertyBeds = propertyCard.querySelector('.property-features span:nth-child(1)').textContent.split(' ')[1];
        const propertyBaths = propertyCard.querySelector('.property-features span:nth-child(2)').textContent.split(' ')[1];
        const propertyPrice = propertyCard.querySelector('.price').textContent;
        const propertyRating = propertyCard.querySelector('.rating').textContent.split(' ')[1];
        
        // Set modal content
        modalImage.src = propertyImage;
        modalTitle.textContent = propertyName;
        modalLocation.textContent = propertyLocation;
        modalPrice.textContent = propertyPrice;
        modalRating.textContent = propertyRating;
        modalBeds.textContent = propertyBeds;
        modalBaths.textContent = propertyBaths;
        modalSize.textContent = propertySize;
        modalPetPolicy.textContent = petPolicies[propertyId] || "Pet friendly";
        modalDescription.textContent = propertyDescriptions[propertyId] || "A wonderful pet-friendly property with all the amenities you need for a comfortable stay.";
        
        // Show modal
        propertyModal.style.display = 'block';
        
        // Prevent scrolling on the body when modal is open
        document.body.style.overflow = 'hidden';
    }
}

// Add event listeners to all "Details" buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const propertyId = this.getAttribute('data-id');
            openPropertyModal(propertyId);
        });
    });
});

// Close modal when clicking the X button
closeModalBtn.addEventListener('click', function() {
    propertyModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside of modal content
window.addEventListener('click', function(event) {
    if (event.target === propertyModal) {
        propertyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && propertyModal.style.display === 'block') {
        propertyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});