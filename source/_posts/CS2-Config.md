---
title: CS2指令与配置
categories:
  - - Game
    - CS2
tags:
  - CS2
  - cfg
  - 游戏设置
  - 游戏指令
cover: >-
  https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240913084859.jpg
abbrlink: b445fd38
date: 2025-04-12 00:00:00
updated: 2025-09-22 00:00:00
description:
keywords:
---

# 什么是 CFG

**cfg** 是 config(设置)的简写，可以理解为，拥有了 cfg，你就拥有了在任何地点快速开一把 cs 的能力，不用再为设置而担忧。

## CFG 存放位置

游戏全局 cfg：

- 如果你的游戏存放盘符与 steam 存放盘符不同，就参考前者，若相同，则后者。

**...\SteamLibrary\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg** 或 **...\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg**

- 当然也可以在 steam 程序中寻找，下面是步骤。

1. 打开 steam 库，找到 Counter-Strike 2，右击选择属性

![steam](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/PixPin_2025-04-12_23-12-52.webp)

2. 选择“已安装文件”，点击浏览

![steam2](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/PixPin_2025-04-12_23-14-48.webp)

3. 进入“game”，进入“csgo”，选择“cfg”，该目录下就是存放 cfg 文件的位置

![1](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/PixPin_2025-04-12_23-16-27.webp)

![2](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/PixPin_2025-04-12_23-18-32.webp)

![3](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/PixPin_2025-04-12_23-19-00.webp)

个人用户 cfg：
**...\Steam\userdata\123456789\730\local\cfg**

- 此处的“123456789”为 steamID，可用于添加好友，如果你的 PC 上有多个 steam 账号登录过，那么在 userdata 文件夹中你会看到多个用户文件夹。
- 与游戏全局 cfg 不同，个人用户 cfg 的设置只用于该 steam 账号，并且多了一个 **cs2_video.txt** 配置文件,我倾向于只用这个 video 配置来同步画面设置，而绑定键位等用全局 cfg。

## 如何创建一个 cfg 文件

1. 在桌面新建一个文本文档(也就是 txt)，可以直接在这个 txt 文件中编写配置

![1](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/PixPin_2025-04-12_23-38-17.webp)

2. 编写完成后，在文件资源管理器中找到这个文件，更改后缀为 cfg。

- 如果你无法显示后缀，按照下面操作

![2](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/PixPin_2025-04-12_23-41-02.webp)

## 备份与还原

- 控制台输入 `host_writeconfig backup` 可生成 `backup.cfg` 必要时在控制台输入 `exec backup` 即可恢复原设置
- 控制台输入 `binddefaults`后，将绑定默认按键，输入`key_listboundkeys` 可在控制台输出里查看所有默认按键绑定

## autoexec.cfg (模板)

这是一个只要你游戏启动就会自动加载的 cfg，所以基础设置与按键绑定，可以直接写在这个 cfg 文件里。

- 下面给出一个模板，改写完成后要将文件名改为“autoexec.cfg”，并放在游戏全局 cfg 存放位置，才能生效。

```ini
//键位
bind "w" "+forward" //前进
bind "s" "+back" //后退
bind "a" "+left" //向左
bind "d" "+right" //向右
bind "mouse1" "+attack" //左键攻击
bind "mouse2" "+attack2" //右键特殊攻击
bind "e" "+use" //使用
bind "f" "+lookatweapon" //检视
bind "space" "+jump"  //跳跃
bind "ctrl" "+duck"  //蹲下
bind "tab" "+showscores" //打开计分板
bind "g" "drop"   //丢弃装备
bind "m" "teammenu" //选择队伍
bind "shift" "+sprint" //静步
bind "b" "buymenu" //购买菜单
bind "z" "slot6" //雷
bind "x" "slot7" //闪
bind "c" "slot8" //烟
bind "6" "slot9" //诱饵弹
bind "v" "slot10" //火
bind "y" "+spray_menu" //打开涂鸦菜单
bind "i" "messagemode2"//团队聊天框
bind "u" "messagemode"//全局聊天框
bind "mouse4" "+voicerecord"//打开麦克风
bind "mouse5" "player_ping"//玩家示意标志
bind "mwheeldown" "+jump" //滚轮下跳
bind "mwheelup" "+jump"//滚轮上跳
bind "`" "toggleconsole"//打开控制台
bind "t" "switchhands"//切换左右手持枪
bind "h" "toggleradarscale" //切换小地图缩放
bind "ralt" "radio2;slot12" //无线电与X光

