### vertigo.cfg

- `vertigo重生点Config`：<a href="./cfgs/spawn/vertigo.cfg" class="file-link" data-filename="vertigo.cfg">vertigo.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### office.cfg

- `office重生点Config`：<a href="./cfgs/spawn/office.cfg" class="file-link" data-filename="office.cfg">office.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### nuke.cfg

- `nuke重生点Config`：<a href="./cfgs/spawn/nuke.cfg" class="file-link" data-filename="nuke.cfg">nuke.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### mirage.cfg

- `mirage重生点Config`：<a href="./cfgs/spawn/mirage.cfg" class="file-link" data-filename="mirage.cfg">mirage.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### italy.cfg

- `italy重生点Config`：<a href="./cfgs/spawn/italy.cfg" class="file-link" data-filename="italy.cfg">italy.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### inferno.cfg

- `inferno重生点Config`：<a href="./cfgs/spawn/inferno.cfg" class="file-link" data-filename="inferno.cfg">inferno.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### dust2.cfg

- `dust2重生点Config`：<a href="./cfgs/spawn/dust2.cfg" class="file-link" data-filename="dust2.cfg">dust2.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### anubis.cfg

- `anubis重生点Config`：<a href="./cfgs/spawn/anubis.cfg" class="file-link" data-filename="anubis.cfg">anubis.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### ancient.cfg

- `ancient重生点Config`：<a href="./cfgs/spawn/ancient.cfg" class="file-link" data-filename="ancient.cfg">ancient.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### init_spawns.cfg

- `重生点初始化Config`：<a href="./cfgs/spawn/init_spawns.cfg" class="file-link" data-filename="init_spawns.cfg">init_spawns.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

<style>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.cfg-preview-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  padding: 2rem;
  box-sizing: border-box;
}
.cfg-preview-content {
  background: white;
  width: 100%;
  max-width: 800px;
  height: 80vh;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 8px;
  overflow: auto;
  position: relative;
}
.cfg-close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff4444;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}
.cfg-download-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.cfg-file-content {
  white-space: pre; /* 保留文本中的空格和换行 */
  font-family: monospace; /* 使用等宽字体，适合代码/配置文件 */
  color: #333;
}
/* 深色主题样式 - 基于data-theme="dark" */
html[data-theme="dark"] .cfg-preview-content {
  background: #1e1e1e; /* 深色背景 */
}
html[data-theme="dark"] .cfg-file-content {
  color: #e0e0e0; /* 浅色文本 */
}
html[data-theme="dark"] .cfg-close-btn {
  background: #d12525; /* 深色主题下的关闭按钮颜色 */
}
html[data-theme="dark"] .cfg-download-btn {
  background: #0b5ed7; /* 深色主题下的下载按钮颜色 */
}

</style>

<div class="cfg-preview-modal" id="cfgPreviewModal">
  <div class="cfg-preview-content">
    <button class="cfg-close-btn" onclick="closePreview()">×</button>
    <h3 id="previewFileName"></h3>
    <pre class="cfg-file-content" id="previewContent"></pre>
    <button class="cfg-download-btn" onclick="downloadCurrentFile()">下载此文件</button>
  </div>
</div>

<script>
// 存储当前预览的文件信息
let currentFileInfo = null;

// 监听所有CFG链接的点击事件
document.querySelectorAll(".file-link").forEach((link) => {
  link.addEventListener("click", async (e) => {
    // 判断是否按下Ctrl/Command键（用于下载）
    const isCtrlPressed = e.ctrlKey || e.metaKey;

    if (isCtrlPressed) {
      // Ctrl+单击：直接下载
      e.preventDefault();
      const fileUrl = link.href;
      const fileName = link.dataset.filename;
      downloadFile(fileUrl, fileName);
    } else {
      // 普通单击：预览文件内容
      e.preventDefault();
      const fileUrl = link.href;
      const fileName = link.dataset.filename;

      try {
        // 获取文件内容
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error("文件不存在或无法访问");
        const content = await response.text();

        // 存储当前文件信息（用于下载按钮）
        currentFileInfo = { url: fileUrl, name: fileName };

        // 显示预览模态框
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
</script>
