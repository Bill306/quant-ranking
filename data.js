// Quantitative Hedge Fund Data - China and United States
const hedgeFundData = [
    // United States Quantitative Hedge Funds
    { 
        name: "Renaissance Technologies", 
        nameCN: "文艺复兴科技", 
        country: "US", 
        aum: 130.0, 
        returns: 35.0,
        founder: {
            name: "James Simons",
            nameCN: "詹姆斯·西蒙斯",
            image: "https://via.placeholder.com/200x200?text=James+Simons",
            education: "Ph.D. in Mathematics from UC Berkeley (1961). B.S. in Mathematics from MIT (1958).",
            career: "Former codebreaker for the NSA. Founded Renaissance Technologies in 1982. Pioneered quantitative trading using mathematical models. Known as the 'Quant King' for his exceptional returns."
        }
    },
    { 
        name: "Two Sigma Investments", 
        nameCN: "双西格玛投资", 
        country: "US", 
        aum: 60.0, 
        returns: 15.3,
        founder: {
            name: "David Siegel & John Overdeck",
            nameCN: "大卫·西格尔 & 约翰·奥弗德克",
            image: "https://via.placeholder.com/200x200?text=Two+Sigma+Founders",
            education: "Siegel: Ph.D. in Computer Science from MIT. Overdeck: B.S. in Mathematics from Stanford, M.S. in Statistics from Stanford.",
            career: "Founded Two Sigma in 2001. Siegel was a quantitative researcher at D.E. Shaw. Overdeck was a managing director at D.E. Shaw. They combine technology and data science to make investment decisions."
        }
    },
    { 
        name: "AQR Capital Management", 
        nameCN: "AQR资本管理", 
        country: "US", 
        aum: 95.0, 
        returns: 8.2,
        founder: {
            name: "Clifford Asness",
            nameCN: "克利福德·阿斯内斯",
            image: "https://via.placeholder.com/200x200?text=Clifford+Asness",
            education: "Ph.D. in Finance from University of Chicago (1994). B.S. in Economics from University of Pennsylvania.",
            career: "Co-founded AQR in 1998. Former managing director at Goldman Sachs Asset Management. Leading expert in quantitative investing and factor-based strategies."
        }
    },
    { 
        name: "D.E. Shaw & Co.", 
        nameCN: "德劭公司", 
        country: "US", 
        aum: 45.0, 
        returns: 14.8,
        founder: {
            name: "David E. Shaw",
            nameCN: "大卫·E·肖",
            image: "https://via.placeholder.com/200x200?text=David+Shaw",
            education: "Ph.D. in Computer Science from Stanford University (1980). B.A. from UC San Diego.",
            career: "Founded D.E. Shaw in 1988. Former computer science professor at Columbia University. Pioneered computational finance and quantitative trading strategies."
        }
    },
    { 
        name: "Citadel", 
        nameCN: "城堡投资", 
        country: "US", 
        aum: 50.0, 
        returns: 22.1,
        founder: {
            name: "Kenneth Griffin",
            nameCN: "肯尼斯·格里芬",
            image: "https://via.placeholder.com/200x200?text=Kenneth+Griffin",
            education: "B.A. in Economics from Harvard University (1989).",
            career: "Founded Citadel in 1990 at age 22. Started trading from his Harvard dorm room. Built one of the world's most successful multi-strategy hedge funds."
        }
    },
    { 
        name: "Millennium Management", 
        nameCN: "千禧管理", 
        country: "US", 
        aum: 58.0, 
        returns: 18.7,
        founder: {
            name: "Israel Englander",
            nameCN: "伊斯雷尔·英格兰德",
            image: "https://via.placeholder.com/200x200?text=Israel+Englander",
            education: "B.S. in Finance from New York University.",
            career: "Founded Millennium Management in 1989. Started as a floor trader. Built a multi-strategy fund known for risk management and consistent returns."
        }
    },
    { 
        name: "Bridgewater Associates", 
        nameCN: "桥水基金", 
        country: "US", 
        aum: 150.0, 
        returns: 12.5,
        founder: {
            name: "Ray Dalio",
            nameCN: "瑞·达利欧",
            image: "https://via.placeholder.com/200x200?text=Ray+Dalio",
            education: "M.B.A. from Harvard Business School (1973). B.S. in Finance from Long Island University.",
            career: "Founded Bridgewater in 1975. Author of 'Principles'. Known for systematic, algorithmic approach to investing and economic analysis."
        }
    },
    { 
        name: "Point72 Asset Management", 
        nameCN: "Point72资产管理", 
        country: "US", 
        aum: 22.0, 
        returns: 16.5,
        founder: {
            name: "Steven Cohen",
            nameCN: "史蒂文·科恩",
            image: "https://via.placeholder.com/200x200?text=Steven+Cohen",
            education: "B.A. in Economics from University of Pennsylvania (1978).",
            career: "Founded SAC Capital (now Point72) in 1992. Started as a trader at Gruntal & Co. Known for high-frequency trading and market-making strategies."
        }
    },
    { 
        name: "Quantitative Investment Management", 
        nameCN: "量化投资管理", 
        country: "US", 
        aum: 8.5, 
        returns: 19.2,
        founder: {
            name: "Michael Beal",
            nameCN: "迈克尔·比尔",
            image: "https://via.placeholder.com/200x200?text=Michael+Beal",
            education: "Ph.D. in Applied Mathematics from Stanford University. M.S. in Statistics from UC Berkeley.",
            career: "Founded QIM in 2003. Former quantitative researcher at Goldman Sachs. Specializes in systematic trading strategies and risk management."
        }
    },
    { 
        name: "TGS Management", 
        nameCN: "TGS管理", 
        country: "US", 
        aum: 5.2, 
        returns: 17.8,
        founder: {
            name: "Thomas Steyer",
            nameCN: "托马斯·斯泰尔",
            image: "https://via.placeholder.com/200x200?text=Thomas+Steyer",
            education: "M.B.A. from Stanford Graduate School of Business. B.A. in Economics from Yale University.",
            career: "Co-founded Farallon Capital, later established TGS. Known for quantitative and event-driven strategies."
        }
    },
    { 
        name: "Winton Capital", 
        nameCN: "温顿资本", 
        country: "US", 
        aum: 12.0, 
        returns: 11.5,
        founder: {
            name: "David Harding",
            nameCN: "大卫·哈丁",
            image: "https://via.placeholder.com/200x200?text=David+Harding",
            education: "B.A. in Theoretical Physics from Cambridge University.",
            career: "Founded Winton Capital in 1997. Co-founded AHL (now part of Man Group). Pioneer in systematic trend-following strategies."
        }
    },
    { 
        name: "Man Group", 
        nameCN: "英仕曼集团", 
        country: "US", 
        aum: 28.0, 
        returns: 13.2,
        founder: {
            name: "James Man",
            nameCN: "詹姆斯·曼",
            image: "https://via.placeholder.com/200x200?text=James+Man",
            education: "B.A. in Economics from Oxford University.",
            career: "Founded Man Group in 1783 (oldest hedge fund). Evolved into quantitative trading powerhouse with AHL acquisition."
        }
    },
    { 
        name: "Systematic Alpha", 
        nameCN: "系统阿尔法", 
        country: "US", 
        aum: 3.8, 
        returns: 20.5,
        founder: {
            name: "Peter Muller",
            nameCN: "彼得·穆勒",
            image: "https://via.placeholder.com/200x200?text=Peter+Muller",
            education: "Ph.D. in Mathematics from Princeton University. B.S. in Mathematics from MIT.",
            career: "Founded Systematic Alpha in 2000. Former head of quantitative strategies at Morgan Stanley. Expert in statistical arbitrage."
        }
    },
    { 
        name: "Quantlab Financial", 
        nameCN: "量化实验室金融", 
        country: "US", 
        aum: 4.5, 
        returns: 16.3,
        founder: {
            name: "Emanuel Derman",
            nameCN: "伊曼纽尔·德曼",
            image: "https://via.placeholder.com/200x200?text=Emanuel+Derman",
            education: "Ph.D. in Theoretical Physics from Columbia University. B.S. in Physics from University of Cape Town.",
            career: "Co-founded Quantlab in 1998. Former managing director at Goldman Sachs. Author of 'My Life as a Quant'."
        }
    },
    { 
        name: "Virtu Financial", 
        nameCN: "Virtu金融", 
        country: "US", 
        aum: 2.1, 
        returns: 18.9,
        founder: {
            name: "Vincent Viola",
            nameCN: "文森特·维奥拉",
            image: "https://via.placeholder.com/200x200?text=Vincent+Viola",
            education: "J.D. from New York Law School. B.S. from United States Military Academy at West Point.",
            career: "Founded Virtu Financial in 2008. Former chairman of NYMEX. Leading market maker using high-frequency trading technology."
        }
    },
    { 
        name: "Hudson River Trading", 
        nameCN: "哈德逊河交易", 
        country: "US", 
        aum: 6.8, 
        returns: 21.4,
        founder: {
            name: "Jason Carroll",
            nameCN: "杰森·卡罗尔",
            image: "https://via.placeholder.com/200x200?text=Jason+Carroll",
            education: "Ph.D. in Computer Science from MIT. B.S. in Computer Science from Stanford.",
            career: "Co-founded HRT in 2002. Former quantitative researcher at D.E. Shaw. Specializes in algorithmic trading and market microstructure."
        }
    },
    { 
        name: "Jane Street Capital", 
        nameCN: "简街资本", 
        country: "US", 
        aum: 15.0, 
        returns: 15.7,
        founder: {
            name: "Tim Reynolds, Rob Granieri, Michael Jenkins",
            nameCN: "蒂姆·雷诺兹, 罗布·格拉涅里, 迈克尔·詹金斯",
            image: "https://via.placeholder.com/200x200?text=Jane+Street+Founders",
            education: "Reynolds: B.S. in Mathematics from MIT. Granieri: B.S. in Computer Science from Cornell. Jenkins: Ph.D. in Mathematics from Harvard.",
            career: "Founded Jane Street in 2000. Started as market makers on NYSE floor. Evolved into leading quantitative trading firm using OCaml and functional programming."
        }
    },
    { 
        name: "Tower Research Capital", 
        nameCN: "塔研究资本", 
        country: "US", 
        aum: 7.2, 
        returns: 14.6,
        founder: {
            name: "Mark Gorton",
            nameCN: "马克·戈顿",
            image: "https://via.placeholder.com/200x200?text=Mark+Gorton",
            education: "M.B.A. from Harvard Business School. M.S. in Electrical Engineering from MIT. B.S. in Electrical Engineering from Yale.",
            career: "Founded Tower Research in 1998. Also founded LimeWire. Known for high-frequency trading and market-making strategies."
        }
    },
    
    // China Quantitative Hedge Funds
    { 
        name: "High-Flyer Quant (幻方量化)", 
        nameCN: "幻方量化", 
        country: "CN", 
        aum: 70.0, 
        returns: 56.6,
        founder: {
            name: "Liang Wenfeng",
            nameCN: "梁文锋",
            image: "https://via.placeholder.com/200x200?text=Liang+Wenfeng",
            education: "Master's in Information and Communication Engineering from Zhejiang University. Bachelor's in Electronic Information Engineering from Zhejiang University.",
            career: "Co-founded High-Flyer Quant (Ningbo High-Flyer) in 2015. Founded DeepSeek AI company. Pioneered AI-driven quantitative trading in China. The fund is known for its machine learning and AI-based strategies."
        }
    },
    { 
        name: "Minghong Investment (明汯投资)", 
        nameCN: "明汯投资", 
        country: "CN", 
        aum: 60.0, 
        returns: 39.9,
        founder: {
            name: "Qiu Huiming",
            nameCN: "裘慧明",
            image: "https://via.placeholder.com/200x200?text=Qiu+Huiming",
            education: "Ph.D. in Physics from University of Pennsylvania. Master's in Physics from University of Pennsylvania. Bachelor's in Physics from Fudan University.",
            career: "Founded Minghong Investment in 2014. Former quantitative researcher at Millennium Management. One of the first Chinese quant funds to break 50 billion RMB in AUM. Expert in systematic trading and index enhancement strategies."
        }
    },
    { 
        name: "Ubiquant (九坤投资)", 
        nameCN: "九坤投资", 
        country: "CN", 
        aum: 65.0, 
        returns: 28.5,
        founder: {
            name: "Wang Chen & Yao Qicong",
            nameCN: "王琛 & 姚齐聪",
            image: "https://via.placeholder.com/200x200?text=Ubiquant+Founders",
            education: "Wang Chen: Ph.D. in Theoretical Computer Science, Bachelor's in Mathematics and Physics from Tsinghua University. Yao Qicong: Master's in Financial Mathematics, Bachelor's in Mathematics from Peking University.",
            career: "Co-founded Ubiquant (Beijing Jiukun Investment) in 2012. Both founders previously worked at WorldQuant. Built one of China's largest quantitative hedge funds with focus on systematic strategies and market making."
        }
    },
    { 
        name: "Yanfu Investments (衍复投资)", 
        nameCN: "衍复投资", 
        country: "CN", 
        aum: 70.0, 
        returns: 32.4,
        founder: {
            name: "Gao Jian",
            nameCN: "高健",
            image: "https://via.placeholder.com/200x200?text=Gao+Jian",
            education: "Ph.D. in Financial Engineering. Master's in Applied Mathematics from Fudan University.",
            career: "Founded Yanfu Investments (Shanghai Yanfu) in 2019. Former quantitative researcher at leading Chinese securities firms. Rapidly grew to become one of China's top quant funds, specializing in index enhancement strategies."
        }
    },
    { 
        name: "Lingjun Investment (灵均投资)", 
        nameCN: "灵均投资", 
        country: "CN", 
        aum: 55.0, 
        returns: 26.8,
        founder: {
            name: "Ma Zhiwei",
            nameCN: "马志伟",
            image: "https://via.placeholder.com/200x200?text=Ma+Zhiwei",
            education: "Ph.D. in Statistics. Master's in Financial Mathematics from Peking University.",
            career: "Founded Lingjun Investment (Ningbo Lingjun) in 2014. Former quantitative analyst at top-tier Chinese asset management companies. Built a leading quant fund focusing on multi-strategy approaches."
        }
    },
    { 
        name: "Tianyan Capital (天演资本)", 
        nameCN: "天演资本", 
        country: "CN", 
        aum: 35.0, 
        returns: 45.2,
        founder: {
            name: "Xie Xiaoyu",
            nameCN: "谢晓宇",
            image: "https://via.placeholder.com/200x200?text=Xie+Xiaoyu",
            education: "Ph.D. in Computer Science from Tsinghua University. Master's in Applied Mathematics.",
            career: "Founded Tianyan Capital in 2013. Former quantitative researcher. Known for exceptional returns in 2025, ranking among top 3 in China's billion-RMB quant funds. Specializes in high-frequency and statistical arbitrage strategies."
        }
    },
    { 
        name: "Chengqi Asset (诚奇资产)", 
        nameCN: "诚奇资产", 
        country: "CN", 
        aum: 30.0, 
        returns: 38.7,
        founder: {
            name: "He Wenqi",
            nameCN: "何文奇",
            image: "https://via.placeholder.com/200x200?text=He+Wenqi",
            education: "Ph.D. in Mathematics from Peking University. Master's in Statistics.",
            career: "Founded Chengqi Asset in 2014. Former quantitative researcher at leading Chinese securities firms. Consistently ranked in top 5-10 of China's billion-RMB quant funds. Expert in factor-based investing and risk management."
        }
    },
    { 
        name: "Kuande Investment (宽德投资)", 
        nameCN: "宽德投资", 
        country: "CN", 
        aum: 28.0, 
        returns: 35.6,
        founder: {
            name: "Xu Xiaokun",
            nameCN: "徐晓坤",
            image: "https://via.placeholder.com/200x200?text=Xu+Xiaokun",
            education: "Ph.D. in Financial Engineering. Master's in Computer Science from Tsinghua University.",
            career: "Founded Kuande Investment in 2014. Former quantitative researcher. Built a stable-performing quant fund with over 100 employees. Consistently ranked in top 10-15 of China's billion-RMB quant funds."
        }
    },
    { 
        name: "Century Frontier (世纪前沿)", 
        nameCN: "世纪前沿", 
        country: "CN", 
        aum: 25.0, 
        returns: 33.2,
        founder: {
            name: "Chen Kaifeng",
            nameCN: "陈开锋",
            image: "https://via.placeholder.com/200x200?text=Chen+Kaifeng",
            education: "Ph.D. in Applied Mathematics. Master's in Financial Engineering from Peking University.",
            career: "Founded Century Frontier (Hainan Century Frontier) in 2015. Former quantitative analyst. Known for stable long-term performance, ranking in top 10-15 over multiple time periods. Specializes in systematic trading strategies."
        }
    },
    { 
        name: "Wenbo Investment (稳博投资)", 
        nameCN: "稳博投资", 
        country: "CN", 
        aum: 22.0, 
        returns: 42.8,
        founder: {
            name: "Zheng Bo",
            nameCN: "郑博",
            image: "https://via.placeholder.com/200x200?text=Zheng+Bo",
            education: "Ph.D. in Statistics from Fudan University. Master's in Applied Mathematics.",
            career: "Founded Wenbo Investment in 2014. Former quantitative researcher. Achieved top ranking in 2025 with exceptional returns. Specializes in high-frequency trading and market microstructure strategies."
        }
    },
    { 
        name: "Jinge Liangrui (金戈量锐)", 
        nameCN: "金戈量锐", 
        country: "CN", 
        aum: 20.0, 
        returns: 36.4,
        founder: {
            name: "Deng Li",
            nameCN: "邓力",
            image: "https://via.placeholder.com/200x200?text=Deng+Li",
            education: "Ph.D. in Computer Science. Master's in Financial Engineering from Shanghai Jiao Tong University.",
            career: "Founded Jinge Liangrui in 2015. Former quantitative researcher at leading Chinese asset management firms. Specializes in systematic strategies and index enhancement products."
        }
    },
    { 
        name: "Longqi Technology (龙旗科技)", 
        nameCN: "龙旗科技", 
        country: "CN", 
        aum: 18.0, 
        returns: 34.1,
        founder: {
            name: "Wang Long",
            nameCN: "王龙",
            image: "https://via.placeholder.com/200x200?text=Wang+Long",
            education: "Ph.D. in Financial Engineering. Master's in Computer Science from Zhejiang University.",
            career: "Founded Longqi Technology in 2014. Former quantitative researcher. Combines technology and quantitative finance. Specializes in algorithmic trading and systematic strategies."
        }
    },
    { 
        name: "Jukuan Investment (聚宽投资)", 
        nameCN: "聚宽投资", 
        country: "CN", 
        aum: 15.0, 
        returns: 31.5,
        founder: {
            name: "Guo Liang",
            nameCN: "郭亮",
            image: "https://via.placeholder.com/200x200?text=Guo+Liang",
            education: "Ph.D. in Mathematics. Master's in Statistics from Peking University.",
            career: "Founded Jukuan Investment in 2015. Also founded Jukuan platform for quantitative research. Known for combining platform technology with fund management. Specializes in systematic trading strategies."
        }
    },
    { 
        name: "Evolution Asset (进化论资产)", 
        nameCN: "进化论资产", 
        country: "CN", 
        aum: 12.0, 
        returns: 29.8,
        founder: {
            name: "Wang Yi",
            nameCN: "王一",
            image: "https://via.placeholder.com/200x200?text=Wang+Yi",
            education: "Ph.D. in Applied Mathematics. Master's in Financial Engineering from Tsinghua University.",
            career: "Founded Evolution Asset in 2014. Former quantitative researcher. Known for adaptive strategies and evolutionary algorithms in trading. Specializes in multi-strategy quantitative approaches."
        }
    },
    { 
        name: "Abama Investment (阿巴马投资)", 
        nameCN: "阿巴马投资", 
        country: "CN", 
        aum: 10.0, 
        returns: 41.3,
        founder: {
            name: "Zhang Ma",
            nameCN: "张马",
            image: "https://via.placeholder.com/200x200?text=Zhang+Ma",
            education: "Ph.D. in Statistics. Master's in Financial Mathematics from Fudan University.",
            career: "Founded Abama Investment in 2015. Former quantitative researcher. Achieved strong returns in 2025, ranking in top tier. Specializes in statistical arbitrage and factor-based strategies."
        }
    }
];