//准星
cl_crosshair_drawoutline "0" // 禁用十字准星的轮廓线
cl_crosshair_dynamic_maxdist_splitratio "1" // 动态十字准星的最大分离距离比例
cl_crosshair_dynamic_splitalpha_innermod "0" // 动态十字准星内部分离部分的透明度
cl_crosshair_dynamic_splitalpha_outermod "1" // 动态十字准星外部分离部分的透明度
cl_crosshair_dynamic_splitdist "3" // 动态十字准星的分离距离
cl_crosshair_friendly_warning "0" // 禁用对友军的十字准星警告
cl_crosshair_outlinethickness "1" // 十字准星轮廓线的厚度
cl_crosshair_sniper_show_normal_inaccuracy "0" // 禁用狙击枪十字准星显示正常不准确度
cl_crosshair_t "0" // 禁用T形十字准星
cl_crosshairalpha "255" // 十字准星的透明度（255为完全不透明）
cl_crosshaircolor 5 // 设置十字准星颜色为自定义（5表示自定义颜色）
cl_crosshaircolor_b "255" // 自定义十字准星的蓝色分量（255为最大）
cl_crosshaircolor_g "255" // 自定义十字准星的绿色分量（255为最大）
cl_crosshaircolor_r "0" // 自定义十字准星的红色分量（0为最小）
cl_crosshairdot "0" // 禁用十字准星中心点
cl_crosshairgap "-3.644676" // 设置十字准星的间隙（负值表示向内收缩）
cl_crosshairgap_useweaponvalue "0" // 禁用根据武器值调整十字准星间隙
cl_crosshairsize "0.901125" // 设置十字准星的大小
cl_crosshairstyle "4" // 设置十字准星样式为经典静态（4表示经典静态）
cl_crosshairthickness "0.961664" // 设置十字准星的厚度
cl_crosshairusealpha "1" // 启用十字准星的透明度设置

//狙击枪瞄准线宽度
cl_crosshair_sniper_width "2"

//鼠标灵敏度
sensitivity 0.50

//持枪视角
viewmodel_fov 68 // 设置第一人称视角的视野范围（FOV），值越大，视野越广
Viewmodel_offset_x 2.5 // 调整武器模型在水平方向（X轴）上的偏移，正值向右，负值向左
Viewmodel_offset_y 0 // 调整武器模型在垂直方向（Y轴）上的偏移，正值向上，负值向下
Viewmodel_offset_z -1.5 // 调整武器模型在深度方向（Z轴）上的偏移，正值向前，负值向后
viewmodel_presetpos 2 // 使用预设的武器模型位置（2表示经典位置）

