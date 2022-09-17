import Navbar from "../component/Navbar"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LandingPage () {


const API = 'https://jsonplaceholder.typicode.com/posts'

const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(API)
        .then((Response) => {
        console.log("Data user Response ==> ", Response.data)
            setUser(Response.data)
        }).catch ((error) => {
            console.log(error)
        })
    },[])

    return (
        <div>
            <Navbar/>
            <div className="container d-flex justify-content-center">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Detail</th>
                    </tr>
                </thead>
                {user?.map((e) => 
                <tbody>
                <tr>
                <th scope="row">{e.id}</th>
                <th scope="row">{e.title}</th>
                <td><Link to={`/user/post/${e.userId}`}><button>Detail</button></Link></td>
                </tr>
            </tbody>
            )}
            </table>
        </div>
        </div>
    )
}