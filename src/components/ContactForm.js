import React from "react";

function ContactForm() {
  const handleFocusInput = (e) => {
    const labels = document.getElementsByTagName("label");
    e.target.style.borderColor = "rgb(30 64 175)";
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      if (e.target.id == label.htmlFor) {
        label.style.transform = "translateY(-20px)";
        label.style.color = "rgb(30 64 175)";
      }
    }
  };
  const handleBlurInput = (e) => {
    const labels = document.getElementsByTagName("Label");
    if (!e.target.value) {
      for (let i = 0; i < labels.length; i++) {
        const label = labels[i];
        if (e.target.id == label.htmlFor) {
          label.style.transform = "translateY(0px)";
          label.style.color = "rgb(107 114 128)";
        }
        e.target.style.borderColor = "rgb(209 213 219)";
      }
    }
  };
  return (
    <div className="">
      <form action="#" className="flex flex-col space-y-4 pt-3">
        <div className="relative flex flex-col">
          <input
            type="text"
            id="hero_form_name"
            className=" border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full bg-white bg-opacity-5"
            required
            name="name"
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
          <label
            htmlFor="hero_form_name"
            className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in "
          >
            Name
          </label>
        </div>
        <div className="relative pt-[10px]">
          <span className="  flex justify-between  rounded-md  h-9 w-80">
            <input
              id="hero_form_number"
              name="hero_form_number"
              type="text"
              className="border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full bg-white bg-opacity-5"
              onFocus={handleFocusInput}
              onBlur={handleBlurInput}
            />
            {/* <label className="inputLabel"></label> */}
            <button className=" bg-black bg-opacity-70 rounded-md text-white font-semibold text-[13px] w-24">
              Send OTP
            </button>
          </span>
          <label
            htmlFor="hero_form_number"
            className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in"
          >
            Mobile Number
          </label>
        </div>
        <div className="relative pt-[10px]">
          <input
            id="hero_form_email"
            type="text"
            name="hero_form_name"
            className="border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full bg-white bg-opacity-5"
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
          <label
            htmlFor="hero_form_email"
            className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in"
          >
            Email Id
          </label>
        </div>

        {/* <Hero_Dropdown></Hero_Dropdown> */}

        <button
          type="submit"
          className="h-10 bg-black bg-opacity-70 font-bold text-white"
        >
          Request a Call Back
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
