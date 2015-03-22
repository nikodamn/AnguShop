(function(){
    
    var app = angular.module('store', []);
  
    app.controller('StoreController',function(){
        this.products = gems;
    });
    
    app.controller('PanelController', function(){
        this.tab = 1; //init
        
        this.setTab = function(selected)
        {
            this.tab = selected;  
        };
        
        this.isSet = function(checkTab)
        {
            return this.tab === checkTab;  
        };
    });
  
    var gems = [
            { name: 'T-shirt', 
            price: 9.95,
            description: 'Everyone loves T-shirts!',
            canPurchase: true,
            images: [
            "img/tshirt1.jpg",
            "img/tshirt2.jpg",
            "img/tshirt3.jpg"
            ],
            spec: "Size: S,M,L,XL"
            },
            { name: 'Gryffindor scarf', 
            price: 4.95,
            description: 'Harry Potter style!',
            canPurchase: false,
            images: [
            "img/scarf1.jpg",
            "img/scarf2.jpg",
            "img/scarf3.jpg"
             ],
            spec: "Size: S,XL"
            },
            { name: 'Cup', 
            price: 2,
            description: 'Just classy.',
            canPurchase: true,
            images: [
            "img/cup1.jpg",
            "img/cup2.jpg",
            "img/cup3.jpg"
             ],
            spec: "Nothing here"
            }
  ];
    
})();
