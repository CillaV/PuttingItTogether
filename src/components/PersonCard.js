import React, { useState } from 'react';

// a parent component is a compenent that calls another component from within thier own return statement
// 

// only retains design/layout? and matching keys for values in App.js
// component
const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);
    
    return (
        <>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ (event) => setAge(age + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </>
    );
}







// declare props key value pairs -- it is done automatically by React (javascript object named props)
// const props = {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: "45",
//     hairColor: "Black"
// }

export default PersonCard;


// const PersonCard = (props) => {

//     // destructuring the props makes it easier to use in the component
//     //    but is NOT required
//     // We will not destructure age from props and will use it directly
//     //    in the JSX that is returned to demonstrate a different way to
//     //    use props

//     const { firstName, lastName, hair } = props;

//     return (
//         <div className="container">
//         <h2>
//             {lastName}, {firstName}
//         </h2>
//             <p>Age: {props.age}</p>
//             <p>Hair Color: {hair}</p>
//         </div>
//     );
// }

// export default PersonCard;