class UI {
  displayTemp(celcius) {
    const tempDegree = document.querySelector(".temperature-degree");
    tempDegree.textContent = celcius;
  }

  displayPlace(place) {
    const location = document.querySelector(".location-timezone");
    location.textContent = place;
  }

  displayDescription(description) {
    const descp = document.querySelector(".temperature-description");
    descp.textContent = description;
  }

  displayIcon(icon) {
    const iconParent = document.querySelector(".icon");
    iconParent.innerHTML = "";
    iconParent.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png"/>`;
  }
}
