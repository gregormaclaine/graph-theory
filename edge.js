class Edge {
  constructor(node1, node2) {
    this.node1 = node1;
    this.node2 = node2;
  }

  toString = () => `<Edge ${this.node1.id}-${this.node2.id}>`;

  equals(other) {
    return (this.node1 === other.node1 && this.node2 === other.node2) || (this.node1 === other.node2 && this.node2 === other.node1);
  }

  render() {
    stroke(100);
    strokeWeight(2);
    line(this.node1.x, this.node1.y, this.node2.x, this.node2.y);
  }
}