//雷达
cl_radar_always_centered "0" // 禁用雷达始终以玩家为中心，雷达会显示地图的完整区域
cl_radar_scale "0.37" // 设置雷达的缩放比例，值越小，雷达显示的范围越大
cl_hud_radar_scale "1" // 设置HUD上雷达的缩放比例，1为默认大小
cl_teammate_colors_show 2 // 设置队友颜色显示模式，2表示显示队友的轮廓颜色
```

## cs2_video.txt (模板)

同步画面设置

- 给出模板

```ini
"video.cfg"
{
	"Version"		"16"  // 配置文件版本号
	"VendorID"		"4318"  // 显卡厂商识别码，此处为NVIDIA
	"DeviceID"		"10464"  // 显卡设备识别码，此处为RTX 4060
	"setting.cpu_level"		"3" // CPU 性能等级（0-3，3 为最高）
	"setting.gpu_mem_level"		"3" // GPU 显存性能等级（0-3，3 为最高）
	"setting.gpu_level"		"3" // GPU 性能等级（0-3，3 为最高）
	"setting.knowndevice"		"0" // 是否识别为已知设备（0 为否，1 为是）
	"setting.monitor_index"		"0" // 显示器索引（0 为主显示器）
	"setting.defaultres"		"1280" // 分辨率宽度
	"setting.defaultresheight"		"960" // 分辨率高度
	"setting.aspectratiomode"		"0" // 宽高比模式（0 为自动，1 为 4:3，2 为 16:9）
	"setting.refreshrate_numerator"		"0" // 刷新率分子（0 表示使用默认值）
	"setting.refreshrate_denominator"		"0" // 刷新率分母（0 表示使用默认值）
	"setting.fullscreen"		"0" // 是否启用全屏模式（0 为否，1 为是）
	"setting.coop_fullscreen"		"1" // 合作模式是否启用全屏（1 为是）
	"setting.nowindowborder"		"1" // 是否启用无边框窗口模式（1 为是）
	"setting.fullscreen_min_on_focus_loss"		"0" // 失去焦点时是否最小化全屏窗口（0 为否）
	"setting.high_dpi"		"0" // 是否启用高 DPI 缩放（0 为否）
	"setting.mat_vsync"		"0" // V-sync 是否启用垂直同步（0 为否，1 为是）
	"setting.r_low_latency"		"0" // 是否启用低延迟模式（1 为是）
	"AutoConfig"		"2" // 自动配置等级（2 为自定义配置）
	"setting.msaa_samples"		"2" // 多重采样抗锯齿（MSAA）采样数（2 为 2x MSAA）
	"setting.r_csgo_cmaa_enable"		"1" // 是否启用 CMAA 抗锯齿（0 为否）
	"setting.videocfg_shadow_quality"		"3" // 全局阴影效果（0 为低，1 为中，2 为高，3 为非常高）
	"setting.videocfg_dynamic_shadows"		"1" // 动态阴影的启用（1 为是）
	"setting.videocfg_texture_detail"		"1" // 模型/贴图细节（0 为低，1 为中，2 为高）
	"setting.r_texturefilteringquality"		"3" // 贴图过滤模式（0-5，双线性、三线性、异项2X、4X、8X、16X）
	"setting.shaderquality"		"0" // 光影细节（0 为低，1 为高）
	"setting.videocfg_particle_detail"		"0" // 粒子细节（0 为低，1 为中，2 为高，3 为非常高）
	"setting.videocfg_ao_detail"		"0" // 环境光遮蔽（AO）细节（0 为禁用，2 为中，3 为高）
	"setting.videocfg_hdr_detail"		"3" // 高动态范围 （-1为品质，3为性能）
	"setting.videocfg_fsr_detail"		"0" // 超级分辨率FSR（0 为禁用，1、2、3、4分别为超高品质、品质、均衡、性能）
}
```

# 设置启动项

- 启动项设置位置：在 steam 库中选择 CS2 属性，选择“通用”，在下方黑框内填写。

![qidong](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/PixPin_2025-04-13_00-11-22.webp)

- 下面使一些常用启动项，需要注意的是，每一条指令之间要有一个空格。

```ini
-novid  //关闭过场动画,CS2中已失效
-high  //提高CSGO程序优先级，有可能负优化
-nojoy //关闭手柄相关，降低内存占用
-perfectworld  //直接进入国服
-worldwide  //直接进入国际服
-w 1920 -h 1080  //设置分辨率1920x1080
-noborder //无边框窗口化
+exec auto.cfg  //加载auto.cfg
+fps_max 300  //限制fps最大300
-allow_third_party_software  //允许OBS等第三方软件
-noreflex //取消游戏内的reflex功能，可以在NVIDIA控制面板中开启
```

# 控制台指令

了解控制台指令功能，可以将其绑定在按键上，并写入 cfg 文件，快速实现功能。

- 下面给出亿些指令

```ini
sv_cheats 1 // 开启作弊模式，允许使用作弊命令
bot_kick // 踢出所有机器人
mp_buy_anywhere 1 // 允许在任意位置购买装备
mp_freezetime 0 // 设置赛前准备时间为0秒
mp_maxmoney 99999 // 设置最大金钱数为99999
mp_startmoney 99999 // 设置起始金钱数为99999
mp_buytime 99999 // 设置购买时间为99999秒
mp_ignore_round_win_conditions 1 // 回合永不结束
mp_respawn_on_death_ct 1 // CT阵营无限复活
mp_respawn_on_death_t 1 // T阵营无限复活
mp_friendlyfire 1 // 开启队友伤害
ammo_grenade_limit_total 6 // 设置手榴弹最大可携带数为6
mp_spectators_max 9 // 设置游戏观察者最大数为9
mp_autokick 0 // 禁用自动踢出服务器功能
mp_restartgame 1 // 在1秒后重启回合
sv_grenade_trajectory_prac_pipreview 1 // 启用手榴弹轨迹的预览
sv_grenade_trajectory_prac_trailtime 8 // 设置手榴弹轨迹可见时间为8秒
sv_infinite_ammo 2 // 设置无限弹药模式（道具无限），但仍需换弹夹
sv_showimpacts 1 // 开启弹痕显示

exec autoexec.cfg // 执行 autoexec.cfg 配置文件，加载自定义设置
key_listboundkeys // 列出所有已绑定的按键及其对应的命令
toggle cl_teamid_overhead_mode 1 3 // 切换队友头顶标识模式（1 为简单标识，3 为详细标识）
toggle cl_draw_only_deathnotices 1 0 // 切换是否仅显示死亡通知（1 为仅显示，0 为显示完整 HUD）
toggle cl_drawhud_force_radar 1 0 // 切换是否强制显示雷达（1 为强制显示，0 为正常显示）

