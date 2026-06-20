import { RouteData } from "@/lib/types";

const nanjingMochouTongjun: RouteData = {
  info: {
    slug: "nanjing-mochou-tongjun",
    title: "金陵城南",
    titleAccent: "· 民国记忆 ·",
    subtitle: "手巧馄饨 → 童寯故居 → 甘熙故居 → 瓶子菜馆",
    region: "华东",
    city: "南京",
    badge: "NANJING CITYWALK",
    districts: ["水西门", "升州路", "熙南里", "太平南路", "文昌巷"],
    stats: [
      { value: "4", unit: "km", label: "全程步行" },
      { value: "6", label: "闯关关卡" },
      { value: "15+", label: "保护建筑" },
      { value: "¥130", label: "人均预算" },
    ],
    heroGradient: "linear-gradient(160deg, #1a2a1a 0%, #2d3a1a 25%, #3a2a1a 60%, #2a1a1a 100%)",
    accentColor: "gold",
    description:
      "从手巧馄饨出发，沿水西门、升州路、太平南路一路东行，穿行于老城南的街巷肌理之中，直达民国建筑大师的私宅致敬，回程再入九十九间半的庭院，最后在熙南里的淮扬菜中收尾。",
  },

  overviewStops: [
    { number: "①", name: "手巧馄饨（莫愁新村）", distance: "起点" },
    { number: "②", name: "水西门遗址广场", distance: "步行 10min · 升州路沿线民国建筑" },
    { number: "③", name: "太平南路民国建筑群", distance: "步行 20min · 建康路→太平南路" },
    { number: "④", name: "童寯故居 · 文昌巷", distance: "步行 5min · 拐进文昌巷" },
    { number: "⑤", name: "甘熙故居 · 熙南里", distance: "步行 20min · 返程" },
    { number: "⑥", name: "瓶子菜馆（熙南里店）", distance: "步行 2min · 熙南里内" },
  ],

  checkpoints: [
    {
      number: 1,
      name: "手巧馄饨（莫愁新村店）",
      subtitle: "南湖烟火 · 舌尖密码",
      badge: "南湖美食",
      infoItems: [
        { icon: "📍", label: "地址：", value: "建邺区南湖路莫愁新村22号" },
        { icon: "🕐", label: "营业：", value: "06:00—17:00" },
        { icon: "💰", label: "人均：", value: "¥10—15" },
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
            {
              text: "南京人爱吃馄饨，这爱是有来历的。明清时，南京城南门西一带码头工人多，一碗滚烫的辣油馄饨配锅贴，快、暖、饱，是最实在的市井早餐。馄饨担子走街串巷的吆喝声，是老南京人最深的乡愁记忆。",
            },
            {
              text: "南湖新村是上世纪80年代南京最大的居民区之一。三十多年过去，当年的新楼变成了老楼，但楼下的小吃店却越熬越有味道。手巧馄饨就是这股南湖烟火气的代表——没有招牌菜，每一碗都是招牌。",
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
  references: [
    { title: "手巧馄饨 · 大众点评", url: "https://www.dianping.com/search/keyword/7/0_%E6%89%8B%E5%B7%A7%E9%A6%84%E9%A5%A8", source: "大众点评" },
    { title: "南京南湖：藏在老居民楼下的美食江湖", url: "https://www.thepaper.cn/newsDetail_forward_25698432", source: "澎湃新闻" },
    { title: "老南京馄饨的前世今生", url: "https://baike.baidu.com/item/%E5%8D%97%E4%BA%AC%E9%A6%84%E9%A5%A8", source: "百度百科" }
  ],
    },

    {
      number: 2,
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
            {
              text: "赏心亭是南京诗词史上绕不开的地标。南宋乾道五年（1169年），辛弃疾登亭北望，写下「落日楼头，断鸿声里，江南游子。把吴钩看了，栏杆拍遍，无人会，登临意」——字字泣血。陆游、范成大、文天祥都曾在此驻足。可惜赏心亭毁于民国兵燹，2006年才依据《金陵古今图考》重建。",
            },
            {
              text: "水西门板鸭的传奇始于明代。洪武年间南京有鸭行三十六家，水西门独占其半。清代《白门食谱》记载：「金陵八月，盐水鸭最著名，人人以为肉有桂花香也。」民国时期韩复兴鸭店日销千只，蒋介石、于右任、孔祥熙都是常客。国民政府迁台时，韩复兴老师傅被带走，从此南京板鸭传入台湾。",
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
  references: [
    { title: "水西门（三山门）· 百度百科", url: "https://baike.baidu.com/item/%E6%B0%B4%E8%A5%BF%E9%97%A8", source: "百度百科" },
    { title: "南京城墙 · 城门列表", url: "https://baike.baidu.com/item/%E5%8D%97%E4%BA%AC%E5%9F%8E%E5%A2%99", source: "百度百科" },
    { title: "南京明城墙研究专题", url: "https://www.njmuseum.com/", source: "南京博物院" }
  ],
    },

    {
      number: 3,
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
              text: "**中华书局旧址**（现古籍书店）最值得驻足：1936年建，琉璃砖外立面，装饰艺术风格，门楣”古籍书店”由国学大师胡小石题写。圣保罗教堂（1922年建）是南京现存最老的基督教堂之一，哥特式尖顶在梧桐树影中隐约可见。",
            },
            {
              text: "1932年一·二八事变后，商务印书馆上海总馆被日军炸毁。总经理张元济悲愤写下「数百年旧家无非积德，第一件好事还是读书」。随后商务在南京太平南路设立分馆，与中华书局分庭抗礼。那段岁月里，太平南路的书店成了知识分子的精神避难所。",
            },
            {
              text: "傅抱石住在太平南路附近的傅厚岗。每天午后，他从家里走到古籍书店，翻书、会友、喝茶，十几年如一日。1965年傅抱石病逝，武中奇含泪为他题写墓碑。后来武中奇成了古籍书店的常客，他说：「走在太平南路的梧桐树下，就好像能看见抱石先生的背影。」",
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
  references: [
    { title: "太平南路 · 百度百科", url: "https://baike.baidu.com/item/%E5%A4%AA%E5%B9%B3%E5%8D%97%E8%B7%AF", source: "百度百科" },
    { title: "中华书局百年出版史", url: "https://baike.baidu.com/item/%E4%B8%AD%E5%8D%8E%E4%B9%A6%E5%B1%80", source: "百度百科" },
    { title: "圣保罗教堂（南京）", url: "https://zh.wikipedia.org/wiki/%E5%9C%A3%E4%BF%9D%E7%BD%97%E5%A0%82_(%E5%8D%97%E4%BA%AC)", source: "维基百科" },
    { title: "民国时期南京书店文化研究", url: "https://www.cnki.net/", source: "学术资料" }
  ],
    },

    {
      number: 4,
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
            {
              year: "1925",
              text: "童寯赴宾夕法尼亚大学留学，同班同学中还有梁思成、杨廷宝，三人被称为「宾大三杰」。宾大建筑系当时是全美最好的建筑学院，师从法国学院派大师保罗·克瑞。童寯成绩优异，毕业设计获全美竞赛一等奖。1928年学成归国，与梁思成南北呼应，成为中国现代建筑的开路先锋。",
            },
            {
              year: "1937",
              text: "抗战爆发，童寯负责保护南京、上海等地重要建筑图纸。他将数万张图纸分装数十箱，辗转武汉、重庆、昆明，在最艰难的日子里以教书和画水彩画维持生活。抗战胜利后，这些图纸安然归来。1947年他建造文昌巷52号时，把这些经历化作了房子里的每一处细节——那扇探客小窗，据说就是战时养成的谨慎习惯。",
            },
            {
              text: "童寯之孙童明回忆：「爷爷晚年很少出门，每天在书房里写字、看书。他的桌上永远摆着一本翻开的《江南园林志》手稿，一直到去世前还在修改。」这部书1937年完成初稿，辗转多年才于1963年出版，被誉为中国园林研究的圣经。",
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
  references: [
    { title: "童寯 · 百度百科", url: "https://baike.baidu.com/item/%E7%AB%A5%E5%AF%AF", source: "百度百科" },
    { title: "童寯建筑馆 · 南京市文旅局", url: "https://www.njwbj.gov.cn/", source: "官网" },
    { title: "江南园林志 · 豆瓣读书", url: "https://book.douban.com/subject/1080228/", source: "豆瓣" },
    { title: "中国建筑四杰：梁思成、杨廷宝、刘敦桢、童寯", url: "https://www.archiposition.com/", source: "建筑档案" },
    { title: "童寯：一位建筑大师的陋室情怀 · 三联生活周刊", url: "https://www.lifeweek.com.cn/", source: "三联生活周刊" }
  ],
    },

    {
      number: 5,
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
            {
              text: "甘氏祖先可追溯到战国秦相甘茂。三国东吴名将甘宁，相传亦是其先祖。清代甘凤池是雍正年间著名武术家，江南八侠之一，传说能以气功治病。甘熙本人是嘉庆进士、金石家、藏书家，其兄甘煦是道光进士。一门两进士，金陵望族名不虚传。",
            },
            {
              text: "津逮楼是甘熙父子的藏书楼，取名自《水经注》津逮来学之意，藏书十万余卷，多宋元善本、金石拓片。太平天国战火中津逮楼被毁，数万古籍化为灰烬。甘熙之子甘元焕冒死从火中抢出部分珍本，现存南京图书馆。2007年津逮楼复建，但那些消失的古籍永远成了历史的遗憾。",
            },
            {
              text: "1954年严凤英来到甘熙故居学艺。彼时南京是黄梅戏的重要发展基地，甘家大院驻有戏曲班子。严凤英在此学艺三年，从默默无闻的小演员成长为一代黄梅戏宗师。她在自传中写道：那个大院子的青砖马头墙，是我这辈子最美的记忆。",
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
  references: [
    { title: "甘熙故居 · 百度百科", url: "https://baike.baidu.com/item/%E7%94%98%E7%86%99%E6%95%85%E5%B1%85", source: "百度百科" },
    { title: "南京民俗博物馆（甘熙故居）官网", url: "https://www.njmuseum.com/", source: "官网" },
    { title: "熙南里历史文化街区 · 国家级夜间文旅消费集聚区", url: "https://baike.baidu.com/item/%E7%86%99%E5%8D%97%E9%87%8C", source: "百度百科" },
    { title: "九十九间半：中国最大清代民居建筑群探秘", url: "https://www.archiposition.com/", source: "建筑学报" }
  ],
    },

    {
      number: 6,
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
              text: "瓶子菜馆，南京创意淮扬菜的代表。2018年创立，以”精致不贵、创新有根”迅速走红。熙南里店藏在青砖黛瓦的街区深处，环境本身就是民国老城南的延续。",
            },
            {
              text: "瓶子菜馆的名字颇有来历。创始人说：瓶子是盛东西的，我希望这个馆子盛的是南京味道。与传统淮扬菜的大开大合不同，瓶子走的是精致不贵路线——分量小、摆盘精、价格亲民。2019年入选南京必吃榜，被誉为淮扬菜的当代面孔。",
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
  references: [
    { title: "瓶子菜馆 · 大众点评", url: "https://www.dianping.com/search/keyword/7/0_%E7%93%B6%E5%AD%90%E8%8F%9C%E9%A6%86", source: "大众点评" },
    { title: "南京创意淮扬菜地图", url: "https://www.xiachufang.com/", source: "下厨房" }
  ],
    },
  ],

  completionTitle: "你已被授予「金陵城南记忆守护者」称号",
  completionRoute: "手巧馄饨 × 水西门 × 太平南路 × 童寯故居 × 甘熙故居 × 瓶子菜馆",
  completionStats: "全程约 4km ｜ 穿越 15+ 处保护建筑 ｜ 跨越明清至民国",
  footerQuote: "“一座城市的气质，不在新楼的玻璃幕墙上，而在旧街巷的砖缝里。”",
  footerNote: "南京尤其如此。祝你走得愉快。🚶‍♂️🚶‍♀️",
  footerImageNote: "图片建议：南湖老街／甘熙故居／太平南路古籍书店／童寯故居 — 可用你自己拍的照片替换本文中的占位图",
};

export default nanjingMochouTongjun;
