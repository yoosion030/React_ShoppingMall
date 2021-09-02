
import { findByTestId } from '@testing-library/react';
import { useState,useEffect } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
  padding : 20px;
`;

let Title = styled.h4`
  font-size : 25px;
  color : ${ props => props.color }
`;



function Detail(props){

  let [alert,alertRevise] = useState(true);
  let [answer,answerRevise] = useState('');
  useEffect(()=>{

    let timer = setTimeout(()=>{alertRevise(false)},2000);
    return () => { clearTimeout(timer)}    
  },[]);

  let id = Number(useParams().id);
  let history = useHistory();
  let find = props.shoes.find(x => x.id == id);

  function minusRemain(){
    let newRemain = [...props.remain];
    newRemain[id] = newRemain[id] - 1;
    props.remainRevise(newRemain);
  }
  return(
    <div className="container">
      <div className="row">
        <Box>
          <Title className="red">Detail</Title>
        </Box>
        <input type="text" onChange = {(e)=> {answerRevise(e.target.value)}} />
        {
          alert === true
          ? (
            <div className="alert">
              <p>재고가 얼마 남지 않았습니다.</p>
            </div>)
          : null
        }
        <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} alt="신발" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{find.title}</h4>
          <p>{find.content}</p>
          <p>{find.price} 원</p>
          {
            props.remain[id] > 0
            ? <Info remain={props.remain} id={id}> </Info>
            : <div>품절입니다.</div>
          }

          <p></p>
          <button className="btn btn-danger" onClick={()=>{
            minusRemain()
          }}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
            history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>
    </div>  
  );
}

function Info(props){
  return(
    <p>재고 : {props.remain[props.id]}</p>
  )
}

export default Detail;