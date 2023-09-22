import { forwardRef, useRef } from 'react';
import { useController } from 'react-hook-form';

const SelectFieldControl = (
	{ initialValue = 'Chọn', control, name, label, options, disabled, rules, ...props },
	ref
) => {
	const localRef = useRef(null);
	const inputRef = ref || localRef;

	const {
		field,
		fieldState: { error },
		formState: { errors, touchedFields }
	} = useController({
		name,
		control,
		rules,
		defaultValue: props.value,
		...props
	});

	return (
		<div>
			{label && <div>{label}</div>}
			<select
				{...props}
				onChange={(event) => {
					field.onChange(event);
					if (props.onChange) {
						props.onChange(event);
					}
				}}
				ref={(e) => {
					field.ref(e);
					inputRef.current = e;
				}}
				id={id}
				name={name}
				disabled={disabled}
				value={field.value}>
				<option value=''>{initialValue}</option>
				{Array.isArray(options) &&
					options.map((option, index) => (
						<option value={option?.value} key={index}>
							{option?.label}
						</option>
					))}
			</select>
			{errors ? <span className={`error_${name}`}>{errors[name]?.message}</span> : ''}
		</div>
	);
};

export default forwardRef(SelectFieldControl);
