import React, { useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Data from './data.js'
import Detail from './Detail.js'

const Shoes = () => {
  let [shoes, setShoes] = useState(Data)

  return (
    <div className="container">
      <div className="row">
        {shoes.map((a, i) => {
          return (
            <>
              <Product shoes={shoes[i]} key={i}></Product>
            </>
          )
        })}
      </div>
    </div>
  )
}

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
      <Link to={`detail/${props.shoes.id}`}>
        <button className="btn btn-danger">자세히 보기</button>
      </Link>
    </div>
  )
}
export default Shoes
