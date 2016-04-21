var endPoint = "PROD";

// Self invoke function
(function setEndPoint () {
  document.getElementById("endPoint").innerHTML = endPoint;
})();

function toggleEndPoint() {
  if (endPoint == "PROD") {
    endPoint = "INTERN";
  } else {
    endPoint = "PROD";
  }
  setEndPoint();
}
