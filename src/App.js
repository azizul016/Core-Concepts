import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const age =[47, 64, 61, 41]
  const nayok = ['Bappi','Joy','Manna','Razzak','Salmansha', 'rana']
const product = [
  {name: 'Photoshop', price: '$90.99'},
  {name: 'PDF Reader', price: '$20.99'},
  {name: 'Illastetor', price: '$30.99'},
  {name: 'Peimium', price: '$30.99'}
]
  return (
    <div className="App">
      <header className="App-header">
       <h2>Now I am starting react js</h2>
       <Count></Count>
       <Users></Users>
        <ul>
          {
            nayok.map(nayok => <li>{nayok}</li>)
          }

          {
            product.map(product => <li>{product.name}</li>)
          }
        </ul>

          {
            product.map(pd => <Product product={pd}></Product>)
          }

       

        <Person name= 'Rahim' job= 'Playing Cricket'></Person>
        <Person name= 'Karim' job = 'Watching Football'></Person>
      </header>
    </div>
  );

}

function Users() {
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  },[])
  return(
    <div>
      <h2>User Count:{users.length} </h2>
      
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      
    </div>
  )
}



function Count() {
  const [count, setCount] = useState(11);
  const handleIncrease = () => setCount(count + 1)


  return(
    <div>
      <h1>count: {count}</h1>
      <button onMouseEnter={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  // const product = [
  //   {name: 'Photoshop', price: '$90.99'},
  //   {name: 'PDF Reader', price: '$20.99'},
  //   {name: 'Illastetor', price: '$30.99'}
  // ]
  const productStyle = {
    backgroundColor: 'gray',
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    width: '200px',
    height: '200px',
    float: 'left',
    display: 'inline-block'
  }
  const btnStyle = {display:'inline-block', padding: '10px 20px', backgroundColor:'green', borderRadius:'10px', color: 'white'

}
  console.log(props.product);
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button style={btnStyle}>Buy Now</button>
    </div>
  )
}



function Person(props) {
 return(
  <div style= {{border: '2px solid red', margin: '10px', padding: '10px', width: '300px', backgroundColor: 'cyan', borderRadius: '20px', color: 'red'}}>
    <h3>{props.name}</h3>
    <h5>{props.job}</h5>
  </div>
 )
}

export default App;
