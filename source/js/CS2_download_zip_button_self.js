async function packAndDownload() {
  const btn = document.getElementById('downloadBtn1');
  const loader = document.getElementById('loader1');
  const statusMsg = document.getElementById('statusMessage1');
  
  // 1. 准备阶段 - 更新UI状态
  btn.disabled = true;
  btn.style.background = '#6c757d';
  loader.style.display = 'block';
  statusMsg.textContent = '正在准备文件...';
  
  // 2. 定义文件列表
  const filesToPack = [
    { name: "autoexec.cfg", url: "./cfgs/autoexec.cfg" },
    { name: "crosshair_view.cfg", url: "./cfgs/crosshair_view.cfg" },
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
    { name: "crosshair_library/01.cfg", url: "./cfgs/crosshair_library/01.cfg" },
    { name: "crosshair_library/02.cfg", url: "./cfgs/crosshair_library/02.cfg" },
    { name: "crosshair_library/03.cfg", url: "./cfgs/crosshair_library/03.cfg" },
    { name: "crosshair_library/04.cfg", url: "./cfgs/crosshair_library/04.cfg" }
  ];

  try {
    // 3. 创建Worker实例
    const worker = new Worker('/js/zip-worker.js'); 

    // 4. 监听Worker消息
    worker.onmessage = (e) => {
      switch (e.data.type) {
        case 'progress':
          // 更新进度信息
          const progress = e.data.data;
          statusMsg.textContent = `正在处理文件 ${progress}/${filesToPack.length}`;
          break;
        case 'complete':
          // 处理生成的ZIP文件
          const a = document.createElement("a");
          a.href = URL.createObjectURL(e.data.data);
          a.download = e.data.zipName || "Allcfgs.zip";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(a.href);
          statusMsg.textContent = '下载完成!';
          worker.terminate(); // 终止Worker
          break;
        case 'error':
          throw new Error(e.data.data);
      }
    };

    // 5. 向Worker发送文件列表
    worker.postMessage({
      files: filesToPack,
      zipName: "Allcfgs.zip"
    });

    // 6. 监听Worker错误
    worker.onerror = (error) => {
      throw new Error(`Worker错误: ${error.message}`);
    };

  } catch (error) {
    console.error("打包失败:", error);
    statusMsg.textContent = `错误: ${error.message}`;
    statusMsg.style.color = '#dc3545';
  } finally {
    // 恢复按钮状态
    setTimeout(() => {
      btn.disabled = false;
      btn.style.background = '#28a745';
      loader.style.display = 'none';
      
      if (statusMsg.textContent !== '错误: 无法获取文件') {
        setTimeout(() => statusMsg.textContent = '', 5000);
      }
    }, 1000);
  }
}