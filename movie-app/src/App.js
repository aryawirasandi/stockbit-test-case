import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import SearchIcon from "./assets/icons/search.svg";
import Suggestion from "./components/Suggestion";
import config from "./utils/config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { useState } from "react";
function App() {
  const [suggestion, setSuggestion] = useState(false);
  const [title, setTitle ] = useState("");
  return (
    <div className="box-border">
      <header>
          <Navbar className="container bg-blue-400 text-white">
              <div className="flex items-center justify-between">
                  <div>
                     <h1 className="font-semibold text-2xl hidden sm:block">{config.appName}</h1>
                  </div>
                  <div className="relative">
                    <Input placeholder="Search your movie" change={(e) => setTitle(e.target.value)}/>
                    <picture>
                        <img src={SearchIcon} alt="Search Icon" className="absolute w-10 top-0 right-0"/>
                    </picture>
                    {
                      title.length > 0 ? (
                        <Suggestion/>
                      ) : false
                    }
                  </div>
              </div>
          </Navbar> 
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/movie/:imdbId">
              <Detail/>
            </Route>
            <Route to="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
