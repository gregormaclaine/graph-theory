class GraphVisual {
  constructor({ nodes, edges }) {
    this.nodes = nodes;
    this.edges = edges;
  }

  shuffle(width, height) {
    this.nodes.forEach(n => n.move(random(width) - width / 2, random(height) - height / 2));
  }

  show() {
    this.edges.forEach(e => e.render());
    this.nodes.forEach(n => n.render());
  }
}