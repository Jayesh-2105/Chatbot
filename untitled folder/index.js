const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');

let selectedCollege = null;

// College information
const collegeInfo = {
    vnit: {
        name: "VNIT Nagpur",
        admission: {
            title: "Admission Process at VNIT",
            content: "VNIT Nagpur admissions are primarily through JEE Main. The process includes online application via JoSAA counseling, seat allocation, and document verification. Application deadline is usually in May."
        },
        fees: {
            title: "Fee Structure at VNIT",
            content: "The annual fees for B.Tech programs at VNIT is approximately ₹1,65,000 for general category students. Fees include tuition, development charges, and other amenities."
        },
        courses: {
            title: "Courses Offered at VNIT",
            content: "VNIT offers B.Tech in Computer Science, Electrical, Mechanical, Civil, Electronics, and Metallurgical Engineering. Also offers M.Tech, MBA, and PhD programs."
        },
        placement: {
            title: "Placement Information at VNIT",
            content: "VNIT has excellent placement record with 90%+ placement rate. Highest package: ₹42 LPA, Average package: ₹15 LPA. Top recruiters include Microsoft, Amazon, Google, and Tata Group."
        },
        hostel: {
            title: "Hostel Facilities at VNIT",
            content: "VNIT provides separate hostels for boys and girls with excellent facilities including WiFi, mess, sports facilities, and 24/7 security. Hostel fees: ₹75,000 per year."
        },
        location: {
            title: "VNIT Campus Location",
            content: "VNIT is located at: South Ambazari Road, Nagpur, Maharashtra 440010. It is well connected by road and approximately 8 km from Nagpur Railway Station."
        }
    },
    rcoem: {
        name: "RCOEM",
        admission: {
            title: "Admission Process at RCOEM",
            content: "RCOEM admissions are based on MHT-CET/JEE Main scores. The process includes online application, counseling, and document verification. Application deadline is typically in June."
        },
        fees: {
            title: "Fee Structure at RCOEM",
            content: "The annual fees for B.Tech programs at RCOEM is approximately ₹1,45,000. Additional charges for development fees and other amenities may apply."
        },
        courses: {
            title: "Courses Offered at RCOEM",
            content: "RCOEM offers B.Tech in Computer Science, IT, Mechanical, Electrical, Electronics, and Civil Engineering. Also offers MBA, M.Tech, and PhD programs."
        },
        placement: {
            title: "Placement Information at RCOEM",
            content: "RCOEM has good placement record with 85%+ placement rate. Highest package: ₹28 LPA, Average package: ₹6.5 LPA. Top recruiters include TCS, Infosys, Wipro, and Persistent."
        },
        hostel: {
            title: "Hostel Facilities at RCOEM",
            content: "RCOEM provides hostel facilities with AC and non-AC options. Facilities include WiFi, cafeteria, gym, and 24/7 security. Hostel fees: ₹70,000 per year (non-AC) and ₹90,000 (AC)."
        },
        location: {
            title: "RCOEM Campus Location",
            content: "RCOEM is located at: Katol Road, Nagpur, Maharashtra 441501. The campus is approximately 15 km from Nagpur Railway Station."
        }
    },
    ycce: {
        name: "YCCE",
        admission: {
            title: "Admission Process at YCCE",
            content: "YCCE admissions are based on MHT-CET/JEE Main scores. The process includes online application, centralized admission process (CAP), and document verification."
        },
        fees: {
            title: "Fee Structure at YCCE",
            content: "The annual fees for B.Tech programs at YCCE is approximately ₹1,20,000. Additional charges for development fees and other amenities may apply."
        },
        courses: {
            title: "Courses Offered at YCCE",
            content: "YCCE offers B.Tech in Computer Science, IT, Mechanical, Electrical, Electronics, and Civil Engineering. Also offers MBA, M.Tech, and PhD programs."
        },
        placement: {
            title: "Placement Information at YCCE",
            content: "YCCE has a decent placement record with 80%+ placement rate. Highest package: ₹18 LPA, Average package: ₹5 LPA. Top recruiters include Accenture, Tech Mahindra, and L&T."
        },
        hostel: {
            title: "Hostel Facilities at YCCE",
            content: "YCCE provides hostel facilities with necessary amenities including WiFi, mess, common room, and security. Hostel fees: ₹60,000 per year."
        },
        location: {
            title: "YCCE Campus Location",
            content: "YCCE is located at: Hingna Road, Nagpur, Maharashtra 441110. The campus is approximately 12 km from Nagpur city center."
        }
    },
    raisoni: {
        name: "Raisoni",
        admission: {
            title: "Admission Process at Raisoni",
            content: "Raisoni admissions are based on MHT-CET/JEE Main scores. The process includes online application, counseling, and document verification. Management quota seats are also available."
        },
        fees: {
            title: "Fee Structure at Raisoni",
            content: "The annual fees for B.Tech programs at Raisoni is approximately ₹1,10,000. Additional charges for development fees and other amenities may apply."
        },
        courses: {
            title: "Courses Offered at Raisoni",
            content: "Raisoni offers B.Tech in Computer Science, IT, Mechanical, Electrical, Electronics, and Civil Engineering. Also offers MBA, M.Tech, and diploma programs."
        },
        placement: {
            title: "Placement Information at Raisoni",
            content: "Raisoni has a good placement record with 75%+ placement rate. Highest package: ₹12 LPA, Average package: ₹4 LPA. Top recruiters include Capgemini, Cognizant, and Byju's."
        },
        hostel: {
            title: "Hostel Facilities at Raisoni",
            content: "Raisoni provides hostel facilities with AC and non-AC options. Facilities include WiFi, cafeteria, gym, and security. Hostel fees: ₹55,000 per year (non-AC) and ₹75,000 (AC)."
        },
        location: {
            title: "Raisoni Campus Location",
            content: "Raisoni is located at: Gat No. 279, Nagpur-Aurangabad Highway, Nagpur, Maharashtra 441110. The campus is approximately 15 km from Nagpur city center."
        }
    },
    priyadarshini: {
        name: "Priyadarshini",
        admission: {
            title: "Admission Process at Priyadarshini",
            content: "Priyadarshini admissions are based on MHT-CET scores. The process includes online application, centralized admission process (CAP), and document verification."
        },
        fees: {
            title: "Fee Structure at Priyadarshini",
            content: "The annual fees for B.Tech programs at Priyadarshini is approximately ₹95,000. Additional charges for development fees and other amenities may apply."
        },
        courses: {
            title: "Courses Offered at Priyadarshini",
            content: "Priyadarshini offers B.Tech in Computer Science, IT, Mechanical, Electrical, Electronics, and Civil Engineering. Also offers MBA and M.Tech programs."
        },
        placement: {
            title: "Placement Information at Priyadarshini",
            content: "Priyadarshini has a decent placement record with 70%+ placement rate. Highest package: ₹10 LPA, Average package: ₹3.5 LPA. Top recruiters include Wipro, Infosys, and TCS."
        },
        hostel: {
            title: "Hostel Facilities at Priyadarshini",
            content: "Priyadarshini provides hostel facilities for both boys and girls. Facilities include WiFi, mess, common room, and security. Hostel fees: ₹50,000 per year."
        },
        location: {
            title: "Priyadarshini Campus Location",
            content: "Priyadarshini is located at: Hingna Road, Nagpur, Maharashtra 441110. The campus is approximately 10 km from Nagpur city center."
        }
    }
};

