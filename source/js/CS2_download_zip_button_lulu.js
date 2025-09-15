// 首先引入 JSZip 库（使用 CDN 地址）
importScripts("https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js");
async function packAndDownloadLulu() {
  const btn = document.getElementById("downloadBtn2");
  const loader = document.getElementById("loader2");
  const statusMsg = document.getElementById("statusMessage2");

  // 1. 准备阶段 - 更新UI状态
  btn.disabled = true;
  btn.style.background = "#6c757d";
  loader.style.display = "block";
  statusMsg.textContent = "正在准备文件...";

  // 2. 定义文件列表
  const filesToPack = [
    { name: "autoexec.cfg", url: "./lulu/autoexec.cfg" },
    { name: "crosshair_view.cfg", url: "./lulu/crosshair_view.cfg" },
    { name: "demo_hlae.cfg", url: "./cfgs/demo_hlae.cfg" },
    { name: "knife.cfg", url: "./cfgs/knife.cfg" },
    { name: "lastinv.cfg", url: "./cfgs/lastinv.cfg" },
    { name: "train.cfg", url: "./cfgs/train.cfg" },
    { name: "zeus.cfg", url: "./cfgs/zeus.cfg" },
    { name: "spawn/ancient.cfg", url: "./cfgs/spawn/ancient.cfg" },
    { name: "spawn/anubis.cfg", url: "./cfgs/spawn/anubis.cfg" },
    { name: "spawn/dust2.cfg", url: "./cfgs/spawn/dust2.cfg" },
    { name: "spawn/inferno.cfg", url: "./cfgs/spawn/inferno.cfg" },
    { name: "spawn/init_spawns.cfg", url: "./cfgs/spawn/init_spawns.cfg" },
    { name: "spawn/italy.cfg", url: "./cfgs/spawn/italy.cfg" },
    { name: "spawn/mirage.cfg", url: "./cfgs/spawn/mirage.cfg" },
    { name: "spawn/nuke.cfg", url: "./cfgs/spawn/nuke.cfg" },
    { name: "spawn/office.cfg", url: "./cfgs/spawn/office.cfg" },
    { name: "spawn/spawn.cfg", url: "./cfgs/spawn/spawn.cfg" },
    { name: "spawn/vertigo.cfg", url: "./cfgs/spawn/vertigo.cfg" },
    {
      name: "crosshair_library/01.cfg",
      url: "./cfgs/crosshair_library/01.cfg",
    },
    {
      name: "crosshair_library/02.cfg",
      url: "./cfgs/crosshair_library/02.cfg",
    },
    {
      name: "crosshair_library/03.cfg",
      url: "./cfgs/crosshair_library/03.cfg",
    },
    {
      name: "crosshair_library/04.cfg",
      url: "./cfgs/crosshair_library/04.cfg",
    },
  ];

  // 3. 创建ZIP实例
  const zip = new JSZip();

  try {
    // 4. 循环下载文件并显示进度
    for (let i = 0; i < filesToPack.length; i++) {
      const file = filesToPack[i];
      // 更新进度信息
      statusMsg.textContent = `正在处理文件 ${i + 1}/${filesToPack.length}: ${
        file.name
      }`;

      const response = await fetch(file.url);
      if (!response.ok) {
        throw new Error(`无法获取文件: ${file.name}`);
      }
      const content = await response.text();
      zip.file(file.name, content);
    }

    // 5. 生成ZIP并下载
    statusMsg.textContent = "正在生成压缩文件...";
    zip.generateAsync({ type: "blob" }).then(function (content) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(content);
      a.download = "AllcfgsForLulu.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);

      // 下载完成
      statusMsg.textContent = "下载完成!";
    });
  } catch (error) {
    console.error("打包失败:", error);
    statusMsg.textContent = `错误: ${error.message}`;
    statusMsg.style.color = "#dc3545";
  } finally {
    // 恢复按钮状态
    setTimeout(() => {
      btn.disabled = false;
      btn.style.background = "#28a745";
      loader.style.display = "none";

      // 5秒后清除状态消息
      if (statusMsg.textContent !== "错误: 无法获取文件") {
        setTimeout(() => (statusMsg.textContent = ""), 5000);
      }
    }, 1000);
  }
}
