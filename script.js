
  const sayHiiForm = document.getElementById('sayhii-form');

  sayHiiForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const message = sayHiiForm.message.value;

    const formData = {
      message: message
    };

    try {
      const response = await fetch("https://formspree.io/f/mpwdgoyy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Thanks for your feedback!");
        sayHiiForm.reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
      console.error(error);
    }
  });

  