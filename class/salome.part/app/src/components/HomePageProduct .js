import React, { Component } from 'react';

const productUrl = 'http://localhost:5000/db/products';

export default class HomePageProduct extends Component {
    constructor(props) {
        super(props)

        this.url = React.createRef();
        this.name = React.createRef();
        this.price = React.createRef();

        this.state = {
            //product table items
            productTableItems: [ 'Image', 'Name', 'Price'],
  
        }
    }

    componentDidMount() {
        this.GetHomeProduct();
        console.log("salome")
    }

    //Get products from JSON
    GetHomeProduct = () => {
        fetch(productUrl)
            .then(product => product.json())
            .then(product => {
                this.setState({ product })
            })
            .catch(err => console.log(err))
    };

    //   რაზე  შევცვალო ????
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.AddHomeProducts(
    //         this.url.current.value,
    //         this.name.current.value,
    //         this.price.current.value,
        
    //     )
    // };

    //Adding products
    AddHomeProducts = (url, name, price ) => {
        fetch('http://localhost:5000/admin/product/add', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url, name, price })
        })
            .then(res => res.json())
            .then(product => {
                this.setState({ product })
            })
            .catch(err => console.log(err))
    };

    

    render() {
        return (
            <div className="gallery-container">
              <div className="frist-grid">
                <div className="single-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="info">
                    <p>From 190$</p>
                    <h2>Modern Chair</h2>
                  </div>
                </div>
                <div className="single-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="info">
                    <p>From 190$</p>
                    <h2>Modern Chair</h2>
                  </div>
                  <div className="single-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="info">
                    <p>From 190$</p>
                    <h2>Modern Chair</h2>
                  </div>
                </div>
                </div>
              </div>
      
              <div className="second-grid">
                <div className="single-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="info">
                    <p>From 190$</p>
                    <h2>Modern Chair</h2>
                  </div>
                </div>
                <div className="single-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="info">
                    <p>From 190$</p>
                    <h2>Modern Chair</h2>
                  </div>
                  <div className="single-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="info">
                    <p>From 190$</p>
                    <h2>Modern Chair</h2>
                  </div>
                </div>
                </div>
              </div>
      
              <div className="third-grid">
                <div className="single-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="info">
                    <p>From 190$</p>
                    <h2>Modern Chair</h2>
                  </div>
                </div>
                <div className="single-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="info">
                    <p>From 190$</p>
                    <h2>Modern Chair</h2>
                  </div>
                </div>
                <div className="single-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="info">
                    <p>From 190$</p>
                    <h2>Modern Chair</h2>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}