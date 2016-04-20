var endPoint = "PROD";

function setEndPoint (newEndPoint) {
  endPoint = newEndPoint;
  document.getElementById("endPoint").innerHTML = endPoint;
}

function toggleEndPoint() {
  if (endPoint == "PROD") {
    endPoint = "INTERN";
  } else {
    endPoint = "PROD";
  }
}
