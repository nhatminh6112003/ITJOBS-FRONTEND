import { forwardRef, useRef, Fragment } from 'react';
import { useController } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

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
		<Fragment>
			{label && (
				<label
					style={{
						color: '#5d677a',
						fontWeight: 500,
						fontSize: 16
					}}
					for={name}>
					{label}
				</label>
			)}
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
				id={uuidv4()}
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
			{errors ? (
				<span
					className={`error_${name}`}
					style={{
						paddingTop: 7,
						color: 'red',
						fontSize: 12,
						fontStyle: 'italic',
						fontWeight: 500
					}}>
					{errors[name]?.message}
				</span>
			) : (
				''
			)}
		</Fragment>
	);
};

export default forwardRef(SelectFieldControl);
