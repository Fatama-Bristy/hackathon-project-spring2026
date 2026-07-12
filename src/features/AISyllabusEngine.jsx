import React, { useState, useRef, useEffect } from 'react';

// ============================================================
// AI DE-BLOAT SIMULATION ENGINE
// ============================================================
function deBloatText(rawText) {
  if (!rawText.trim()) return { filtered: '', stats: null };

  const fillerWords = [
    'basically', 'actually', 'literally', 'honestly', 'like',
    'you know', 'i mean', 'sort of', 'kind of', 'just',
    'really', 'very very', 'so so', 'um', 'uh', 'ah',
    'in terms of', 'when it comes to', 'at the end of the day',
    'it goes without saying', 'needless to say', 'as a matter of fact',
    'for all intents and purposes', 'in this day and age',
    'it is important to note that', 'it should be noted that',
    'it is worth mentioning that', 'in order to',
    'due to the fact that', 'owing to the fact that',
    'on the grounds that', 'for the purpose of',
    'in the event that', 'in spite of the fact that',
    'notwithstanding', 'herein', 'thereof', 'wherein',
    'heretofore', 'henceforth', 'whilst', 'amongst',
    'furthermore', 'moreover', 'nevertheless', 'notwithstanding',
    'subsequently', 'aforementioned', 'hitherto'
  ];

  let filtered = rawText;
  let removedCount = 0;
  let originalWords = rawText.split(/\s+/).length;

  // Remove filler phrases (case-insensitive)
  fillerWords.forEach(filler => {
    const regex = new RegExp(`\\b${filler}\\b`, 'gi');
    const matches = filtered.match(regex);
    if (matches) {
      removedCount += matches.length;
      filtered = filtered.replace(regex, '');
    }
  });

  // Collapse multiple spaces
  filtered = filtered.replace(/\s{2,}/g, ' ').trim();

  // Remove redundant sentences (duplicate detection)
  const sentences = filtered.split(/(?<=[.!?])\s+/);
  const seen = new Set();
  const uniqueSentences = [];
  let duplicateRemoved = 0;

  sentences.forEach(sentence => {
    const normalized = sentence.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalized.length > 10 && seen.has(normalized)) {
      duplicateRemoved++;
    } else {
      if (normalized.length > 10) seen.add(normalized);
      uniqueSentences.push(sentence);
    }
  });

  filtered = uniqueSentences.join(' ');

  // Shorten overly verbose phrases
  const shorteners = {
    'at this point in time': 'now',
    'in the near future': 'soon',
    'a large number of': 'many',
    'a significant number of': 'many',
    'in close proximity to': 'near',
    'has the ability to': 'can',
    'is able to': 'can',
    'prior to': 'before',
    'subsequent to': 'after',
    'in accordance with': 'per',
    'with regard to': 'about',
    'with respect to': 'about',
    'in the vicinity of': 'near',
    'on a daily basis': 'daily',
    'on a regular basis': 'regularly',
    'take into consideration': 'consider',
    'give consideration to': 'consider',
    'is indicative of': 'indicates',
    'make an adjustment to': 'adjust',
    'arrive at a conclusion': 'conclude',
    'carry out an investigation': 'investigate',
    'come to a decision': 'decide',
    'put an end to': 'end',
    'in the absence of': 'without',
  };

  Object.entries(shorteners).forEach(([long, short]) => {
    const regex = new RegExp(long, 'gi');
    const matches = filtered.match(regex);
    if (matches) {
      removedCount += matches.length * 2;
      filtered = filtered.replace(regex, short);
    }
  });

  const finalWords = filtered.split(/\s+/).filter(w => w.length > 0).length;
  const reductionPercent = Math.round(((originalWords - finalWords) / originalWords) * 100);

  return {
    filtered: filtered || rawText,
    stats: {
      originalWords,
      filteredWords: finalWords,
      fillerRemoved: removedCount,
      duplicatesRemoved: duplicateRemoved,
      reductionPercent: Math.max(reductionPercent, 0),
      noiseLevel: reductionPercent > 40 ? 'CRITICAL' : reductionPercent > 20 ? 'MODERATE' : 'LOW',
      clarityScore: Math.min(100, 60 + (100 - reductionPercent))
    }
  };
}


