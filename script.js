// NeoCampus AI - JavaScript Functionality

// College-specific knowledge base for SVS Group of Institutions
const svsKnowledgeBase = {
    admissions: {
        engineering: "SVS Group of Institutions offers B.Tech programs in various specializations. Admissions are through EAMCET (SVSE code). The college is affiliated to JNTU Hyderabad and approved by AICTE. Application process typically starts in May-June.",
        pharmacy: "B.Pharm program started in 2008, M.Pharm in 2011 with specializations in Pharmaceutical Analysis, Pharmaceutics, and Pharmacology. Approved by AICTE and PCI, affiliated to JNTU Hyderabad.",
        mba: "MBA program started in 2009 with experienced faculty. Admissions through ICET. Focus on developing holistic managers for industry requirements."
    },
    facilities: {
        campus: "State-of-the-art infrastructure including modern classrooms, well-stocked library, computer labs, departmental laboratories, seminar halls, sports complex, gym, and hygienic cafeteria.",
        hostel: "Hostel facilities available with proper accommodation for both boys and girls. Guest room facilities for visiting faculty and family members.",
        library: "Well-equipped library with extensive collection of books, journals, and digital resources.",
        labs: "Departmental laboratories for practical training in all engineering and pharmacy disciplines."
    },
    location: "Located at Bheemaram, Hanamkonda, Warangal district, Telangana. Contact: 0870-2453900, Email: info@svsit.ac.in",
    canteen: "Hygienic cafeteria providing quality food with various meal options for students and staff.",
    placements: "Strong placement record with good industry connections. Regular training programs and workshops for placement preparation.",
    activities: "Regular cultural events, technical workshops, seminars, sports activities, and innovation challenges for holistic student development."
};

/**
 * Main AI response function that processes user queries and returns appropriate responses
 * @param {string} userMessage - The user's input message
 * @returns {string} - AI generated response based on the query
 */
function getAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Admission-related queries
    if (message.includes('admission') || message.includes('entrance') || message.includes('eamcet') || message.includes('icet')) {
        if (message.includes('engineering') || message.includes('b.tech') || message.includes('btech')) {
            return `🎓 **Engineering Admissions at SVS:**\n\n${svsKnowledgeBase.admissions.engineering}\n\n📞 For detailed information, contact: 0870-2453900\n📧 Email: info@svsit.ac.in\n\n**Important:** Check the official website for latest cutoffs and application deadlines!`;
        } else if (message.includes('pharmacy') || message.includes('b.pharm') || message.includes('m.pharm')) {
            return `💊 **Pharmacy Admissions at SVS:**\n\n${svsKnowledgeBase.admissions.pharmacy}\n\n🏥 This is one of the largest premier pharmacy institutes in India!\n\n📞 Contact: 0870-2453900 for admission guidance.`;
        } else if (message.includes('mba') || message.includes('management')) {
            return `💼 **MBA Admissions at SVS:**\n\n${svsKnowledgeBase.admissions.mba}\n\n🎯 Focus areas: Developing industry-ready managers\n📞 Contact: 0870-2453900`;
        } else {
            return `🎓 **SVS Admissions Overview:**\n\n**Programs Available:**\n• 🔧 Engineering (B.Tech) - Through EAMCET\n• 💊 Pharmacy (B.Pharm, M.Pharm) - Various specializations\n• 💼 MBA - Through ICET\n\n**College Code:** SVSE\n📍 Location: Bheemaram, Hanamkonda, Warangal\n📞 Contact: 0870-2453900`;
        }
    }
    
    // Facilities queries
    if (message.includes('facilities') || message.includes('campus') || message.includes('infrastructure')) {
        return `🏫 **SVS Campus Facilities:**\n\n${svsKnowledgeBase.facilities.campus}\n\n🏠 **Hostel:** ${svsKnowledgeBase.facilities.hostel}\n\n📚 **Library:** ${svsKnowledgeBase.facilities.library}\n\n🔬 **Labs:** ${svsKnowledgeBase.facilities.labs}\n\n✨ SVS takes pride in providing world-class infrastructure for holistic student development!`;
    }
    
    // Canteen queries
    if (message.includes('canteen') || message.includes('food') || message.includes('mess') || message.includes('dining')) {
        return `🍽️ **SVS Canteen & Food Services:**\n\n${svsKnowledgeBase.canteen}\n\n**Features:**\n• 🥗 Variety of meal options\n• 💰 Affordable pricing\n• 🧼 Hygienic preparation\n• ⏰ Convenient timings\n\n📞 For specific menu and timing details, contact: 0870-2453900`;
    }
    
    // Placement queries
    if (message.includes('placement') || message.includes('job') || message.includes('career') || message.includes('companies')) {
        return `💼 **SVS Placements & Career Opportunities:**\n\n${svsKnowledgeBase.placements}\n\n**What we offer:**\n• 📈 Strong industry connections\n• 🎯 Regular placement training\n• 💡 Skill development workshops\n• 🤝 Career guidance sessions\n\n**Result:** Well-prepared graduates for successful careers!\n\n📞 Contact placement cell: 0870-2453900`;
    }
    
    // Activities and clubs
    if (message.includes('club') || message.includes('activity') || message.includes('event') || message.includes('cultural') || message.includes('sports')) {
        return `🎭 **Student Life at SVS:**\n\n${svsKnowledgeBase.activities}\n\n**Available Activities:**\n• 🎨 Cultural events & festivals\n• 💻 Technical workshops\n• 🏆 Sports competitions\n• 🔬 Innovation challenges\n• 📢 Seminars & guest lectures\n• 🤝 Student organizations\n\n**Philosophy:** Learning goes beyond classrooms at SVS! 🌟`;
    }
    
    // Fees queries
    if (message.includes('fee') || message.includes('cost') || message.includes('tuition') || message.includes('price')) {
        return `💰 **SVS Fee Information:**\n\nFee structures vary by program:\n• 🔧 **Engineering (B.Tech):** Contact for current rates\n• 💊 **Pharmacy (B.Pharm/M.Pharm):** Program-specific fees\n• 💼 **MBA:** Management program fees\n\n🏆 **Scholarships Available!**\n\n📞 **For exact fee details:** 0870-2453900\n📧 **Email:** info@svsit.ac.in\n\n💡 *Tip: Ask about scholarship opportunities during admission!*`;
    }
    
    // Location and contact
    if (message.includes('location') || message.includes('address') || message.includes('contact') || message.includes('phone')) {
        return `📍 **SVS Group of Institutions Location & Contact:**\n\n**Address:** ${svsKnowledgeBase.location}\n\n**Contact Numbers:**\n📞 0870-2453900\n📱 +91-9849509036\n📱 +91-9391949237\n\n**Affiliations:**\n🏛️ JNTU Hyderabad\n✅ AICTE Approved\n🏆 NBA Accredited\n📋 ISO:9001:2005 Certified`;
    }
    
    // Hostel specific
    if (message.includes('hostel') || message.includes('accommodation') || message.includes('boarding')) {
        return `🏠 **SVS Hostel Facilities:**\n\n${svsKnowledgeBase.facilities.hostel}\n\n**Features:**\n• 🛏️ Comfortable accommodation\n• 👦👧 Separate hostels for boys & girls\n• 🛡️ Safe and secure environment\n• 🏠 Guest rooms for families\n• 🍽️ Mess facilities\n\n📞 **For hostel admission:** 0870-2453900\n\n*Experience a home away from home at SVS!* 🏡`;
    }
    
    // Default response
    return `🤖 Thank you for your question about SVS Group of Institutions!\n\nI can help you with information about:\n\n🎓 **Admissions** - Engineering, Pharmacy, MBA\n🏫 **Campus Facilities** - Labs, Library, Hostels\n🍽️ **Canteen & Food Services**\n💼 **Placements & Careers**\n🎭 **Student Activities & Clubs**\n💰 **Fees & Scholarships**\n📍 **Location & Contact Details**\n\n*Could you please be more specific about what you'd like to know?*\n\n📞 **Direct Contact:** 0870-2453900\n📧 **Email:** info@svsit.ac.in`;
}

/**
 * Sends a message and handles the chat flow
 */
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTyping();
    
    // Simulate AI processing time (realistic delay)
    setTimeout(() => {
        hideTyping();
        const response = getAIResponse(message);
        addMessage(response, 'bot');
    }, 1500 + Math.random() * 1000);
}

/**
 * Adds a message to the chat interface
 * @param {string} text - Message content
 * @param {string} sender - 'user' or 'bot'
 */
function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    if (sender === 'user') {
        messageDiv.innerHTML = `<strong>You:</strong><br>${text}`;
    } else {
        messageDiv.innerHTML = `<strong>🤖 NeoCampus AI:</strong><br>${text.replace(/\n/g, '<br>')}`;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

/**
 * Shows typing indicator animation
 */
function showTyping() {
    document.getElementById('typingIndicator').style.display = 'block';
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
}

/**
 * Hides typing indicator
 */
function hideTyping() {
    document.getElementById('typingIndicator').style.display = 'none';
}

/**
 * Handles quick query buttons
 * @param {string} query - Predefined query text
 */
function quickQuery(query) {
    document.getElementById('chatInput').value = query;
    sendMessage();
}

/**
 * Handles Enter key press in chat input
 * @param {Event} event - Keyboard event
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Animate quick action cards on load
    const cards = document.querySelectorAll('.action-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Focus on input field for better UX
    document.getElementById('chatInput').focus();
});