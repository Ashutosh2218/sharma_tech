import Navbar from "../components/Navbar";
// import HeroForm from "../components/HeroForm";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      {/* Hero Section */}
      <div className="flex flex-col items-center  relative top-[270px] pb-[150px] mb-[320px]">
        <div className="light_glass h-[658px] w-[568px] p-12 pt-20 pl-20  rounded-xl relative right-10 z-30 flex flex-col  ">
          <div className="  py-2 w-[137px] rounded-full relative left-5 bg-black bg-opacity-10 text-black text-opacity-60  text-center font-semibold ">
            BEST CHOICE
          </div>
          <h1 className=" w-[400px] pt-4 font-medium text-[64px] tracking-tighter leading-[65px] ">
            Unleash Your Potential with{" "}
            <span className=" text-black text-opacity-70  font-semibold">
              SCG
            </span>
          </h1>
          <p className="  pt-5 text-xl tracking-tight leading-6 font-bold text-black text-opacity-40">
            Scale with interactive websites, custom tools, and growth hacks to
            supercharge your business
          </p>

          <div className=" mt-8 pl-4 flex  justify-between  border border-black   rounded-full  ">
            <input
              type="text"
              placeholder="Your Work Email"
              className=" bg-black bg-opacity-0  outline-none  font-semibold text-black text-opacity-50 py-4"
            />
            <button className=" bg-black text-white rounded-full w-[149px] h-full text-sm font-medium">
              Getting Started
            </button>
          </div>
        </div>
        <img
          src="/hero/coffee.png"
          className=" absolute left-[220px] -top-[110px]"
          alt=""
        />
        <img
          src="/hero/blue-ball.png"
          className=" absolute top-2 right-[550px] z-10"
          alt=""
        />
        <img
          src="/hero/half-blue-ball.png"
          className=" absolute top-[150px] left-[437px] z-10"
          alt=""
        />
        <img
          src="/hero/plant.png"
          className=" absolute top-[100px] right-[339px] z-10"
          alt=""
        />
        <img
          src="/hero/red-ball.png"
          className=" absolute top-[60px] right-[89px]"
          alt=""
        />
        <div className="light_glass h-[180px] w-[180px] rounded-xl absolute top-[100px] right-[139px] z-30 flex  justify-center items-center">
          <img src="/hero/graph.png" alt="" />
        </div>
        <img
          src="/hero/black-ball.png"
          className="absolute bottom-[115px] right-[31.75%]"
          alt=""
        />
        <img
          src="/hero/color-ball.png"
          className="absolute top-[140px] right-[199px] z-10"
          alt=""
        />
        <img
          src="/hero/color-ball.png"
          className="absolute bottom-[175px] left-[35%] z-10"
          alt=""
        />

        <img
          src="/hero/cred-card.png"
          className="absolute top-[325px] left-[17.5%] z-10"
          alt=""
        />
      </div>
      {/* Services */}
      <div className="dark_glass w-full p-10 flex flex-col items-center  ">
        <h1 className=" text-6xl text-white font-medium tracking-tighter mb-20 mt-8">
          Services
        </h1>
        <div className=" w-[80%]">
          <div className=" grid  grid-cols-3 gap-8   ">
            <div className="dark_glass  flex flex-col  p-8 pr-12">
              <div className="  w-[70px] h-[70px] mb-5 bg-[#353535] rounded-full flex justify-center items-center relative left-3 ">
                <img src="/home/services/webdev.svg" alt="" />
              </div>
              <h1 className=" text-2xl text-white font-medium tracking-tighter  mb-3">
                Web Development
              </h1>
              <p className=" text-xl text-white text-opacity-70">
                Scale with interactive websites, custom tools, and access to our
                investor
              </p>
            </div>
            <div className="dark_glass  flex flex-col  p-8 pr-12">
              <div className="  w-[70px] h-[70px] mb-5 bg-[#353535] rounded-full flex justify-center items-center relative left-3 ">
                <img src="/home/services/appdev.svg" className=" h-10" alt="" />
              </div>
              <h1 className=" text-2xl text-white font-medium tracking-tighter  mb-3">
                App Development
              </h1>
              <p className=" text-xl text-white text-opacity-70">
                Scale with interactive websites, custom tools, and access to our
                investor
              </p>
            </div>
            <div className="dark_glass  flex flex-col  p-8 pr-12">
              <div className="  w-[70px] h-[70px] mb-5 bg-[#353535] rounded-full flex justify-center items-center relative left-3 ">
                <img
                  src="/home/services/accounting.svg"
                  className=" h-12 relative bottom-1"
                  alt=""
                />
              </div>
              <h1 className=" text-2xl text-white font-medium tracking-tighter  mb-3">
                Accounting
              </h1>
              <p className=" text-xl text-white text-opacity-70">
                Scale with interactive websites, custom tools, and access to our
                investor
              </p>
            </div>
            <div className="dark_glass  flex flex-col  p-8 pr-12">
              <div className="  w-[70px] h-[70px] mb-5 bg-[#353535] rounded-full flex justify-center items-center relative left-3 ">
                <img src="/home/services/tax.svg" alt="" />
              </div>
              <h1 className=" text-2xl text-white font-medium tracking-tighter  mb-3">
                Tax Consultancy
              </h1>
              <p className=" text-xl text-white text-opacity-70">
                Scale with interactive websites, custom tools, and access to our
                investor
              </p>
            </div>
            <div className="dark_glass  flex flex-col  p-8 pr-12">
              <div className="  w-[70px] h-[70px] mb-5 bg-[#353535] rounded-full flex justify-center items-center relative left-3 ">
                <img src="/home/services/compliance.svg" alt="" />
              </div>
              <h1 className=" text-2xl text-white font-medium tracking-tighter  mb-3">
                Compliance Management
              </h1>
              <p className=" text-xl text-white text-opacity-70">
                Scale with interactive websites, custom tools, and access to our
                investor
              </p>
            </div>
            <div className="dark_glass  flex flex-col  p-8 pr-12">
              <div className="  w-[70px] h-[70px] mb-5 bg-[#353535] rounded-full flex justify-center items-center relative left-3 ">
                <img src="/home/services/startup.svg" alt="" />
              </div>
              <h1 className=" text-2xl text-white font-medium tracking-tighter  mb-3">
                Startup Consultancy
              </h1>
              <p className=" text-xl text-white text-opacity-70">
                Scale with interactive websites, custom tools, and access to our
                investor
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Latest Works */}
      <div className=" mt-32  w-full flex justify-center ">
        <div className="light_glass w-[85%] flex flex-col items-center pb-12">
          <h1 className=" text-6xl font-semibold tracking-tighter my-10">
            Our Latest Works
          </h1>
          <div className="w-full flex flex-col items-center">
            {/* nav */}
            {/* to be created when more areas of work */}
            {/* <div className="light_glass w-[85%] py-4 rounded-3xl flex justify-around ">
              <button className=" h-10 text-xl font-semibold tracking-tight">
                All Templates
              </button>
              <button className=" h-10 text-xl font-semibold tracking-tight">
                Portfolio
              </button>
            </div> */}

            {/* Content */}
            {/* All Templates Content */}
            <div className="flex flex-col w-full mt-12 items-center">
              <div className="flex w-full justify-evenly">
                <div className="  relative">
                  <img
                    src="/home/latest/rajesh.png"
                    className=" rounded-xl"
                    alt=""
                  />
                  <div className="dark_glass rounded-xl h-[105px] w-full flex flex-col justify-center items-center absolute bottom-0 ">
                    <h2 className=" text-white text-xl font-bold">
                      Actor Portfolio
                    </h2>
                    <h3 className=" text-white text-opacity-70 text-xl font-bold">
                      Rajesh Ganesh Sharma
                    </h3>
                  </div>
                </div>
                <div className=" relative ">
                  <img
                    src="/home/latest/lms.png"
                    className=" rounded-xl"
                    alt=""
                  />
                  <div className="dark_glass rounded-xl h-[105px] w-full flex flex-col justify-center items-center absolute bottom-0 ">
                    <h2 className=" text-white text-xl font-bold">
                      Learning Management System
                    </h2>
                    <h3 className=" text-white text-opacity-70 text-xl font-bold">
                      Orb Academy
                    </h3>
                  </div>
                </div>
              </div>
              <button className="dark_glass py-2 pt-4 w-[340px] mt-24  flex justify-center text-white text-2xl font-bold tracking-tight">
                See More Sites{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  items-center
                  justify-center
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 ml-2 "
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className=" flex  mt-32 w-full justify-center">
        <div className=" light_glass w-[85%] rounded-2xl flex flex-col items-center">
          <h1 className="text-6xl font-semibold tracking-tighter my-5 mt-12">
            Contact Us
          </h1>
          <p className=" text-xl font-semibold tracking-tighter text-black text-opacity-70 mb-10">
            Any Question or remarks? Just write us a message!
          </p>
          <div className="flex items-center mb-32">
            {/* left section */}
            <div className="violet_glass h-[457px] w-[350px] relative overflow-hidden mb-6 rounded-xl p-4  ">
              <h1 className=" text-2xl text-white font-medium tracking-tighter  mb-3 mt-4">
                Contact Information
              </h1>
              <p className=" text-white text-opacity-75 tracking-tight">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <div className="flex my-7 mt-10">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5  text-[#FA949D]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className=" text-white ml-3 relative bottom-[5px]">
                  +91-1234567890
                </p>
              </div>
              <div className="flex my-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 text-[#FA949D]"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

                <p className=" text-white ml-3 relative bottom-[5px]">
                  hello@scsmail.com
                </p>
              </div>
              <div className="flex my-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 text-[#FA949D]"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className=" text-white ml-3 relative bottom-[5px]">Raipur</p>
              </div>
              {/* logo */}
              <div className="flex  absolute bottom-14 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 fill-[#fff]"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 fill-[#ffffff]"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 fill-[#ffffff]"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
              </div>
              <div className="h-[102px] w-[102px] rounded-full light_violet_glass absolute right-[80px] bottom-[80px] z-10"></div>
              <div className="h-[300px] w-[300px] rounded-full pink_glass absolute -right-[125px] -bottom-[125px]"></div>
            </div>
            {/* right section */}
            <div className=" ml-20  ">
              <span className=" light_glass p-10 flex items-center ">
                <ContactForm></ContactForm>
              </span>
              {/* <HeroForm></HeroForm> */}
            </div>
          </div>
          <h1 className="text-3xl tracking-tighter font-bold text-black text-opacity-70 absolute right-0 bottom-0">
            Designed And Developed by <span>SCG</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
/*



 */