// ============================================================
// STAT CARD COMPONENT
// ============================================================
function StatCard({ label, value, color, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`border-2 border-[#191c1e] bg-white p-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <span className="font-mono text-[10px] text-[#565e74] font-bold tracking-wider uppercase block">
        {label}
      </span>
      <span className={`font-black text-xl ${color}`}>{value}</span>
    </div>
  );
}


// ============================================================
// MAIN DASHBOARD
// ============================================================
export default function AntiKuddusDashboard({ onLogout }) {
  const [buttonText, setButtonText] = useState("ENGAGE AI DE-BLOAT ENGINE");
  const [isProcessing, setIsProcessing] = useState(false);
  const [rawText, setRawText] = useState('');
  const [outputData, setOutputData] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const [outputVisible, setOutputVisible] = useState(false);
  const [scanLine, setScanLine] = useState(false);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setRawText(e.target.value);
    setCharCount(e.target.value.length);
  };

  const handleEngage = () => {
    if (!rawText.trim()) {
      setButtonText("⚠ NO INPUT DETECTED");
      setTimeout(() => {
        setButtonText("ENGAGE AI DE-BLOAT ENGINE");
      }, 2000);
      return;
    }

    setIsProcessing(true);
    setOutputVisible(false);
    setScanLine(true);
    setButtonText("SCANNING FOR FILLER...");

    setTimeout(() => {
      setButtonText("REMOVING NOISE...");
    }, 800);

    setTimeout(() => {
      setButtonText("EXTRACTING CORE DATA...");
    }, 1500);

    setTimeout(() => {
      const result = deBloatText(rawText);
      setOutputData(result);
      setScanLine(false);
      setButtonText("DE-BLOAT COMPLETE ✓");

      setTimeout(() => {
        setOutputVisible(true);
      }, 300);

      setTimeout(() => {
        setButtonText("ENGAGE AI DE-BLOAT ENGINE");
        setIsProcessing(false);
      }, 3000);
    }, 2200);
  };

  const handleClear = () => {
    setRawText('');
    setCharCount(0);
    setOutputData(null);
    setOutputVisible(false);
    if (textareaRef.current) textareaRef.current.focus();
  };

  const bufferUsed = (charCount / 4000) * 100;

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans antialiased flex flex-col">

      {/* ========== SYSTEM STATUS BAR ========== */}
      <div className="bg-[#eceef0] px-6 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-[#191c1e] gap-2">
        <div className="flex items-center gap-3">
          <div className={`w-2.5 h-2.5 rounded-full ${isProcessing ? 'bg-[#ba0029] animate-pulse' : 'bg-[#006948] animate-pulse'}`}></div>
          <span className={`font-mono text-[11px] font-bold ${isProcessing ? 'text-[#ba0029]' : 'text-[#006948]'}`}>
            {isProcessing ? 'SYSTEM STATUS: PROCESSING' : 'SYSTEM STATUS: ONLINE'}
          </span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-[11px] text-[#ba0029] font-bold">
            THREAT LEVEL: {outputData?.stats?.noiseLevel || 'STANDBY'}
          </span>
          <div className="h-4 w-[1px] bg-[#191c1e] hidden sm:block"></div>
          <span className="font-mono text-[11px] text-[#565e74] font-medium">ENCRYPTION: AES-256</span>
          <div className="h-4 w-[1px] bg-[#191c1e] hidden sm:block"></div>
          <span className="font-mono text-[11px] text-[#565e74] font-medium">
            BUFFER: {charCount}/4000
          </span>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="p-4 sm:p-6 lg:p-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 max-w-[1440px] mx-auto">

          {/* ===== LEFT: RAW SYLLABUS INPUT ===== */}
          <section className="lg:col-span-7 flex flex-col gap-5">
            <div className="bg-white border-2 border-[#191c1e] p-5 sm:p-6 shadow-[6px_6px_0px_0px_rgba(25,28,30,1)] flex flex-col gap-4">

              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-2 border-[#191c1e] pb-3 gap-2">
                <div>
                  <h2 className="text-xl font-black uppercase text-[#191c1e]">Raw Syllabus Input</h2>
                  <p className="font-mono text-xs font-bold text-[#565e74] mt-1 tracking-wider">FEED THE MACHINE</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] bg-[#eceef0] px-2 py-1 font-bold border border-[#191c1e]">
                    {charCount} CHARS
                  </span>
                  <button
                    onClick={handleClear}
                    className="font-mono text-[10px] bg-[#ba0029] text-white px-2 py-1 font-bold border border-[#191c1e] hover:bg-[#8b0020] transition-colors"
                  >
                    CLEAR
                  </button>
                </div>
              </div>

              {/* Buffer Progress Bar */}
              <div className="w-full h-2 bg-[#eceef0] border border-[#191c1e]">
                <div
                  className={`h-full transition-all duration-300 ${
                    bufferUsed > 90 ? 'bg-[#ba0029]' : bufferUsed > 60 ? 'bg-[#e9bcba]' : 'bg-[#006948]'
                  }`}
                  style={{ width: `${Math.min(bufferUsed, 100)}%` }}
                ></div>
              </div>

              {/* Textarea */}
              <div className="relative">
                {scanLine && (
                  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                    <div className="w-full h-[2px] bg-[#ba0029] shadow-[0_0_8px_2px_rgba(186,0,41,0.5)] animate-scan"></div>
                  </div>
                )}
                <textarea
                  ref={textareaRef}
                  value={rawText}
                  onChange={handleTextChange}
                  className={`w-full h-72 sm:h-80 bg-[#f2f4f6] border-2 border-[#191c1e] focus:ring-0 focus:border-[#ba0029] font-mono text-sm p-4 resize-none placeholder:text-[#c4a8a5] outline-none transition-colors ${
                    isProcessing ? 'opacity-70' : ''
                  }`}
                  placeholder={`Paste Kuddus's long-form statements here...\n\nExample:\n"It is important to note that, at this point in time, we need to basically take into consideration the fact that the syllabus, in terms of its content, is kind of sort of not really organized in a manner that is indicative of, you know, a clear structure when it comes to the fundamental concepts..."`}
                  disabled={isProcessing}
                />
              </div>

              {/* ENGAGE BUTTON */}
              <button
                onClick={handleEngage}
                disabled={isProcessing}
                className={`w-full py-4 sm:py-5 text-white font-black tracking-tighter text-lg sm:text-xl uppercase border-2 border-[#191c1e] transition-all transform active:scale-[0.98] shadow-[4px_4px_0px_0px_rgba(25,28,30,1)] active:shadow-[2px_2px_0px_0px_rgba(25,28,30,1)] ${
                  isProcessing
                    ? 'bg-gradient-to-r from-emerald-600 to-[#00855d] cursor-wait'
                    : 'bg-gradient-to-r from-cyan-600 to-[#ba0029] hover:from-cyan-500 hover:to-[#d4103e] cursor-pointer'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {!isProcessing && !buttonText.includes('COMPLETE') && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {isProcessing && (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  )}
                  {buttonText}
                </span>
              </button>
            </div>

            {/* QUICK EXAMPLES */}
            <div className="bg-white border-2 border-[#191c1e] p-4 shadow-[4px_4px_0px_0px_rgba(25,28,30,1)]">
              <h3 className="font-mono text-[10px] font-bold text-[#565e74] tracking-wider uppercase mb-3">
                Quick Test Samples
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    label: "Verbose Academic",
                    text: "It is important to note that, in terms of the fundamental theoretical underpinnings of this particular subject area, it goes without saying that the aforementioned concepts are, as a matter of fact, basically and essentially the cornerstone upon which the entire edifice of the discipline is constructed. Furthermore, it should be noted that these concepts are, in and of themselves, indicative of a broader paradigm that has, over the course of time, come to characterize the field as a whole."
                  },
                  {
                    label: "Kuddus Special",
                    text: "Basically what I mean to say is that, you know, when it comes to the syllabus and all that, we need to kind of sort of, at the end of the day, take into consideration the fact that, honestly speaking, the topics are really very important in terms of their relevance and I mean you literally need to understand that, as a matter of fact, every single chapter is like crucial for the exam preparation."
                  },
                  {
                    label: "Bureaucratic Blob",
                    text: "Pursuant to the aforementioned guidelines and in accordance with the provisions heretofore established, it is hereby stipulated that all participating entities shall, subsequent to the completion of the requisite preliminary procedures, undertake to carry out an investigation into the matters at hand, with due consideration being given to the various and sundry implications thereof."
                  }
                ].map((sample, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setRawText(sample.text);
                      setCharCount(sample.text.length);
                    }}
                    disabled={isProcessing}
                    className="font-mono text-[10px] font-bold bg-[#f2f4f6] border-2 border-[#191c1e] px-3 py-2 hover:bg-[#e9bcba] transition-colors disabled:opacity-50 uppercase"
                  >
                    {sample.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ===== RIGHT: AI FILTERED OUTPUT ===== */}
          <section className="lg:col-span-5 flex flex-col gap-5">

            {/* Output Panel */}
            <div className="bg-white border-2 border-[#191c1e] p-5 sm:p-6 shadow-[6px_6px_0px_0px_rgba(25,28,30,1)] flex flex-col gap-5 min-h-[400px]">

              {/* Header */}
              <div className="flex justify-between items-end border-b-2 border-[#191c1e] pb-3">
                <div>
                  <h2 className="text-xl font-black uppercase text-[#191c1e]">Filtered Output</h2>
                  <p className="font-mono text-xs font-bold text-[#565e74] mt-1 tracking-wider">DE-BLOATED INTELLIGENCE</p>
                </div>
                {outputData?.stats && (
                  <span className={`font-mono text-[10px] px-2 py-1 font-black border border-[#191c1e] ${
                    outputData.stats.reductionPercent > 30 ? 'bg-[#ba0029] text-white' : 'bg-[#006948] text-white'
                  }`}>
                    -{outputData.stats.reductionPercent}%
                  </span>
                )}
              </div>

              {/* Empty State */}
              {!outputData && !isProcessing && (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-12">
                  <div className="w-16 h-16 border-2 border-[#191c1e] bg-[#f2f4f6] flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#565e74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <p className="font-mono text-xs text-[#565e74] font-bold max-w-[200px] leading-relaxed">
                    AWAITING INPUT SIGNAL. PASTE RAW TEXT AND ENGAGE ENGINE.
                  </p>
                </div>
              )}

              {/* Processing State */}
              {isProcessing && (
                <div className="flex-1 flex flex-col items-center justify-center gap-4 py-12">
                  <div className="w-14 h-14 border-2 border-[#ba0029] border-t-transparent animate-spin"></div>
                  <p className="font-mono text-xs text-[#ba0029] font-bold animate-pulse">
                    DE-BLOATING IN PROGRESS...
                  </p>
                </div>
              )}

              {/* Output Content */}
              {outputData && outputVisible && !isProcessing && (
                <div className="flex flex-col gap-5 flex-1 animate-fadeIn">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <StatCard label="Original Words" value={outputData.stats.originalWords} color="text-[#565e74]" delay={0} />
                    <StatCard label="Filtered Words" value={outputData.stats.filteredWords} color="text-[#006948]" delay={100} />
                    <StatCard label="Filler Removed" value={outputData.stats.fillerRemoved} color="text-[#ba0029]" delay={200} />
                    <StatCard label="Duplicates Cut" value={outputData.stats.duplicatesRemoved} color="text-[#ba0029]" delay={300} />
                  </div>

                  {/* Clarity Score */}
                  <div className="border-2 border-[#191c1e] bg-[#f2f4f6] p-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#565e74] font-bold tracking-wider uppercase">
                      Clarity Score
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-[#eceef0] border border-[#191c1e]">
                        <div
                          className={`h-full transition-all duration-1000 ${
                            outputData.stats.clarityScore > 80 ? 'bg-[#006948]' : 'bg-[#e9bcba]'
                          }`}
                          style={{ width: `${outputData.stats.clarityScore}%` }}
                        ></div>
                      </div>
                      <span className="font-black text-sm text-[#006948]">
                        {outputData.stats.clarityScore}%
                      </span>
                    </div>
                  </div>

                  {/* Filtered Text */}
                  <div className="flex-1 border-2 border-[#191c1e] bg-[#f2f4f6] p-4 overflow-y-auto max-h-[240px]">
                    <div className="flex items-center gap-2 mb-3 border-b border-[#191c1e] pb-2">
                      <div className="w-2 h-2 rounded-full bg-[#006948]"></div>
                      <span className="font-mono text-[10px] text-[#006948] font-bold tracking-wider">
                        CLEAN OUTPUT STREAM
                      </span>
                    </div>
                    <p className="font-mono text-sm text-[#191c1e] leading-relaxed whitespace-pre-wrap">
                      {outputData.filtered}
                    </p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => navigator.clipboard?.writeText(outputData.filtered)}
                    className="w-full py-3 bg-[#191c1e] text-white font-mono text-xs font-bold uppercase border-2 border-[#191c1e] hover:bg-[#565e74] transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy Filtered Output
                  </button>
                </div>
              )}
            </div>

            {/* LOG PANEL */}
            <div className="bg-[#191c1e] border-2 border-[#191c1e] p-4 shadow-[4px_4px_0px_0px_rgba(25,28,30,1)]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-wider">PROCESS LOG</span>
              </div>
              <div className="font-mono text-[10px] text-[#565e74] leading-relaxed space-y-1 max-h-[100px] overflow-y-auto">
                <p>[SYS] Engine initialized — v3.7.1</p>
                <p>[CFG] Filler dictionary loaded: 47 entries</p>
                <p>[CFG] Redundancy detector: ACTIVE</p>
                <p>[CFG] Verbosity shortener: ACTIVE</p>
                {outputData && outputVisible && (
                  <>
                    <p className="text-emerald-400">[OK] De-bloat pass complete</p>
                    <p className="text-emerald-400">[OK] Removed {outputData.stats.fillerRemoved} filler instances</p>
                    <p className="text-emerald-400">[OK] Removed {outputData.stats.duplicatesRemoved} duplicate sentences</p>
                    <p className="text-[#e9bcba]">[STAT] Noise reduction: {outputData.stats.reductionPercent}%</p>
                    <p className="text-[#e9bcba]">[STAT] Clarity score: {outputData.stats.clarityScore}%</p>
                  </>
                )}
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* ========== FOOTER ========== */}
      <footer className="border-t-2 border-[#191c1e] px-6 py-4 bg-[#eceef0] flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="font-mono text-[10px] text-[#565e74] font-bold">
          © 2026 L-ALPHA PROTOCOL // ALL BYTES SECURED
        </span>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-[#565e74] font-medium">
            ENGINE v3.7.1
          </span>
          <div className="h-3 w-[1px] bg-[#191c1e]"></div>
          <button
            onClick={onLogout}
            className="font-mono text-[10px] text-[#ba0029] font-bold hover:underline uppercase"
          >
            Disconnect
          </button>
        </div>
      </footer>

      {/* ========== CUSTOM ANIMATIONS ========== */}
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }
        .animate-scan {
          animation: scan 1.5s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}