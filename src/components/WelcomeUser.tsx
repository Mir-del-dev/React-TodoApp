// créer un composant qui prend en paramètre le nom(props) et affiche en
function WelcomeUser(props:any){
    return(
        <div>
            <h1>Welcome {props.name} !</h1>
            <p>Apparement vous aurez {props.age +2} ans dans 2 ans</p>
        </div>
    )
}
export default WelcomeUser