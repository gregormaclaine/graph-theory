function generateGraph(order, size) {

  size = Math.min(size, (order * (order + 1)) / 2);

  const nodes = new Array(order).fill(0).map(() => new Node());
  const edges = nodes.map((n, i, arr) => i === 0 ? null : new Edge(n, arr[i - 1])).slice(1);

  const complete_edges = nodes.map((n1, i, arr) => 
    arr.map(n2 => new Edge(n1, n2))
       .filter((e, ei) => ei !== i))
       .flat()
       .filter(e1 => !edges.some(e2 => e1.equals(e2))
  );
  for (let i = 0; i < size - order + 1; i++) 
    edges.push(complete_edges.splice(Math.floor(Math.random() * complete_edges.length), 1)[0]);

  return { nodes, edges };
}