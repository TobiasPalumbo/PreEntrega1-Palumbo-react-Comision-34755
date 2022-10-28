import React from 'react';
import useCoulor from '../../../Hooks/Coulor';
import "./SizeGuid.css"
const SizeGuid = (props) => {
	
		return (
		<div className='size-guid'>
			<div>
				<div>{props.children}</div>
				<img src="https://topperio.vtexassets.com/arquivos/Guia-de-Talles-Universal.jpg" alt="size-guid" />
			</div>
		</div>
		)
	
}

export default SizeGuid;
