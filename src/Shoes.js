import React, { useState } from 'react'
import Data from './data.js'

function Product(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          props.shoes.id + 1
        }.jpg`}
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  )
}

const Shoes = () => {
  let [shoes, setShoes] = useState(Data)

  return (
    <div className="container">
      <div className="row">
        {shoes.map((a, i) => {
          return <Product shoes={shoes[i]} key={i}></Product>
        })}
      </div>
    </div>
  )
}

export default Shoes
