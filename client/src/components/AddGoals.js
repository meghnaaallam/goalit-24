import React from 'react';
import AddGoal from './AddGoal.css';
import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addGoal,getBucketList } from '../redux/actions/bucketListActions.js'

const AddGoals = () => {
//using dispatch
const dispatch = useDispatch()

const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("Travel");

//clear data
const clearData =() => {
setName("");
setDescription("");
setCategory("");
}

const handleSubmitBtn = async(e) => {
e.preventDefault();
console.log("added")
console.log(name)
//form data
let formData = new FormData()
formData.append('name',name);
formData.append('description', description);
formData.append('category', category);

console.log(formData);
//const newFormdata = JSON.stringify(formData);
dispatch(addGoal(formData));
clearData();
dispatch(getBucketList());
}

 return(
 <div className='form-container'>
    <Forms className='form' onSubmit={handleSubmitBtn} encType="multipart/form-data">
       <Forms.Group className="mb-3">
         <Forms.Control as="textarea" required rows={1} value={name} onChange={(e) => setName(e.target.value)} placeholder="What's something you've always wanted to do " />
</Forms.Group>
<Forms.Group className="mb-3">
         <Forms.Control as="textarea" required rows={3}  placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
</Forms.Group>
<Forms.Group className="mb-3">
    <Forms.Select aria-label="Default select example" required value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="Travel">Travel</option>
      <option value="Adventure">Adventure</option>
      <option value="Fun">Fun</option>
      <option value="Creative">Creative</option>
      <option value="Skills">Skills</option>
      <option value="Personal">Personal</option>
      <option value="Fitness">Fitness</option>
      <option value="Finance">Finance</option>
    </Forms.Select>
</Forms.Group>
       <Button variant="primary" type="submit">
         Add to my bucket list
       </Button>
     </Forms>
 </div>
 );
}

export default AddGoals;