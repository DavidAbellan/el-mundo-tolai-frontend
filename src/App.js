import './App.css';
import './style.css';
import Principal from '../src/components/principal';
import ArticleDetail from '../src/components/articleDetail';
import ColumnDetail from '../src/components/columnDetail';
import PrincipalCategory from '../src/components/principalCategory';
import PrincipalAuthor from '../src/components/principalAuthor';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ScrollToTop from "./scrollToTop";

function App() {
  return (

   // <Principal/>
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
         <div>
            <Routes>
               <Route path="/" element={<Principal/>} exact />
               <Route path="/art/:id" element={<ArticleDetail/>}/>
               <Route path="/col/:id" element={<ColumnDetail/>}/>
               <Route path="/cat/:id" element={<PrincipalCategory/>}/>
               <Route path="/auth/:id" element={<PrincipalAuthor/>}/>




           </Routes>
         </div>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
