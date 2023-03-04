import MusicIcon from "./components/music_icon.svg";

function App() {
  return (
    <div className="container">
      <div className="component-container">
        <header className="header"></header>
        <main className="main">
          <h1 className="big-title">Order Summary</h1>
          <p className="sub">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like
          </p>
          <div className="plan">
            <MusicIcon />
            <div>
              <h4>Annual Plan</h4>
              <p>$59.99/year</p>
            </div>
            <a href="#change">change</a>
          </div>

          <button className="btn">Proceed to payment</button>
          <button className="btn cancel">Cancel order</button>
        </main>
      </div>
    </div>
  );
}

export default App;