cl_hud_color "11" // 设置 HUD 颜色为粉色
con_enable "1" // 启用控制台功能
fps_max 0 // 设置 FPS 无上限，允许游戏以最高帧率运行
cl_join_advertise "2" // 显示玩家计划加入反恐精英队的信息
cl_use_opens_buy_menu "0" // 禁用在靠近购买区域时按下使用键（E键）自动打开购买菜单的功能
cl_dm_buyrandomweapons 0 // 在死亡竞技模式中禁用自动购买随机武器
gameinstructor_enable "0" // 禁用游戏指导功能
cl_autohelp "false" // 禁用自动帮助提示
mm_dedicated_search_maxping "70" // 优先选择延迟在 70 毫秒以内的服务器
func_break_max_pieces 0 // 游戏会根据物体的属性生成默认数量的碎片
r_drawtracers_firstperson 1 // 开启第一人称视角中的子弹轨迹显示
r_fullscreen_gamma 3.0 // 调整游戏画面伽马值为 3.0
cl_teamid_overhead_mode 3 // 始终显示队友名称与装备信息
echo AutoConfig Enabled! // 在控制台打印 "AutoConfig Enabled!" 提示信息

mp_damage_headshot_only 1 // 仅爆头才能造成伤害，其他部位攻击无效
ent_create chicken // 在游戏中生成一只鸡（娱乐功能）
custom_bot_difficulty 5 // 设置自定义 BOT 难度为最高（5 为最高难度）
mp_plant_c4_anywhere 1 // 允许在任何位置安放 C4 炸弹
mp_c4timer 40 // 设置 C4 炸弹的倒计时为 40 秒
sv_regeneration_force_on 1 // 开启生命值自动回复功能
cl_showpos 1 // 在屏幕上显示玩家当前的位置、速度和角度信息
mp_weapons_glow_on_ground 1 // 开启地面武器的高亮显示功能
```

# 如何查找及时映射的 cfg 代码参数

> 如果我们使用 cfg 来配置准星，是需要知道具体参数的，而 CS 提供的准星代码需要进游戏中导入，为了一键式配置，可参考以下方法，找到喜欢的准星导入后，在文件中找到准星具体参数复制。

- 找到如下路径 **...\Steam\userdata\123456789\730\local\cfg** ,找到如下文件打开。
  ![](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/20250420121101.png)
- 这里的参数就是准星参数
  ![](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/20250420121153.png)
  > 查看所有刚刚更改的按键绑定，应对不知键位名称的情况。
- 下面这个文件里就是所有的按键绑定
  ![](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/20250721newstart/PixPin_2025-07-25_03-18-22.png)

  > 游戏的功能性设置，所对应的 cfg 代码参数，也有对应文件。以 chatwheel 轮盘配置为例说明。

- 首先打开下面这个文件
  ![](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/20250721newstart/PixPin_2025-07-25_03-20-46.png)
- 下面的就是快捷轮盘对应槽位的关键词配置
  ![](https://cdn.jsdelivr.net/gh/RolinShmily/Images@main/20250721newstart/PixPin_2025-07-25_03-23-37.png)

# 自用配置分享

> 历史版本详见仓库：[CS2_CFG_SrP by_RoL1n](https://github.com/RolinShmily/rolinshmily.github.io/releases),下面的按钮、预览和网盘都是最新版。

<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>
<button id="downloadBtn1" onclick="packAndDownload()" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
  <span>打包下载全部CFG文件</span>
  <div id="loader1" style="display: none; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: white; animation: spin 1s ease-in-out infinite;"></div>
</button>
<div id="statusMessage1" style="margin-top: 8px; color: #666; font-size: 14px; height: 20px;"></div>
<script src="/js/CS2_download_zip_button_self.js"></script>

点击：[云盘存储地址](https://openlist.srprolin.top/)，可以打包下载 cfgs 文件夹。

- 下载可能会有延迟，请耐心等待，并且请注意浏览器拦截下载。
- 下载完成后会得到一个压缩包`Allcfgs.zip`，直接放进 cfg 文件夹，并右击选择“解压到此文件夹“即可。

## 启动项

```ini
-allow_third_party_software -high -noreflex -noborder -worldwide
```

## cs2_video.txt

- `视频配置文件`：<a href="./video_config/cs2_video.txt" class="file-link" data-filename="cs2_video.txt">cs2_video.txt</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 集合了“高级视频选项”、“分辨率”、“显示模式”

## autoexec.cfg

- `自启动Config`：<a href="./cfgs/autoexec.cfg" class="file-link" data-filename="autoexec.cfg">autoexec.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 注意查看控制台导航信息。

- 请注意`zeus.cfg`是被默认启动的，他影响了`1`、`2`、`3`、`4`、`5`、`q` 键的功能，请不要修改默认的绑定对。

|          功能          |    快捷键     |     控制台别名      |
| :--------------------: | :-----------: | :-----------------: |
|          前进          |       W       |          -          |
|          后退          |       S       |          -          |
|          向左          |       A       |          -          |
|          向右          |       D       |          -          |
|        普通攻击        |   鼠标左键    |          -          |
|        特殊攻击        |   鼠标右键    |          -          |
|          使用          |       E       |          -          |
|        装填弹药        |       R       |          -          |
|          检视          |       F       |          -          |
|          跳跃          | 空格/滚轮上下 |          -          |
|          蹲下          |     Ctrl      |          -          |
|       显示计分板       |      TAB      |          -          |
|        丢弃物品        |       G       |          -          |
|        选择队伍        |       M       |          -          |
|          静步          |     Shift     |          -          |
|        购买菜单        |       B       |          -          |
|         主武器         |       1       |          -          |
|         副武器         |       2       |          -          |
|          匕首          |       3       |          -          |
|         电击枪         |       4       |          -          |
|           C4           |       5       |          -          |
|           雷           |       Z       |          -          |
|           火           |       V       |          -          |
|           闪           |       X       |          -          |
|           烟           |       C       |          -          |
|         诱饵弹         |       6       |          -          |
|     切换为最近武器     |       Q       |          -          |
|          喷漆          |       Y       |          -          |
|        团队聊天        |       U       |          -          |
|        全体聊天        |       I       |          -          |
|          语音          |    后侧键     |          -          |
|      快捷聊天轮盘      |      Alt      |          -          |
|          标点          |    前侧键     |          -          |
|         控制台         |       `       |          -          |
|       切换左右手       |       T       |          -          |
|        雷达缩放        |       H       |          -          |
|      队友头顶标识      |       N       |          -          |
|   无线电菜单、医疗针   |       ‘       |          -          |
|  仅显示准星与击杀信息  |       -       |          -          |
|     显示/关闭雷达      |       =       |          -          |
|        投票同意        |      F1       |          -          |
|        投票拒绝        |      F2       |          -          |
|    购买手枪第五槽位    |      F3       |          -          |
|    购买步枪第二槽位    |      F4       |          -          |
|        购买手雷        |      F5       |          -          |
|        购买闪光        |      F6       |          -          |
|        购买烟雾        |      F7       |          -          |
|       购买燃烧弹       |      F8       |          -          |
|        购买半甲        |      F9       |          -          |
|        购买全甲        |      F10      |          -          |
|        购买钳子        |      F11      |          -          |
|      出售所有装备      |    退格键     |          -          |
|       总音量 30%       |    Delete     |          -          |
|     重启 autoexec      |       O       |    exec autoexec    |
|      匕首模型更换      |       J       |     exec knife      |
|        跑图训练        |       P       |    exec practice    |
|   准星、持枪视角预设   |       [       | exec crosshair_view |
|       demo 预设        |       ]       |   exec demo_hlae    |
|        平台发刀        |       K       |      say !drop      |
|     5E 平台报伤害      |      \        |       say .hp       |
|      默认左手持枪      |       -       |      lefthand       |
| 关闭狙击开枪后自动开镜 |       -       |      debounce       |
|     禁用卸下消音器     |       -       |      silencer       |
|      显示对局头像      |       -       |       avatars       |
|      显示对局人数      |       -       |       numbers       |
|       关闭曳光弹       |       -       |       tracer        |
|    启用快捷轮盘标点    |       -       |        ping         |
|     强制方形小地图     |       -       |      squareon       |
|     POV 圆形小地图     |       -       |      squareoff      |
|    计分板圆形小地图    |       -       |        round        |

