var endPoint = "PROD";

function toggleEndPoint() {
  if (endPoint == "PROD") {
    endPoint = "INTERN";
  } else {
    endPoint = "PROD";
  }
  document.getElementById("endPoint").innerHTML = endPoint;
}
