class GraphVisual {
  constructor(graph) {
    this.graph = graph;
  }

  shuffle(width, height) {
    this.graph.nodes.forEach(n => n.move(random(width) - width / 2, random(height) - height / 2));
    return this;
  }

  show() {
    this.graph.edges.forEach(e => e.render());
    this.graph.nodes.forEach(n => n.render());
  }
}
