// 存储当前预览的文件信息
let currentFileInfo = null;

// 确保DOM加载完成后再执行
document.addEventListener("DOMContentLoaded", function () {
  // 监听所有文件链接的点击事件
  document.querySelectorAll(".file-link").forEach((link) => {
    // 移除可能存在的其他点击事件监听器
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);

    // 重新添加点击事件
    newLink.addEventListener("click", async (e) => {
      // 强制阻止所有默认行为
      e.preventDefault();
      e.stopImmediatePropagation();

      // 移除href属性的临时引用，防止意外跳转
      const fileUrl = newLink.href;
      newLink.removeAttribute("href");

      // 判断是否按下Ctrl/Command键
      const isCtrlPressed = e.ctrlKey || e.metaKey;

      if (isCtrlPressed) {
        // Ctrl+单击：下载
        const fileName = newLink.dataset.filename;
        downloadFile(fileUrl, fileName);
      } else {
        // 普通单击：预览
        const fileName = newLink.dataset.filename;

        try {
          const response = await fetch(fileUrl);
          if (!response.ok) throw new Error("文件不存在或无法访问");
          const content = await response.text();

          // 存储当前预览文件信息，供下载按钮使用
          currentFileInfo = {
            url: fileUrl,
            name: fileName,
          };

          // 显示预览框
          document.getElementById("previewFileName").textContent = fileName;
          document.getElementById("previewContent").textContent = content;
          document.getElementById("cfgPreviewModal").style.display = "block";
        } catch (error) {
          console.error("预览失败:", error);
          alert("无法预览文件：" + error.message);
        }
      }

      // 恢复href属性，以便后续可能的操作
      newLink.href = fileUrl;
    });
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
