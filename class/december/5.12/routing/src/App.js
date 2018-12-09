import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const Index = () => {
  return (
    <>
      <h1>Index Page</h1>
      <p>Lorem ipsum text....</p>
    </>
  );
}


// match, history, location
const Product = ({ match }) => {
   return ( 
     <div>
       <h2>Category {match.params.category.toUpperCase()}</h2>
     </div>
   )
}

const Products = ({ match }) => {
  return (
    <>
      <h1>Products Page</h1>
      <p>Lorem ipsum text.... Products</p>

      <nav>
          <ul>
            <li><Link to={`${match.url}/mobiles`}>Mobile Phones</Link></li>
            <li><Link to={`${match.url}/laptops`}>Laptopts</Link></li>
            <li><Link to={`${match.url}/cameras`}>Cameras</Link></li>
          </ul>
        </nav>
        {/* products/:category */}
        <Route path={`${match.url}/:category`} component={Product} />
        <Route path={`${match.url}`} exact render={  () => {
          return (
            <div>
              <h2>Select Product Category</h2>
            </div>
          )
        } } />
    </>
  );
}

const Portfolio = () => {
  return (
    <>
      <h1>Portfolio Page</h1>
      <p>Lorem ipsum text.... Portfolio</p>
    </>
  );
}


class App extends Component {
  render() {
    return (
     <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Index</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </nav>

          <Route path="/" component={Index} exact={true}/>
          <Route path="/products" component={Products}/>
          <Route path="/portfolio" component={Portfolio}/>
        </div>
     </Router>
    );
  }
}

export default App;
