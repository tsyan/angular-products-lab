var ProductCtrl = function($scope, $routeParams, $http, $location, productData){
    $scope.data = productData.products[0];

    // Need to pass a callback here, so we wait for the return from the
    // remote service
    productData.loadProduct($routeParams.productId, function(data){
        $scope.data.product = data.product
    });

    $scope.createNewProduct = function () {
      var data = {product: $scope.product };
      $http.post('/products', data)
           .success(function () {
              console.log('new product created');
              $location.url('/');
           });
    };
};
