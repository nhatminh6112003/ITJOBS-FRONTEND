import * as React from 'react';
import { TextareaAutosize } from '@mui/material';
import { useController } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';

const TextAreaFieldControl = ({ label, name, control, rules, disabled, ...props }) => {
	const grey = {
		50: '#f6f8fa',
		100: '#eaeef2',
		200: '#d0d7de',
		300: '#afb8c1',
		400: '#8c959f',
		500: '#6e7781',
		600: '#57606a',
		700: '#424a53',
		800: '#32383f',
		900: '#24292f'
	};

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
	const localRef = useRef(null);
	const inputRef = localRef;
	return (
		<div>
			<label htmlFor=''>{label}</label>
			<TextareaAutosize
				style={{
					margin: '8px 0',
					width: '100%',
					padding: '12px',
					border: `1px solid ${grey[700]}`,
					borderRadius: '12px',
					boxShadow: `0px 2px 2px ${grey[50]}`
				}}
				name={name}
				{...props}
				id={uuidv4()}
				minRows={1}
				onChange={field.onChange}
				onBlur={field.onBlur}
				value={field.value || ''}
				disabled={disabled}
				ref={(e) => {
					field.ref(e);
					inputRef.current = e;
				}}
			/>
			{errors ? <span style={{ color: 'red' }}>{errors[name]?.message}</span> : ''}
		</div>
	);
};

export default TextAreaFieldControl;
