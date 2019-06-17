const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

  function buildGraph(edges){
    let graph = {}

    function addEdge(from,to){
        if(graph[from]==null)
            graph[from]=[to];
        else
            graph[from].push(to);
    }

    // console.log(edges.map(r=>r.split('-')));

    for(let [from,to] of edges.map(r=>r.split('-'))){
        addEdge(from,to);
        addEdge(to,from);
    }

    return graph;
  }

  const graph = buildGraph(roads);
  console.log(graph)