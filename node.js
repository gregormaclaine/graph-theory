class Node {
  constructor() {
    this.id = Node.generateID();
    this.x = 0;
    this.y = 0;
  }

  static generateID() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const r1 = Math.floor(Math.random() * alphabet.length);
    const r2 = Math.floor(Math.random() * alphabet.length);
    return alphabet.slice(r1, r1 + 1) + alphabet.slice(r2, r2 + 1);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  toString = () => `<Node ${this.id}>`;

  render() {
    fill(0);
    strokeWeight(0);
    ellipse(this.x, this.y, 20, 20);
  }
}