function selectCollege(collegeCode) {
    selectedCollege = collegeCode;
    addMessage(collegeInfo[collegeCode].name, true);
    
    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        addMessage(`Great! You've selected ${collegeInfo[collegeCode].name}. What would you like to know about ${collegeInfo[collegeCode].name}?`, false);
        addQuickReplies();
    }, 1000);
}

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-bubble ${isUser ? 'user-bubble' : 'bot-bubble'} animate-fade-in`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'flex p-1';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="w-2 h-2 bg-gray-500 rounded-full mx-1 typing-dot"></div>
        <div class="w-2 h-2 bg-gray-500 rounded-full mx-1 typing-dot"></div>
        <div class="w-2 h-2 bg-gray-500 rounded-full mx-1 typing-dot"></div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function createInfoCard(title, content) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'college-card';
    cardDiv.innerHTML = `
        <h4 class="text-blue-600 font-semibold mb-2">${title}</h4>
        <p class="text-gray-800 leading-relaxed">${content}</p>
    `;
    return cardDiv;
}

function addQuickReplies() {
    const quickRepliesDiv = document.createElement('div');
    quickRepliesDiv.className = 'flex flex-wrap gap-2 mt-2';
    quickRepliesDiv.innerHTML = `
        <span class="quick-reply" onclick="sendQuickReply('admission')"><i class="fas fa-user-graduate mr-1"></i> Admission</span>
        <span class="quick-reply" onclick="sendQuickReply('fees')"><i class="fas fa-money-bill-wave mr-1"></i> Fees</span>
        <span class="quick-reply" onclick="sendQuickReply('courses')"><i class="fas fa-book mr-1"></i> Courses</span>
        <span class="quick-reply" onclick="sendQuickReply('placement')"><i class="fas fa-briefcase mr-1"></i> Placement</span>
        <span class="quick-reply" onclick="sendQuickReply('hostel')"><i class="fas fa-bed mr-1"></i> Hostel</span>
        <span class="quick-reply" onclick="sendQuickReply('location')"><i class="fas fa-map-marker-alt mr-1"></i> Location</span>
        <span class="quick-reply" onclick="sendQuickReply('thanks')"><i class="fas fa-hands-clapping mr-1"></i> Thank You</span>
        <span class="quick-reply bg-purple-100 border-purple-300" onclick="sendQuickReply('change_college')"><i class="fas fa-exchange-alt mr-1"></i> Change College</span>
    `;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-bubble bot-bubble animate-fade-in';
    messageDiv.innerHTML = 'What information would you like?';
    messageDiv.appendChild(quickRepliesDiv);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserMessage(message) {
    message = message.toLowerCase();
    
    if (!selectedCollege) {
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            addMessage('Please select a college first from the options above.', false);
            
            const collegeSelectionDiv = document.createElement('div');
            collegeSelectionDiv.className = 'message-bubble bot-bubble animate-fade-in';
            collegeSelectionDiv.innerHTML = `
                <div class="font-medium mb-2">Select a college:</div>
                <div class="grid grid-cols-2 gap-3">
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center" onclick="selectCollege('vnit')">
                        <i class="fas fa-university text-2xl text-blue-600 mb-2"></i>
                        <span>VNIT Nagpur</span>
                    </div>
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center" onclick="selectCollege('rcoem')">
                        <i class="fas fa-school text-2xl text-blue-600 mb-2"></i>
                        <span>RCOEM</span>
                    </div>
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center" onclick="selectCollege('ycce')">
                        <i class="fas fa-book-reader text-2xl text-blue-600 mb-2"></i>
                        <span>YCCE</span>
                    </div>
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center" onclick="selectCollege('raisoni')">
                        <i class="fas fa-graduation-cap text-2xl text-blue-600 mb-2"></i>
                        <span>Raisoni</span>
                    </div>
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center col-span-2" onclick="selectCollege('priyadarshini')">
                        <i class="fas fa-atom text-2xl text-blue-600 mb-2"></i>
                        <span>Priyadarshini</span>
                    </div>
                </div>
            `;
            chatMessages.appendChild(collegeSelectionDiv);
        }, 1000);
        return;
    }
    
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        
        if (message.includes('admission')) {
            const info = collegeInfo[selectedCollege].admission;
            addMessage(info.title, false);
            const card = createInfoCard(info.title, info.content);
            chatMessages.appendChild(card);
        } 
        else if (message.includes('fee') || message.includes('fees')) {
            const info = collegeInfo[selectedCollege].fees;
            addMessage(info.title, false);
            const card = createInfoCard(info.title, info.content);
            chatMessages.appendChild(card);
        } 
        else if (message.includes('course')) {
            const info = collegeInfo[selectedCollege].courses;
            addMessage(info.title, false);
            const card = createInfoCard(info.title, info.content);
            chatMessages.appendChild(card);
        } 
        else if (message.includes('placement')) {
            const info = collegeInfo[selectedCollege].placement;
            addMessage(info.title, false);
            const card = createInfoCard(info.title, info.content);
            chatMessages.appendChild(card);
        } 
        else if (message.includes('hostel')) {
            const info = collegeInfo[selectedCollege].hostel;
            addMessage(info.title, false);
            const card = createInfoCard(info.title, info.content);
            chatMessages.appendChild(card);
        } 
        else if (message.includes('location')) {
            const info = collegeInfo[selectedCollege].location;
            addMessage(info.title, false);
            const card = createInfoCard(info.title, info.content);
            chatMessages.appendChild(card);
        } 
        else if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
            addMessage(`Hello! How can I assist you with ${collegeInfo[selectedCollege].name}?`, false);
        } 
        else if (message.includes('thank')) {
            addMessage('You\'re welcome! Is there anything else you\'d like to know?', false);
        } 
        else {
            addMessage('I\'m not sure I understand. Could you please ask about admission, fees, courses, placement, hostel, or location?', false);
        }
        
        addQuickReplies();
    }, 1000);
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;
    
    addMessage(message, true);
    userInput.value = '';
    
    handleUserMessage(message);
}

function sendQuickReply(topic) {
    if (topic === 'thanks') {
        addMessage('Thank you!', true);
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            addMessage('You\'re welcome! Feel free to ask if you have more questions.', false);
            addQuickReplies();
        }, 1000);
    } else if (topic === 'change_college') {
        addMessage('Change college', true);
        selectedCollege = null;
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            addMessage('Sure! Which college would you like information about?', false);
            
            const collegeSelectionDiv = document.createElement('div');
            collegeSelectionDiv.className = 'message-bubble bot-bubble animate-fade-in';
            collegeSelectionDiv.innerHTML = `
                <div class="font-medium mb-2">Select a college:</div>
                <div class="grid grid-cols-2 gap-3">
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center" onclick="selectCollege('vnit')">
                        <i class="fas fa-university text-2xl text-blue-600 mb-2"></i>
                        <span>VNIT Nagpur</span>
                    </div>
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center" onclick="selectCollege('rcoem')">
                        <i class="fas fa-school text-2xl text-blue-600 mb-2"></i>
                        <span>RCOEM</span>
                    </div>
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center" onclick="selectCollege('ycce')">
                        <i class="fas fa-book-reader text-2xl text-blue-600 mb-2"></i>
                        <span>YCCE</span>
                    </div>
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center" onclick="selectCollege('raisoni')">
                        <i class="fas fa-graduation-cap text-2xl text-blue-600 mb-2"></i>
                        <span>Raisoni</span>
                    </div>
                    <div class="college-option bg-white border border-blue-300 rounded-lg p-3 text-center cursor-pointer transition-all hover:bg-blue-100 flex flex-col items-center col-span-2" onclick="selectCollege('priyadarshini')">
                        <i class="fas fa-atom text-2xl text-blue-600 mb-2"></i>
                        <span>Priyadarshini</span>
                    </div>
                </div>
            `;
            chatMessages.appendChild(collegeSelectionDiv);
        }, 1000);
    } else {
        addMessage(topic, true);
        handleUserMessage(topic);
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
