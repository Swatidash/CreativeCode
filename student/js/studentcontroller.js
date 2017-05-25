studentApp.controller('studentcontroller', ['$scope', '$http','$location',
    function ($scope, $http, $location) {
        
        //array of student list to accummulate json data
        $scope.studentlist = [];
        // assign local variable with getstudent function
       
        //declare scope variable addstudent click function
        $scope.addstudent = addstudentclk;

        function getStudent() {
            //get student list from API using $http
            $http({
                method: "GET",
                url: "http://localhost:8081/api/student",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'*'
                }
            }).then(function (response) {
                //set response json studentlist
                $scope.studentlist = response.data;
            });
        }
        function addstudentclk() {
            $location.path('/addstudent');
        }

        //
        getstudent();
    }
]);