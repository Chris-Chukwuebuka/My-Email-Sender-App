const form =document.getElementById('form');    // this is the form
const emailInput =document.getElementById('email-input');  // this is the email input field


const sendEmail = async (event) => {
    event.preventDefault();
    try {
        const email = emailInput.value;
    
        if (!email|| email.trim().length === 0) {
            return alert("Please enter a valid email");
        }

        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json",
            },
           
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);


    }
}

form.addEventListener('submit', sendEmail);
