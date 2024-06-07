import "./index.css";
function Jumbotron(header: string, text: string) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <h1 className="display-4">{header}</h1>
      <p className="lead">{text}</p>
    </div>
  );
}
export default Jumbotron;
