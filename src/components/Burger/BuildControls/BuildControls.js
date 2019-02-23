import React from 'react';
import classes from './BuildControles.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},  
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>Rs {props.price.toFixed(2)}</strong></p>  
        {controls.map(ctrl => (
            <BuildControl
                disabled={props.disabled[ctrl.type]} 
                added={() => props.ingredientAdded(ctrl.type)}
                remove={() => props.ingredientRemoved(ctrl.type)} 
                key={ctrl.label} 
                label={ctrl.label} 
            />
        ))}
        <button 
        disabled={!props.purchasable} 
        className={classes.OrderButton}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;