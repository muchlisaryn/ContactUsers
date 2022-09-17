import { useParams } from "react-router-dom"
import Profile from "../../component/Profile"


export default function User () {

    const {id} = useParams()
    

    const name = "Budi"
    const firstLatter = name.charAt(0)
    
    console.log("id ==> ", id)
    return (
        <div className="container">
            <Profile img = {firstLatter}/>
        </div>
    )
}