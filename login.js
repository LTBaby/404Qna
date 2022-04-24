
function  ajaxGet(self, myUrl, onSuccess, onFinally) {
  var mySelf = this;
  var myAccessToken = "";
  return axios({
    method: 'get',
    url: myUrl,
    headers: { 
		'Authorization': 'Bearer ' + myAccessToken, 
		}
  }).then(response => {
    if (onSuccess && typeof onSuccess == "function")
      onSuccess(response);
  })
    .catch(function (error) {
      var exception = "";
      var colour = "danger";
      if (error.response) {
        if (error.response.status == 401) {
          exception = error.response.data.message;
          colour = "warning";
        } else if (error.response.status == 405) {
          exception = error.response.data.message;
          colour = "warning";
        } else if (error.response.status == 498) {
          // localStorage.setItem("accessToken","");
          // router.push('/login');
          exception = error.response.data.message;
          colour = "warning";
        } else if (error.response.status == 500) {
          exception = error.response.data.message;
          colour = "danger";
        }
      } else {
        exception = error.message;
        colour = "danger";
      }
      // mySelf.$vs.notify({
      //   time: 6000,
      //   title: 'Error',
      //   text: exception,
      //   color: colour,
      //   iconPack: 'feather',
      //   icon: 'icon-alert-circle'
      // });
    })
    .finally(onFinally)
}

function doSomething(){
	var self = this;
	var onSuccess = response => {
		debugger
		var t = response.data;
	}
	var onFinally = response => {
		debugger
	}
	ajaxGet(self, 'https://localhost:7099/Users', onSuccess, onFinally);
}