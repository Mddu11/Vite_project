function MainPage({ children }) {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <h1>Main Page</h1>
      {children}
    </div>
  );
}

export default MainPage;
