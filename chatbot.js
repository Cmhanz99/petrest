// Chatbot functionality

// Elements
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbotBtn = document.getElementById('close-chatbot');
const chatbotMessages = document.querySelector('.chatbot-messages');
const userInput = document.getElementById('user-input');
const sendMessageBtn = document.getElementById('send-message');

// Simple responses for the chatbot
const chatbotResponses = {
    greeting: [
        "Hello! How can I help you find the perfect pet-friendly property today?",
        "Hi there! Looking for a place for you and your furry friend?",
        "Welcome to PetRest! I can help you find pet-friendly accommodations."
    ],
    location: [
        "We have properties in Downtown, Suburbs, Waterfront, and Rural areas. Which location interests you?",
        "Our most popular pet-friendly locations are Downtown and the Waterfront areas. Would you like to see properties there?"
    ],
    price: [
        "Our properties range from $120 to $200 per night. Do you have a specific budget in mind?",
        "We have options for all budgets! The average price is around $160 per night."
    ],
    pets: [
        "All our properties are pet-friendly! Some may have specific policies regarding size or type of pets.",
        "Yes, we specialize in pet-friendly accommodations! What type of pet do you have?"
    ],
    amenities: [
        "Our properties offer amenities like fenced yards, nearby parks, and pet washing stations.",
        "Many of our properties have pet-specific amenities like pet beds, food bowls, and toys."
    ],
    default: [
        "I'd be happy to help you with that. Could you provide more details?",
        "Let me check that for you. In the meantime, you can browse our featured properties.",
        "That's a great question! Our customer service team would have the most accurate information."
    ]
};

// Toggle chatbot visibility
chatbotIcon.addEventListener('click', function() {
    chatbotContainer.style.display = 'flex';
    chatbotIcon.style.display = 'none';
});

// Close chatbot
closeChatbotBtn.addEventListener('click', function() {
    chatbotContainer.style.display = 'none';
    chatbotIcon.style.display = 'flex';
});

// Send message when clicking the send button
sendMessageBtn.addEventListener('click', sendUserMessage);

// Send message when pressing Enter in input field
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendUserMessage();
    }
});

// Function to send user message and get chatbot response
function sendUserMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input field
    userInput.value = '';
    
    // Simulate chatbot thinking
    setTimeout(() => {
        // Get chatbot response
        const response = getChatbotResponse(message);
        
        // Add chatbot response to chat
        addMessage(response, 'bot');
        
        // Scroll to bottom of chat
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 1000);
}

// Function to add a message to the chat
function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = text;
    chatbotMessages.appendChild(messageElement);
    
    // Scroll to bottom of chat
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to get a response from the chatbot
function getChatbotResponse(message) {
    message = message.toLowerCase();
    
    // Check for keywords in the message
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return getRandomResponse('greeting');
    } else if (message.includes('location') || message.includes('where') || message.includes('area')) {
        return getRandomResponse('location');
    } else if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
        return getRandomResponse('price');
    } else if (message.includes('pet') || message.includes('dog') || message.includes('cat')) {
        return getRandomResponse('pets');
    } else if (message.includes('amenities') || message.includes('features')) {
        return getRandomResponse('amenities');
    } else {
        return getRandomResponse('default');
    }
}

// Function to get a random response from a category
function getRandomResponse(category) {
    const responses = chatbotResponses[category];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}