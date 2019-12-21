class Node {
  constructor(id) {
    this.id = id || Node.generateID();
    this.x = 0;
    this.y = 0;
    this.highlighted = false;
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
    this.highlighted ? fill(255, 0, 0) : fill(0);
    strokeWeight(0);
    ellipse(this.x, this.y, 16, 16);
    strokeWeight(1);
    stroke(0);
    textSize(15);
    textAlign(CENTER, CENTER); 
    text(this.id, this.x, this.y - 25);
  }
}
