var heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading"
  );
  var heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading1"
  );
  
  var container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
  
  // create root using createRoot
  var root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);
  Footer