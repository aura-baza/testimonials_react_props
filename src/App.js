import "./App.css";
import Testimonio from "./components/Testimonio.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Esto es lo que dicen nuestros clientes:</h1>
        <Testimonio
         name='dani'
         country='Colombia' 
         img='dani'
         position='Psicóloga'
         company='Flar' 
         testimony='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus vero dicta non itaque quibusdam, excepturi consequatur ipsa, numquam quia facere consequuntur. Aspernatur adipisci dolor neque placeat reprehenderit ad explicabo laborum.'/> 

<Testimonio
         name='daniela'
         country='Colombia' 
         img='daniela'
         position='Administradora'
         company='MediHelp' 
         testimony='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus vero dicta non itaque quibusdam, excepturi consequatur ipsa, numquam quia facere consequuntur. Aspernatur adipisci dolor neque placeat reprehenderit ad explicabo laborum.'/> 

         <Testimonio
         name='aura'
         country='Colombia' 
         img='aura'
         position='Ingeniera de sistemas'
         company='Infinity BPO' 
         testimony='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus vero dicta non itaque quibusdam, excepturi consequatur ipsa, numquam quia facere consequuntur. Aspernatur adipisci dolor neque placeat reprehenderit ad explicabo laborum.'/> 
      </div>
    </div>
  );
}

export default App;
