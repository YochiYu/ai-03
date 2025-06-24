import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CompanyCard from "../components/CompanyCard";
import Taiwan50PlusCompanyCard from "../components/Taiwan50PlusCompanyCard";
import { ArrowLeft, Home } from "lucide-react";
import { categories } from '../companyData';
import NotFound from './NotFound';

// -- CORE COMPANY DATA --
const companyMeta = {
  // --- AI開發工具平台 companies ---
  anyscale: {
    name: "Anyscale",
    logo: "/lovable-uploads/e20e1846-2ff5-4125-80c3-baf89f4c474d.png",
    countryYear: "美國／2019年",
    category: "AI開發工具平台",
    description: "Anyscale打造基於開源工具Ray的雲端平台，大幅簡化AI與機器學習的開發流程，讓開發者更輕鬆構建和擴展AI應用。"
  },
  baseten: {
    name: "Baseten",
    logo: "/lovable-uploads/43326d85-1261-441b-a2cc-f34003041c55.png",
    countryYear: "美國／2019年",
    category: "AI開發工具平台",
    description: "Baseten專注於簡化機器學習模型的部署，提供 Low-code 平台，讓開發者能快速將AI模型整合進產品，特別適合新創公司和開發團隊。"
  },
  databricks: {
    name: "Databricks",
    logo: "/lovable-uploads/72fb9b47-42cf-48b5-b3db-ca8d4a7a216b.png",
    countryYear: "美國／2013年",
    category: "AI開發工具平台",
    description: "Databricks 主要提供企業資料處理的平台，讓企業可以使用結構化與非結構化資料，進行商業分析。該公司去年底完成100億美元的募資，估值達到620億美元。"
  },
  replicate: {
    name: "Replicate",
    logo: "/lovable-uploads/342221f6-6fe5-4d1c-8dd2-a9e976e1c924.png",
    countryYear: "美國／2019年",
    category: "AI開發工具平台",
    description: "Replicate 讓 AI 簡化了開源機器學習模型的使用，開發者就像調用API一樣，目前已在應用程式中串接超過2.5萬個AI模型。"
  },
  "hugging-face": {
    name: "Hugging Face",
    logo: "/lovable-uploads/3b36ca1d-76cb-4580-ab94-a7ef6db6c285.png",
    countryYear: "美國／2016年",
    category: "AI開發工具平台",
    description: "Hugging Face提供開源平台讓用戶發表和共享AI模型、數據集與研究成果，被譽為「AI領域的GitHub」。"
  },
  langchain: {
    name: "LangChain",
    logo: "/lovable-uploads/c99680a7-4334-4ca8-b3cf-55470c24b1eb.png",
    countryYear: "美國／2022年",
    category: "AI開發工具平台",
    description: "LangChain是一座橋樑，連結大型語言模型與具體應用場景，讓開發者能用簡單程式碼打造AI應用，已吸引超過百萬名開發者使用。"
  },
  "mechanical-orchard": {
    name: "Mechanical Orchard",
    logo: "/lovable-uploads/02738ac0-4b68-4714-a1f0-0174bbf4c334.png",
    countryYear: "美國／2022年",
    category: "AI開發工具平台",
    description: "Mechanical Orchard讓舊系統也能有新面貌。專注於企業內部老舊的資訊系統，以AI和雲端技術重賦新生。"
  },
  mindsdb: {
    name: "MindsDB",
    logo: "/lovable-uploads/677ebafd-c024-4bce-855e-26713e127b9d.png",
    countryYear: "美國／2017年",
    category: "AI開發工具平台",
    description: "MindsDB是一個開源平台，讓開發者能將機器學習模型無縫整合到資料庫中，直接建立、訓練和部署模型，無需資料科學家專業知識。"
  },
  modular: {
    name: "Modular",
    logo: "/lovable-uploads/e917bb97-6a56-426c-9f48-9d44e308cc86.png",
    countryYear: "美國／2022年",
    category: "AI開發工具平台",
    description: "Modular 由蘋果 Swift 程式語言的開發者所創立，推出Mojo程式語言，用以提升AI應用的效能和可擴展性。"
  },
  pinecone: {
    name: "Pinecone",
    logo: "/lovable-uploads/fb67908b-d683-4832-b3eb-e99d71c8524f.png",
    countryYear: "以色列／2019年",
    category: "AI開發工具平台",
    description: "Pinecone幫助企業處理和檢索大量沒有固定格式的資料（如文字資料、圖像），提升機器學習和AI應用的效率。"
  },
  snowflake: {
    name: "Snowflake",
    logo: "/lovable-uploads/4ca33da8-0e00-435f-9daa-47b3a7714667.png",
    countryYear: "美國／2012年",
    category: "AI開發工具平台",
    description: "隨著數據成為AI燃料，Snowflake的估值模式革新；透過多次策略併購與技術整合，它已從雲端資料庫蛻變，躍升為企業AI應用與決策的核心平台。"
  },
  "together-ai": {
    name: "Together AI",
    logo: "/lovable-uploads/0ae5e2be-9abf-44b9-90ce-f954f66121a3.png",
    countryYear: "美國／2022年",
    category: "AI開發工具平台",
    description: "其投資人表示：客戶為GPU來，但為了工作流程留下。該公司最好的註解：提供平台讓企業租用GPU、打造AI應用程式。"
  },
  "weights-biases": {
    name: "Weights & Biases",
    logo: "/lovable-uploads/389322e4-9c9e-48ae-86e8-7fd47f6f013a.png",
    countryYear: "美國／2017年",
    category: "AI開發工具平台",
    description: "Weights & Biases提供工具幫助AI 團隊追蹤實驗、管理模型，並將AI 應用快速從開發階段推向實際使用，提升開發效率。"
  },

  // --- AI晶片與硬體 companies ---
  cerebras: {
    name: "Cerebras Systems",
    logo: "/lovable-uploads/9c2b7b6a-030b-4fc5-997a-e76edc46399b.png",
    countryYear: "美國／2016年",
    category: "AI晶片與硬體",
    description: "Cerebras Systems 開發了全球最大的晶片，專為AI的深度學習所設計，提供比傳統GPU更快的運算速度。"
  },
  deepx: {
    name: "DEEPX",
    logo: "/lovable-uploads/edc72eaf-00a0-431c-9c75-60a94e54d6a3.png",
    countryYear: "韓國／2018年",
    category: "AI晶片與硬體",
    description: "DeepX 是韓國 AI 晶片新創，專注於開發邊緣運算的AI，多用在智慧安防、機器人等領域。若對台灣新創產業熟悉的話，DEEPX跟耐能都在致力推動邊緣AI技術的發展。"
  },
  "d-matrix": {
    name: "d-Matrix",
    logo: "/lovable-uploads/45373ca9-c6cf-41a3-96b5-53787c70c2e2.png",
    countryYear: "美國／2019年",
    category: "AI晶片與硬體",
    description: "d-Matrix 開發AI 應用設計晶片，讓生成式AI模型在企業伺服器上運行得更快、更高效。該公司獲得微軟等投資人1.1億美元的支持。"
  },
  groq: {
    name: "Groq",
    logo: "/lovable-uploads/17340f76-72df-49d8-be90-47b752b0566c.png",
    countryYear: "美國／2016年",
    category: "AI晶片與硬體",
    description: "輝達的挑戰者、不是馬斯克的Grok。Groq 開發專門加速 AI 模型運行的晶片，讓生成式 AI 工具（如聊天機器人）回應的速度更快。"
  },
  lightmatter: {
    name: "Lightmatter",
    logo: "/lovable-uploads/02e47714-3a4a-4fce-9402-9d39cad977b8.png",
    countryYear: "美國／2017年",
    category: "AI晶片與硬體",
    description: "Lightmatter開發光子晶片，利用光訊號取代電訊號進行運算，提升AI數據中心的性能與能效。 近期完成4億美元募資，估值達44億美元。"
  },
  nvidia: {
    name: "NVIDIA",
    logo: "/lovable-uploads/49b96814-85cd-4aeb-bd38-7f38cbf9ff47.png",
    countryYear: "美國／1993年",
    category: "AI晶片與硬體",
    description: "GPU的提出者、AI算力的標準單位、夜市的王者、皮衣教主、台廠老董聚餐的理由、生成式AI的心臟、資本市場的寵兒、未來科技的風向標。"
  },
  rebellions: {
    name: "Rebellions",
    logo: "/lovable-uploads/b354ec71-028e-4452-9c73-80fda3baffbc.png",
    countryYear: "韓國／2020年",
    category: "AI晶片與硬體",
    description: "可稱為對抗輝達的「韓國隊長」。Rebellions專注於開發高效能 AI 晶片，並於2024年與Sapeon Korea合併，成為韓國首隻 AI 晶片獨角獸。"
  },
  sambanova: {
    name: "SambaNova Systems",
    logo: "/lovable-uploads/b152170c-36c9-4704-9833-e7b8a80888f2.png",
    countryYear: "美國／2017年",
    category: "AI晶片與硬體",
    description: "SambaNova Systems專注研發AI晶片與軟體解決方案，提供支援；產品獲國際肯定，不僅被美國阿貢國家實驗室採用，應用於多家國家級科研機構。"
  },
  tenstorrent: {
    name: "Tenstorrent",
    logo: "/lovable-uploads/92541c40-f18e-4227-b82b-aa2db39c6ff8.png",
    countryYear: "美國／2016年",
    category: "AI晶片與硬體",
    description: "Tenstorrent由晶片設計大師、AMD Zen系列首席設計師Jim Keller 領導，專注於開發低價、高效能AI 晶片。"
  },
  // --- 數據準備 companies ---
  cleanlab: {
    name: "Cleanlab",
    logo: "/lovable-uploads/a5469422-6101-471a-8aeb-1e60f6a49e4c.png",
    countryYear: "美國／2021年",
    category: "數據準備",
    description: "Cleanlab 提供AI驅動的數據平台，透過自動檢測和修復數據錯誤，幫助企業提升數據品質和模型準確性，加速AI系統的開發和應用。"
  },
  nomic: {
    name: "Nomic AI",
    logo: "/lovable-uploads/13c8cc04-70c1-4290-abbf-3e7dd9611e2a.png",
    countryYear: "美國／2022年",
    category: "數據準備",
    description: "Nomic AI將資料可視化，其核心產品Atlas，利用AI技術將複雜的資料轉化為互動式地圖，讓企業探索、分析和解讀資料的關聯性。"
  },
  scale: {
    name: "Scale AI",
    logo: "/lovable-uploads/ac66b7a3-0ae8-4b5c-a4e7-1d64c86bc9e0.png",
    countryYear: "美國／2016年",
    category: "數據準備",
    description: "優良的模型表現，高度依賴於好的訓練數據，而這類數據的標註、整理、清理，正是 Scale AI 的專長。其主要客戶包含語言模型和視覺辨識公司，如 OpenAI 、特斯拉等知名企業。"
  },
  unstructured: {
    name: "Unstructured",
    logo: "/lovable-uploads/d5c12247-f833-48af-bab1-8695d34e0e41.png",
    countryYear: "美國／2022年",
    category: "數據準備",
    description: "Unstructured處理非結構化數據，透過自動解析、分類和轉換各種格式的數據，幫助企業將複雜數據轉化為可分析和應用的格式。"
  },

  // --- Taiwan 50+ companies ---
  "avalanche-computing": {
    name: "奎景運算 (Avalanche Computing)",
    logo: "",
    countryYear: "台灣／2018年",
    category: "Taiwan 50+",
    description: "專注於簡化 AI 與大數據建置流程，協助企業輕鬆導入 AI。開發分散式運算平台並獲得多項國際創業競賽獎項."
  },
  "deepmentor": {
    name: "滿拓科技 (DeepMentor)",
    logo: "",
    countryYear: "台灣／2018年",
    category: "Taiwan 50+",
    description: "提供智慧製造與 AI 應用解決方案，讓台灣傳產也能輕鬆用 AI 進行品檢、預測、數據分析."
  },
  "instill-ai": {
    name: "潤物科技 (Instill AI)",
    logo: "",
    countryYear: "台灣／2020年",
    category: "Taiwan 50+",
    description: "打造易用且開源的 AI Workflow 平台，協助各種企業將 AI 加入數據管線，實現 MLOps 全流程自動化."
  },
  "project-tame": {
    name: "繁體中文專家模型開源計畫 (Project TAME)",
    logo: "",
    countryYear: "台灣／2024年",
    category: "Taiwan 50+",
    description: "集結眾多台灣資深 AI 開發者，致力於打造專為繁體中文設計的開源大語言模型與資料集."
  },
  "skymizer": {
    name: "臺灣發展軟體科技 (Skymizer)",
    logo: "",
    countryYear: "台灣／2013年",
    category: "Taiwan 50+",
    description: "以優化邊緣運算與硬體加速技術著稱，產品廣泛應用於全球各大半導體廠與 AI 企業."
  },
  "taiwan-ai-cloud": {
    name: "台智雲 (Taiwan AI Cloud)",
    logo: "",
    countryYear: "台灣／2020年",
    category: "Taiwan 50+",
    description: "台灣最大 AI 公有雲平台，結合國網中心、學研與產業資源，提供 AI 計算、模型訓練與資料服務."
  },
  "taide": {
    name: "臺灣可信任生成式AI 發展計畫 (TAIDE)",
    logo: "",
    countryYear: "台灣／2023年",
    category: "Taiwan 50+",
    description: "國家級 LLM 發展計畫，打造台灣自己的可商用、可信任大語言模型，聚合各界專業力量."
  },
  "ubitus": {
    name: "優必達 (Ubitus)",
    logo: "",
    countryYear: "台灣／2007年",
    category: "Taiwan 50+",
    description: "全球雲端遊戲技術領頭羊，近期亦切入 AI 與 GPU 雲服務市場，積極開拓海外業務."
  },
  "zettabyte": {
    name: "智百特 (Zettabyte)",
    logo: "",
    countryYear: "台灣／2019年",
    category: "Taiwan 50+",
    description: "專注 AI 智能工廠、電力與數據治理解決方案，協助台灣企業數位轉型與智能升級."
  },
};

