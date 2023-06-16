import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div>
        <div className="navbar">
            <span> <NavLink to= "/">Home</NavLink></span>
            <span> <NavLink to="/todo">Todo</NavLink></span>
            <span> <NavLink to="/freelance">Freelance</NavLink></span>
            <span> <NavLink to="/profile/@Miriane">Mon Profil</NavLink></span>
            
        </div>
        <hr />
        </div>
        
    )
}

export default Navbar