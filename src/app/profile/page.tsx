'use client'
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import { useState } from "react";
const Profile = () => {
  const [showActionButton,setSHowActionButton]=useState(false)
  return (
    <DefaultLayout>
    <div className=" flex flex-col py-[40px] font-poppins px-6 md:px-8 items-center justify-center">
      <div className="bg-white pb-[20px]  rounded-lg w-full  max-w-[1600px] ">
          
          <Image  alt="cover" width={500} height={120} src="/images/cover/cover-01.png" className="w-full object-cover rounded-t-lg h-[120px]"/>
        <div className="flex justify-between items-center p-6 md:p-8  border-b pb-4 mb-4">
          <div className="flex items-center">
            <img
              src="/images/user/user-01.png" 
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">Alexa Rawles</h2>
              <p className="text-gray-600">alexarawles@gmail.com</p>
            </div>
          </div>
          
          <button onClick={()=>setSHowActionButton(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
           
            Edit Profile
          </button>
        </div>

        <div className="md:flex md:justify-between p-6 md:p-8">
          
          <div className="md:w-1/2 pr-4">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="eg: John Doe"
                  className="w-full px-3 py-2  bg-[#F9F9F9] h-[52px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Gender</label>
                <select className="w-full px-3 py-2 bg-[#F9F9F9] h-[52px]  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
             
              
            </form>
          </div>

          
          <div className="md:w-1/2 pl-4">
            <h3 className="text-lg font-semibold mb-4">My Email Address</h3>
            <div className=" p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#ECF3FF]">
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                      fill=""
                    />
                  </g>
                </svg>

                </div>
                <div className="flex flex-col gap-[4px] items-start justify-start"><p className="text-[#6D737E] font-[500] font-poppins">alexarawles@gmail.com</p>
                <p className=" text-[#6D737E]  font-[400]">
                  Primary
                </p>

                </div>
                
              </div>
            </div>
            <button className="w-fit bg-[#ECF3FF]  text-[#1366D9] px-4 py-2 rounded-lg">
              + Add Email Address
            </button>
            </div>
            
          </div>
          {showActionButton && <div className="px-[40px] flex gap-[10px]">
        <button onClick={()=>setSHowActionButton(false)}  className="px-[25px] py-[10px] border-[1px] border-[#F0F1F3] text-[#858D9D] rounded-[6px]">
Discard
            </button>
            <button onClick={()=>setSHowActionButton(false)}  className="px-[25px] py-[10px] text-white bg-[#1366D9] rounded-[6px]">
Save
            </button>
            
      </div>}
      </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
