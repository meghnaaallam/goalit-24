import React from 'react';
import DisplayBucket from './DisplayBucket.css';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import { Col, Card, Container, Row } from 'react-bootstrap'
import {getBucketList, deleteGoal} from '../redux/actions/bucketListActions.js'
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';
import FormCheck from "react-bootstrap/FormCheck";


const DisplayBucketList = () => {
const [goal, setGoal] = useState();
// get data from store
const dispatch = useDispatch()
const bucketList = useSelector(state => state.bucketLists)
const {success, loading, goals} = bucketList;
console.log(goals);

//get data from api
useEffect(()=> {
 dispatch(getBucketList())
},[dispatch])

const FormCheckBox = ({ item, index }) => {
  const [checked, setChecked] = useState(false);
  const styles = { textDecorationLine: checked ? "line-through" : "none" };
  const toggleCheck = () => setChecked(!checked);
  return (
    <Form.Check type="checkbox" id={item}>
      <FormCheck.Input type="checkbox" onChange={toggleCheck} value={checked} />
      <FormCheck.Label style={styles}>{item}</FormCheck.Label>
    </Form.Check>
  );
};
function handleDeleteBtn(goal) {
console.log(goal.id)
dispatch(deleteGoal(goal.id));
dispatch(getBucketList());
//navigate('/');
}
return (
<div className="container-1">
<h4 className='header'>My bucketList ✨</h4>
{
goals.map((goal, index) =>
<Stack key={goal.id} gap={index} className="shadowBox">
    <Form key={goal.id} className='form'>
          {['checkbox'].map((type) => (
 <div key={goal.id} className="mb-3">
              <FormCheckBox // prettier-ignore
                type={type}
                item={goal.name}
                id={goal.id}
                label={goal.name}

              />
              <div className="deleteContainer">
                  <CloseButton className="deleteBtn"  onClick={()=>handleDeleteBtn(goal)}/>
                  </div>
              </div>
     ))}
     </Form>
  </Stack>
     )
     }
     </div>
     );
}
export default DisplayBucketList;