let graph;

function mousePressed() {
	if (graph) graph.handle_click(createVector(mouseX - width / 2, mouseY - height / 2))
}

function setup() {
	createCanvas(800, 800).parent('#visual');

	graph = new Graph().randomise(14, 20);
	console.log(graph);
	create_buttons(graph);
}

function draw() {
	translate(width / 2, height / 2);
	background(240);
	graph.show();
}

console.log('Hello from Steli');