## practice.cfg

- `跑图Config`：<a href="./cfgs/practice.cfg" class="file-link" data-filename="practice.cfg">practice.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 注意查看控制台导航信息。
- “p”键启用，出生点预设参考于 **Bad0RANG3** ，项目地址：https://github.com/Bad0RANG3/CS2PraticeCFG ，个人空间：https://space.bilibili.com/482966540

|         功能         |     快捷键      | 控制台别名 |
| :------------------: | :-------------: | :--------: |
|   切换队友头顶显示   | ralt(右 alt 键) |     -      |
|        弹着点        |        ↑        |     -      |
|       杀死 Bot       |        ↓        |     -      |
|   实时预测道具轨迹   |        ←        |     -      |
|       重新开始       |        →        |     -      |
|       补全护甲       |       F1        |     -      |
|       自动回血       |       F2        |     -      |
|     取消摔落伤害     |       F3        |     -      |
|       添加 Bot       |       F4        |     -      |
|     使 Bot 蹲下      |       F5        |     -      |
| 使机器人模仿你的操作 |       F6        |     -      |
|      视角放大镜      |       F7        |     -      |
|       删除 Bot       |       F8        |     -      |
|      Bhop 连跳       |       F12       |     -      |
|   重现最近一次道具   |        L        |     -      |
|     加速时间流逝     |        0        |     -      |
|       放置 Bot       |     后侧键      |     -      |
|       飞行模式       |        N        |     -      |
|    显示速度信息等    |        K        |     -      |
|     标准实战模拟     |        -        |    gkd     |
|     恢复跑图模式     |        -        |     gg     |
|    加载出生点预设    |        -        |   spawn    |

