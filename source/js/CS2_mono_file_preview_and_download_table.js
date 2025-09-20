// 存储当前预览的文件信息
let currentFileInfo = null;

// 监听所有CFG链接的点击事件
document.querySelectorAll(".file-link").forEach((link) => {
  link.addEventListener("click", async (e) => {
    // 先强制阻止默认行为（关键修复）
    e.preventDefault();
    e.stopPropagation();

    // 判断是否按下Ctrl/Command键（用于下载）
    const isCtrlPressed = e.ctrlKey || e.metaKey;

    if (isCtrlPressed) {
      // Ctrl+单击：下载
      const fileUrl = link.href;
      const fileName = link.dataset.filename;
      downloadFile(fileUrl, fileName);
    } else {
      // 普通单击：预览
      const fileUrl = link.href;
      const fileName = link.dataset.filename;

      try {
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error("文件不存在或无法访问");
        const content = await response.text();

        currentFileInfo = { url: fileUrl, name: fileName };
        document.getElementById("previewFileName").textContent = fileName;
        document.getElementById("previewContent").textContent = content;
        document.getElementById("cfgPreviewModal").style.display = "block";
      } catch (error) {
        console.error("预览失败:", error);
        alert("无法预览文件：" + error.message);
      }
    }
  });
});

// 关闭预览模态框
function closePreview() {
  document.getElementById("cfgPreviewModal").style.display = "none";
  currentFileInfo = null;
}

// 下载当前预览的文件
function downloadCurrentFile() {
  if (currentFileInfo) {
    downloadFile(currentFileInfo.url, currentFileInfo.name);
  }
}

// 通用下载函数
function downloadFile(url, filename) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
    })
    .catch((error) => {
      console.error("下载失败:", error);
      alert("下载失败，请重试");
    });
}

// 点击模态框外部关闭预览
document.getElementById("cfgPreviewModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("cfgPreviewModal")) {
    closePreview();
  }
});

// 按ESC键关闭预览
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    document.getElementById("cfgPreviewModal").style.display === "block"
  ) {
    closePreview();
  }
});
