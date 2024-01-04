import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import { getBucketList } from '../redux/actions/bucketListActions.js'
import DisplayCategories from './DisplayCategories.css';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';
import FormCheck from "react-bootstrap/FormCheck";
import { Col, Card, Container, Row } from 'react-bootstrap'





const DisplayCategory = () => {
const dispatch = useDispatch()
useEffect(()=> {
 dispatch(getBucketList())
},[dispatch])
const bucketList = useSelector(state => state.bucketLists)
const {success, loading, goals} = bucketList;
console.log(goals);
function showFun() {
return (
goals.map((goal, index)=> {
if(goal.category==='Fun') {
<Stack key={goal.id} gap={index} className="shadowBox">
    <Form key={goal.id} className='form'>
          {['checkbox'].map((type) => (
 <div key={goal.id} className="mb-3">


              />
              <div className="deleteContainer">
                  <CloseButton className="deleteBtn" />
                  </div>
              </div>
     ))}
     </Form>
  </Stack>
  }
  })
);
}

return (
<div className="main-div">
<div className="allcategory">
<button className="catBtn">All</button>
<button className="catBtn" onClick={showFun}>Fun</button>
<button className="catBtn">Skills</button>
<button className="catBtn">Personal</button>
<button className="catBtn">Travel</button>
<button className="catBtn">Adventure</button>
<button className="catBtn">Creative</button>
<button className="catBtn">Fitness</button>
<button className="catBtn">Finance</button>
</div>
</div>
    );
}

export default DisplayCategory;