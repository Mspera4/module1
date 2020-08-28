(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.item = '';
        $scope.message = 'Write items';
        
        $scope.check = function () {
            const words = $scope.item.split(' ');

            console.log(words.length);
            for (let i = 0; i < words.length; i++) {
                if (words[i] == '' || words[i] == null) {
                    return $scope.message = 'Empty item detected!'; 
                } else if (words.length <= 2) {
                    return $scope.message = 'Enjoy!';
                } else if (words.length > 3) {
                    return $scope.message = 'Too Much!';
                }
            }
        }
    }

})();