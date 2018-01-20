import React from "react";

const FileUploader = ({ onChange }) => {
  return (
    <div className="file-uploader">
      <h3>File Uploader</h3>
      <input type="file" onChange={onChange} className="upload-button" />
    </div>
  );
};

export default FileUploader;
