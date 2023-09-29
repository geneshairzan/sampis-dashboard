import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Label from "./label";
import UI from "@gh/ui";

const filter = createFilterOptions();

export default function FreeSoloCreateOption({ name, value, onChange, noLabel, ...props }) {
	let options = ['Project', 'MUI', 'Github', 'Docker']

	function setValue(v) {
		onChange({ target: { name: name, value: v } })
	}
	function handleQuick(input) {
		onChange({ target: { name: name, value: [...value, input] } })

	}

	return (
		<UI.Col>
			{!noLabel && <Label label={props.label} tip={props.tip} />}
			<Autocomplete
				fullWidth
				multiple
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue.map(d => d?.inputValue || d))

				}}
				filterOptions={(options, params) => {
					const filtered = filter(options, params);
					const { inputValue } = params;
					// Suggest the creation of a new value
					const isExisting = options.some((option) => inputValue === option);
					if (inputValue !== '' && !isExisting) {
						filtered.push({
							inputValue: inputValue,
							title: `Add "${inputValue}"`
						});
					}
					return filtered;
				}}
				selectOnFocus
				clearOnBlur
				handleHomeEndKeys
				options={value}
				getOptionLabel={(option) => {
					// Value selected with enter, right from the input
					if (typeof option === 'string') {
						return option;
					}
					// Add "xxx" option created dynamically
					if (option?.inputValue) {
						return option.inputValue;
					}
					// Regular option
					return option;
				}}
				renderOption={(props, option) => <li {...props}>{option?.title ? option.title : option}</li>}
				freeSolo
				renderInput={(params) => (
					<TextField {...params} />
				)}
			/>
			<UI.Row spacing={2}>
				{options.filter(d => !value.includes(d)).map(d =>
					<ShortCut label={d} onClick={() => handleQuick(d)} />

				)}

			</UI.Row>
		</UI.Col>
	);
}


function ShortCut(props) {
	return (
		<UI.Text
			component='a'
			variant="body2"
			onClick={() => props.onClick(props.value || props.label)}
			sx={{
				color: "grey",
				cursor: 'pointer',
				"&:hover": {
					color: "primary.main",
				},
			}}
		>
			{props.label}
		</UI.Text>
	);
}