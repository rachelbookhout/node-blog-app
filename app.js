var server = http.createServer(app);
var boot = function(){
  server.listen(app.get('port'), function(){
    console.info('Express server listening on port' + app.get('port');
  });
}
var shutown = function(){
  server.close();
}