> 注意以下 cfg 都需要存放在游戏全局 cfg 文件夹下的 spawn 文件夹内，比如 **...\SteamLibrary\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg\spawn** 或 **...\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg\spawn** 下。

### spawn.cfg

- `重生点控制台Config`：<a href="./cfgs/spawn/spawn.cfg" class="file-link" data-filename="spawn.cfg">spawn.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

- 在跑图模式控制台输入`spawn`后，其功能是启用该 cfg`exec spawn`。
- 请先选择地图，再输入出生点别名。

|    地图    | 控制台别名 |
| :--------: | :--------: |
|  炼狱小镇  |  inferno   |
|   沙漠 2   |   dust2    |
|  荒漠迷城  |   mirage   |
|  远古遗迹  |  ancient   |
|  核子危机  |    nuke    |
|  殒命大厦  |  vertigo   |
|  阿努比斯  |   anubis   |
|   办公室   |   office   |
|   意大利   |   italy    |
| 列车停放站 |   train    |
| 死亡游乐园 |  overpass  |

|     出生位      | 控制台别名 |
| :-------------: | :--------: |
| 警察 1 号出生点 |    CT1     |
| 警察 2 号出生点 |    CT2     |
| 匪徒 3 号出生点 |     T3     |
| 匪徒 4 号出生点 |     T4     |
|       ...       |    ...     |

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

### train.cfg

- `train重生点Config`：<a href="./cfgs/spawn/train.cfg" class="file-link" data-filename="train.cfg">train.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### overpass.cfg

- `overpass重生点Config`：<a href="./cfgs/spawn/overpass.cfg" class="file-link" data-filename="overpass.cfg">overpass.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

### init_spawns.cfg

- `重生点初始化Config`：<a href="./cfgs/spawn/init_spawns.cfg" class="file-link" data-filename="init_spawns.cfg">init_spawns.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）

---

## demo_hlae.cfg

- `观赛Config`：<a href="./cfgs/demo_hlae.cfg" class="file-link" data-filename="demo_hlae.cfg">demo_hlae.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 集成了一些 HLAE 和 demo 的实用指令的快捷键
- 该 cfg 完整功能需要安装 HLAE 和正确配置 FFmpeg
- 修改自 Purp1e 的 cfg：https://github.com/Purple-CSGO/CSGO-Config-Presets
- 整合了 hale 的动态模糊录制功能，来自 YouTube:https://www.youtube.com/watch?v=4zq27TcpfVg
- "]"键启用，注意查看控制台导航信息。

|            功能            |   快捷键   |     控制台别名     |
| :------------------------: | :--------: | :----------------: |
|        demoUI 开关         | Q/shift+F2 |       demoui       |
|     标记当前时间 tick      |     Y      |         -          |
|     跳转标记时间 tick      |     U      |         -          |
|   镜头摆放模式(ESC 退出)   |     T      |         -          |
|          添加镜头          |  Capslock  |         -          |
|          清空镜头          |   Delete   |         -          |
|          镜头激活          |     I      |         -          |
|          镜头轨迹          |     O      |         -          |
|         demo 暂停          | P/鼠标中键 |         -          |
|      只保留准星和击杀      |     H      |         -          |
|   只显示当前玩家击杀信息   |     J      |         -          |
|       开关 CSGO 语音       |     K      |         -          |
|       开关 CS2 语音        |     '      |         -          |
| 查看当前玩家信息和语音屏蔽 |     L      |         -          |
|        队友头顶标识        |    ralt    |         -          |
|          X 光透视          |     X      |         -          |
|            准星            |     V      |         -          |
|          hud 开关          |     B      |         -          |
|            雷达            |     N      |         -          |
|            静音            |     M      |         -          |
|          快退 5s           |     ,      |         -          |
|          快进 5s           |     .      |         -          |
|         +播放速度          |   前侧键   |         -          |
|         - 播放速度         |   后侧键   |         -          |
|       运镜回退 0.25s       |     [      |         -          |
|       运镜快进 0.25s       |     ]      |         -          |
|      切换击杀信息显示      |     \      |        ass         |
|          广角 POV          |     =      |         -          |
|       开启 HLAE 录制       |     ↑      |         -          |
|       关闭 HLAE 录制       |     ↓      |         -          |
|   设置当前 tick 开始录制   |     F5     |         -          |
|   设置当前 tick 结束录制   |     F6     |         -          |
|     打印 mirv_cmd 信息     |     F7     |         -          |
|     清除 mirv_cmd 指令     |     F8     |         -          |
|  开关 VGUI(Reshade 功能)   |     F9     |         -          |
|      开启动态模糊录制      |     -      |       bluron       |
|      关闭动态模糊录制      |     -      |      bluroff       |
|  关闭 BGM、MVP、无线电等   |     -      |        mute        |
|      解绑运镜模式按键      |     -      |         t          |
|       回合开始无灰色       |     -      |        post        |
|    使运镜开始为当前视角    |     -      |        pos         |
|   使运镜开始为当前 tick    |     -      |        time        |
|    运镜模式的 FOV 修改     |     -      | f10、f15、... f100 |
|        显示对局头像        |     -      |      avatars       |
|        显示对局人数        |     -      |      numbers       |
|          显示小字          |     -      |        show        |
|          屏蔽小字          |     -      |       noshow       |

