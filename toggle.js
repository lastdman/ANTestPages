// Self invoke function. This is initialize the endpoint when the page is first loaded.
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
  sessionStorage.endPointURL = "//www.intern.facebook.com/assets.php/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=191347624543764";
}

function toggleEndPoint() {
  if (sessionStorage.endPoint == "PROD") {
    setEndPointToIntern();
  } else {
    setEndPointToProd();
  }
  invokeSetEndPoint();
  window.location.reload();
}

// Self invoke function. This is initialize to hide long text when the page is first loaded.
var invokeSetLongText = (function setLongText () {
  if (sessionStorage.longText) {
    document.getElementById("long_text").style.display = "block";
  } else {
    document.getElementById("long_text").style.display = "none";
  }
  return setLongText;
})();

function toggleLongText() {
  if (sessionStorage.longText == false) {
    sessionStorage.longText = true;
  } else {
    sessionStorage.longText = false;
  }
  invokeSetLongText();
  window.location.reload();
}

function reloadAds() {
  var container = document.getElementById("site");
  var content = container.innerHTML;
  container.innerHTML = content;
}
