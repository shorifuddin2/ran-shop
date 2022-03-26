import React from 'react';
import './Quetion.css'

const Quetion = () => {
    return (
        <div className='Queition-aria'>
            <h4 className='Queition'>How React Works..?</h4>
            <p>React JS. It is an interactive user interface (UI) based JavaScript framework
            A more component rich library
            Very fast with react
            Using for front-end and back-end web development
            ReactJS Framework helps developers create user interfaces</p>
        
         
            <h4 className='Queition'>Props Vs State..?</h4>
            <p>Props are read-only. It allows data to be passed from one element to another. Like an argument passed to a function
            The state is an updateable structure that is used to hold data or information about the material and may change over time.
            Determines how it will render.</p>

            <h4 className='Queition'>How useState..?</h4>
            <p>
            useState provides a pair of useState Hook Feedback Hold this status in the render Hook is a function that lets you "hook in" function They allow you to use feedback without class. Hook is a JavaScript function, but they impose two additional rules From the function element</p>
        </div>
    );
};

export default Quetion;