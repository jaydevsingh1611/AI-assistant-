import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const userDataContext = createContext()
export const UserContext = ({ children }) => {
    const serverUrl = "http://localhost:8000"
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [frontendImage, setFrontendImage] = useState(null)
    const [backendImage, setBackendImage] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const handleCurrentUser = async (showLoading = true) => {
        if (showLoading) setIsLoading(true)
        try {
            const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true })
            setUserData(result.data)
            console.log("User data fetched:", result.data)
        } catch (error) {
            console.log("Error fetching current user:", error.response?.data || error.message)
            setUserData(null)
        } finally {
            if (showLoading) setIsLoading(false)
        }
    }

    const getGeminiResponse = async (command) => {
        try {
            const result = await axios.post(`${serverUrl}/api/user/asktoassistant`, { command }, { withCredentials: true })
            return result.data
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        handleCurrentUser()
    }, [])
    const value = {
        serverUrl, userData, setUserData, isLoading, frontendImage, setFrontendImage, backendImage, setBackendImage, selectedImage, setSelectedImage, getGeminiResponse, handleCurrentUser
    }
    return (
        <div>
            <userDataContext.Provider value={value}>
                {children}
            </userDataContext.Provider>
        </div>
    )
}