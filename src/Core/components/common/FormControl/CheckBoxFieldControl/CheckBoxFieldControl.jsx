import classNames from 'classnames';
import { Fragment, forwardRef, useId, useRef } from 'react';
import { useController } from 'react-hook-form';
const CheckBoxFieldControl = ({
	defaultChecked,
	defaultValue,
	disabled,
	rules,
	checked,
	name,
	control,
	label,
	value,
	...props
}) => {
	const {
		field,
		fieldState: { error },
		formState: { errors, touchedFields }
	} = useController({
		name,
		control,
		rules,
		checked,
		...props
	});
	const localRef = useRef(null);
	const inputRef = localRef;
	return (
		<div style={{ marginTop: 4 }}>
			<input
				{...props}
				value={value | ''}
				defaultChecked={defaultChecked}
				checked={checked}
				defaultValue={defaultValue}
				type='checkbox'
				style={{
					position: 'relative',
					top: 2,
					marginRight: 5
				}}
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
				disabled={disabled}
				name={name}
				id={name}
			/>
			{label && (
				<label for={name} id={name}>
					{label}
				</label>
			)}

			{errors ? <span style={{ color: 'red' }}>{errors[name]?.message}</span> : ''}
		</div>
	);
};

export default CheckBoxFieldControl;
