// Full template for all tech categories and Taiwan 50+
export const categories = [
  {
    slug: "enterprise-ai-assistant",
    name: "企業AI助理",
    companies: [
      { id: "adept", name: "Adept", logo: "adept.png", year: "2022年", country: "美國", intro: "Adept希望成為每個工作者的AI 助理，讓 AI能夠操作各種軟體，協助用戶自動化日常工作。該公司吸引了亞馬遜在內的4億美元資金。" },
      { id: "ema", name: "Ema", logo: "ema.png", year: "2023年", country: "美國", intro: "EMA AI為企業培養「通用AI員工」，透過AI協助企業自動化各種日常任務，讓員工可以去做更有價值的事情──如果有的話。" },
      { id: "pryon", name: "Pryon", logo: "pryon.png", year: "2017年", country: "美國", intro: "Pryon由曾參與Alexa、Siri 和Watson開發的AI先驅創立，透過強大的資料擷取與檢索引擎，讓企業從數據中挖掘決策優勢。" },
      // ... more companies ...
    ]
  },
  {
    slug: "search",
    name: "搜尋",
    companies: [
      { id: "glean", name: "Glean", country: "美國", year: "2019年", intro: "Glean是 AI企業搜尋平台，整合企業內部的應用程式和服務，如 Google工具和微軟 Ofﬁce，讓員工快速搜尋和定位零散的資訊。", logo: "glean.png" },
      { id: "hebbia", name: "Hebbia", country: "美國", year: "2020年", intro: "Hebbia讓企業「問 AI」，而非用關鍵字搜索，直接解析財報、法律文件、內部報告等數據，提供即時洞察，估值達到7億美元。", logo: "hebbia.png" },
      { id: "perplexity", name: "Perplexity", country: "美國", year: "2022年", intro: "Perplexity是一款由AI驅動的「對話式搜尋引擎」，並會在回應中直接附上資料來源。截至2025年年初的最新資訊，Perplexity每月回答了250億個用戶問題。在擁有相當不錯的用戶基礎後，怎麼賺錢，是整個AI界睜大眼睛觀望的關鍵問題。", logo: "perplexity.png" },
      { id: "twelvelabs", name: "Twelve Labs", country: "美國", year: "2021年", intro: "Twelve Labs 讓 AI能像人類一樣理解影片內容。舉例來說，用戶可以輸入「找出球員得分後的慶祝動作」， AI就能快速定位球賽中相關的影像片段。目前該公司的客戶包含內容創作者、娛樂公司、體育組織等。", logo: "twelvelabs.png" },
    ]
  },
  {
    slug: "generative-ai",
    name: "創作(生成式AI)",
    companies: [
      { id: "ideogram", name: "Ideogram", country: "加拿大", year: "2023年", intro: "Ideogram特別擅長在圖像中生成可讀的文字，這是其他同類模型的難點，該公司的服務可用於生成逼真的圖像、海報、LOGO等。", logo: "ideogram.png" },
      { id: "lumaai", name: "Luma AI", country: "美國", year: "2021年", intro: "Luma AI把目標放在3D內容生成技術，透過 AI 將2D照片轉換為高精度的3D模型，可應用於遊戲、電影、電商等領域。", logo: "luma ai.png" },
      { id: "midjourney", name: "Midjourney", country: "美國", year: "2022年", intro: "Midjourney 開發AI圖像生成工具，用戶只需輸入文字描述，即可生成高品質的圖像。截至2023年，用戶數已突破千萬，年收達1億美元。", logo: "midjourney.png" },
      { id: "pika", name: "Pika", country: "美國", year: "2023年", intro: "Pika專注於AI影片生成，能將文字或圖像轉換為各種風格，如3D動畫、動漫或電影，吸引超過50萬用戶，每週創建數百萬段影片。", logo: "pika.png" },
      { id: "runway", name: "Runway", country: "美國", year: "2018年", intro: "橫掃奧斯卡7項大獎的《媽的多重宇宙》也透過Runway的 AI影像技術製作特效，其自稱為媒體和娛樂公司，認為AI將是影視產業內的基礎。", logo: "runway.png" },
      { id: "stability", name: "Stability AI", country: "英國", year: "2019年", intro: "Stability AI 開發開源模型 Stable Diffusion，提供生成式圖像服務核心技術並推動生態共建和社群交流，加速了 AI 圖像生成在產業與創作領域的普及。", logo: "stability.png" },
      { id: "synthesia", name: "Synthesia", country: "英國", year: "2017年", intro: "Synthesia讓文件或網頁轉換為由AI主持的影片，這些虛擬主持人有逼真的表情、肢體語言和語調。該技術被用於培訓、行銷和溝通等。", logo: "synthesia.png" },
    ]
  },
  {
    slug: "chatbot",
    name: "chatbot",
    companies: [
      { id: "character", name: "Character.ai", country: "美國", year: "2022年", intro: "Character.ai讓用戶與虛擬角色進行對話，提供擬人化的AI聊天體驗。 2024年中，2位創辦人帶著團隊成員加入Google。", logo: "character.png" },
      { id: "poe", name: "Poe", country: "美國", year: "2022年", intro: "Poe由知名問答社區Quora推出，整合了多家大型語言模型，讓用戶在單一介面中體驗不同的AI聊天機器人。", logo: "poe.png" },
    ]
  },
  {
    slug: "translation",
    name: "翻譯",
    companies: [
      { id: "deepl", name: "DeepL", country: "德國", year: "2017年", intro: "DeepL為AI翻譯，針對語言、跨國溝通的細節優化，強調翻譯結果的品質和自然流暢，被認為優於一般的AI翻譯。現已被全球超過10萬家企業、政府所採用，也提供AI寫作工具，協助用戶改善英文和德文寫作。", logo: "deepl.png" },
      // ... more companies ...
    ]
  },
  {
    slug: "voice",
    name: "語音",
    companies: [
      { id: "assemblyai", name: "AssemblyAI", country: "美國", year: "2017年", intro: "AssemblyAI透過API提供高準確度語音識別、摘要與分析，讓企業輕鬆整合AI語音技術，服務已被《華爾街日報》、Spotify採用。", logo: "assemblyai.png" },
      { id: "elevenlabs", name: "ElevenLabs", country: "美國", year: "2022年", intro: "ElevenLabs開發AI語音合成技術，提供多語言、多情緒、高擬真的語音生成服務，應用於有聲書、遊戲角色配音等領域。", logo: "iieivenlabs.png" },
      { id: "soundhound", name: "SoundHound", country: "美國", year: "2005年", intro: "SoundHound最初以「這首歌是什麼？」的語音識別技術起家，現拓展到語音識別平台、語音虛擬助理等領域，為企業提供高品質的對話服務。", logo: "soundhoundai.png" },
      { id: "suno", name: "SUNO", country: "美國", year: "2022年", intro: "Suno就像是音樂界的ChatGPT，專注於生成式AI音樂創作，用戶只要透過文字內容，就能生成包含人聲和樂器的完整歌曲。", logo: "suno.png" },
    ]
  },
  {
    slug: "taiwan-50plus",
    name: "Taiwan 50 +",
    companies: [
      { id: "aetherai", name: "雲象科技", subName: "aetherAI", year: "2015年", intro: "2015年創立，提供數位病理方案和醫療用影像AI輔助診斷系統，與美國、台灣多家頂尖醫學中心有合作。", logo: "aetherai.png" },
      { id: "aiello", name: "犀動智能", subName: "Aiello", year: "2019年", intro: "2019年創立，針對旅宿業提供解決方案，核心產品「小美犀AI智能語音助理」，替旅客解決各式房務需求，目前已協助超過30家飯店AI數位轉型。", logo: "aiello.png" },
      { id: "apmic", name: "亞太智能機器", subName: "APMIC", year: "2017年", intro: "2017年創立，推出在地化模型「CaiGunn開講」，協助企業打造AI大腦，管理內部數據與知識。APMIC 是NVIDIA在台唯一指定的LLM獨立軟體供應商，也是 Google認證的AI技術新星。", logo: "apmic.png" },
      { id: "appier", name: "沛星互動科技", subName: "Appier", year: "2012年", intro: "2012年創立，以 AI為核心的SaaS公司。藉由AI分析消費者數據與顧客行為，替客戶進行精準的個人化行銷。在亞太、歐美等地有 17 個據點，為逾千家全球品牌與代理商提供服務，並於東京證券交易所掛牌上市，投資者包括軟銀集團及紅衫資本。", logo: "appier.png" },
      { id: "awoo", name: "阿物科技", subName: "awoo", year: "2015年", intro: "2015年創立，擅長商品數據分析與行銷自動化，為電商提供SEO、EDM行銷等服務。", logo: "awoo.png" },
      { id: "canner", name: "易開科技", subName: "Canner", year: "2016年", intro: "2016年創立，讓企業擁有統一的數據中台，可用自然語言要求AI撈取數據，有近6成使用者來自歐美。", logo: "canner.png" },
      { id: "chimesai", name: "詠鋐智能", subName: "Chimes AI", year: "2020年", intro: "2020年創立，開發無需編碼的No-Code AI 平台，提供高耗能產業數據、行為分析和流程自動化解方。", logo: "chimesai.png" },
      { id: "cresclab", name: "漸強實驗室", subName: "Cresclab", year: "2017年", intro: "2017年創立，善於整合多通路社群數據，為客戶提供行銷、銷售科技，客戶有IKEA、H&M、星巴克等。", logo: "cresclab.png" },
      { id: "deeli_ai", name: "永恆突觸", subName: "Deeli AI", year: "2023年", intro: "2023年由聯發科前成員創立，總部位在美國加州，整合多元資料，幫助投資者提升技術偵查與投資效率。", logo: "deeli_ai.png" },
      { id: "dentscape", name: "德睿生醫", subName: "Dentscape", year: "2021年", intro: "2021年創立，以 3D AI軟體自動設計假牙，如牙冠、牙橋和咬合板等，提升牙科治療效率與品質。", logo: "dentscape.png" },
      { id: "everfortuneai", name: "長佳智能", subName: "Everfortune AI", year: "2018年", intro: "2018年創立。提供醫療大數據分析、雲端生醫平台，以及客製化醫療 AI解決方案。", logo: "everfortuneai.png" },
      { id: "frontier_cool", name: "臺灣通用紡織科技", subName: "Frontier.cool", year: "2020年", intro: "2020年創立。推動紡織產業的數位轉型，為國際品牌實現高效、零浪費的智慧生產流程。", logo: "frontier_cool.png" },
      { id: "homeeai", name: "睿締國際科技", subName: "HOMEE AI", year: "2017年", intro: "2017年創立，提供房地產、家居產業 AI解決方案，房仲用手機掃描房源可生成2D格局圖及3D格局模型。", logo: "homeeai.png" },
      { id: "hysontechnology", name: "海盛科技", subName: "Hyson Technology", year: "2018年", intro: "2018年創立的農、漁業用AIoT。核心產品為「養好魚水產育成監控系統」，有助漁民即時監控養殖池，提升生產效率。AI水下影像還原技術則適用於智慧水產養殖和水下考古等領域。", logo: "hysontechnology.png" },
      { id: "ichase", name: "智逐科技", subName: "iCHASE", year: "2021年", intro: "2021年創立，家禽養殖業AIoT，產品有智慧秤重計、AI家禽照護系統與 AI雷射驅鳥器，降低養殖風險。", logo: "ichase.png" },
      { id: "kolr", name: "網紅雷達", subName: "Kolr", year: "2018年", intro: "2018年創立的iKala旗下網紅媒合平台，獨家AI數據庫涵蓋300萬筆跨國網紅名單，為品牌提供精準行銷。", logo: "kolr.png" },
      { id: "lawsnote", name: "七法", subName: "Lawsnote", year: "2016年", intro: "2016年創立，以「法學搜尋系統」、「DocPie」契約生成系統，提升法律服務效率。", logo: "lawsnote.png" },
      { id: "legalsign_ai", name: "律果科技", subName: "LegalSign.ai", year: "2019年", intro: "2019年創立，專為台灣企業設計，提供一站式合約生命週期（CLM）管理平台、AI法務助理等服務。", logo: "legalsign_ai.png" },
      { id: "lydiaai", name: "諾生莉迪亞智能科技", subName: "Lydia AI", year: "2015年", intro: "2015年於加拿大成立，開發健康風險評估模型，快速生成健康報告，提升保險服務的個人化與效率。", logo: "lydiaai.png" },
      { id: "metai", name: "宇見智能科技", subName: "MetAI", year: "2022年", intro: "2022年創立。以 AI結合3D技術生成合成資料，為智慧製造、倉儲等建立擬真的數位孿生環境，模擬現實條件以優化製程，提升生產效率與品質，獲得 NVIDIA 投資。", logo: "metai.png" },
      { id: "otoadd", name: "洞見未來", subName: "Otoadd", year: "2018年", intro: "2018年創立，開發結合助聽器與藍牙耳機功能的現代化聽力解決方案，提升聽損者於各種環境的體驗。", logo: "otoadd.png" },
      { id: "super8", name: "雲發互動科技", subName: "Super 8", year: "2018年", intro: "2018年創立，專注於對話式行銷科技，協助企業整合行銷與客服數據。合作對象有UNIQLO、Pinkoi 等。", logo: "super8.png" },
      { id: "jubo", name: "智齡科技", subName: "JUBO", year: "2018年", intro: "由台大教授康仕仲於2018年創立。透過AIoT，推出「Jubo長照機構數位化解決方案」，為超過730家長照機構提供智慧照護方案，共累積5億多筆照護數據、覆蓋4萬多名長者的健康資訊。公司產品進軍北美、日本及東南亞市場，並獲得國家新創獎等肯定。", logo: "jubo.png" },
      { id: "perfectcorp", name: "玩美移動", subName: "Perfect Corp.", year: "2015年", intro: "2015年由訊連科技轉投資成立。主打 AI結合AR技術，應用在美妝與時尚領域，強調沉浸式購物。", logo: "perfectcorp.png" },
      { id: "powerarena", name: "百威雷", subName: "PowerArena", year: "2017年", intro: "2017年創立，產品「HOP人因作業平台」可實現對人力密集型生產線的即時監控與數據分析。", logo: "powerarena.png" },
      { id: "profetai", name: "杰倫智能", subName: "Profet AI", year: "2018年", intro: "2018年創立，開發無程式碼機器學習平台「AutoML」，已為超過160家製造業客戶提供AI解決方案。另也推出了全球首款企業級AI治理平台AILM（AI Lifecycle Management），幫助企業實現AI工作流程標準化，有效管理模型從概念到實際應用的完整生命週期。", logo: "profetai.png" },
      { id: "sustaihub", name: "永訊智庫", subName: "Sustaihub", year: "2019年", intro: "2019年創立，提供企業ESG多元解決方案，核心產品「Syber 永續管理系統」可加速永續報告書編制。", logo: "sustaihub.png" },
      { id: "thingnario", name: "慧景科技", subName: "Thingnario", year: "2017年", intro: "2017年創立，透過AIoT雲端監控、數據分析與警報，幫助能源客戶提升發電效率。", logo: "thingnario.png" }
    ]
  }
]; 