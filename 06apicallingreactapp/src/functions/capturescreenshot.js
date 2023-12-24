import html2canvas from "html2canvas";

export const captureScreenshot = async () => {
  const element = document.getElementById("capture");
  const fullName = "image"; // Replace with the actual full name
  const directoryName = "AppScreenshots";

  try {
    // Capture the screenshot
    const canvas = await html2canvas(element);

    // Check if showDirectoryPicker is supported
    if (window.showDirectoryPicker) {
      // Request access to the file system
      const handle = await window.showDirectoryPicker();

      // Create or get the directory
      const directoryHandle = await handle.getDirectoryHandle(directoryName, {
        create: true,
      });

      // Convert the canvas to a Blob
      const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, "image/png");
      });

      // Create a file with the full name as the filename
      const fileHandle = await directoryHandle.getFileHandle(
        `${fullName}.png`,
        {
          create: true,
        },
      );
      const writable = await fileHandle.createWritable();
      await writable.write(blob);
      await writable.close();

      console.log("Screenshot saved successfully.");
    } else {
      // Fallback for browsers that do not support showDirectoryPicker
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `${fullName}.png`;
      link.click();
    }
  } catch (error) {
    console.error("Error capturing or saving screenshot:", error);
  }
};
