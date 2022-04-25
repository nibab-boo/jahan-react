/* eslint-disable import/no-useless-path-segments */
import cheeseNan from "./../../assets/images/cheese_nan.jpeg";
import garlicCheeseNan from "./../../assets/images/garlic_cheese_nan.jpeg";
import aluParatha from "./../../assets/images/aluParatha.jpg";
import chickenTikka from "./../../assets/images/chicken_tikka.jpg";
import tandooriMix from "./../../assets/images/slider-02.jpg";
import OnionRing from "./../../assets/images/onionRing.jpg";
import moMo from "./../../assets/images/momo.jpg";
import sunagimoItame from "./../../assets/images/sunagimo_itame.jpg";
import tandooriChicken from "./../../assets/images/tandoori_chicken.jpg";
import tandooriPrawn from "./../../assets/images/tandoori_prawn.jpg";
import pannerSalad from "./../../assets/images/paneersalad.jpg";
import tomatoSalad from "./../../assets/images/tomato_salad.jpg";

const jsonJp = {
  type: false,
  name: "ジャハン インド ネパール 料理",
  navBar: ["ホーム", "ブログ", "メニュー", "電話","語"],
  contact: {
    phone: "0489155644",
    address: "〒342-0041 埼玉県吉川市保、1丁目-27-4",
    directionBtn: "方向性を得る",
    callBtn: "電話を掛ける"
  },
  footer: {
    name: "に手を差し伸べる",
    subList: [
      {
        name: "接続",
        items: [
          {
            item: "Instagram",
            link: "https://www.instagram.com/jahancurry/"
          },
          {
            item: "Twitter",
            link: "https://twitter.com/jahancurry"
          },
          {
            item: "Facebook",
            link: "https://www.facebook.com/Jahancurry/?locale2=ja_JP&_rdr"
          }
        ]
      },{
        name: "注文",
        items: [
          {
            item: "電話",
            link: "tel:0489155644"
          },
          {
            item: "ウーバーイーツ",
            link: "https://www.ubereats.com/jp-en/store/%E3%82%B7%E3%83%A3%E3%83%BC%E3%83%8F%E3%83%B3%E5%90%89%E5%B7%9D-jahan/tAVTewMiStaN_-SihRStUg"
          },
          {
            item: "出前館",
            link: "www.demaekan.com"
          }
        ]
      },{
        name: "予約",
        items: [
          {
            item: "電話",
            link: "tel:0489155644"
          },
          {
            item: "ホットペッパー",
            link: "https://www.hotpepper.jp/strJ001185600/yoyaku/?vos=othpporgzzzzx00000001"
          },
          {
            item: "PayPayグルメ",
            link: "https://paypaygourmet.yahoo.co.jp/place/g-BQUNS35LmCE/course/?sc_e=sgpa"
          }
        ]
      }
    ]
  },
  menu: {
    tabList: ["カレ―", "ナン", "サイド", "セット", "ドリンク"],
    curryList: [
      {
        name: "チキンカレー",
        description: "当店オリジナル鶏肉カレー",
        price: "¥650"
      },
      {
        name: "バターチキン",
        description: "トマトとクリームをベースとしたカレーソースで煮込んだカレー",
        price: "¥980"
      },
      {
        name: "チキンクルマ",
        description: "チキンとカシューナッツなどのクリーミーなカレー",
        price: "¥800"
      },
      {
        name: "マトンカレー",
        description: "羊肉を柔らかく煮込んだカレー",
        price: "¥750"
      },
      {
        name: "マトンドピヤジャ",
        description: "玉ねぎたっぷり入った洋肉カレー",
        price: "¥800"
      },
      {
        name: "キーマカレー",
        description: "鶏挽肉のスパイシーなカレー",
        price: "¥750"
      },{
        name: "キーマナスカレー",
        description: "茄子入り挽肉カレー",
        price: "¥750"
      },{
        name: "ミックス野菜野菜カレー",
        description: "ミックス野菜のヘルシーなカレー",
        price: "¥750"
      },{
        name: "パニールマカニカレー",
        description: "宮廷料理のカレーと言われている自家製チーズのマイルドカレー",
        price: "¥980"
      }
    ],
    nanList: [
      {
        name: "チーズナン",
        image: cheeseNan,
        description: "トロリチーズをたっぷり使ったインドの1番人気あつあつ焼きたてナン",
        price: "¥420"
      },{
        name: "ガーリックチーズナン",
        image: garlicCheeseNan,
        description: "ニンニクをトッピングで中にトロリチーズをたっぷり入りナン",
        price: "¥450"
      },{
        name: "アルーパラタ",
        image: aluParatha,
        description: "ジャガイモとスパイス入りナン",
        price: "¥400"
      }
    ],
    sideList: [
      {
        name: "タンドリー",
        items: [
          {
            name: "チキンティッカ",
            image: chickenTikka,
            description: "脅なしチキンにヨーグルト、レモンなどで仕上げたタンドリー、ビールに良し！",
            price: "¥560"
          },{
            name: "タンドリーチキン",
            image: tandooriChicken,
            description: "骨付きチキンにヨーグルト、スパイスを混ぜて焼いたインドの最も代表的な釜焼きチキン",
            price: "¥420(1p)"
          },{
            name: "タンドリーミックスグリル",
            image: tandooriMix,
            description: "タンドリーの盛り合わせ",
            price: "¥1350"
          },{
            name: "タンドリーエビ",
            image: tandooriPrawn,
            description: "スペイス漬け込んだ海老のタンドール窯焼き",
            price: "¥700"
          }
        ]
      },
      {
        name: "サラダ",
        items: [
          {
            name: " パニールサラダ",
            image: pannerSalad,
            description: "自家製チーズ入りサラダ",
            price: "¥500"
          },{
          name: "トマトサラダ",
          image: tomatoSalad,
          description: "丸ごとトマトの冷やしトマト",
          price: "¥500"
          }
        ]
      },
      {
        name: "アペタイザー",
        items: [
          {
            name: "モ:モ",
            image: moMo,
            description: "ネパ ール風蒸酸子",
            price: "¥500"
          },{
            name: "オニオンリング",
            image: OnionRing,
            description: "インド風オニオンの天ぶら",
            price: "¥300"
          },{
            name: "砂肝炒め",
            image: sunagimoItame,
            description: "砂肝のネパール風妙め",
            price: "¥440"
          }
        ]
      }
    ],
    setList: [
      {
        name: "ランチ",
        choices: "チキン、サグチキン、マトン、キーマ、卵、野菜、サグアル、ダル.",
        items: [
          {
            name: "A セット",
            description: "サラダ、ダルカレー、ナン/ライス、ソフトドリンク",
            price: "¥680"
          },{
            name: "B セット",
            description: "サラダ、チョイスカレー、ナン/ライス、ソフトドリンク",
            price: "¥780"
          },{
            name: "C セット",
            description: "チキンティッカ（2p）、チョイスカレー、ナン/ライス、ソフトドリンクのサラダ",
            price: "¥890"
          },{
            name: "D セット",
            description: "シークカバブとマライティッカ、サラダ、ダルカレー、ナン/ライス、ソフトドリンク",
            price: "¥1150"
          },{
            name: "Jahan Lunch セット",
            description: "マライティッカ（2p、サラダ、チョイスカレー、ナン/ライス、ソフトドリンク",
            price: "¥920"
          },{
            name: "2 curry セット",
            description: "チキンティッカとタンドリーチキンのサラダ、日替わりカレーとチョイスカレー、ナン/ライスとソフトドリンク",
            price: "¥980"
          }
        ]
      }, {
        name: "ディナー",
        choices: "チキン、サグチキン、マトン、キーマ、エッグ、ベジ、サグアル、ダル.",
        items: [
          {
            name: "ディナー セット",
            description: "サラダ、チョイスカレー、ナン/ライス、ソフトドリンク",
            price: "¥1150"
          },{
            name: "ヤサイ Thali",
            description: "サラダ、ダル、サグパンナーカレー、ナン、ライス、ソフトドリンク",
            price: "¥1250"
          },{
            name: "Chicken Thali",
            description: "サラダ、チョイスカレーとチキンカレー、ナンとライスとソフトドリンク",
            price: "¥1450"
          },{
            name: "Jahan セット",
            description: "タンドリチキンとシークカバブのサラダ、チョイスカレー、ナン/ライス、ソフトドリンク",
            price: "¥1600"
          },{
            name: "Jodi セット",
            description: "サラダと２（マライティッカ、シークカバブ、タンドリエビ）、2種類のカレー、ナン/ライス/チーズナン（1）、ソフトドリンク",
            price: "¥3500"
          },{
            name: "Beer セット",
            description: "タンドリーチキンとパパドとビール",
            price: "¥730"
          },{
            name: "Wine セット",
            description: "チキンティッカ、マライティッカ、シークカバブ、パパドとグラスワイン",
            price: "¥750"
          }
        ]
      }
    ],
    drinkList: [
      {
        name: "ビール",
        items: [
          {
            name: "ネパールアイス（ネパール）",
            price: "¥520"
          },{
            name: "エベレスト（ネパール）",
            price: "¥550"
          },{
            name: "キングフィッシャー (インド)",
            price: "¥550"
          },{
            name: "アサヒ生ビールｓ（日本）",
            price: "¥399"
          }
        ]
      }
      ,{
        name: "ソフトドリンク",
        items: [
          {
            name: "ラッシー",
            price: "¥300"
          },{
            name: "マンゴーラッシー",
            price: "¥300"
          },{
            name: "冷たいチャイ",
            price: "¥300"
          },{
            name: "暖かいチャイ",
            price: "¥300"
          }
        ]
      },{
        name: "ハードドリンク（ロック/ウォーター/ソーダ",
        items: [
          {
            name: "8848（ウォッカ-ネパール）",
            price: "¥450"
          },{
            name: " ククリ ラム (ラム‐ネパール)",
            price: "¥450"
          },{
            name: "オールド ダルバール（ウイスキー-ネパール）",
            price: "¥450"
          },{
            name: "マクダウェル(ラム-インド)",
            price: "¥450"
          }
        ]
      }
    ]
  }
};

export default jsonJp;
