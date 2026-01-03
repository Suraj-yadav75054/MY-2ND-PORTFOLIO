let display = document.getElementById("display");
function press(val) {
  display.value += val;
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
function clearDisplay() {
  display.value = "";
}



function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }


  const sayHiiForm = document.getElementById('sayhii-form');

  sayHiiForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Agar form me koi input fields nahi hai, to aap custom data bhej sakte hain
    const formData = {
      message: "User said Hii from navbar button",
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://formspree.io/f/mpwdgoyy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for saying Hii!');
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      alert('Error submitting form.');
    }
  });
  

