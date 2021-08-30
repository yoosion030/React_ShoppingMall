
import { findByTestId } from '@testing-library/react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components';

let box = styled.div``;

function Detail(props){

  let { id } = useParams();
  let history = useHistory();
  let find = props.shoes.find(x => x.id == id);

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+ id + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{find.title}</h4>
          <p>{find.content}</p>
          <p>{find.price} 원</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
            history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>
    </div>  
    );
  }

export default Detail;