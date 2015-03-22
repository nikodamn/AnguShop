(function(){
    
  var app = angular.module('store', []);
  
  app.controller('StoreController',function(){
    this.products = gems;
  });
  
      var gems = [
            { name: 'T-shirt', 
            price: 9.95,
            description: 'Everyone loves T-shirts!',
            canPurchase: true,
            images: [
            "img/tshirt1.jpg",
            "img/tshit2.jpg"
            ]
            },
            { name: 'Gryffindor scarf', 
            price: 4.95,
            description: 'Harry Potter style!',
            canPurchase: false,
            images: [
            "img/scarf1.jpg",
            "img/scarf2.jpg"
             ]
            },
            { name: 'Cup', 
            price: 2,
            description: 'Just classy.',
            canPurchase: true,
            images: [
             "img/cup1.jpg",
             "img/cup2.jpg"
             ]
            }
  ];
    
})();
