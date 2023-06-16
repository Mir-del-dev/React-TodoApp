import UserInterface from "../../components/Interface/user.interface"

function FreelanceBox({user}:{user:UserInterface}){
    const address = user.address.street + "," + user.address.city + "" + user.address.city + " " + user.address.zipcode

    return(
        <div className="freelance-box">
           <div className="freelance-box">
        
<h1 className="tittle"><span className="clr-black">#{user.id} -</span>{user.company.bs}</h1>
<h3 className="no-margin flex-betwen"> {user.name} <span className="clr-grey">@{user.username}</span><span className="clr-grey">@Bret</span></h3>
</div>
<hr />
        <div className="clr-black">
            <div>Email:Sinere@april.biz</div>
            <div>Phone:1-770-8031x56442</div>
            <div>Webside:hildegard.org</div>
            <div>Address:Hulas Light 556, Gzenborout 92990-3878</div>
        </div>
        <hr />
        <div className="company">
            <h3 >{user.company.name}</h3>
                <div>{user.company.catchPhrase}</div>
            
        </div>
        </div>
    )
}
export default FreelanceBox