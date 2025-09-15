// 等待DOM加载完成后执行（避免元素未渲染导致的监听失败）
document.addEventListener('DOMContentLoaded', function() {
    // 存储当前预览的文件信息
    let currentFileInfo = null;

    // 1. 设备判断函数：区分安卓手机、iOS手机
    // 判断是否为安卓手机（排除平板）
    function isAndroidMobile() {
        const userAgent = navigator.userAgent.toLowerCase();
        return /android/.test(userAgent) && /mobile/.test(userAgent);
    }

    // 判断是否为iOS手机（iPhone/iPod，排除iPad）
    function isIOSMobile() {
        const userAgent = navigator.userAgent.toLowerCase();
        return /iphone|ipod/.test(userAgent) && !/ipad/.test(userAgent);
    }

    // 2. 监听所有.file-link链接的点击事件
    document.querySelectorAll('.file-link').forEach(link => {
        link.addEventListener('click', async (e) => {
            const isCtrlPressed = e.ctrlKey || e.metaKey;
            // 统一判断：是否为移动端（安卓+iOS）
            const isMobile = isAndroidMobile() || isIOSMobile();

            // 移动端逻辑：无论是否按Ctrl，仅打开预览（不直接下载）
            if (isMobile) {
                e.preventDefault();
                const fileUrl = link.href;
                const fileName = link.dataset.filename;

                try {
                    // 强制UTF-8编码解析，解决移动端文件乱码
                    const response = await fetch(fileUrl, {
                        headers: { 'Accept': 'text/plain; charset=utf-8' }
                    });
                    if (!response.ok) throw new Error('文件不存在或无法访问');

                    const content = await response.text();
                    // 存储当前文件信息（供下载按钮使用）
                    currentFileInfo = { url: fileUrl, name: fileName };

                    // 显示预览模态框
                    document.getElementById('previewFileName').textContent = fileName;
                    document.getElementById('previewContent').textContent = content;
                    document.getElementById('cfgPreviewModal').style.display = 'block';
                } catch (error) {
                    console.error('预览失败:', error);
                    alert('无法预览文件：' + error.message);
                }
            } 
            // PC端逻辑：保持原有行为（Ctrl+单击下载，普通单击预览）
            else {
                if (isCtrlPressed) {
                    e.preventDefault();
                    const fileUrl = link.href;
                    const fileName = link.dataset.filename;
                    downloadFile(fileUrl, fileName);
                } else {
                    e.preventDefault();
                    const fileUrl = link.href;
                    const fileName = link.dataset.filename;

                    try {
                        const response = await fetch(fileUrl);
                        if (!response.ok) throw new Error('文件不存在或无法访问');
                        const content = await response.text();

                        currentFileInfo = { url: fileUrl, name: fileName };
                        document.getElementById('previewFileName').textContent = fileName;
                        document.getElementById('previewContent').textContent = content;
                        document.getElementById('cfgPreviewModal').style.display = 'block';
                    } catch (error) {
                        console.error('预览失败:', error);
                        alert('无法预览文件：' + error.message);
                    }
                }
            }
        });
    });

    // 3. 关闭预览模态框
    function closePreview() {
        document.getElementById('cfgPreviewModal').style.display = 'none';
        currentFileInfo = null; // 清空当前文件信息
    }

    // 4. 下载当前预览的文件
    function downloadCurrentFile() {
        if (currentFileInfo) {
            downloadFile(currentFileInfo.url, currentFileInfo.name);
        }
    }

    // 5. 通用下载函数（按二进制流处理，避免下载乱码）
    function downloadFile(url, filename) {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('下载请求失败');
                return response.blob(); // 二进制blob处理，兼容所有文件类型
            })
            .then(blob => {
                const blobUrl = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = filename;
                // 兼容移动端下载触发（部分浏览器不响应a.click()）
                a.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
                // 释放blob URL，避免内存占用
                setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
            })
            .catch(error => {
                console.error('下载失败:', error);
                alert('下载失败，请重试');
            });
    }

    // 6. 点击模态框外部关闭预览
    document.getElementById('cfgPreviewModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('cfgPreviewModal')) {
            closePreview();
        }
    });

    // 7. 按ESC键关闭预览
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('cfgPreviewModal').style.display === 'block') {
            closePreview();
        }
    });
});

