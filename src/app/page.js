"use client";
import Image from "next/image";
// import whatsapp from "../public/whatsapp.jpg";
import watsapp from "./public/watsapp.jpg";
import { Header } from "@/hader/page";
import { Button } from "@/components/ui/button";
import { collection, getDocs, db } from "@/lib/firebase";
import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthContextProvider } from "@/context/usercontext";

const Home = () => {
  const { currentUserInfo } = useContext(AuthContext);

  console.log(currentUserInfo);

  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsersData = await getDocs(collection(db, "usercollection"));
        const onlyClientData = [];
        allUsersData.forEach((doc) => {
          if (doc.data().roll === "client") {
            // Store only client data in collection
            onlyClientData.push(doc.data());
          }
          setData(onlyClientData); //updating the retrived data that can be use to display cards
        });
      } catch (error) {
        // console.error("Error fetching data: ", error);
        setError("Error fetching data: " + error.message); // Update error state while fatching data
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchData(); // Calling function to fetch all cleint/servise provider data
  }, []);

  return (
    <div className=" ">
      <Header />

      <div className="title_bar">
        <h1
          className="text-2xl text-red-500 font-extrabold m-3 "
          style={{ textShadow: "2px 1px 3px black" }}
        >
          SERVICE FOR SELL
          <p
            className="mt-4 text-sm text-red-450"
            style={{
              textShadow: "0px 0px 0px black",
              textDecoration: "underline",
            }}
          >
            Here, Skills Connect with Your Needs !
          </p>
        </h1>
      </div>

      <main className="hero_section">
        {loading ? (
          <div
            className="text-2xl text-center my-36 text-red-500 font-extrabold opacity-100 transition-opacity duration-700 ease-in-out animate-pulse "
            style={{ textShadow: "2px 1px 3px black" }}
          >
            Please wait, App/Web is synchronizing with Firebase...
          </div>
        ) : (
          <div>
            {data.map((item, index) => (
              <div className=" client_profile card" key={index}>
                <div>
                  <h1 className="font-bold">{item.name}</h1>
                  <p>{item.feild}</p>
                  <p className="text-sm text-gray-400">
                    {currentUserInfo.isLogin ? (
                      <div className="flex w-32 justify-between">
                        {item.phone}
                        <a
                          href={`https://wa.me/${item.phone}`} // Use dynamic phone number
                          target="_blank"
                          rel="noopener noreferrer" // Security best practice
                          className="whatsapp-button" // Changed to className
                        >
                          {/* WhatsApp Icon*/}
                          <img
                            src={watsapp.src}
                            style={{
                              width: "25px",
                              height: "20px",
                              // margin: "0px auto",
                            }}
                            alt="Logo"
                          />
                        </a>
                      </div>
                    ) : (
                      <p>
                        please <b> Login </b> to get contact number
                      </p>
                    )}
                  </p>
                </div>
                <div>
                  {
                    <img
                      style={{
                        width: "85px",
                        height: "85px",
                        borderRadius: "10px",
                      }}
                      src={item.image}
                      alt="image"
                    />
                  }
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="mt-5 flex flex-col items-center gap-4 py-4 bg-black text-white">
        <div className="flex flex-wrap items-center justify-center gap-6">
          
        <a
            className="flex items-center gap-2 hover:underline"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            className="filter invert" // This will make the logo white
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={70}
            height={20}
            priority
          />
         
          </a>
        </div>
        <div className="text-center">
          <p>© 2024 Engineer's Production. All rights reserved.</p>
          <p>
            Contact us:{" "}
            <a
              href="mailto:engr.atherali@gmail.com"
              className="hover:underline"
            >
             engr.atherali@gmail.com
            </a>
          </p>
          <p>Version 1.0.0</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
