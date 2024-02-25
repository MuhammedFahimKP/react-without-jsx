function App() {
  const current_time = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(current_time);

  React.useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return React.createElement("h1", null, `Time ${time}`);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));
