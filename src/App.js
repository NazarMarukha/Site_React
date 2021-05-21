import AsideTop from './components/AsideTop.js';
import TopNav from './components/TopNav.js';
import Aside from './components/Aside.js';
import NewPage from './components/NewPage.js';
import ContentMain from './components/ContentMain.js';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Route exact path="/">
          <Redirect to='/react-deploy' />
        </Route>
  
        <AsideTop />

        <TopNav />

        <Aside />


        <Route path='/react-deploy' component={ContentMain} />

        <Route path='/profile' component={NewPage} />
        <Route path='/editing' component={NewPage} />
        <Route path='/logout' component={NewPage} />

        <Route path='/dashboard1' component={NewPage} />
        <Route path='/dashboard2' component={NewPage} />
        <Route path='/comming-soon' component={NewPage} />

        <Route path='/invoice' component={NewPage} />
        <Route path='/snippets' component={NewPage} />
        <Route path='/ui-widgets' component={NewPage} />
        <Route path='/forms' component={NewPage} />
        <Route path='/components' component={NewPage} />
        <Route path='/plugin' component={NewPage} />
        <Route path='/email' component={NewPage} />

        <Route path='/home' component={NewPage} />
        <Route path='/all-site-view' component={NewPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
