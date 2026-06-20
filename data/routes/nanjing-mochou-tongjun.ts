import { RouteData } from "@/lib/types";

const nanjingMochouTongjun: RouteData = {
  info: {
    slug: "nanjing-mochou-tongjun",
    title: "金陵城南",
    titleAccent: "· 民国记忆 ·",
    subtitle: "莫愁湖 → 手巧馄饨 → 童寯故居 → 瓶子菜馆",
    region: "华东",
    city: "南京",
    badge: "NANJING CITYWALK",
    districts: ["建邺", "水西门", "升州路", "熙南里", "太平南路", "文昌巷"],
    stats: [
      { value: "5.5", unit: "km", label: "全程步行" },
      { value: "7", label: "闯关关卡" },
      { value: "20+", label: "保护建筑" },
      { value: "¥145", label: "人均预算" },
    ],
    heroGradient: "linear-gradient(160deg, #1a2a1a 0%, #2d3a1a 25%, #3a2a1a 60%, #2a1a1a 100%)",
    accentColor: "gold",
    description:
      "从莫愁湖出发，沿水西门、升州路、太平南路一路东行，穿行于老城南的街巷肌理之中，直达民国建筑大师的私宅致敬，回程再入九十九间半的庭院，最后在熙南里的淮扬菜中收尾。",
  },

  overviewStops: [
    { number: "①", name: "莫愁湖公园", distance: "起点" },
    { number: "②", name: "手巧馄饨（莫愁新村）", distance: "步行 8min" },
    { number: "③", name: "水西门遗址广场", distance: "步行 15min · 升州路沿线民国建筑" },
    { number: "④", name: "甘熙故居 · 熙南里", distance: "步行 15min · 升州路→中山南路" },
    { number: "⑤", name: "太平南路民国建筑群", distance: "步行 20min · 建康路→太平南路" },
    { number: "⑥", name: "童寯故居 · 文昌巷", distance: "步行 5min · 拐进文昌巷" },
    { number: "⑦", name: "瓶子菜馆（熙南里店）", distance: "步行 20min · 太平南路→中山南路" },
  ],

  checkpoints: [
    {
      number: 1,
      name: "莫愁湖公园",
      subtitle: "湖光碑影 · 粤军忠魂",
      badge: "省级文保",
      infoItems: [
        { icon: "📍", label: "地址：", value: "建邺区水西门大街132号" },
        { icon: "🕐", label: "游览：", value: "60—90分钟" },
        { icon: "🎫", label: "门票：", value: "免费" },
        { icon: "🏛️", label: "文保：", value: "省级 ×1 + 市级 ×2" },
      ],
      imageFallback: { icon: "🏯", text: "莫愁湖 · 胜棋楼" },
      sections: [
        {
          type: "heritage-table",
          title: "🏛️ 保护建筑",
          table: {
            type: "heritage",
            columns: [
              { key: "name", label: "建筑" },
              { key: "level", label: "级别" },
              { key: "era", label: "年代" },
              { key: "highlight", label: "看点" },
            ],
            rows: [
              {
                name: "胜棋楼",
                level: { text: "市级文保", badge: "city" },
                era: "明/清",
                highlight: "朱徐弈棋传说",
              },
              {
                name: "郁金堂及水院",
                level: { text: "市级文保", badge: "city" },
                era: "清/1932重修",
                highlight: "石瑛重修",
              },
              {
                name: "华严庵",
                level: { text: "区级不可移动", badge: "district" },
                era: "明/清",
                highlight: "1914年陆鸿吉题联",
              },
              {
                name: "粤军阵亡将士墓",
                level: { text: "省级文保", badge: "province" },
                era: "1912",
                highlight: "孙中山题“建国成仁”",
              },
              {
                name: "邹鲁碑亭",
                level: { text: "—", badge: "" },
                era: "1948碑/2005亭",
                highlight: "“文革”中被秘密掩埋",
              },
            ],
          },
        },
        {
          type: "story",
          title: "📖 民国记忆",
          stories: [
            {
              year: "1912",
              text: "粤军北伐凯旋，61位阵亡将士安葬于莫愁湖南岸。孙中山亲题“建国成仁”，黄兴撰碑。这是辛亥革命在南京最沉静的纪念碑。",
            },
            {
              year: "1928",
              text: "12月14日，莫愁湖正式辟为现代城市公园。日军占领期间，湖床淤塞、建筑破损，仅存郁金堂与胜棋楼一隅。",
            },
            {
              year: "1948",
              text: "邹鲁撰碑文刻石。“文革”期间，公园职工将其秘密掩埋于地下，1981年重见天日。",
            },
          ],
        },
        {
          type: "task",
          title: "🏆 打卡任务",
          taskLabel: "📸 任务",
          taskDesc: "在胜棋楼前拍照；寻找华严庵大门上 1914 年的木质楹联并抄录其中一幅。",
        },
      ],
    },
    {
      number: 2,
      name: "手巧馄饨（莫愁新村店）",
      subtitle: "南湖烟火 · 舌尖密码",
      badge: "南湖美食",
      infoItems: [
        { icon: "📍", label: "地址：", value: "建邺区南湖路莫愁新村22号" },
        { icon: "🕐", label: "营业：", value: "06:00—17:00" },
        { icon: "💰", label: "人均：", value: "¥10—15" },
        { icon: "🚶", label: "距上站：", value: "步行约8分钟" },
      ],
      imageFallback: { icon: "🥟", text: "南湖 · 手巧馄饨" },
      sections: [
        {
          type: "story",
          title: "🍜 一碗馄饨里的老南京",
          stories: [
            {
              text: "从莫愁湖出来，沿水西门大街走不到10分钟，拐进南湖路的梧桐树荫，手巧馄饨就在老居民楼下。",
            },
            {
              text: "老南京馄饨讲究**皮薄不破，馅满不腻**。汤要清，辣油要香。莫愁新村这家开了十多年，辣油自家熬制。一碗红汤辣油馄饨 + 一两锅贴，是南湖老街坊的早餐标配。",
            },
            {
              text: "南湖是南京美食密度最高的区域之一，文体路、文体西街几十家小馆子挤在旧居民楼下，从早六点到晚九点，这条街永远热气腾腾。",
            },
          ],
        },
        {
          type: "task",
          title: "🏆 打卡任务",
          taskLabel: "📸 任务",
          taskDesc: "点一碗馄饨 + 一只烧饼，拍照记录，发朋友圈标记“南湖烟火”。",
        },
      ],
    },
    {
      number: 3,
      name: "水西门遗址广场",
      subtitle: "城门旧梦 · 水陆沧桑",
      badge: "遗址公园",
      infoItems: [
        { icon: "📍", label: "地址：", value: "水西门大街与凤台南路交叉口" },
        { icon: "🚶", label: "距上站：", value: "步行约15分钟" },
      ],
      imageFallback: { icon: "🏛️", text: "水西门 · 三山门遗址" },
      sections: [
        {
          type: "heritage-table",
          title: "🏛️ 消逝的“福船型”城门",
          table: {
            type: "timeline",
            columns: [
              { key: "era", label: "时期" },
              { key: "event", label: "事件" },
            ],
            rows: [
              { era: "南唐", event: "初建，名“龙光门”" },
              { era: "明洪武十九年", event: "重建，改“三山门”——登楼可见“三山半落青天外”" },
              { era: "1931—1937", event: "民国政府多次修缮" },
              { era: "1953—1959", event: "陆续拆除，西水关封闭" },
              { era: "近年", event: "瓮城遗址发现，辟为遗址广场" },
            ],
          },
        },
        {
          type: "story",
          title: "📖 水西门故事",
          stories: [
            {
              text: "水西门是南京十三座明城门中**唯一兼具水陆通行功能**的城门。形制如福船，规模仅次于中华门与通济门。李白、苏轼、辛弃疾、陆游都曾在此登赏心亭赋诗——可惜赏心亭在民国时已损毁殆尽，直到2006年才重建。",
            },
            {
              text: "**民国趣事：**水西门地区在民国是南京板鸭核心产区，韩复兴、魏洪兴等老字号发轫于此，鼎盛时鸭行近三十家。“水西门鸭子”至今仍是南京人的心头好。",
            },
          ],
        },
        {
          type: "task",
          title: "🏆 打卡任务",
          taskLabel: "📸 任务",
          taskDesc: "寻找“三山门”铭牌，对照遗址想象当年福船形瓮城的形状，拍一张“古今对照”照片。",
        },
      ],
    },
    {
      number: 4,
      name: "甘熙故居 · 熙南里",
      subtitle: "九十九间半 · 金陵大宅门",
      badge: "全国重点文保",
      infoItems: [
        { icon: "📍", label: "地址：", value: "秦淮区中山南路400号" },
        { icon: "🕐", label: "开放：", value: "09:00—17:30（周一闭馆）" },
        { icon: "🎫", label: "门票：", value: "¥20（故居）/ 街区免费" },
        { icon: "🏛️", label: "级别：", value: "全国重点文物保护单位" },
      ],
      imageFallback: { icon: "🏘️", text: "甘熙故居 · 九十九间半" },
      sections: [
        {
          type: "heritage-table",
          title: "🏛️ 升州路沿线不可移动文物（途经）",
          table: {
            type: "heritage",
            columns: [
              { key: "name", label: "建筑" },
              { key: "address", label: "地址" },
              { key: "feature", label: "特征" },
            ],
            rows: [
              { name: "升州路250-256号", address: "升州路250号", feature: "砖木结构，南北四合院，2层" },
              { name: "升州路348号", address: "升州路348号", feature: "砖混2层，青瓦木质门窗" },
              { name: "升州路146号", address: "大板巷地块", feature: "不可移动文物群之一" },
            ],
          },
        },
        {
          type: "story",
          title: "📖 九十九间半的故事",
          stories: [
            {
              text: "始建清嘉庆年间，甘氏为金陵望族。相传战国秦相甘茂、三国名将甘宁、清代大侠甘凤池均为其直系祖先。甘熙本人是进士出身、金石家、藏书家。",
            },
            {
              text: "建筑群俗称“九十九间半”（实际160余间），中国大中城市中**规模最大、保存最完整的清代民居建筑群**之一。与明孝陵、明城墙并称**南京明清建筑三大景观**。",
            },
            {
              text: "**建筑特色：**“青砖小瓦马头墙，回廊挂落花格窗”——黛瓦粉壁，南北交融，既有江南娟秀又有北方“跑马楼”浑厚。罕见地**坐南朝北**，据风水“商不面南”之说。",
            },
            {
              text: "**戏曲渊源：**甘家素有“戏曲世家”之称，梅兰芳、张学良曾为座上客，严凤英在此学艺居住。",
            },
          ],
        },
        {
          type: "task",
          title: "🏆 打卡任务",
          taskLabel: "📸 任务",
          taskDesc: "进入甘熙故居（避开周一！），找到“津逮楼”和“友恭堂”，在庭院中拍一张马头墙与蓝天的合影。逛一逛熙南里街区的非遗工坊。",
        },
      ],
    },
    {
      number: 5,
      name: "太平南路民国建筑群",
      subtitle: "十里洋场 · 书店旧事",
      badge: "历史街区",
      infoItems: [
        { icon: "🚶", label: "距上站：", value: "步行约20分钟（升州路→建康路→太平南路）" },
        { icon: "🏛️", label: "文保：", value: "省级 ×2 + 区级多座" },
      ],
      imageFallback: { icon: "📚", text: "太平南路 · 古籍书店" },
      sections: [
        {
          type: "heritage-table",
          title: "🏛️ 沿线保护建筑",
          table: {
            type: "heritage",
            columns: [
              { key: "name", label: "建筑" },
              { key: "address", label: "地址" },
              { key: "level", label: "级别" },
              { key: "era", label: "年代" },
            ],
            rows: [
              {
                name: "中华书局旧址（古籍书店）",
                address: "太平南路220号",
                level: { text: "区级文保", badge: "district" },
                era: "1936",
              },
              {
                name: "圣保罗教堂",
                address: "太平南路/白下路口",
                level: { text: "省级文保", badge: "province" },
                era: "1922",
              },
              {
                name: "浙江庆和昌记支店",
                address: "太平南路382号",
                level: { text: "不可移动", badge: "district" },
                era: "民国",
              },
              {
                name: "太平商场",
                address: "太平南路279号",
                level: { text: "不可移动", badge: "district" },
                era: "1947",
              },
              {
                name: "中南银行南京分行",
                address: "白下路路口",
                level: { text: "省级文保", badge: "province" },
                era: "1930s",
              },
            ],
          },
        },
        {
          type: "story",
          title: "📖 十里洋场",
          stories: [
            {
              text: "太平南路是南京最有“民国味”的马路之一。明清时叫“花牌楼”，民国时期连接总统府与夫子庙，是最繁华的商业街。**最多时聚集了四五十家书店**：商务印书馆、中华书局、世界书局、开明书店……傅抱石、武中奇等文化名流终日在此流连。",
            },
            {
              text: "**中华书局旧址**（现古籍书店）最值得驻足：1936年建，琉璃砖外立面，装饰艺术风格，门楣“古籍书店”由国学大师胡小石题写。圣保罗教堂（1922年建）是南京现存最老的基督教堂之一，哥特式尖顶在梧桐树影中隐约可见。",
            },
          ],
        },
        {
          type: "task",
          title: "🏆 打卡任务",
          taskLabel: "📸 任务",
          taskDesc: "在古籍书店门口拍照，进店翻阅一本民国时期的出版物；找到浙江庆和昌记支店的马赛克拼贴店名和老广告。",
        },
      ],
    },
    {
      number: 6,
      name: "童寯故居 · 童寯建筑馆",
      subtitle: "大师书房 · 建筑的体温",
      badge: "省级文保",
      infoItems: [
        { icon: "📍", label: "地址：", value: "秦淮区文昌巷52号" },
        { icon: "🕐", label: "参观：", value: "严格预约制，每时段限20人" },
        { icon: "🎫", label: "门票：", value: "免费" },
        { icon: "🏛️", label: "级别：", value: "江苏省文物保护单位" },
      ],
      imageFallback: { icon: "🏡", text: "童寯故居 · 文昌巷52号" },
      sections: [
        {
          type: "story",
          title: "🏛️ 一座有体温的房子",
          stories: [
            {
              year: "1947",
              text: "中国“建筑四杰”之一童寯先生，为照顾患心脏病的夫人关蔚然，亲自设计建造了这栋英国别墅风格的二层小楼。此后36年，他在此读书、画图、著书，直至1983年离世。",
            },
            {
              text: "**建筑特色：**红砖清水外墙，毛石墙基座，红色平瓦斜屋顶。北立面低调如平房——童寯有意为之，自名“陋室”。建筑面积仅133m²，却处处见心思。",
            },
            {
              text: "**温暖细节：**二楼卧室有小窗可窥见一楼来客；南院门有专为猫咪开设的小门；庭园中童寯亲手栽种的柏树、火焰松、木兰四季常青。",
            },
          ],
        },
        {
          type: "heritage-table",
          title: "👤 童寯是谁？",
          table: {
            type: "general",
            columns: [
              { key: "dimension", label: "维度" },
              { key: "content", label: "内容" },
            ],
            rows: [
              { dimension: "地位", content: "与梁思成、杨廷宝、刘敦桢并称中国“建筑四杰”" },
              { dimension: "学历", content: "美国宾夕法尼亚大学建筑系" },
              { dimension: "代表作", content: "原国民党外交部大楼、南京首都饭店、下关电厂、上海金城大戏院" },
              { dimension: "学术", content: "《江南园林志》——近代最早科学论述中国造园理论的专著" },
              { dimension: "新馆", content: "西侧童寯建筑馆（2026.1.16开放），其孙童明设计" },
            ],
          },
        },
        {
          type: "task",
          title: "🏆 打卡任务",
          taskLabel: "📸 任务（⚠️ 务必提前预约！）",
          taskDesc: "在故居前留影；寻找二楼“探客小窗”和南院“猫咪专用门”；如成功预约入馆，找到《江南园林志》手稿展柜。",
        },
      ],
    },
    {
      number: 7,
      name: "瓶子菜馆（熙南里店）",
      subtitle: "淮扬新韵 · 收官之宴",
      badge: "创意淮扬",
      infoItems: [
        { icon: "📍", label: "地址：", value: "秦淮区中山南路400号熙南里10号" },
        { icon: "🕐", label: "营业：", value: "11:00—13:30 / 17:00—21:00" },
        { icon: "💰", label: "人均：", value: "¥100—110" },
        { icon: "🚶", label: "距上站：", value: "步行约20分钟" },
      ],
      imageFallback: { icon: "🍽️", text: "瓶子菜馆 · 熙南里" },
      sections: [
        {
          type: "story",
          title: "🍽️ 收官之宴",
          stories: [
            {
              text: "瓶子菜馆，南京创意淮扬菜的代表。2018年创立，以“精致不贵、创新有根”迅速走红。熙南里店藏在青砖黛瓦的街区深处，环境本身就是民国老城南的延续。",
            },
          ],
        },
        {
          type: "heritage-table",
          title: "🍜 推荐菜品",
          table: {
            type: "general",
            columns: [
              { key: "name", label: "菜名" },
              { key: "reason", label: "推荐理由" },
            ],
            rows: [
              { name: "热食熏鱼", reason: "与冷食不同，外酥里嫩，酱汁挂壁" },
              { name: "翡翠白玉羹", reason: "荠菜豆腐羹，清鲜回甘" },
              { name: "荔浦芋头", reason: "粉糯香甜，分量扎实" },
              { name: "水芹白灼虾", reason: "淮扬“清淡见真味”的诠释" },
            ],
          },
        },
        {
          type: "story",
          title: "",
          stories: [
            {
              text: "坐在熙南里的庭院里，面前是创意淮扬菜，窗外是青砖马头墙。这一路走来的民国记忆、建筑光影、市井烟火，都在这一餐里沉淀下来。",
            },
          ],
        },
        {
          type: "task",
          title: "🏆 终极任务",
          taskLabel: "🥂 任务",
          taskDesc: "点一瓶（或一壶）茶/酒，举杯敬今天走过的路。在点评网站上为这条 Citywalk 留下你的足迹。",
        },
      ],
    },
  ],

  completionTitle: "你已被授予「金陵城南记忆守护者」称号",
  completionRoute: "莫愁湖 × 手巧馄饨 × 水西门 × 甘熙故居 × 太平南路 × 童寯故居 × 瓶子菜馆",
  completionStats: "全程约 5.5km ｜ 穿越 20+ 处保护建筑 ｜ 跨越明清至民国",
  footerQuote: "“一座城市的气质，不在新楼的玻璃幕墙上，而在旧街巷的砖缝里。”",
  footerNote: "南京尤其如此。祝你走得愉快。🚶‍♂️🚶‍♀️",
  footerImageNote: "图片建议：胜棋楼／甘熙故居／太平南路古籍书店／童寯故居 — 可用你自己拍的照片替换本文中的占位图",
};

export default nanjingMochouTongjun;
