import React from 'react';
import Style from './DivElement.css';

class DivElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<div >
				<div className = "div">
					<form>
						<label>
							Name:
                    <input type="text" name="name" />
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div >
				<div className = "div">
					<form>
						<label>
							Name:
                    <input type="text" name="name" />
						</label>
						<input type="submit" value="Submit" />
					</form>

				</div>

			</div>

		);
	}
}

export default DivElement;

