import React, { useContext, useRef, useState } from "react";
import { Card } from "../components/card";
import AI1 from "../assets/AI1.jpeg"
import AI2 from "../assets/AI2.jpeg"
import AI3 from "../assets/AI3.jpeg"
import AI4 from "../assets/AI4.jpeg"
import AI5 from "../assets/AI5.jpeg"
import AI6 from "../assets/AI6.jpeg"
import { RiImageAddLine } from "react-icons/ri";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

export const Customize = () => {
  const inputImage = useRef()
  const navigate = useNavigate()
  const {frontendImage, setFrontendImage, setBackendImage,selectedImage,setSelectedImage} = useContext(userDataContext);

  const handleImage = (e) => {
  const file = e.target.files[0]
  setBackendImage(file)
  setFrontendImage(URL.createObjectURL(file))
  setSelectedImage("input");
  }

  return (
      <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#020236] flex justify-center items-center flex-col p-[20px]">
      <MdKeyboardBackspace className="absolute top-[30px] left-[30px] text-white cursor-pointer w-[25px] h-[25px]" onClick={() => navigate("/")} />
      <h1 className="text-white mb-[30px] text-[30px] text-center">Select your <span className="text-[blue]">Assistant Image</span></h1>
      <div className="w-[90%] max-w-[900px] flex justify-center items-center flex-wrap gap-[20px]">
        <Card image={AI1} />
        <Card image={AI2} />
        <Card image={AI3} />
        <Card image={AI4} />
        <Card image={AI5} />
        <Card image={AI6} />
        <div
          className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-blue-600 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ${selectedImage=="input" ? "border-4 border-white shadow-2xl shadow-blue-950 " :null}` } 
          onClick={() => {
          inputImage.current.click() 
          setSelectedImage("input")
          }}>
          {!frontendImage && <RiImageAddLine className="text-white w-[25px] h-[25px] " /> }
          {frontendImage && <img src={frontendImage} className="h-full object-cover" />}
        </div>
       <input type="file" accept="image/*" ref={inputImage} hidden onChange={handleImage}/>
      </div>
      {selectedImage &&<button className="min-w-[150px] h-[60px] mt-[30px] bg-white rounded-full text-black font-semibold cursor-pointer text-[19px] " onClick={() => {
      navigate("/customize2")
      }}>Next</button> }
    </div>
  );
};