import {
  AdavanceExcelCource,
  CreateNotes,
  FileUpload,
  Tally,
  UploadedNotes,
  // DashbordMenu,
  SignOut,
  DashbordHome,
} from "../../containers";
import { Route, Routes } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        
          {/* <DashbordMenu /> */}
          <Routes>
            <Route path="/" exact element={<DashbordHome />} />
            <Route path="/Tally" element={<Tally />} />
            <Route
              path="/AdavanceExcelCource"
              element={<AdavanceExcelCource />}
            />
            <Route path="/FileUpload" element={<FileUpload />} />
            <Route path="/UploadedNotes" element={<UploadedNotes />} />
            <Route path="/CreateNotes" element={<CreateNotes />} />
            <Route path="/SignOut " element={<SignOut />} />
          </Routes>
        {/* </Router> */}
        {/* <AdavanceExcelCource />
        <Tally />
        <FileUpload />
        <UploadedNotes />
        <CreateNotes /> */}
      </div>
    </div>
  );
};

export default MainContent;
