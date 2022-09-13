const solution = (ices) => {
  const graph = [];

  ices.split('\n').forEach((ice) => {
    ice = ice.split('').map((i) => Number(i));
    graph.push(ice);
  });
};

solution(3, 3, '001\n010\n101');
