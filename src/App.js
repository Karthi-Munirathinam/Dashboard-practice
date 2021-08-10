import './App.css';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Products from './Products';
import Sidebar from './Sidebar';
import Users from './Users';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Editusers from './Edit';
import Editproducts from './Editproducts';
import CreateUser from './CreateUser';
import { UserProvider } from './UsersContext';
import { ProductProvider } from './ProductsContext';
import CreateProducts from './CreateProducts';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <UserProvider>
                  <Route path="/users" component={Users} exact={true} />
                  <Route path="/createuser" component={CreateUser} exact={true} />
                  <Route path="/users/edit/:id" component={Editusers} exact={true} />
                  <ProductProvider>
                    <Route path="/products" component={Products} exact={true} />
                    <Route path="/createproducts" component={CreateProducts} exact={true} />
                    <Route path="/products/edit/:id" component={Editproducts} exact={true} />
                  </ProductProvider>
                </UserProvider>

              </Switch>
            </div>
          </div>
        </div>
      </div >
    </Router>
  );
}

export default App;
