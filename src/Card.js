import React from 'react';

const Card = (props) => {
  console.log('props', props);
  // const onCilck = () => {
  //   props.name;
  // };
  return (
    <div
      className="Card"
      style={{ backgroundColor: props.employeeDetails.color }}
    >
     
        <p>Name:{props.employeeDetails.name}</p>
        <p>Salary:{props.employeeDetails.salary}</p>
      
    </div>
  );
};

export default Card;
