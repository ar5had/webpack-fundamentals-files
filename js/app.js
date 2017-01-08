import React from 'react';
import ReactDOM from 'react-dom';


const Title = () => {
	return (
		<div id="titleWrapper">
			<h2 className="textCenter">To-do List</h2>
		</div>
	);
};

ReactDOM.render(<Title />, document.getElementById('main'));

require('./login');
