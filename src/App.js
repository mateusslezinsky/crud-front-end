import "./App.css";
import FormPage from "./pages/form-page/form-page";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <FormPage />
      </UserProvider>
    </div>
  );
}

export default App;
