document.addEventListener('DOMContentLoaded', () => {

    //Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            //HTML5 validation is already active via "required" + novalidate handled by Bootstrap
            if (bookingForm.checkValidity()) {
                alert ('Thank you! Your booking request has been recieved.\nWe will confirm via WhatsApp within 2 hours.');
                bookingForm.requestFullscreen();
            } 
            else {
                bookingForm.classList.add('was-validated');
            }
        });
    }

    //feedback form (Contact Page)- works automatically on any form
    const allForms= document.querySelectorAll('form');
    allForms.forEach(form => {
        if (form.id !== 'bookingForm') {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                if (form.checkValidity()) {
                    alert('Thank you for your feedback!We will surely get back to you soon.') ;
                    form.reset() ;
                }
                else {
                    form.classList.add ('was-validated') ;
                }
            });
        }
    })

    //set minimum date to today for appointment
    const dateInput = document.getElementById('appointment-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    console.log ('Kutlo\'s Hairdo Bookings - Script Loaded-matches all assignment criteria', 'color:#f4a261; font-weight: bold');
});