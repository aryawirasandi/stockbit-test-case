import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import SearchIcon from "./assets/icons/search.svg";
function App() {
  return (
    <div className="box-border">
      <header>
          <Navbar className="container bg-blue-400 text-white">
              <div className="flex items-center justify-between">
                  <div>
                     <h1 className="font-semibold text-2xl hidden sm:block">Movie App</h1>
                  </div>
                  <div className="relative">
                    <Input placeholder="Search your movie"/>
                    <picture>
                        <img src={SearchIcon} alt="Search Icon" className="absolute w-10 top-0 right-0"/>
                    </picture>
                  </div>
              </div>
          </Navbar> 
      </header>
      <main>
         <Home/>
      </main>
    </div>
  );
}

export default App;
