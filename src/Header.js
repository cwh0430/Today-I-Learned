function Header({ showForm, setshowForm }) {
  const appTitle = "Today I Learned";

  return (
    <header className="heads">
      <div className="logo-title">
        <img src="logo.png" alt="logo.png" />
        <h1>{appTitle}</h1>
      </div>
      <button
        className="btn btn-large"
        onClick={() => {
          setshowForm(!showForm);
        }}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}

export default Header;
