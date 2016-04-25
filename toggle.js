//sessionStorage.setItem("endPoint", "PROD");
//sessionStorage.setItem("endPointURL", "//connect.facebook.net/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=191347624543764");
//var endPoint = sessionStorage.endPoint;
//var endPointURL = sessionStorage.endPointURL;

// Self invoke function
var invokeSetEndPoint = (function setEndPoint () {
  if (sessionStorage.endPoint) {
    document.getElementById("endPoint").innerHTML = sessionStorage.getItem("endPoint");
    document.getElementById("endPointURL").innerHTML = sessionStorage.getItem("endPointURL");
  } else {
    setEndPointToProd();
  }
  return setEndPoint;
})();


function setEndPointToProd() {
  sessionStorage.endPoint = "PROD";
  sessionStorage.endPointURL = "//connect.facebook.net/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=191347624543764";
}

function setEndPointToIntern() {
  sessionStorage.endPoint = "INTERN";
  sessionStorage.endPointURL = "//www.tonypan.sb.facebook.com/assets.php/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=191347624543764";
}

function toggleEndPoint() {
  if (sessionStorage.endPoint == "PROD") {
    setEndPointToIntern();
  } else {
    setEndPointToProd();
  }
  invokeSetEndPoint();
}

function reloadAds() {
  var container = document.getElementById("site");
  var content = container.innerHTML;
  container.innerHTML = content;
}
