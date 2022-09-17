import Navbar from "../component/Navbar"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LandingPage () {


const API = 'https://jsonplaceholder.typicode.com/users'
console.log(API)

const [user, setUser] =useState([])

    useEffect(() => {
        axios.get(API)
        .then((Response) => {
            console.log(Response.data)
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
                    <th scope="col">No</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">Detail</th>
                    </tr>
                </thead>
                {user?.map((e) => 
                <tbody>
                <tr>
                <th scope="row">{e.id}</th>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td><Link to={`/user/${e.id}`}><button>Detail</button></Link></td>
                </tr>
            </tbody>
            )}
            </table>
        </div>
        </div>
    )
}