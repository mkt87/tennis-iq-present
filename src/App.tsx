/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import tokuten1Img from './tokuten1.png';
import tokuten2Img from './tokuten2.png';
import tokuten3Img from './tokuten3.png';
import tokuten4Img from './tokuten4.png';
import step1Img from './step1.jpg';
import step2Img from './step2.jpg';
import step3Img from './step3.jpg';
import step4Img from './step4.jpg';
import step5Img from './step5.jpg';

interface StepImageSlotProps {
  src: string;
  alt: string;
}

function StepImageSlot({ src, alt }: StepImageSlotProps) {
  const [localSrc, setLocalSrc] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalSrc(url);
    }
  };

  const currentSrc = localSrc || src;

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="w-full sm:w-[220px] md:w-[230px] aspect-[4/3] rounded-xl border-2 border-black overflow-hidden bg-white relative flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000] cursor-pointer group"
      title="クリックして画像を変更できます"
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <img
        src={currentSrc}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold pointer-events-none">
        📷 画像を変更
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4EDE0] font-sans text-black flex flex-col">
      <main className="max-w-3xl mx-auto px-5 py-12 flex flex-col items-center gap-10 flex-grow w-full">
        
        {/* Title */}
        <div className="bg-[#FFE500] border-4 border-black rounded-full px-5 sm:px-8 py-5 shadow-[6px_6px_0_#000] text-center font-bold text-xl sm:text-2xl md:text-3xl w-full leading-relaxed">
          {/* スマホ表示 */}
          <span className="block md:hidden">
            今回だけの<br />
            4大特典はこちらから<br />
            お受け取りください！
          </span>
          {/* PC・タブレット表示 */}
          <span className="hidden md:block">
            今回だけの4大特典は<br />
            こちらからお受け取りください！
          </span>
        </div>

        {/* Benefits Cards */}
        <div className="w-full flex flex-col gap-8">
          
          {/* Benefit 1 */}
          <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_#000] w-full flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold border-b-[3px] border-black pb-3 leading-snug">
              <span className="text-[#E60000]">特典1</span>、初対戦の相手から“無意識のクセ”を読み取る！<br />
              『情報収集術』
            </h2>
            <div className="flex justify-center w-full">
              <img src={tokuten1Img} alt="特典1 情報収集術" className="md:h-[261px] h-auto max-w-full object-contain" />
            </div>
            <div className="text-black font-bold text-base md:text-lg leading-loose space-y-4">
              <p>初対戦の相手がどんなテニスをしてくるか分からない不安を払拭し。<br />
ですが、この「情報収集術」を使えば、試合前のアップだけで、<br />
相手の弱点や「困った時にどこに逃げるか」という無意識のクセを読み取ることができます。</p>
              <p>つまり、あなたは試合開始前から、プレーの面でも精神面でも相手をコントロールする側に立つことができるようになれます。</p>
            </div>
            <div className="mt-2">
              <a href="https://hasegawa-office053.com/%E6%88%A6%E3%81%86%E5%89%8D%E3%81%AB%E5%8B%9D%E8%B2%A0%E3%82%92%E6%B1%BA%E3%82%81%E3%82%8B%E3%80%8E%E6%83%85%E5%A0%B1%E5%8F%8E%E9%9B%86%E8%A1%93%E3%80%8F.pdf" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#FFE500] border-4 border-black rounded-xl py-4 px-4 text-center font-bold text-lg md:text-xl shadow-[4px_4px_0_#000] hover:translate-y-[4px] hover:shadow-none transition-all cursor-pointer">
                『情報収集術』のダウンロードはこちら
              </a>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_#000] w-full flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold border-b-[3px] border-black pb-3 leading-snug">
              <span className="text-[#E60000]">特典2</span>、【動画で解説】緊張の正体を知って試合に勝つ<br />
              メンタル攻略法
            </h2>
            <div className="flex justify-center w-full">
              <img src={tokuten2Img} alt="特典2 メンタル攻略法" className="md:h-[261px] h-auto max-w-full object-contain" />
            </div>
            <div className="text-black font-bold text-base md:text-lg leading-loose space-y-4">
              <p>この動画は、試合になると緊張で腕が縮こまってミスをしてしまったり、<br />
普段の練習通りプレーができないといった「チキり」やパニックを根絶させるための動画になっています。</p>
              <p>緊張のメカニズムを科学的に知ることで、あなたはもうプレッシャーのかかる大事なポイントでも<br />
頭が真っ白になることなく、練習通りにポイントを取り切ることができるようになります。</p>
            </div>
            <div className="mt-2">
              <a href="https://youtu.be/fx448g6QPWs" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#FFE500] border-4 border-black rounded-xl py-4 px-4 text-center font-bold text-lg md:text-xl shadow-[4px_4px_0_#000] hover:translate-y-[4px] hover:shadow-none transition-all cursor-pointer">
                勝つメンタル攻略法のご視聴はこちら
              </a>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_#000] w-full flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold border-b-[3px] border-black pb-3 leading-snug">
              <span className="text-[#E60000]">特典3</span>、【コピペでOK】あなた専用の『戦略』を<br />
              AIが自動作成！秘密のAI指示書
            </h2>
            <div className="flex justify-center w-full">
              <img src={tokuten3Img} alt="特典3 秘密のAI指示書" className="md:h-[261px] h-auto max-w-full object-contain" />
            </div>
            <div className="text-black font-bold text-base md:text-lg leading-loose space-y-4">
              <p>この動画の中で解説した「大人のカンニングペーパー」を、あなた自身でも簡単に作れる魔法のツールです。</p>
              <p>あなたの「得意なショット」や「苦手なショット」をchatGPTやGeminiといったAIに入力するだけで、<br />
