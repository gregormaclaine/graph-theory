const buttons = {
	'Generate Graph': {
		click: ({ graph, inputs: { order, size } }) => graph.randomise(order, size),
		inputs: { order: 14, size: 20 }
	},
	'Format Verticies in Circle': ({ graph }) => graph.format_verticies_in_circle()
};

function create_buttons(graph) {
	Object.entries(buttons).forEach(([text, data]) => {
		const container = createDiv().parent('#buttons');
		const button = createButton(text).parent(container);
		if (typeof data === 'function') return button.mousePressed(() => data({ graph }));

		const inputEls = {};
		if (data.inputs) Object.entries(data.inputs).forEach(([name, default_value]) => {
			const input_container = createSpan().parent(container);
			createSpan(name + ':').parent(input_container)
			inputEls[name] = createInput(default_value.toString()).parent(input_container)
		});

		button.mousePressed(() => {
			const inputs = Object.entries(inputEls).reduce((obj, [name, el]) => ({
				...obj,
				[name]: el.value()
			}), {});
			data.click({ graph, inputs });
		})
	});
}