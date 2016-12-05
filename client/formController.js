angular.module('Form', [])
.controller('FormController', function($scope, HttpService){
  $scope.data = {};
  $scope.role = {};
  $scope.results = {};
  $scope.job = {};

  $scope.submitForm = function() {


    HttpService.postData({"data": $scope.data})
      .then(function(resp) {

      })
    }

    $scope.getJobData = function() {
      HttpService.getData()
        .then(function(res){
          console.log("this is res", res)
        $scope.results = res.data;
        })

            // console.log("result[0].data.jobDescription", res.data)
    }

    // $scope.getSingleJob = function($scope.role) {
    //   console.log($scope.role);
    //
    //   HttpService.getJob({"role": $scope.role})
    //     .then(function(resp) {
    //       console.log(resp)
    //       $scope.results = resp.data;
    //     })
    //
    // }

  })
.factory('HttpService', function($http){
  let postData = function(data) {

    return $http.post('/form', data)
    .then(function(resp) {


      return resp
    })
  }

  let getData = function() {
    return $http.get('/form')
      .then(function(res){
        return res
      })

  }

//   let getJob = function(role) {
//   //vvvv this only takes one param here
//   return $http.get('/form/' + role)
//   .then(function(resp){
//     return resp;
//   })
// }


  return {
    postData: postData,
    getData: getData,
    // getJob: getJob
  }
})
