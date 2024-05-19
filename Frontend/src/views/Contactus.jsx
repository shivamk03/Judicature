import emailjs from "emailjs-com";

function Contactus() {
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_k4rdk4j",
          "template_b9eyikc",
          e.target,
          "-lEozNnOiA_GQuvgG"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Feedback sent successfully. Thank you!");
            document.getElementById("myForm").reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  
    return (
      <div className="text-gray-400 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-secondary">Have a concern or feedback to offer? Do let us know.</p>
          </div>
          <form onSubmit={sendEmail} id="myForm">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-primary font-bold">Name</label>
                  <input type="text" id="name" name="name"
                    className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-primary font-bold">Email</label>
                  <input type="email" id="email" name="email"
                    className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-primary font-bold">Message</label>
                  <textarea id="message" name="message"
                    className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-amber-100 font-bold bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg"
                  >Send</button>
              </div>
          </div>
          </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contactus;
  