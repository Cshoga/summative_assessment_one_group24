document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const linkedin = document.getElementById('linkedin').value.trim();
    const coverLetter = document.getElementById('coverLetter').value.trim();
    const expectedSalary = document.getElementById('expectedSalary').value.trim();

    const fullNameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const linkedinRegex = /^https:\/\/www\.linkedin\.com\/.*$/;
    const coverLetterRegex = /^[A-Za-z\s]+$/;
    const salaryRegex = /^\d+(\.\d{1,2})?$/;

    const errorMessages = [];

    if (!fullNameRegex.test(fullName)) {
        errorMessages.push('Full Name can only contain letters and spaces.');
    }

    if (!emailRegex.test(email)) {
        errorMessages.push('Email is not valid.');
    }

    if (!phoneRegex.test(phone)) {
        errorMessages.push('Phone Number must be in the format 123-456-7890.');
    }

    if (!linkedinRegex.test(linkedin)) {
        errorMessages.push('LinkedIn Profile URL is not valid.');
    }

    if (!coverLetterRegex.test(coverLetter)) {
        errorMessages.push('Cover Letter can only contain letters and spaces.');
    }

    if (!salaryRegex.test(expectedSalary)) {
        errorMessages.push('Expected Salary must be a valid number with up to two decimal places.');
    }

    if (errorMessages.length > 0) {
        const errorMessageHtml = errorMessages.map(msg => `<p>${msg}</p>`).join('');
        document.getElementById('errorMessages').innerHTML = errorMessageHtml;
    } else {
        // Submit the form or perform further actions
        document.getElementById('errorMessages').innerHTML = '';
        alert('Form submitted successfully!');
        // Here you could add code to submit the form to a server or handle further actions
    }
});

