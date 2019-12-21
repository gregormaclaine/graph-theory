class Edge {
  constructor(node1, node2) {
    this.node1 = node1;
    this.node2 = node2;
    this.highlighted = false;
  }

  toString = () => `<Edge ${this.node1.id}-${this.node2.id}>`;

  equals(other) {
    return this.has(other.node1, other.node2);
  }

  has(n1, n2) {
    if (n2) {
      return (this.node1 === n1 && this.node2 === n2) || (this.node1 === n2 && this.node2 === n1);
    } else {
      return this.node1 === n1 || this.node2 === n1;
    }
  }

  render() {
    this.highlighted ? stroke(255, 0, 0) : stroke(100);
    strokeWeight(this.highlighted ? 4 : 2);
    line(this.node1.x, this.node1.y, this.node2.x, this.node2.y);
  }
}