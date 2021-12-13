import React, { useState } from 'react'
import Data from './data.js'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import './Detail.scss'

const Title = styled.div`
  color: green;
  padding-top: 50px;
`
const Detail = () => {
  let [shoes, setShoes] = useState(Data)
  let { id } = useParams()
  let findShoes = shoes.find(function (shoes) {
    return shoes.id == id
  })

  let [test, setTest] = useState([])
  function searchApi() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    axios
      .get(url)
      .then(function (response) {
        setTest(response.data)
        // console.log('성공')
        console.log(test.title)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  searchApi()

  const navigate = useNavigate()

  return (
    <>
      <div className="container">
        <Title>
          <h2>상세페이지</h2>
        </Title>
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                findShoes.id + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{findShoes.title}</h4>
            <p>{findShoes.content}</p>
            <p>{findShoes.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button className="btn btn-danger" onClick={() => navigate('/')}>
              홈으로 가기
            </button>
          </div>
          {test.title}
        </div>
      </div>
    </>
  )
}

export default Detail
