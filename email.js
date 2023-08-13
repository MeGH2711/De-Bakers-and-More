function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_hvmak6r";
    const templateID = "template_niwtsru";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            console.log("Your Message Sent Successfully!");
        })
        .catch(err => console.log(err));
}