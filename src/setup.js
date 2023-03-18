export const Choices = {
	Dfrs: [
		{ id: 1, label: 'DFR 1' },
		{ id: 2, label: 'DFR 2' },
	],
	IntellimixModes: [
		{ id: 'CLASSIC', label: 'Classic' },
		{ id: 'SMOOTH', label: 'Smooth' },
		{ id: 'EXTREME', label: 'Extreme' },
		{ id: 'CUSTOM', label: 'Custom' },
		{ id: 'MANUAL', label: 'Manual' },
		{ id: 'CUSTOM_PRESET', label: 'Custom Preset' },
	],
	Mixers: [
		{ id: 'A', label: 'Mix A' },
		{ id: 'B', label: 'Mix B' },
	],
	Mute: [
		{ id: 'ON', label: 'Mute' },
		{ id: 'OFF', label: 'Unmute' },
		{ id: 'TOGGLE', label: 'Toggle Mute/Unmute' },
	],
	OnOff: [
		{ id: 'ON', label: 'On' },
		{ id: 'OFF', label: 'Off' },
	],
	OnOffToggle: [
		{ id: 'ON', label: 'On' },
		{ id: 'OFF', label: 'Off' },
		{ id: 'TOGGLE', label: 'Toggle' },
	],
}

export const Fields = {
	Dfr: {
		type: 'dropdown',
		label: 'DFR #',
		id: 'dfr',
		default: 1,
		choices: Choices.Dfrs,
	},
	GainInc: {
		type: 'number',
		label: 'Gain Value (dB)',
		id: 'gain',
		min: 0.1,
		max: 120,
		step: 0.1,
		default: 3,
		required: true,
		range: true,
	},
	GainSet: {
		type: 'number',
		label: 'Gain Value (dB)',
		id: 'gain',
		min: -110,
		max: 18,
		step: 0.1,
		default: 0,
		required: true,
		range: true,
	},
	IntellimixMode: {
		type: 'dropdown',
		label: 'IntelliMix Mode',
		id: 'choice',
		default: 'CLASSIC',
		choices: Choices.IntellimixModes,
	},
	Mixer: {
		type: 'dropdown',
		label: 'Mix',
		id: 'mix',
		default: 'A',
		choices: Choices.Mixers,
	},
	Mute: {
		type: 'dropdown',
		label: 'Mute/Unmute/Toggle',
		id: 'choice',
		default: 'ON',
		choices: Choices.Mute,
	},
	Name: {
		type: 'textinput',
		label: 'Name (31 characters max)',
		id: 'name',
		default: '',
		regex: '/^.{1,31}$/',
	},
	OnOff: {
		type: 'dropdown',
		label: 'Set On/Off',
		id: 'choice',
		default: 'ON',
		choices: Choices.OnOff,
	},
	OnOffToggle: {
		type: 'dropdown',
		label: 'Set On/Off/Toggle',
		id: 'choice',
		default: 'TOGGLE',
		choices: Choices.OnOffToggle,
	},
}