import React from "react";


import Form from "./Form";


const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full py-[50px] md:py-[100px] bg-[#ffffff] relative overflow-hidden"
    >
      {/* SECTION HEADING START */}
     
        <div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 1xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111] font-medium">
            Let’s Connect
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
            Feel free to reach out to me through the contact form below or
            connect with me on LinkedIn. I'm excited to connect with like-minded
            professionals, creative individuals, and organizations that value
            innovation and quality.
          </div>
        </div>
      
      {/* SECTION HEADING END */}

      <Form />
    </div>
  );
};

export default Contact;
