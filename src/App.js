import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Mahfuz";

  var style={
    color: 'red'
  };

  const products = [
    {
      name: 'Photoshop', 
      price: '$90.99'
    },
    {
      name: 'Illastrator',
      price: '$59.59'
    },
    {
      name: 'PDF Reader',
      price: '6.99'
    },
    {
      name: 'Adobe Reader',
      price: '6.99'
    }
  ]

  const productNames = products.map(product => product)
  console.log(productNames);

  const bowler = ['Mustafiz', 'fizz']
  const bowlerNames = bowler.map(bowlerr => bowlerr)
  console.log(bowlerNames);


  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p> My first react app</p>
        <h1 style = {style}>My heading: {name}</h1>

        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            bowler.map(bowlerr => <li>{bowlerr}</li>)
          }

          {
            products.map(product => <li>{product.name}</li>)
          }
          <li>{bowler[0]}</li>
          <li>{bowler[1]}</li>

        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <Product product={products[0]} price={products[0].price}></Product>
        <Product product={products[1]} price={products[1].price}></Product>

        <Person name={bowler[0]} batsman="Tamim"></Person>
        <Person name="Shakib Al Hasan" batsman="Tamim"></Person>
        <Person name="Rubel Nayok" batsman="Tamim"></Person>
        <Person name="Rubel Nayok" batsman="Tamim"></Person>


      </header>
    </div>
  );
}

function Users() {
  const[users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers (data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(props) {
  
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props) {

  const productStyle = {
    border : '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width: '200px',
  }
  const {name, price} = props.product;
  console.log(name, price);
  return(

    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return( 
  <div style={{border: '2px solid red', margin: '10px'}}>
    <h1>Name:{props.name}</h1>
    <h3>batsman: {props.batsman}</h3>
  </div>
  )
}

export default App;
