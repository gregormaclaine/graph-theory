let graph = generateGraph(6, 9);
let diagram = new GraphVisual(graph);

console.log(graph.nodes);
console.log(graph.edges);

function mousePressed() {
  graph = generateGraph(6, Infinity);
  diagram = new GraphVisual(graph);
  diagram.shuffle(width, height);
}

function setup() {
  createCanvas(800, 600);
  diagram.shuffle(width, height);
}

function draw() {
  background(240);
  translate(400, 300);
  diagram.show();
}
