var endPoint = "PROD";
var endPointURL = "//connect.facebook.net/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=191347624543764";

// Self invoke function
var invokeSetEndPoint = (function setEndPoint () {
  document.getElementById("endPoint").innerHTML = endPoint;
  document.getElementById("endPointURL").innerHTML = endPointURL;
  return setEndPoint;
})();

function toggleEndPoint() {
  if (endPoint == "PROD") {
    endPoint = "INTERN";
    endPointURL = "//www.tonypan.sb.facebook.com/assets.php/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=191347624543764";
  } else {
    endPoint = "PROD";
    endPointURL = "//connect.facebook.net/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=191347624543764";
  }
  invokeSetEndPoint();
}

function reloadAds() {
  var container = document.getElementById("site");
  var content = container.innerHTML;
  invokeSetEndPoint();
  container.innerHTML = content;
}
