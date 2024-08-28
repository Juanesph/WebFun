import './App.css';
import FileUploader from './components/fileUploader.component';
import FileUploader1 from './components/fileUploader1.component';



function App() {
  return (
    <div className="min-vh-100">
      <div className=" justify-content-center align-items-center min-vh-100">
        <div className="border border-2 border-secondary p-5 bg-light min-vh-100">
          <FileUploader />
         {/*  <FileUploader1 /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
