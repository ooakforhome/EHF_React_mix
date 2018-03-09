import { PropTypes } from 'react'

export const Md = ({name, age}) => (
	<tr>
		<td>
			{name}
		</td>
		<td>
			{age}
		</td>
	</tr>
)

Md.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.string.isRequired
}