## knife.cfg

- `匕首模型更换Config`：<a href="./cfgs/knife.cfg" class="file-link" data-filename="knife.cfg">knife.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 注意控制台导航信息
- “j”键启用，命令完成后有控制台提示

|  刀具模型  | 控制台别名 |
| :--------: | :--------: |
|    刺刀    |    500     |
|  海豹短刀  |    503     |
|   折叠刀   |    505     |
|   穿肠刀   |    506     |
|   爪子刀   |    507     |
|  M9 刺刀   |    508     |
| 猎杀者匕首 |    509     |
|    弯刀    |    512     |
|  鲍伊猎刀  |    514     |
|   蝴蝶刀   |    515     |
|  暗影双匕  |    516     |
|  系绳匕首  |    517     |
|  求生匕首  |    518     |
|    熊刀    |    519     |
|    折刀    |    520     |
| 流浪者匕首 |    521     |
|    短剑    |    522     |
|  锯齿爪刀  |    523     |
|  默认匕首  |    524     |
|  骷髅匕首  |    525     |
|   尼泊尔   |    526     |

## zeus.cfg

- `电击枪即用即切Config`：<a href="./cfgs/zeus.cfg" class="file-link" data-filename="zeus.cfg">zeus.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 电击枪快捷切换
- 在 autoexec.cfg 中自动启用，必须绑定“4”键电击枪，在电击枪左键使用之后自动切出主武器/副武器，手持电击枪右键时则不使用，直接切出主武器/副武器。
- Tips: 电击枪充电完成是有声音的，请注意使用后利用该声音做一定战术调整，或者直接将其丢弃，避免在关键时刻暴露位置。

## crosshair_view.cfg

- `准星与持枪视角库Config`：<a href="./cfgs/crosshair_view.cfg" class="file-link" data-filename="crosshair_view.cfg">crosshair_view.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 准星与持枪视角的存储与即时更换
- 若更换准星必须搭配 crosshair_library 准星代码库使用
- "["键启用，注意查看控制台导航信息。

|           功能           | 快捷键 | 控制台别名 |
| :----------------------: | :----: | :--------: |
|      开关 T 型准星       |   ←    |     -      |
|      开关准星中心点      |   →    |     -      |
|      关闭投掷物准星      |   ↑    |  nothrow   |
|      开启投掷物准星      |   ↓    |   throw    |
|    更改准星颜色为...     |  ...   |    ...     |
|           红色           |   -    |    red     |
|           橙色           |   -    |   orange   |
|           黄色           |   -    |   yellow   |
|           绿色           |   -    |   green    |
|           青色           |   -    |    cyan    |
|           蓝色           |   -    |    blue    |
|           紫色           |   -    |   purple   |
|           黑色           |   -    |   black    |
|           白色           |   -    |   white    |
|           粉色           |   -    |    pink    |
|           棕色           |   -    |   brown    |
|           灰色           |   -    |    gray    |
| 投掷时保持玩家自定义准星 |   -    |    keep    |
| 输入...切换准星/持枪视角 |  ...   |    ...     |
|         0 号准星         |   -    |    c00     |
|         1 号准星         |   -    |    c01     |
|         2 号准星         |   -    |    c02     |
|         3 号准星         |   -    |    c03     |
|         4 号准星         |   -    |    c04     |
|         5 号准星         |   -    |    c05     |
|         0 号视角         |   -    |    v00     |
|         1 号视角         |   -    |    v01     |
|         2 号视角         |   -    |    v02     |
|         3 号视角         |   -    |    v03     |
|         4 号视角         |   -    |    v04     |
|         5 号视角         |   -    |    v05     |

- Tips: 如果你有能力，可以自己根据代码魔改，将源代码绑定按键，实现一键切换准星/持枪视角。
  > 由于 Valve 的脚本指令单条有长度限制，而准星参数的设置已经超过该限制，故直接用 cfg 文件来保存准星预设。
  > 注意以下 cfg 都需要存放在游戏全局 cfg 文件夹下的 crosshair_library 文件夹内，比如 **...\SteamLibrary\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg\crosshair_library** 或 **...\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg\crosshair_library** 下。

