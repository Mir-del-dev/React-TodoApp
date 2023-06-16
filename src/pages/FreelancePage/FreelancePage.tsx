import { Helmet } from "react-helmet"
import FreelanceBox from "./FreelanceBox"
import { useEffect, useState } from "react";
import UserInterface from "../../components/Interface/user.interface";
import axios from "axios";
import { Await } from "react-router-dom";
function FreelancePage(){
    const [users, setUsers]=useState<UserInterface[]>([])
    const [laoding, setLoading]=useState(true)
    function loadData(){
        
         axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>setUsers(response.data))
        setLoading(false)
    }
    useEffect(()=>{
        loadData
    }, [])
    if(laoding) return <h1>Loading...</h1>

    return(
       
        <div>
            <Helmet>
                <title> Find the freelance you need!</title>
            </Helmet>
        
            <h1>FREELANCE PAGE</h1>
            {
                
            <div>
                {users.map((user, index)=> {

                    return < FreelanceBox key={index} user={user}/>

                })}
            </div>
           }  
        </div>
    
    )
}
export default FreelancePage