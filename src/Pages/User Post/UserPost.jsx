import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

export default function UserPost () {

    const {userId} = useParams()

    console.log("==>", userId)

    const API = 'https://jsonplaceholder.typicode.com/posts'

    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`${API}/${userId}`)
        .then((Response) => {
            console.log(Response.data)
            setUser(Response.data)
        }).catch ((error) => {
            console.log(error)
        })
    },[])

    console.log("user ==>", user)
    return (
        <div className="container">
            <div>User ID : {user.id}</div>
            <div>{user.title}</div>
            <div>{user.body}</div>
        </div>
    )
}