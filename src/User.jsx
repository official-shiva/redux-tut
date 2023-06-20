import React from 'react'

const User = (props) => {
    console.log(props);
    console.log(props.data);
    console.log(props.data.name);

    return (
        <div>
            <h1>Hii {props.data.name}</h1>
            <p>your age is: {props.data.age}</p>
        </div>
    )
}

export default User;