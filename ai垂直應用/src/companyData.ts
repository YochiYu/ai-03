// Full template for all tech categories and Taiwan 50+
export const categories = [
  { slug: "programming", name: "程式設計", intro: "AI助力程式開發，提升效率與創新，從自動補齊到智慧除錯，打造未來軟體工程新樣貌。", companies: [
    { id: "anysphere", name: "Anysphere", year: "2022年", country: "美國", intro: "Anysphere的產品Cursor擁有自動補齊程式碼、錯誤檢測和智慧建議功能，在獲得OpenAI的投資後，使其成為AI程式開發領域的焦點。" },
    { id: "codeium", name: "Codeium", year: "2021年", country: "美國", intro: "Codeium 開發 AI 驅動的程式碼輔助工具，目前已支援超過 70+ 種程式語言，並與超過 40 種開發環境（IDE）相容。" },
    { id: "cognition-ai", name: "Cognition AI", year: "2023年", country: "美國", intro: "Cognition AI 的產品Devin被稱為「全球首位AI軟體工程師」，能夠自動完成軟體開發任務，包含規劃、寫程式碼、debug。" },
    { id: "github-copilot", name: "GitHub Copilot", year: "2021年", country: "美國", intro: "GitHub號稱工程師最大的交友網站，讓 GitHub Copilot不只是AI程式碼助手，更是 GitHub生態系的一部分。" },
    { id: "magic", name: "Magic", year: "2022年", country: "美國", intro: "Magic打造能像人類工程師般協作的「AI同事」，可自動生成、修改程式碼。其 AI模型可以理解、分析完整的程式碼庫，保持專案的一致性。" },
    { id: "phind", name: "Phind", year: "2022年", country: "美國", intro: "Phind 是「為開發者而生的AI搜尋引擎」，像聊天一樣提出問題，AI就會提供概念、產品開發、技術解答甚至是程式碼片段。" },
  ] },
  { slug: "robotics", name: "機器人", intro: "AI賦能機器人，推動自動化與智慧協作，應用於製造、服務與生活各層面。", companies: [
    { id: "1x-technologies", name: "1X Technologies", year: "2014年", country: "挪威", intro: "1X Technologies開發人形機器人，在2023年獲得 OpenAI 領投千萬美元，把ChatGPT裝到機器人腦中就在不遠的未來。" },
    { id: "figure-ai", name: "Figure AI", year: "2022年", country: "美國", intro: "最知名之處就是和OpenAI分手，該公司推出新系統，讓機器人可自行「推理」執行任務，你不需教它，它也能夠完成任務。" },
    { id: "skild-ai", name: "Skild AI", year: "2023年", country: "美國", intro: "Skild AI開發能夠適應各種機器和機器人的「通用大腦」，讓各種機器人能靈活、安全地與人互動，試圖打造機器人的AI時刻。" },
  ] },
  { slug: "defense", name: "國防", intro: "AI強化國防安全，提升偵測、決策與自主作戰能力，守護國家與社會。", companies: [
    { id: "anduril", name: "Anduril Industries", year: "2017年", country: "美國", intro: "Anduril 由VR設備 Oculus創辦人創立，專注於開發自主國防系統，結合AI技術於無人機、感測器、邊境監控系統等產品。近期宣布與 OpenAI 合作，將 AI技術應用於反無人機系統，提升偵測與應對能力。" },
    { id: "helsing", name: "Helsing", year: "2021年", country: "德國", intro: "Helsing 專注於 AI 軍事技術，提供戰場數據分析與自動決策系統，全面提升歐洲國防能力。其技術可在無GPS環境下運作，強化自主作戰的能力。" },
    { id: "palantir", name: "Palantir", year: "2003年", country: "美國", intro: "Palantir 開發AI數據分析平台，協助政府和企業整合、分析數據，提升決策效率，被美國國防和情報機構採用，用於反恐和情報分析。" },
    { id: "shield-ai", name: "Shield AI", year: "2015年", country: "美國", intro: "Shield AI擁有AI驅動的「自主飛行系統」，讓無人機和飛行器能夠在沒有GPS、通訊信號或人類飛行員的情況下自主運行。" },
  ] },
  { slug: "medical", name: "醫療", intro: "AI應用於醫療診斷、健康管理與新藥研發，提升醫療效率與精準度。", companies: [
    { id: "abridge", name: "Abridge", year: "2018年", country: "美國", intro: "花1小時看診，就要花2小時處理文書工作，醫生很累。Abridge 利用AI轉錄看診對話並生成摘要，已與5萬名臨床醫療人員簽約。" },
    { id: "aeye-health", name: "AEYE Health", year: "2018年", country: "以色列", intro: "AEYE Health推出首款FDA核准的自動 AI眼底檢查設備，1分鐘內篩查糖尿病視網膜病變，未來將擴展至青光眼、心血管疾病等。" },
    { id: "bioptimus", name: "Bioptimus", year: "2023年", country: "法國", intro: "Bioptimus正打造「生物學版GPT」，讓 AI理解生命科學，整合分子、細胞、基因等數據，推動藥物開發與精準醫療。" },
    { id: "cradle", name: "Cradle", year: "2021年", country: "瑞士", intro: "Cradle透過生成式AI加速蛋白質設計，幫助科學家優化疫苗與抗體，提高生物製藥與合成生物學的研發效率，已獲強生等企業採用。" },
    { id: "openevidence", name: "OpenEvidence", year: "2021年", country: "美國", intro: "OpenEvidence 利用AI即時解析醫學文獻，幫助醫師快速獲取最新、權威的臨床證據，提升決策效率，並獲1萬多家醫療機構採用。" },
  ] },
  { slug: "customer-service", name: "客服", intro: "AI智慧客服提升服務效率，優化顧客體驗，實現自動化與個人化溝通。", companies: [
    { id: "cresta", name: "Cresta", year: "2017年", country: "美國", intro: "Cresta運用 AI 技術讓每次對話都成為競爭優勢，幫助聯絡中心，例如客服與銷售團隊，來提升對話效率、優化工作流程，降低成本並改善客戶體驗。" },
    { id: "polyai", name: "PolyAI", year: "2017年", country: "英國", intro: "PolyAI開發對話式AI語音助手，為客服中心提供自動化解決方案。其語音助手能夠模仿客服人員，擁有自然的對話體驗，幫助企業減少客戶等待真人客服的時間，提高滿意度和保留率。PolyAI的服務適用於銀行、醫療保健、旅遊和酒店等行業。" },
  ] },
  { slug: "cybersecurity", name: "資安", intro: "AI即時偵測威脅，守護企業與個人數位資產，強化資安防護。", companies: [
    { id: "darktrace", name: "Darktrace", year: "2013年", country: "英國", intro: "Darktrace採用機器學習和數學演算法，自動學習並了解每個使用者、設備與網路的「行為模式」，即時偵測和反應細微的資安威脅。" },
    { id: "protect-ai", name: "Protect AI", year: "2022年", country: "美國", intro: "Protect AI 專注於 AI 模型的資安問題，幫助企業在 AI 與機器學習的開發與部署過程中確保安全性，防範潛在資安風險。" },
  ] },
  { slug: "crm-sales", name: "銷售與顧客關係管理", intro: "AI驅動銷售流程自動化，提升顧客關係與商業決策效率。", companies: [
    { id: "sierra", name: "Sierra", year: "2023年", country: "美國", intro: "Sierra 的對話式AI平台能為企業提供個性化AI代理，自動處理退款、技術支援等需求，並以品牌語調與顧客互動，優化客戶體驗。" },
    { id: "tome", name: "Tome", year: "2020年", country: "美國", intro: "Tome最初是一款AI簡報生成工具，如今進一步聚焦銷售應用。使用者只需輸入簡單提示，即可生成簡報大綱與草稿，提升商業溝通效率。" },
  ] },
  { slug: "legal", name: "法律", intro: "AI協助法律研究、文件撰寫與案件分析，提升法律服務效率與精準度。", companies: [
    { id: "casetext", name: "Casetext", year: "2013年", country: "美國", intro: "Casetext協助律師快速分析法條、撰寫證詞、查找案例，提升法律研究效率。2023年，該公司被湯森路透以6.5億美元收購。" },
    { id: "harvey", name: "Harvey", year: "2022年", country: "美國", intro: "Harvey是「律師的律師」，能協助撰寫、分析法律文件，並解答法律、稅務等研究問題，客戶包括國際律師事務所及企業法務團隊。" },
  ] },
  { slug: "drug-development", name: "藥物開發", intro: "AI加速藥物研發流程，助力新藥設計與臨床試驗創新。", companies: [
    { id: "insitro", name: "Insitro", year: "2018年", country: "美國", intro: "Insitro結合機器學習與生物醫學，分析基因數據發掘人類忽略的致病機制，希望用AI改變藥物研發的模式，部分計畫已進展至動物實驗階段。" },
    { id: "owkin", name: "Owkin", year: "2016年", country: "法國", intro: "Owkin透過AI與聯邦學習技術，加速藥物研發與臨床試驗，讓機構共享AI而不共享數據，已與默克等製藥巨頭合作，推動AI在生醫領域的應用。" },
  ] },
  { slug: "smart-manufacturing", name: "智慧製造", intro: "AI優化生產流程，提升製造業自動化、品質與效率。", companies: [
    { id: "atomic-industries", name: "Atomic Industries", year: "2019年", country: "美國", intro: "Atomic Industries 的目標是將工匠的專業知識AI 化，並透過軟體與演算法優化工具與模具的製造流程，提升生產力與效率。" },
    { id: "daedalus", name: "Daedalus", year: "2019年", country: "美國", intro: "Daedalus 透過AI和機器人技術自動化工廠運營，實現精密零件生產與良率檢測，助力半導體、醫療、電動車與國防等產業。" },
  ] },
  { slug: "mining", name: "礦業", intro: "AI分析地質數據，協助發現礦藏，推動資源開發智慧化。", companies: [
    { id: "kobold-metals", name: "KoBold Metals", year: "2018年", country: "美國", intro: "KoBold Metals運用AI分析地質數據，協助發現銅、鋰等關鍵礦物，已在尚比亞發現大型銅礦床。貝佐斯、比爾蓋茲皆是投資人。" },
  ] },
  { slug: "manga-translation", name: "漫畫翻譯", intro: "AI自動翻譯漫畫內容，促進多語言文化交流與閱讀體驗。", companies: [
    { id: "mantra", name: "Mantra", year: "2020年", country: "日本", intro: "Mantra開發AI驅動的漫畫翻譯工具，自動識別漫畫中的對話框，將日文翻譯成多種語言。漫畫大咖集英社、小學館、角川皆有投資。" },
  ] },
  { slug: "anti-fraud", name: "防詐", intro: "AI即時偵測與攔截詐騙行為，守護數位金融與個人安全。", companies: [
    { id: "sardine", name: "Sardine", year: "2020年", country: "美國", intro: "Sardine 透過AI和行為識別技術（如滑鼠軌跡、打字節奏），即時預測與攔截數位金融詐欺，特別適用於加密貨幣與數位銀行等高風險產業。" },
    { id: "vermillio", name: "Vermillio", year: "2021年", country: "美國", intro: "Vermillio 用 AI幫名人和創作者守護肖像權，建立「數位分身」來偵測網路上的AI生成內容，防止濫用、詐騙和深偽（deepfake）。" },
  ] },
  { slug: "autonomous-vehicles", name: "自駕車", intro: "AI驅動自駕技術，實現智慧交通與安全運輸新未來。", companies: [
    { id: "waabi", name: "Waabi", year: "2021年", country: "加拿大", intro: "Waabi開發 AI 自駕卡車，透過模擬真實的道路環境來訓練自駕系統讓 AI 在虛擬環境中學習，不用依賴大量實際路測，有效降低成本並加快上路速度。" },
  ] },
  { slug: "hr", name: "人資", intro: "AI協助人才招募、管理與潛力發掘，優化企業人力資源決策。", companies: [
    { id: "eightfold", name: "Eightfold", year: "2016年", country: "美國", intro: "Eightfold 基於數 10 億筆職業與技能數據，運用 AI 協助企業優化人才招募與管理，高效分析。例如能挖掘求職者的潛在技能，幫助企業找到合適人才。" },
  ] },
  { slug: "finance-accounting", name: "財務", intro: "AI自動化財務分析與風險控管，提升企業財務決策效率。", companies: [
    { id: "mindbridge-ai", name: "MindBridge AI", year: "2015年", country: "加拿大", intro: "MindBridge AI 利用AI自動分析財務交易，偵測異常與風險，讓企業更快發現問題並預防詐欺，獲金融機構與4大會計事務所採用。" },
  ] },
  { slug: "game-development", name: "遊戲開發", intro: "AI打造智慧NPC與互動體驗，推動遊戲產業創新發展。", companies: [
    { id: "inworld", name: "Inworld", year: "2021年", country: "美國", intro: "Inworld AI運用生成式AI，為遊戲和虛擬世界打造有個性、情感和記憶的虛擬角色（NPC），提升互動體驗。" },
  ] },
  { slug: "enterprise-content-management", name: "企業內容管理", intro: "AI協助企業內容生成、管理與分析，提升營運效率。", companies: [
    { id: "writer", name: "Writer", year: "2020年", country: "美國", intro: "Writer從競爭激烈的文案生成市場起家，逐步轉型幫助企業利用語言模型生成內容，應用範圍涵蓋產品、銷售、人資與行銷等多個業務領域。" },
  ] },
  { slug: "insurance", name: "保險", intro: "AI自動評估理賠與風險，提升保險服務效率與精準度。", companies: [
    { id: "evolutioniq", name: "EvolutionIQ", year: "2019年", country: "美國", intro: "EvolutionIQ 的 AI會自動評估理賠案件，預測哪些案件有潛在欺詐、哪些應該加速處理，讓保險公司優先關注最關鍵的個案。" },
  ] },
  // Keep the original Taiwan 50+ category at the end
  {
    slug: "taiwan-50plus",
    name: "Taiwan 50 +",
    intro: "台灣AI新創橫跨多元領域，展現本土創新與產業應用實力。",
    companies: [
      { id: "aira", name: "城智科技", subName: "aira", year: "2020年", intro: "2020年創立，提供AI人臉辨識、智慧虛擬圍籬等智慧安防方案，應用於高級住宅、辦公室、工地等場域。" },
      { id: "authme", name: "數位身分", subName: "Authme", year: "2019年", intro: "2019年創立，專門保護數位隱私，阻斷身分詐欺及協助企業實現高效合規的KYC（認識你的客戶）流程。" },
      { id: "berry-ai", name: "華捷智能", subName: "Berry AI", year: "2019年", intro: "2019年創立，透過影像辨識監控得來速和櫃檯服務效率，協助速食餐廳如麥當勞、漢堡王等人員配置。" },
      { id: "cycraft", name: "奧義智慧", subName: "CyCraft", year: "2017年", intro: "2017年創立。為政府、警政國防、銀行和高科技製造產業提供威脅管理與資安服務。" },
      { id: "deepwave", name: "迪威智能", subName: "Deepwave", year: "2019年", intro: "2019年創立。開發音訊處理技術，致力讓電腦如人類般理解聲音，提供偵測、分離、轉錄及降噪服務。" },
      { id: "eland", name: "意藍資訊", subName: "eLAND", year: "2007年", intro: "2007年創立，整合AI與大數據，提供 AI語意分析、社群數據分析及搜尋引擎平台。" },
      { id: "gliacloud", name: "集雅科技", subName: "GliaCloud", year: "2015年", intro: "2015年創立，與YouTube等平台合作，產品可在幾分鐘之內將新聞文章、社群貼文等快速製成短影音。" },
      { id: "mediatek-davinci", name: "聯發科達哥", subName: "MediaTek DaVinci", year: "2024年", intro: "2024年推出聯發科技結合GAI 與LLM技術開發平台，提供流暢自然的智慧對話。" },
      { id: "mobagel", name: "行動貝果", subName: "Mobagel", year: "2015年", intro: "2015年成立，協助零售、製造、金融等產業AI轉型，只要上傳資料、定義問題並選擇訓練方向即可建模。" },
      { id: "omnieyes", name: "動見科技", subName: "OmniEyes", year: "2019年", intro: "2019年創立，核心產品為新世代車隊管理系統「MyFleet」，結合邊緣運算，監測車輛周圍環境是否安全。" },
      { id: "seasalt-ai", name: "海研科技", subName: "Seasalt.ai", year: "2020年", intro: "2020年創立。語音識別、語音合成及自然語言理解技術，為企業提供雲端通訊服務。" },
      { id: "techman-robot", name: "達明機器人", subName: "Techman Robot", year: "2015年", intro: "2015年創立，為台灣唯一的協作型機器人品牌和生產商。產品線包括「TM AI Cobot」系列，結合原生 AI 引擎、機器手臂和視覺系統，研發內建視覺系統的協作型機器人。另也提供移動式機器人系列，搭載於 AGV/AMR，提升生產靈活性和效率。" },
      { id: "turing-drive", name: "台灣智慧駕駛", subName: "Turing Drive", year: "2018年", intro: "2018年創立，致力於自駕技術的開發與商業化應用。產品「AutoDrive」可根據車型及應用環境配置適當的感測器與運算平台。公司已在台灣、日本、泰國等地成功部署自駕運行服務，應用於大型景點、港口、工業區等，提供接駁、物流、安防、環衛等解決方案。" }
    ]
  }
]; 