// FileBrowser.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function FileBrowser({ accessToken }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          "http://nextcloud-server/remote.php/dav/files/username/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setFiles(response.data);
      } catch (error) {
        console.error("Failed to fetch files:", error);
      }
    };
    fetchFiles();
  }, [accessToken]);

  return (
    <div>
      <h2>Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileBrowser;
