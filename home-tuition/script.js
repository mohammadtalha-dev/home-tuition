const lampCord = document.getElementById('lampCord');
const body = document.body;

// Toggle Lamp ON/OFF
lampCord.addEventListener('click', () => {
    body.classList.toggle('lamp-off');
    body.classList.toggle('lamp-on');
});

// Submit booking form to WhatsApp
document.getElementById('tuitionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const parentName = document.getElementById('parentName').value;
    const studentGrade = document.getElementById('studentGrade').value;
    const phone = document.getElementById('phone').value;

    const whatsappNumber = "923302413247"; 
    
    const message = `Hello! I want to claim 2 Days Free Demo Class.%0A%0A*Student Name:* ${encodeURIComponent(studentName)}%0A*Parent Name:* ${encodeURIComponent(parentName)}%0A*Student Class:* ${encodeURIComponent(studentGrade)}%0A*Tuition Location:* Power House, Roshan Bagh, Block 19, Karachi%0A*Preferred Timing:* 4:00 PM - 7:00 PM%0A*Contact Number:* ${encodeURIComponent(phone)}`;

    const successBox = document.getElementById('formSuccess');
    successBox.style.display = 'block';
    successBox.innerText = "Opening WhatsApp to book demo...";

    setTimeout(function() {
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }, 1200);
});
