import WelcomeUser from "./components/WelcomeUser";
import RouteMap from "./routes/routes";

function App (){
  return (<div>
 <RouteMap />

 <WelcomeUser name="Miriane" age={22} />
  </div>
 
  )

}

export default App