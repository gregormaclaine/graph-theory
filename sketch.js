let graph;
let diagram;

function refresh() {
  graph = Graph.fromRandom(5, 5);
  diagram = new GraphVisual(graph).shuffle(width, height);

  const cycle = graph.findLongestCycle();
  cycle.forEach(e => e.highlighted = true);
}

function mousePressed() {
  refresh();
}

function setup() {
  createCanvas(800, 600);
  refresh();
}

function draw() {
  background(240);
  translate(400, 300);
  diagram.show();
}