const CompanyDetail: React.FC = () => {
  const { categorySlug, companyId } = useParams<{ categorySlug: string; companyId: string }>();
  const navigate = useNavigate();

  const category = categories.find(c => c.slug === categorySlug);
  const company = category?.companies.find(co => co.id === companyId);

  if (!company) {
    return <NotFound />;
  }

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center overflow-y-auto overflow-x-hidden touch-pan-y scrollable-vertical bg-fade-transition"
      style={{
        background: `url('/lovable-uploads/BG-3.jpg') center center / cover no-repeat, linear-gradient(135deg, rgb(7, 6, 26) 0%, rgb(24, 17, 58) 60%, rgb(14, 19, 40) 100%)`,
      }}
    >
      <div
        className={
          `relative w-full h-fit flex-none flex items-center justify-between px-[115px] pt-[40px] pb-[24px] max-md:px-4 max-md:py-4 max-sm:px-2 max-sm:py-2 mb-[30px] mt-[30px]`
        }
      >
        <button
          onClick={() => {
            const audio = new Audio('/sounds/click-1.mp3');
            audio.play();
            setTimeout(() => navigate(-1), 120); // delay navigation for sound
          }}
          className="px-[46px] py-[23px] rounded-full backdrop-blur-xl bg-white/10 text-white text-[52px] font-bold flex items-center gap-[23px] hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-[46px] h-[46px]" />
          <span className="max-sm:hidden">返回前頁</span>
        </button>
        <button
          onClick={() => {
            const audio = new Audio('/sounds/click-3.mp3');
            audio.play();
            setTimeout(() => navigate("/"), 120);
          }}
          className="px-[46px] py-[23px] rounded-full backdrop-blur-xl bg-white/10 text-white text-[52px] font-bold flex items-center gap-[23px] hover:bg-white/20 transition-colors"
        >
          <Home className="w-[46px] h-[46px]" />
          <span className="max-sm:hidden">返回首頁</span>
        </button>
      </div>
      <div
        className={
          `w-full mx-auto rounded-3xl px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 flex flex-col items-center shadow-[0_8px_48px_0_rgba(244,63,94,0.16)] border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-rose-200/10 backdrop-blur-2xl relative z-10`
        }
        style={{
          boxShadow:
            `0 8px 48px 0 rgba(244,63,94,0.16), 0 0 0 1px rgba(255,255,255,0.14)`,
          background:
            `linear-gradient(120deg, rgba(255,255,255,0.18) 10%, rgba(251,233,241,0.10) 45%, rgba(247,98,151,0.13) 100%)`,
          border: "1.5px solid rgba(255,255,255,0.14)",
          padding: '50px',
          width: '850px',
          height: '1600px'
        }}
      >
        {category.slug === "taiwan-50plus" ? (
          <Taiwan50PlusCompanyCard
            name={company.name}
            countryYear={company.year}
            category={category.name}
            description={company.intro}
          />
        ) : (
          <CompanyCard
            name={company.name}
            logo={`/logos/${category.name}/${company.id}.png`}
            countryYear={company.year}
            category={category.name}
            description={company.intro}
            detailPage={true}
          />
        )}
      </div>
    </div>
  );
};

export default CompanyDetail;
