import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Layers, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Bot, 
  Clock, 
  RefreshCw,
  Trophy,
  ShieldCheck,
  Building2,
  Users,
  Cpu
} from 'lucide-react';

interface InteractiveDemoModalProps {
  demoType: 'oneview-ai' | 'chatbot-demo' | 'solar-iot' | 'incident-system' | null;
  onClose: () => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({ demoType, onClose }) => {
  if (!demoType) return null;

  // Active tab inside modal
  const [activeTab, setActiveTab] = useState<'oneview' | 'chatbot' | 'incident'>(
    demoType === 'chatbot-demo' ? 'chatbot' : demoType === 'incident-system' ? 'incident' : 'oneview'
  );

  // OneView AI State
  const [selectedEntityCase, setSelectedEntityCase] = useState<number>(0);
  const [isResolving, setIsResolving] = useState<boolean>(false);
  const [hasResolved, setHasResolved] = useState<boolean>(true);

  const sampleEntityCases = [
    {
      caseName: "Global Trade Finance Onboarding (Cross-Border Subsidiary)",
      sourceA: { name: "Apex Financial Corp Ltd", address: "140 Wall St, New York, NY", taxId: "US-8829104", accounts: "Institutional Brokerage" },
      sourceB: { name: "Apex Fin Holdings LLC", address: "Suite 400, 140 Wall Street, NY", taxId: "US-8829104-SUB", accounts: "Global FX Clearing" },
      expectedMatchScore: 98.4,
      kycRisk: "Low Risk",
      kycStatus: "Passed (100% Identity Corroborated)",
      nextBestAction: "Consolidate under Global Master Umbrella Agreement; recommend FX Hedging Liquidity facility."
    },
    {
      caseName: "European Corporate KYC Harmonization",
      sourceA: { name: "Société Nouvelle d'Énergie S.A.", address: "29 Boulevard Haussmann, Paris", taxId: "FR-4910283", accounts: "Treasury Management" },
      sourceB: { name: "Soc Nouvelle Energie Group", address: "29 Blvd Haussmann, 75009 Paris", taxId: "FR-4910283", accounts: "Cash Pooling" },
      expectedMatchScore: 99.2,
      kycRisk: "Minimal Risk",
      kycStatus: "Passed (Multi-Jurisdiction Validated)",
      nextBestAction: "Enable automated multi-currency zero-balance cash sweeps across euro accounts."
    }
  ];

  const handleRunResolution = () => {
    setIsResolving(true);
    setTimeout(() => {
      setIsResolving(false);
      setHasResolved(true);
    }, 600);
  };

  // Chatbot State
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string; time: string }>>([
    { role: 'assistant', text: "Hello! I am your AI Educational Assistant powered by Mistral 7B & Flask. What topic or concept would you like to explore today?", time: "Just now" }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isBotThinking, setIsBotThinking] = useState(false);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || isBotThinking) return;

    const userText = inputQuery;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setChatMessages(prev => [...prev, { role: 'user', text: userText, time: now }]);
    setInputQuery('');
    setIsBotThinking(true);

