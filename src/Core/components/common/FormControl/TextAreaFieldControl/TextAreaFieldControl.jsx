import * as React from 'react';
import { TextareaAutosize } from '@mui/material';
import { useController } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
import { useRef, forwardRef } from 'react';

import { styled } from '@mui/system';
const TextAreaFieldControl = ({ name,control, rules, disabled, ...props }) => {
	const blue = {
		100: '#DAECFF',
		200: '#b6daff',
		400: '#3399FF',
		500: '#007FFF',
		600: '#0072E5',
		900: '#003A75'
	};

=======
import { useRef } from 'react';

const TextAreaFieldControl = ({ label, name, control, rules, disabled, ...props }) => {
>>>>>>> 70da9e3e9f433cdfb8f0dd54f91180b0d25dadc4
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

<<<<<<< HEAD
	const StyledTextarea = styled(TextareaAutosize)(
		({ theme }) => `
    margin:8px 0;
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
	);
=======
>>>>>>> 70da9e3e9f433cdfb8f0dd54f91180b0d25dadc4
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
<<<<<<< HEAD
			<StyledTextarea
         name={name}
			{...props}
			id={uuidv4()}
         minRows={3}
			onChange={field.onChange}
			onBlur={field.onBlur}
			value={field.value || ''}
			disabled={disabled}
			ref={(e) => {
				field.ref(e);
				inputRef.current = e;
			}}
		/>
			{errors ? <span style={{color:'red'}}>{errors[name]?.message}</span> : ''}
		</div>

=======
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
>>>>>>> 70da9e3e9f433cdfb8f0dd54f91180b0d25dadc4
	);
};

export default TextAreaFieldControl;
