import { useState } from "react";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core";

export const FileUpload = () => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // for onchange event
  const [selectPdfFile, setSelectPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // for submit event
  const [viewPdf, setViewPdf] = useState(null);

  // onchange event
  const fileObj = ["application/pdf"];
  const handleFileChange = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      let reader = new FileReader();

      reader.onloadend = (e) => {
        if (fileObj.includes(selectedFile.type)) {
          setSelectPdfFile(e.target.result);
          setPdfFileError("");
        } else {
          setSelectPdfFile(null);
          setPdfFileError("Please select a valid PDF file");
        }
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setSelectPdfFile(null);
      setPdfFileError("Please select a valid PDF file");
    }
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectPdfFile !== null) {
      setViewPdf(selectPdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <>
      {/* <div className='container'>
        <h1> </h1>

    <br></br> */}

      <br></br>

      {/* </div> */}

      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center ">
            <div className="p-9">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Upload a pdf file
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
            </div>

            <div className="container px-1 py-4 mx-auto">
              <form className="form-group" onSubmit={handleSubmit}>
                <input
                  type="file"
                  className="flex-none rounded-md m-2 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  required
                  onChange={handleFileChange}
                />
                {pdfFileError && (
                  <div className="mt-4 text-lg leading-8 text-gray-300">{pdfFileError}</div>
                )}
                <br></br>

                <button
                  type="submit"
                  className="flex-none rounded-md m-2 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  UPLOAD
                </button>
              </form>

              <h1 className="title-font text-lg font-medium  mb-3 text-white">
                View PDF
              </h1>

              <div className="pdf-container">
                {/* show pdf conditionally (if we have one)  */}
                {viewPdf && (
                  <>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                      <Viewer
                        fileUrl={viewPdf}
                        plugins={[defaultLayoutPluginInstance]}
                      />
                    </Worker>
                  </>
                )}

                {/* if we dont have pdf or viewPdf state is null */}
                {!viewPdf && (
                  <>
                    {" "}
                    <h1 className="title-font text-lg font-medium  mb-3 text-white">
                      No pdf file choosen{" "}
                    </h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FileUpload;
