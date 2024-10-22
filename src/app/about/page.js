// app/about/page.js (or .jsx/.tsx depending on your setup)
import React from "react";
import { Header } from "@/hader/page"; // Adjust the import path as necessary
import Image from "next/image"; // Import Image for optimized images
import watsapp1 from "@/app/public/watsapp1.png";

const AboutPage = () => {
  return (
    <div>
      <Header />

      <div style={{minHeight:"80vh", padding:"12px"}}>
        <p
          className="text-xl text-center text-red-500 font-bold m-3 "
          style={{ textShadow: "2px 1px 3px black", marginTop: "75px" }}
        >
          We are committed to connecting skills with needs in our community.
        </p>

        <section>
          <h2
            className="text-xl text-center text-white bg-red-500 font-bold "
            style={{ textShadow: "2px 1px 3px black", marginTop: "50px" }}
          >
            Our Mission
          </h2>
          <p className="mt-2">
            Through this platform, individuals can connect with skilled service
            providers with just one click. We envision a vibrant community where
            finding the right help is effortless. With intuitive navigation and
            comprehensive service profiles, users can explore a diverse array of
            services tailored to their specific needs. Our direct messaging
            feature facilitates real-time communication, ensuring that
            assistance is always within reach. We are dedicated to building
            trust through transparent reviews and secure transactions,
            empowering everyone to contribute to and benefit from our dynamic
            network. Together, let’s create a space where skills meet
            opportunity and our community flourishes!
          </p>
        </section>

        <section>
          <h2
            className="text-xl text-center text-white bg-red-500 font-bold mt-5"
            style={{ textShadow: "2px 1px 3px black" }}
          >
            Platform Features
          </h2>
          <ol>
            <li>
              **User-Friendly Interface**: Easily navigate through various
              service categories.
            </li>
            <li>
              **Service Listings**: Find detailed listings of service providers
              in your area.
            </li>
            <li>
              **Direct Contact**: Connect with service providers through direct
              messaging or calls.
            </li>
            <li>
              **Secure Transactions**: Ensure safe and secure transactions
              between users and service providers.
            </li>
          </ol>
        </section>
      </div>

      <section className="about_section_footer">
        <h2 className="text-xl text-center text-white bg-red-500 font-bold">
          Contact Us
        </h2>

        <p className=" flex flex-col items-center gap-4 py-4 bg-black text-white">
          If you have any questions, feel free to reach out to me at:
          <br />

          <div className=" flex w-60 h-9 justify-between">

          <a
                          href={`https://wa.me/923320145410`} // Use dynamic phone number
                          target="_blank"
                          rel="noopener noreferrer" // Security best practice
                          className="whatsapp-button" // Changed to className
                        >
                          {/* WhatsApp Icon*/}
                          <img
                            src={watsapp1.src}
                            style={{
                              width: "45px",
                              height: "30px",
                              // margin: "0px auto",
                            }}
                            alt="923320145410"
                          />
                        </a>
          <a href="mailto:engr.atherali@gmail.com" className="text-blue-500">
            engr.atherali@gmail.com
          </a>

          </div>
          
          

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Image
              className="filter invert" // This will make the logo white
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={70}
              height={20}
              priority
            />
          </div>
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