今の技術のまま勝率を跳ね上げる具体的な配球パターンをAIが瞬時に弾き出してくれます。</p>
              <p>これまでAIを使っても試合に勝てていなかった方は、ぜひ、ここに書かれている指示書をAIに送ってください。</p>
            </div>
            <div className="mt-2">
              <a href="https://docs.google.com/document/d/19IjIndmeyR68I_V-TPRS32UqXz8Rb2ElQfHwWoOmWMU/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#FFE500] border-4 border-black rounded-xl py-4 px-4 text-center font-bold text-lg md:text-xl shadow-[4px_4px_0_#000] hover:translate-y-[4px] hover:shadow-none transition-all cursor-pointer">
                秘密のAI指示書のダウンロードはこちら
              </a>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_#000] w-full flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold border-b-[3px] border-black pb-3 leading-snug">
              <span className="text-[#E60000]">特典4</span>、【迷いが消える】ダブルスで勝つための<br />
              『試合前3分チェックリスト』
            </h2>
            <div className="flex justify-center w-full">
              <img src={tokuten4Img} alt="特典4 ダブルスで勝つための試合前3分チェックリスト" className="md:h-[261px] h-auto max-w-full object-contain" />
            </div>
            <div className="text-black font-bold text-base md:text-lg leading-loose space-y-4">
              <p>このチェックリストがあれば「なかなかポーチに出られない」<br />