### crosshair_library

> 这里仅给出库中的准星代码、源码以及持枪视角源码，后续将会以 GIF 格式在此展示准星与持枪视角。

- `01号准星Config`：<a href="./cfgs/crosshair_library/01.cfg" class="file-link" data-filename="01.cfg">01.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 准星代码: `CSGO-H9mcs-8GDFZ-MfxkQ-2Kx7O-pTLoD`

- `02号准星Config`：<a href="./cfgs/crosshair_library/02.cfg" class="file-link" data-filename="02.cfg">02.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 准星代码: `CSGO-oK2db-LY2wT-seq73-YTnJB-3bOUD`

- `03号准星Config`：<a href="./cfgs/crosshair_library/03.cfg" class="file-link" data-filename="03.cfg">03.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 准星代码: `CSGO-9StUb-FrcBs-HhYjr-mzVip-YScNE`

- `04号准星Config`：<a href="./cfgs/crosshair_library/04.cfg" class="file-link" data-filename="04.cfg">04.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 准星代码: `CSGO-pqEaF-5AKXB-DCdnh-vpxAJ-94GSQ`

- `05号准星Config`：<a href="./cfgs/crosshair_library/05.cfg" class="file-link" data-filename="05.cfg">05.cfg</a>
- - 单击`(Click)`查看文件，`Ctrl+单击(click)`下载文件。（请注意浏览器拦截下载）
- 准星代码: `CSGO-Q4APO-buiyc-i9V7H-7sxJN-Zy8rN`

---

# lulu's cfg

- 修改了 autoexec 的默认按键绑定与 crosshair_view 的内容
- 点击`云盘存储地址`查看并下载所更改文件
- 可以先下载`全部自用配置cfg`,再下载此部分,将修改后的内容覆盖原来的文件.
  点击：[云盘存储地址](https://openlist.srprolin.top/)，对应名称文件夹里是修改过的相关文件。

<button id="downloadBtn2" onclick="packAndDownloadLulu()" style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
  <span>打包并下载全部CFG文件(此链接为全部cfg)</span>
  <div id="loader2" style="display: none; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: white; animation: spin 1s ease-in-out infinite;"></div>
</button>
<div id="statusMessage2" style="margin-top: 8px; color: #666; font-size: 14px; height: 20px;"></div>
<script src="/js/CS2_download_zip_button_lulu.js"></script>

- 下载可能会有延迟，请耐心等待，并且请注意浏览器拦截下载。
- 下载完成后会得到一个`AllcfgsForLulu`压缩包，直接放进 cfg 文件夹，并右击选择“解压到此文件夹“即可。

- 点击查看<a href="./lulu/autoexec.cfg" class="file-link" data-filename="autoexec.cfg">autoexec_ForLulu</a>
- 点击查看<a href="./lulu/crosshair_view.cfg" class="file-link" data-filename="crosshair_view.cfg">crosshair_view_ForLulu</a>

# echo's cfg

- 修改了 autoexec 的默认按键绑定
- 点击`云盘存储地址`查看并下载所更改文件
- 可以先下载`全部自用配置cfg`,再下载此部分,将修改后的内容覆盖原来的文件.
  点击：[云盘存储地址](https://openlist.srprolin.top/)，对应名称文件夹里是修改过的相关文件。

<button id="downloadBtn3" onclick="packAndDownloadEcho()" style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
  <span>打包并下载全部CFG文件(此链接为全部cfg)</span>
  <div id="loader3" style="display: none; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: white; animation: spin 1s ease-in-out infinite;"></div>
</button>
<div id="statusMessage3" style="margin-top: 8px; color: #666; font-size: 14px; height: 20px;"></div>
<script src="/js/CS2_download_zip_button_echo.js"></script>
- 下载可能会有延迟，请耐心等待，并且请注意浏览器拦截下载。
- 下载完成后会得到一个`AllcfgsForEcho`压缩包，直接放进 cfg 文件夹，并右击选择“解压到此文件夹“即可。

- 点击查看<a href="./echo/autoexec.cfg" class="file-link" data-filename="autoexec.cfg">autoexec_ForEcho</a>

<link rel="stylesheet" href="/css/CS2_download_preview.css">
<!-- 预览模态框（默认隐藏） -->
<div class="cfg-preview-modal" id="cfgPreviewModal">
  <div class="cfg-preview-content">
    <button class="cfg-close-btn" onclick="closePreview()">×</button>
    <h3 id="previewFileName"></h3>
    <pre class="cfg-file-content" id="previewContent"></pre>
    <button class="cfg-download-btn" onclick="downloadCurrentFile()">下载此文件</button>
  </div>
</div>
<script src="/js/CS2_mono_file_preview_and_download_table.js"></script>
