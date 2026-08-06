/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import tokuten1Img from './tokuten1.png';
import tokuten2Img from './tokuten2.png';
import tokuten3Img from './tokuten3.png';
import tokuten4Img from './tokuten4.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4EDE0] font-sans text-black flex flex-col">
      <main className="max-w-3xl mx-auto px-5 py-12 flex flex-col items-center gap-10 flex-grow w-full">
        
        {/* Title */}
        <div className="bg-[#FFE500] border-4 border-black rounded-full px-8 py-5 shadow-[6px_6px_0_#000] text-center font-bold text-2xl md:text-3xl w-full leading-relaxed">
          今回だけの4大特典は<br />
          こちらからお受け取りください！
        </div>

        {/* Benefits Cards */}
        <div className="w-full flex flex-col gap-8">
          
          {/* Benefit 1 */}
          <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_#000] w-full flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold border-b-[3px] border-black pb-3 leading-snug">
              1、初対戦の相手から“無意識のクセ”を読み取る！『情報収集術』
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
              2、【動画で解説】緊張の正体を知って試合に勝つメンタル攻略法
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
              3、【コピペでOK】あなた専用の『戦略』をAIが自動作成！秘密のAI指示書
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
              <a href="#" className="block w-full bg-[#FFE500] border-4 border-black rounded-xl py-4 px-4 text-center font-bold text-lg md:text-xl shadow-[4px_4px_0_#000] hover:translate-y-[4px] hover:shadow-none transition-all cursor-pointer">
                秘密のAI指示書のダウンロードはこちら
              </a>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_#000] w-full flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl font-bold border-b-[3px] border-black pb-3 leading-snug">
              4、【迷いが消える】ダブルスで勝つための『試合前3分チェックリスト』
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
              <a href="https://hasegawa-office053.com/%E3%82%BF%E3%82%99%E3%83%95%E3%82%99%E3%83%AB%E3%82%B9%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%88.pdf" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#FFE500] border-4 border-black rounded-xl py-4 px-4 text-center font-bold text-lg md:text-xl shadow-[4px_4px_0_#000] hover:translate-y-[4px] hover:shadow-none transition-all cursor-pointer">
                『試合前3分チェックリスト』のダウンロードはこちら
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

        {/* CTA Card */}
        <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-10 shadow-[8px_8px_0_#000] w-full flex flex-col gap-8 mt-2">
          <h2 className="text-xl md:text-3xl font-bold text-center text-black leading-relaxed">
            【無料】個別戦略会議＆説明会の<br />お申し込みはこちら
          </h2>
          
          <div className="flex flex-col gap-5">
            {/* Step 1 */}
            <div className="bg-[#FFF9D8] border-[3px] border-black rounded-xl p-5 flex flex-col items-start gap-3">
              <div className="bg-black text-[#FFE500] font-bold px-4 py-1.5 text-sm md:text-base rounded-md tracking-wider">
                STEP1
              </div>
              <div className="font-bold text-black text-lg md:text-xl">
                以下のLINEに登録
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-[#FFF9D8] border-[3px] border-black rounded-xl p-5 flex flex-col items-start gap-3">
              <div className="bg-black text-[#FFE500] font-bold px-4 py-1.5 text-sm md:text-base rounded-md tracking-wider">
                STEP2
              </div>
              <div className="font-bold text-black text-lg md:text-xl">
                LINEで日程調整を行う
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FFF9D8] border-[3px] border-black rounded-xl p-5 flex flex-col items-start gap-3">
              <div className="bg-black text-[#FFE500] font-bold px-4 py-1.5 text-sm md:text-base rounded-md tracking-wider">
                STEP3
              </div>
              <div className="font-bold text-black text-lg md:text-xl mb-1">
                【無料】個別戦略会議＆説明会開催
              </div>
              <div className="text-sm md:text-base text-gray-800 font-bold leading-relaxed">
                （Google Meetでの開催となりますので、送られたURLをクリックするだけです※アプリのダウンロドなどは一切不要）
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="w-full mt-2">
          <button className="w-full block bg-gradient-to-r from-[#FF6600] to-[#FF3300] border-4 border-black text-white text-lg md:text-2xl font-bold py-6 px-4 rounded-full shadow-[6px_6px_0_#000] hover:translate-y-1 hover:shadow-[4px_4px_0_#000] active:translate-y-2 active:shadow-none transition-all text-center">
            ▶ 今すぐ【無料】個別戦略会議＆説明会に申し込む
          </button>
        </div>

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

