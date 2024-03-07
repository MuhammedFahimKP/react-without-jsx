function App() {
  const current_time = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(current_time);

  React.useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const div = React.createElement("div", { className: "root2", key: "djdj" });
  const h1 = React.createElement("h1", { key: "time" }, `Time Is ${time}`);

  return React.createElement("div", null, [div, h1]);
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));
