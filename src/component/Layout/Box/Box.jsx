import React from 'react';
import "./Box.css"
const Box = (props) => {
	return (
		<>
		 <div className={`box-sm ${props.class}`} onClick={props.click}>
			{props.input}
		 </div>	

		 
		</>
	);
}

export default Box;