    setTimeout(() => {
      let botReply = "That's a fantastic inquiry. In distributed architectures, decoupling asynchronous queue consumers allows predictable throughput without blocking ingress requests.";
      
      const lower = userText.toLowerCase();
      if (lower.includes("rag") || lower.includes("llm") || lower.includes("ai")) {
        botReply = "Retrieval-Augmented Generation (RAG) grounds language models by fetching relevant context chunks from a vector database before generation. This minimizes hallucinations and supplies verifiable citations.";
      } else if (lower.includes("network") || lower.includes("fastapi") || lower.includes("react")) {
        botReply = "Combining React on the frontend with FastAPI provides an asynchronous, strongly-typed OpenAPI foundation. At Société Générale, this pattern powers responsive network monitoring.";
      } else if (lower.includes("iot") || lower.includes("solar")) {
        botReply = "Subcutaneous solar harvesting harnesses micro-joules through ambient photon penetration, enabling perpetual medical telemetry without invasive surgical battery replacements.";
      }

      setChatMessages(prev => [...prev, { role: 'assistant', text: botReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setIsBotThinking(false);
    }, 700);
  };

  // Incident State
  const [simulatedIncidentTriggered, setSimulatedIncidentTriggered] = useState(false);

  return (
    <div 
      id="interactive-demo-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="interactive-demo-container"
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-8 text-slate-800 dark:text-slate-200 space-y-6 max-h-[92vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="interactive-demo-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close Interactive Demo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Interactive Project Simulations
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Live interactive previews of Pavithra's award-winning solutions and enterprise architecture patterns.
            </p>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <button
            id="demo-tab-oneview"
            onClick={() => setActiveTab('oneview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'oneview'
                ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/50 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>OneView AI (1st Place Hackathon)</span>
          </button>

          <button
            id="demo-tab-chatbot"
            onClick={() => setActiveTab('chatbot')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'chatbot'
                ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-500/50 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>AI Educational Chatbot (Mistral/Flask)</span>
          </button>

          <button
            id="demo-tab-incident"
            onClick={() => setActiveTab('incident')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'incident'
                ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/50 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>ML Incident War Room (Ellucian)</span>
          </button>
        </div>

        {/* TAB 1: ONEVIEW AI */}
        {activeTab === 'oneview' && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200 leading-relaxed">
              <strong className="font-bold text-amber-300">Hackathon Concept:</strong> OneView AI solves banking identity fragmentation by running multi-signal entity matching across disparate onboarding records, unifying KYC, and generating automated Next-Best Actions.
            </div>

            {/* Case Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Select Banking Onboarding Scenario:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sampleEntityCases.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedEntityCase(i);
                      setHasResolved(true);
                    }}
                    className={`p-3 rounded-xl text-left text-xs transition-all ${
                      selectedEntityCase === i
                        ? 'bg-indigo-950/80 border-indigo-500/80 text-white font-medium shadow-sm'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    } border`}
                  >
                    <span className="font-bold block text-slate-200 mb-1">Scenario #{i + 1}</span>
                    {c.caseName}
                  </button>
                ))}
              </div>
            </div>

            {/* Entity Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">
                  Disparate Record A (Core Banking DB)
                </span>
                <div className="text-xs space-y-1 text-slate-300">
                  <p><strong className="text-slate-400">Entity:</strong> {sampleEntityCases[selectedEntityCase].sourceA.name}</p>
                  <p><strong className="text-slate-400">Address:</strong> {sampleEntityCases[selectedEntityCase].sourceA.address}</p>
                  <p><strong className="text-slate-400">Tax ID:</strong> {sampleEntityCases[selectedEntityCase].sourceA.taxId}</p>
                  <p><strong className="text-slate-400">Accounts:</strong> {sampleEntityCases[selectedEntityCase].sourceA.accounts}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">
                  Disparate Record B (New Corporate Onboarding)
                </span>
                <div className="text-xs space-y-1 text-slate-300">
                  <p><strong className="text-slate-400">Entity:</strong> {sampleEntityCases[selectedEntityCase].sourceB.name}</p>
                  <p><strong className="text-slate-400">Address:</strong> {sampleEntityCases[selectedEntityCase].sourceB.address}</p>
                  <p><strong className="text-slate-400">Tax ID:</strong> {sampleEntityCases[selectedEntityCase].sourceB.taxId}</p>
                  <p><strong className="text-slate-400">Accounts:</strong> {sampleEntityCases[selectedEntityCase].sourceB.accounts}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleRunResolution}
                disabled={isResolving}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 disabled:opacity-50 transition-all"
              >
                {isResolving ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Resolving Vector Match & Rules...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Run AI Entity Resolution & KYC Synthesis</span>
                  </>
                )}
              </button>
            </div>

            {/* Resolved Output Box */}
            {hasResolved && !isResolving && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-emerald-800/60 shadow-lg space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-sm text-white">
                      Unified Customer 360° Identity Profile Generated
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-950 text-emerald-300 border border-emerald-700">
                      Match Confidence: {sampleEntityCases[selectedEntityCase].expectedMatchScore}%
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-300 border border-indigo-700">
                      {sampleEntityCases[selectedEntityCase].kycRisk}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-400 uppercase tracking-wider block text-[11px]">
                      Automated KYC Audit Verdict
                    </span>
                    <p className="text-emerald-300 font-medium">
                      ✓ {sampleEntityCases[selectedEntityCase].kycStatus}
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      Cross-referenced against global sanctions, corporate registrar databases, and beneficial ownership trees.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-slate-400 uppercase tracking-wider block text-[11px]">
                      AI Next-Best Action (Relationship Manager)
                    </span>
                    <p className="text-indigo-300 font-medium">
                      → {sampleEntityCases[selectedEntityCase].nextBestAction}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: AI EDUCATIONAL CHATBOT */}
        {activeTab === 'chatbot' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200">
              <strong className="font-semibold text-indigo-300">Architecture:</strong> Mistral 7B via Ollama framework orchestration, Flask backend, dynamic multi-turn context memory with live prompt evaluation.
            </div>

            {/* Chat Log Window */}
            <div className="h-64 sm:h-72 bg-slate-950 rounded-2xl border border-slate-800 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-none'
                        : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[10px] opacity-60 mt-1 text-right">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              {isBotThinking && (
                <div className="flex items-center gap-2 text-xs text-indigo-400 bg-slate-900/80 px-3 py-2 rounded-xl border border-slate-800 w-fit">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Mistral inference streaming response...</span>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendChat} className="flex gap-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about RAG, LLMs, FastAPI, or IoT healthcare..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                disabled={isBotThinking || !inputQuery.trim()}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send</span>
              </button>
            </form>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] text-slate-500">Quick prompts:</span>
              <button
                onClick={() => setInputQuery("How does RAG improve LLM accuracy?")}
                className="text-[11px] px-2.5 py-1 rounded-md bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"
              >
                "How does RAG improve LLM accuracy?"
              </button>
              <button
                onClick={() => setInputQuery("Explain subcutaneous solar harvesting for IoT")}
                className="text-[11px] px-2.5 py-1 rounded-md bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"
              >
                "Subcutaneous solar harvesting for IoT"
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: ML INCIDENT AUTOMATION */}
        {activeTab === 'incident' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-200">
              <strong className="font-semibold text-emerald-300">Ellucian Internship Case:</strong> Built on AWS Lambda, AWS Bedrock, and LLaMA 3.2. Proactively forecast incidents and automatically orchestrate Slack incident war rooms.
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  CloudWatch Telemetry Monitor (Simulated AWS Node)
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-emerald-950 text-emerald-300 font-mono">
                  Healthy (P99: 142ms)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-xs text-slate-400">
                  Trigger an anomaly spike to see Bedrock LLaMA 3.2 forecast incident probability and generate a Slack war room channel.
                </p>
                <button
                  onClick={() => setSimulatedIncidentTriggered(true)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white shrink-0 transition-all"
                >
                  Simulate Anomaly Spike
                </button>
              </div>
            </div>

            {simulatedIncidentTriggered && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-800/70 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Bedrock ML Model Triggered (Incident Probability: 89%)</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    MTTR Impact: -30%
                  </span>
                </div>

                {/* Slack war room mock */}
                <div className="bg-[#1A1D21] border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold">
                    <span>#war-room-incident-4091</span>
                    <span className="text-[10px] text-slate-400 font-normal">[Slack API Automated Bot]</span>
                  </div>
                  <p className="text-slate-300">
                    🚨 <strong>Alert:</strong> Potential Redis connection pool exhaustion predicted in 12 minutes.
                  </p>
                  <p className="text-emerald-400">
                    🤖 <strong>LLaMA 3.2 Diagnostic:</strong> Historical postmortem #102 indicates scaling read-replicas resolved this with 0 downtime.
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    Assignees auto-tagged: @network-lead, @cloud-oncall. Dashboard link dispatched.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
