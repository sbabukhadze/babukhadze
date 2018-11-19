window.onload = () => {
  let Views = {
    home: {
      title: "Index Page",
      url: "./views/home.html",
      content: ""
    },
    contact: {
      title: "Contact Page",
      url: "./views/contact.html",
      content: ""
    },
    portfolio: {
      title: "Portfolio Page",
      url: "./views/portfolio.html",
      content: ""
    },
    about: {
      title: "About Us Page",
      url: "./views/about.html",
      content: ""
    }
  };

  const Links = document.querySelectorAll(".menu--item");
  const titleElement = document.getElementById("title");
  const contentElement = document.getElementById("content");

  Links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const url = event.target.attributes["href"].value;
      console.log(url);

      const viewData = Views[url.split(".")[0]];
      console.log(viewData);

      renderContent(viewData);
      history.pushState(viewData, viewData.title, url);
    });
  });

  function renderContent(state) {
    if (state) {
        fetch(state.url, {
            method: "GET",
        })
        .then(res => res.text())
        .then(data => (contentElement.innerHTML = data));
        
      document.title = state.title;
      titleElement.innerHTML = state.title;
      contentElement.innerHTML = state.content;
    }
  }
  window.addEventListener("popState", function(event) {
    renderContent(event.state);
  });

  renderContent(Views.home);

  history.replaceState(Views.home, Views.home.title, "");
};
