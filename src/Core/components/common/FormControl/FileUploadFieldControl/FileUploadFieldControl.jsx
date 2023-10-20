import { useController } from 'react-hook-form';

const FileUploadFieldControl = ({ control, name, label, disabled, rules }) => {

	const {
		field,
		fieldState: { error },
		formState: { errors, touchedFields }
	} = useController({ name, control, rules, defaultValue: [] });
	const handleChange = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			field.onChange(e.target.files[0]);
		}
	};
	return (
		<div style={{ display: 'flex',flexDirection:"column",gap:3 }}>
			<label htmlFor={name}>
				{label}
			</label>
			<input style={{display:'none'}} name={name} id={name}  type='file' onChange={(e) => handleChange(e)} />
			{errors ? <span style={{ color: 'red' }}>{errors[name]?.message}</span> : ''}
		</div>
	);
};

export default FileUploadFieldControl;
