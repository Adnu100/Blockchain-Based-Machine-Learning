import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import GradientForm from "./components/gradientform";
import "./static/gradientform.css";

function App() {
  return (
    <>
      <Header></Header>
      <div
        className="container rounded border border-primary shadow-lg myform"
        style={{ padding: "20px" }}
      >
        <GradientForm></GradientForm>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;


/*
  <FileInput></FileInput> 
  <Header></Header>
      <div
        className="container rounded border border-primary shadow-lg myform"
        style={{ padding: "20px" }}
      >
        <GradientForm></GradientForm>
      </div>
      <Footer></Footer>

*/