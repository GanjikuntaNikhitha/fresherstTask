var app = angular.module('myApp', ['ui.bootstrap']);

  app.controller('ListController', function($scope){
  
  $scope.curPage = 1,
  $scope.itemsPerPage = 3,
this.items = itemsDetails;
  
  // THIS IS FOR CREATING NUMBER OF PAGES ON UR ARRAY
  $scope.numOfPages = function () {
    return Math.ceil(itemsDetails.length / $scope.itemsPerPage);
    
  };
  
    $scope.$watch('curPage + numPerPage', function() {
    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
    end = begin + $scope.itemsPerPage;
    
    $scope.filteredItems = itemsDetails.slice(begin, end);
    // FOR DISPLAYING THE VALUE IN THE TABLE
  });
  });

  var itemsDetails = [
    { itemCode : 1,
      itemName : 'ONE',
      itemDescription : 'Hey Hie',
      uom : 'FEET',
      available : 'YES',
      openStock : 7,
      restrictStock : 16,
      threshold : 0,
      active : 'YES'
      },
    { itemCode : 2,
      itemName : 'TWO',
      itemDescription : 'Hey Hie',
      uom : 'GALLONS',
      available : 'YES',
      openStock : 8,
      restrictStock : 15,
      threshold : 0,
      active : 'YES'
      },
    { itemCode : 3,
      itemName : 'THREE',
      itemDescription : 'Hey Hie',
      uom : 'GALLONS',
      available : 'YES',
      openStock : 0,
      restrictStock : 15,
      threshold : 0,
      active : 'YES'
      },
    { itemCode : 4,
      itemName : 'FOUR',
      itemDescription : 'Hey Hie',
      uom : 'FEET',
      available : 'YES',
      openStock : 0,
      restrictStock : 15,
      threshold : 0,
      active : 'YES'
      },
    { itemCode : 5,
      itemName : 'FIVE',
      itemDescription : 'Hey Hie',
      uom : 'FEET',
      available : 'YES',
      openStock : 0,
      restrictStock : 14,
      threshold : 0,
      active : 'YES'
      },
    { itemCode : 6,
      itemName : 'SIX',
      itemDescription : 'Hey Hie',
      uom : 'FEET',
      available : 'YES',
      openStock : 0,
      restrictStock : 5,
      threshold : 0,
      active : 'YES'
      },
    { itemCode : 7,
      itemName : 'SEVEN',
      itemDescription : 'Hey Hie',
      uom : 'GALLONS',
      available : 'YES',
      openStock : 0,
      restrictStock : 5,
      threshold : 0,
      active : 'YES'
      },
    { itemCode : 8,
      itemName : 'EIGHT',
      itemDescription : 'Hey Hie',
      uom : 'FEET',
      available : 'YES',
      openStock : 5,
      restrictStock : 0,
      threshold : 0,
      active : 'YES'
      },
    { itemCode : 9,
      itemName : 'NINE',
      itemDescription : 'Hey Hie',
      uom : 'GALLONS',
      available : 'YES',
      openStock : 5,
      restrictStock : 0,
      threshold : 0,
      active : 'YES'
      },
    { itemCode : 10,
      itemName : 'TEN',
      itemDescription : 'Hey Hie',
      uom : 'FEET',
      available : 'YES',
      openStock : 77,
      restrictStock : 0,
      threshold : 0,
      active : 'YES'
      }
  ];