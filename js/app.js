(function() { //iife 
    var app = angular.module("ShoppingListCheckOff", []); 


  app.factory('ShoppingListCheckOffService', function() {
  
    var svc = {
      shoppinglist: [{Name:"Cookies", Quantity:10, Price:5},
                                {Name:"Bread", Quantity:5, Price:2.50},
                                {Name:"Soda", Quantity:6, Price:1.50},
                                {Name:"Apples", Quantity:10, Price:.50},
                                {Name:"Cheese", Quantity:1, Price:4.50},
                                {Name:"Xbox 360",Quantity:3,Price:1000},
                                {Name:"Chips", Quantity:4, Price:2.75}],
      boughtlist: [],


      addItem: function(indexofitem) {
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });


        console.log(indexofitem);
        var newVal=this.shoppinglist[indexofitem];
        console.log(newVal);
         //delete this.shoppinglist[indexofitem];
        //this.shoppinglist=this.shoppinglist.filter(Boolean);
        this.shoppinglist.splice(indexofitem, 1);
        //this.shoppinglist=this.shoppinglist.filter(Boolean);
        console.log(this.shoppinglist);
        var cost="$$"+formatter.format(newVal.Price * newVal.Quantity);
        listitem="Bought "+newVal.Quantity+" "+newVal.Name+" for "+cost;
 
        this.boughtlist.push(listitem); 
       


       // console.log(this.message2);
        
      }

    };//end of var serivce

    return svc;
  });

    app.controller("ToBuyController", function($scope, ShoppingListCheckOffService) {
        //$scope.lunchitems = ["Milk", "Bread", "Cheese"];
        var c1=this;
        $scope.shoppinglist = ShoppingListCheckOffService.shoppinglist;
        $scope.msgcolor="setgreen";
        $scope.message="";
        $scope.boughtItem = function (anindex) {
             console.log("anindex=");
             console.log(anindex); 
             ShoppingListCheckOffService.addItem(anindex);

        
            //$scope.lunchitems.push($scope.addMe);
            //console.log($scope.addMe.length);
            

       
              if ($scope.shoppinglist.length==0 ){
                  $scope.msgcolor="green";
                  $scope.message="Nothing left to Buy";
              }else{
                  $scope.msgcolor="setred";
                  $scope.message="";
              }

    

            }
 
           
    });

    app.controller("AlreadyBoughtController", function($scope, ShoppingListCheckOffService) {
        var c2=this;
   
        $scope.boughtlist=ShoppingListCheckOffService.boughtlist;

        



            
            
    });

}());