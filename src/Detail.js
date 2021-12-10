import React, { useState } from 'react'
import Data from './data.js'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
  let { id } = useParams()
  let [shoes, setShoes] = useState(Data)

  // photos, setPhotos 비구조화 할당
  let [photos, setPhotos] = useState([])
  function searchApi() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    axios
      .get(url)
      .then(function (response) {
        setPhotos(response.data)
        // console.log('성공')
        console.log(photos.title)
      })
      .catch(function (error) {
        console.log('실패')
      })
  }
  searchApi()

  const navigate = useNavigate()
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                shoes[id].id + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{shoes[id].title}</h4>
            <p>{shoes[id].content}</p>
            <p>{shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button className="btn btn-danger" onClick={() => navigate(-1)}>
              뒤로가기
            </button>
          </div>
          {photos.title}
        </div>
      </div>
    </>
  )
}

export default Detail
