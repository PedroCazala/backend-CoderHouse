#Artillery
Se enviaron 20 solicitudes por 10 usuarios por lo que se paso el siguiente comando: 
artillery quick --count 10 -n 20 http://localhost/info    

http.response_time:
  min: ......................................................................... 0
  max: ......................................................................... 3
  median: ...................................................................... 1
  p95: ......................................................................... 1
  p99: ......................................................................... 1

con un console.log:
http.response_time:
  min: ......................................................................... 0
  max: ......................................................................... 6
  median: ...................................................................... 1
  p95: ......................................................................... 1
  p99: ......................................................................... 2