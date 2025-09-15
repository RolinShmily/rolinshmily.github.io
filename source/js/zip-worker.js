// 首先引入 JSZip 库（使用 CDN 地址）
importScripts("https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js");
// 接收主线程消息（文件列表和配置）
self.onmessage = async (e) => {
  const { files, zipName } = e.data;
  const zip = new JSZip();

  try {
    // 循环添加文件
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const response = await fetch(file.url);
      const content = await response.text();
      zip.file(file.name, content);
      // 向主线程发送进度
      self.postMessage({ type: "progress", data: i + 1 });
    }

    // 生成ZIP并发送给主线程
    const blob = await zip.generateAsync({ type: "blob" });
    self.postMessage({ type: "complete", data: blob, zipName });
  } catch (error) {
    self.postMessage({ type: "error", data: error.message });
  }
};
