var endPoint = "PROD";

// Self invoke function
var invokeSetEndPoint = (function setEndPoint () {
  document.getElementById("endPoint").innerHTML = endPoint;
  return setEndPoint;
})();

function toggleEndPoint() {
  if (endPoint == "PROD") {
    endPoint = "INTERN";
  } else {
    endPoint = "PROD";
  }
  invokeSetEndPoint();
}
