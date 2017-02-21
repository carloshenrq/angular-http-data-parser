# angular-http-data-parser

Tratamento de dados para serem enviados como parametros em requisições com o uso do componente $http do angular.

## Modo de usar

1. Inclua o angular no cabeçalho do seu html.
2. Inclua este programa no cabeçalho do seu html, após o angular.

Quando você for realizar uma requisição com o uso do $http, você pode usar este componente para tratar os dados de objeto e envia-los em uma requisição.

## Exemplo

Um bom exemplo de uso é o seguinte:

    (function(ng) {
    
        'use strict';
        
        ng.module('my-app', ['angular-http-data-parser'])
          .controller('test', ['$scope', 'data-parser', function($scope, dataParser) {
          
              $scope.form = {
                  username : 'admin',
                  password : 'admin'
              };
          
              $scope.send = function()
              {
                  $http({
                      url : '/login',
                      method : 'POST',
                      // Isso irá dar uma saída igual a:
                      // * username=admin&password=admin
                      data : dataParser.parse(this.form),
                      headers : {
                          'Content-Type': 'application/x-www-form-urlencoded'
                      }
                  }).then(function(response) {
                      console.log(response)
                  }, function(response) {
                      console.error(response);
                  });
              }
          
          }]);
    
    }) (angular);
