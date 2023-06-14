import { useController } from 'react-hook-form';

const InputField = ({ id, type = 'text', name, label, className, form }) => {
	let {
		field,
		fieldState: { invalid, isTouched, isDirty },
		formState: { errors, touchedFields }
	} = useController({
		name,
		control: form.control
	});

	// const hasError = errors[name] && isTouched[name];
	return (
		<>
			<input
				autoComplete='on'
				type={type}
				name={field.name}
				className={className}
				id={id ?? undefined}
				onChange={field.onChange}
				onBlur={field.onBlur}
			/>
			<label htmlFor={field.name}>{label}</label>
			{errors ? (
				<span
					className={`error_${name}`}
					style={{
						color: 'red',
						paddingTop: '10px',
						fontSize: '12px',
						fontWeight: '500',
						fontStyle: 'italic'
					}}>
					{errors[name]?.message}
				</span>
			) : (
				''
			)}
		</>
	);
};
export default InputField;
