(function () {
    emailjs.init("user_ix2c9dvrdsdZevSF2btCc");
})();

// prevent page refresh with contact form
$("#contactSubmit").on("click", e => {
    e.preventDefault();

    var data = {
        service_id: 'gmail',
        template_id: 'template_Odi56vXo',
        user_id: 'user_ix2c9dvrdsdZevSF2btCc',
        template_params: {
            "icon_email": $("#icon_email").val().trim(),
            "icon_name": $("#icon_name").val(),
            "icon_domain": $("#icon_domain").val(),
            "message": $("#message").val(),
            "icon_telephone": $("#icon_telephone").val().trim()
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        console.log('Your mail is sent!');
        alert("Your email has been sent, thank you for reaching out!\nI'll be back to you as soon as possible.\n -Shannon")
    }).fail(function (error) {
        console.log('Error ' + JSON.stringify(error));
    });

    $("#icon_email").val("");
    $("#icon_name").val("");
    $("#icon_domain").val("");
    $("#message").val("");
    $("#icon_telephone").val("");
});

