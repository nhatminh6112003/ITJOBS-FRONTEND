import Select from 'react-select';
const Product = () => {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	];
	return (
		<>
			<Select isMulti options={options} />
		</>
	);
};

export default Product;
