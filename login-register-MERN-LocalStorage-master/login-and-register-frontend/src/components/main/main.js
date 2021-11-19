import React from "react"
// import "./homepage.css"
import { useState, useEffect } from "react"
import Awareness from '../awarenesspage/awareness'
import { useHistory } from "react-router-dom"


const MainPage = ({updateUser}) => {
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },4000)
    },[])
    return (
        <>
            { loading?
            <Awareness></Awareness>
            :
            <div className="MainPage">
                <h1>Hello MainPage</h1>
                <button onClick={()=>{
                    history.push("/login")
                }}>Login</button>
                <button onClick={()=>{
                    history.push("/register")
                }}>Signup</button>
                <div className="button" onClick={() => updateUser({})} >Logout</div>
            </div>
            

    }
        </>
    )
}

export default MainPage