「センターをお見合いしてしまう」「スマッシュが苦手」といった、<br />
ダブルスでよくある悩みを一気に解消することができます。</p>
            </div>
            <div className="mt-2">
              <a
                href="https://hasegawa-office053.com/%E3%82%BF%E3%82%99%E3%83%95%E3%82%99%E3%83%AB%E3%82%B9%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%88.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#FFE500] border-4 border-black rounded-xl py-3.5 md:py-4 px-2 md:px-4 text-center font-bold text-[15px] sm:text-base md:text-xl shadow-[4px_4px_0_#000] hover:translate-y-[4px] hover:shadow-none transition-all cursor-pointer"
              >
                {/* スマホ表示 (2行) */}
                <span className="block md:hidden leading-snug">
                  『試合前3分チェックリスト』の<br />
                  ダウンロードはこちら
                </span>
                {/* PC・タブレット表示 */}
                <span className="hidden md:inline">
                  『試合前3分チェックリスト』のダウンロードはこちら
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Closing Text */}
        <div className="w-full px-4 mt-2">
          <p className="text-base md:text-xl font-bold text-black text-left leading-relaxed">
            他では絶対に手に入らない非売品の4大特典を受け取るためにも、まずはお気軽にお申し込みください。
          </p>
        </div>

        {/* お申し込み方法 セクション */}
        <section className="bg-white border-3 border-[3px] border-black rounded-[28px] p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#000] w-full flex flex-col gap-6 mt-2">
          {/* 1. セクション見出し */}
          <div className="flex flex-col items-center text-center my-2">
            <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-black text-black leading-snug tracking-tight">
              【無料】個別作戦会議＆説明会の<br />お申し込み方法
            </h2>
          </div>

          {/* 2. 各ステップの内容（STEP 1 〜 5） */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full">
            {/* STEP 1 */}
            <div className="bg-[#FEF8D3] border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
              <div className="flex-1 flex flex-col items-start text-left justify-center w-full">
                <span className="inline-block bg-black text-[#FFE600] font-black text-xs px-3 py-1 rounded tracking-wider mb-2.5">
                  STEP1
                </span>
                <h3 className="font-black text-lg sm:text-xl text-black leading-snug">
                  専用LINEに友だち追加
                </h3>
                <p className="text-[13px] font-bold text-black mt-2 leading-relaxed">
                  （※すでに登録済みの方はそのままLINEを開いてください）
                </p>
              </div>
              <StepImageSlot
                src={step1Img}
                alt="STEP1 専用LINEに友だち追加"
              />
            </div>

            {/* STEP 2 */}
            <div className="bg-[#FEF8D3] border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
              <div className="flex-1 flex flex-col items-start text-left justify-center w-full">
                <span className="inline-block bg-black text-[#FFE600] font-black text-xs px-3 py-1 rounded tracking-wider mb-2.5">
                  STEP2
                </span>
                <h3 className="font-black text-lg sm:text-xl text-black leading-snug">
                  LINEで「個別戦略」とだけ入力して送信
                </h3>
              </div>
              <StepImageSlot
                src={step2Img}
                alt="STEP2 LINEで「個別戦略」とだけ入力して送信"
              />
            </div>

            {/* STEP 3 */}
            <div className="bg-[#FEF8D3] border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
              <div className="flex-1 flex flex-col items-start text-left justify-center w-full">
                <span className="inline-block bg-black text-[#FFE600] font-black text-xs px-3 py-1 rounded tracking-wider mb-2.5">
                  STEP3
                </span>
                <h3 className="font-black text-lg sm:text-xl text-black leading-snug whitespace-pre-line">
                  私からLINEに直接ご返信{"\n"}そこで日程調整を行いましょう！
                </h3>
              </div>
              <StepImageSlot
                src={step3Img}
                alt="STEP3 私からLINEに直接ご返信 そこで日程調整を行いましょう！"
              />
            </div>

            {/* STEP 4 */}
            <div className="bg-[#FEF8D3] border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
              <div className="flex-1 flex flex-col items-start text-left justify-center w-full">
                <span className="inline-block bg-black text-[#FFE600] font-black text-xs px-3 py-1 rounded tracking-wider mb-2.5">
                  STEP4
                </span>
                <h3 className="font-black text-lg sm:text-xl text-black leading-snug">
                  日程が確定しましたら専用URLのお渡し。
                </h3>
                <p className="text-[13px] font-bold text-black mt-2 leading-relaxed whitespace-pre-line">
                  「Google Meet」でのオンライン開催となりますので、アプリ等のダウンロードは一切不要。{"\n"}（URLをクリックするだけ）
                </p>
              </div>
              <StepImageSlot
                src={step4Img}
                alt="STEP4 日程が確定しましたら専用URLのお渡し"
              />
            </div>

            {/* STEP 5 */}
            <div className="bg-[#FEF8D3] border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
              <div className="flex-1 flex flex-col items-start text-left justify-center w-full">
                <span className="inline-block bg-black text-[#FFE600] font-black text-xs px-3 py-1 rounded tracking-wider mb-2.5">
                  STEP5
                </span>
                <h3 className="font-black text-lg sm:text-xl text-black leading-snug">
                  当日、時間になりましたらURLをクリックして作戦会議スタート！
                </h3>
              </div>
              <StepImageSlot
                src={step5Img}
                alt="STEP5 作戦会議スタート"
              />
            </div>
          </div>

          {/* 下向き矢印（反転三角形） */}
          <div className="flex justify-center my-3 sm:my-4">
            <svg width="68" height="38" viewBox="0 0 68 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 上部台形 */}
              <polygon points="4,4 64,4 49,20 19,20" fill="#FF5500" stroke="black" strokeWidth="3" strokeLinejoin="round" />
              {/* 下部三角形 */}
              <polygon points="19,20 49,20 34,34" fill="#D33500" stroke="black" strokeWidth="3" strokeLinejoin="round" />
              {/* 外枠 */}
              <polygon points="4,4 64,4 34,34" fill="none" stroke="black" strokeWidth="3" strokeLinejoin="round" />
            </svg>
          </div>

          {/* LINE公式アカウント友だち追加ボタン（CTAバナー） */}
          <div className="w-full">
            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block bg-[#06C755] hover:bg-[#05b34c] border-[3px] border-black rounded-2xl py-4 px-4 sm:px-6 shadow-[5px_5px_0px_#000] hover:translate-y-0.5 active:translate-y-1 transition-all text-center group cursor-pointer"
            >
              {/* 上部ラベル: ＼ LINE公式アカウント 無料で参加・日程調整 ／ */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-white font-bold text-xs sm:text-sm mb-2.5">
                <span>＼</span>
                <span className="bg-[#05a345] px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-black">
                  LINE公式アカウント
                </span>
                <span className="tracking-wide">無料で参加・日程調整</span>
                <span>／</span>
              </div>

              {/* メイン行: [LINEアイコン] 友だち追加はこちら [ > ] */}
              <div className="flex items-center justify-center gap-3 sm:gap-5">
                {/* LINE白丸アイコン */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-black/15 shadow-sm">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5C11.716 5 5 10.373 5 17c0 4.227 2.76 7.935 6.944 9.946-.304 1.135-1.127 4.14-1.294 4.773-.213.794.288.784.606.577.252-.164 3.99-2.71 5.602-3.805.702.102 1.427.159 2.142.159 8.284 0 15-5.373 15-12S32.284 5 20 5z" fill="#06C755" />
                    <text x="20" y="21" fill="white" fontSize="9" fontWeight="900" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif">LINE</text>
                  </svg>
                </div>

                {/* 友だち追加はこちら */}
                <span className="text-2xl sm:text-3xl md:text-[32px] font-black text-white tracking-wider">
                  友だち追加はこちら
                </span>

                {/* 右矢印白丸 */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shrink-0 border-2 border-black shadow-[1px_1px_0px_#000]">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-black" viewBox="0 0 24 24" fill="none" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-black py-6 mt-12">
        <p className="text-white text-center text-sm md:text-base font-bold">
          &copy; 大人のテニスIQ戦略 動画プログラム
        </p>
      </footer>
    </div>
  );
}

