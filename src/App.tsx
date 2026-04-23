import React, { useState } from 'react';
import { LayoutDashboard, PenTool, LayoutTemplate, Layers, Presentation, CircleDot } from 'lucide-react';
import { planData, postsData, productionStandardData, portfolioData } from './data';

type Tab = 'planning' | 'feed' | 'stories' | 'production' | 'portfolio';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('planning');

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-white md:border-r-2 border-b-2 md:border-b-0 border-slate-900 flex flex-col sticky top-0 h-auto md:h-screen z-20 shadow-none">
        <div className="p-6 border-b-2 border-slate-900">
          <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Deliverable Portal</p>
          <h1 className="text-2xl font-black uppercase tracking-tighter leading-tight">Digital Presence<br/>Playbook</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto hidden md:block">
          <NavItem 
            active={activeTab === 'planning'} 
            onClick={() => setActiveTab('planning')}
            icon={<LayoutDashboard size={18} />}
            label="Planejamento"
          />
          <NavItem 
            active={activeTab === 'feed'} 
            onClick={() => setActiveTab('feed')}
            icon={<PenTool size={18} />}
            label="Feed Posts"
          />
          <NavItem 
            active={activeTab === 'stories'} 
            onClick={() => setActiveTab('stories')}
            icon={<LayoutTemplate size={18} />}
            label="Stories"
          />
          <NavItem 
            active={activeTab === 'production'} 
            onClick={() => setActiveTab('production')}
            icon={<Layers size={18} />}
            label="Padrão Operacional"
          />
          <NavItem 
            active={activeTab === 'portfolio'} 
            onClick={() => setActiveTab('portfolio')}
            icon={<Presentation size={18} />}
            label="Portfólio & Método"
          />
        </nav>
        
        <div className="p-4 border-t-2 border-slate-900 hidden md:block">
          <div className="text-[10px] uppercase font-bold text-slate-500 font-mono tracking-widest text-center">
            Designed for execution<br/>Scale with consistency
          </div>
        </div>

        {/* Mobile Nav dropdown */}
        <div className="md:hidden p-4 bg-white">
          <select 
            className="w-full text-sm bg-[#f8f9fa] border-2 border-slate-900 p-2 outline-none font-bold uppercase text-slate-900"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as Tab)}
          >
            <option value="planning">Planejamento</option>
            <option value="feed">Posts (Feed)</option>
            <option value="stories">Stories</option>
            <option value="production">Padrão Operacional</option>
            <option value="portfolio">Portfólio</option>
          </select>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto w-full">
        <div className="max-w-5xl mx-auto p-4 md:p-8 pb-24 space-y-6">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-slate-900 pb-4 mb-6">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Social Media Operating System / v1.0</p>
              <h2 className="text-3xl font-black uppercase tracking-tighter mt-1">
                {activeTab === 'planning' && 'Package: Strategy Plan'}
                {activeTab === 'feed' && 'Package: Feed Grid Batch'}
                {activeTab === 'stories' && 'Package: Stories Scope'}
                {activeTab === 'production' && 'Package: Standard Ops'}
                {activeTab === 'portfolio' && 'Package: Intro Portfolio'}
              </h2>
            </div>
            <div className="md:text-right mt-4 md:mt-0">
              <p className="text-sm font-bold uppercase">Client: Expert Professional</p>
              <p className="text-[10px] font-mono text-slate-500 italic mt-1 font-bold">Status: Ready for Delivery (Canva-Ready)</p>
            </div>
          </header>

          {activeTab === 'planning' && <PlanningView />}
          {activeTab === 'feed' && <FeedView />}
          {activeTab === 'stories' && <StoriesView />}
          {activeTab === 'production' && <ProductionView />}
          {activeTab === 'portfolio' && <PortfolioView />}
        </div>
      </main>
    </div>
  );
}

function NavItem({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-bold uppercase transition-all duration-200 border-2 ${
        active 
          ? 'bg-slate-900 border-slate-900 text-white' 
          : 'bg-white border-transparent text-slate-600 hover:border-slate-900 hover:text-slate-900'
      }`}
    >
      <span className={`${active ? 'text-emerald-400' : 'text-slate-500'}`}>
        {icon}
      </span>
      {label}
    </button>
  );
}

// ---- VIEWS ----

function PlanningView() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-2 border-slate-900 p-4 md:p-6 bg-white">
        <h2 className="bg-slate-900 text-white text-[11px] font-bold uppercase px-2 py-1 mb-4 inline-block">Linha Editorial (Pilares)</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {planData.pillars.map((pillar, idx) => (
            <div key={idx} className="border-2 border-slate-200 p-4 bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2 uppercase text-sm flex items-center gap-2">
                <span className="font-mono text-emerald-600">0{idx + 1}</span> {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 border-2 border-slate-900 p-4 flex flex-col bg-slate-900 text-white">
          <h2 className="bg-emerald-500 text-black text-[11px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Tom de Voz</h2>
          <p className="text-sm leading-relaxed font-medium">{planData.tone}</p>
        </div>
        
        <div className="col-span-12 md:col-span-4 border-2 border-slate-900 p-4 flex flex-col bg-white">
          <h2 className="bg-slate-900 text-white text-[11px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Direcionamento Visual</h2>
          <div className="flex gap-2 mb-4">
            <div className="w-6 h-6 bg-black border border-slate-300"></div>
            <div className="w-6 h-6 bg-white border border-slate-300"></div>
            <div className="w-6 h-6 bg-emerald-500 border border-slate-300"></div>
            <div className="w-6 h-6 bg-slate-100 border border-slate-300"></div>
          </div>
          <p className="text-sm leading-relaxed font-bold text-slate-700">{planData.visualStyle}</p>
        </div>

        <div className="col-span-12 md:col-span-4 border-2 border-slate-900 p-4 flex flex-col bg-emerald-50 text-slate-900 border-l-[12px] border-l-emerald-500">
          <h2 className="bg-slate-900 text-white text-[11px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Frequência Semanal</h2>
          <p className="text-sm leading-relaxed font-bold uppercase">{planData.frequency}</p>
        </div>
      </div>
    </div>
  );
}

function FeedView() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {postsData.map((post, idx) => (
        <div key={post.id} className="border-2 border-slate-900 bg-white flex flex-col relative">
          {/* Post Header */}
          <div className="border-b-2 border-slate-900 p-4 bg-[#f8f9fa] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-1">
                  POST 0{idx + 1}
                </span>
                <span className={`text-[9px] font-black uppercase font-mono border-2 border-slate-900 px-2 py-0.5 ${
                  post.type === 'carrossel' ? 'bg-emerald-200' : 'bg-slate-200'
                }`}>
                  {post.type}
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{post.title}</h3>
            </div>
            <div className="text-left md:text-right md:max-w-xs">
              <p className="text-[10px] font-mono font-bold text-slate-500 uppercase rounded">Objetivo Principal</p>
              <p className="text-xs font-bold text-slate-800 leading-tight mt-1">{post.objective}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-900">
            {/* Visual Content Section */}
            <div className="p-4 md:p-6 bg-white flex flex-col">
              <h2 className="bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Canva Blueprint</h2>
              
              {post.type === 'carrossel' && post.slides && (
                <div className="flex flex-col gap-3">
                  {post.slides.map((s, sIdx) => (
                    <div key={sIdx} className="border-2 border-slate-200 bg-slate-50 p-4 flex flex-col relative gap-2">
                      <span className="absolute top-2 right-2 text-[10px] font-mono font-bold text-slate-400 bg-white px-1 border border-slate-200">0{s.slide}</span>
                      <p className="text-xs font-bold text-slate-900 pr-6 leading-relaxed whitespace-pre-wrap">{s.content}</p>
                      <div className="border-t border-slate-200 pt-2 mt-2">
                        <p className="text-[9px] text-emerald-600 font-mono uppercase font-bold mb-1">Design Rules:</p>
                        <p className="text-xs text-slate-600 font-medium">{s.design}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {post.type === 'estatico' && post.staticContent && (
                <div className="border-2 border-slate-200 bg-slate-50 flex flex-col h-full items-center justify-center p-6 text-center">
                  <p className="text-lg font-serif italic text-slate-900 mb-6 leading-relaxed bg-white border-2 border-slate-900 p-6 shadow-[4px_4px_0_0_#0f172a]">
                    {post.staticContent.text}
                  </p>
                  <div className="w-full text-left border-l-4 border-emerald-500 pl-4 py-1 mt-auto">
                    <p className="text-[9px] text-emerald-600 font-mono uppercase font-bold mb-1">Design Rules:</p>
                    <p className="text-[11px] text-slate-800 font-bold">{post.staticContent.design}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Captions and Tags */}
            <div className="p-4 md:p-6 bg-[#f8f9fa] flex flex-col">
              <h2 className="bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Copywriting</h2>
              <p className="text-slate-800 text-sm whitespace-pre-wrap leading-relaxed font-medium mb-6 flex-1">
                {post.caption}
              </p>
              
              <div className="mt-4">
                 <h2 className="bg-slate-900 text-emerald-400 text-[10px] font-mono font-bold uppercase px-2 py-1 inline-block self-start border-b-0 border border-slate-900"># Tags</h2>
                 <div className="bg-slate-900 text-emerald-400 font-mono text-[10px] whitespace-pre-wrap p-4 leading-relaxed mt-0">
                   {post.hashtags}
                 </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StoriesView() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid md:grid-cols-2 gap-6">
        {postsData.map((post, idx) => (
          <div key={post.id} className="border-2 border-slate-900 bg-white flex flex-col h-full relative overflow-hidden">
             {/* Decor */}
             <div className="absolute -right-6 -top-6 w-16 h-16 bg-emerald-500 rounded-full opacity-20 pointer-events-none"></div>

             <div className="border-b-2 border-slate-900 p-4 bg-slate-900 text-white">
                <span className="text-[10px] text-emerald-400 font-mono uppercase font-bold tracking-widest block mb-1">Adaptation Origin: Post 0{idx + 1}</span>
                <h3 className="font-bold text-lg leading-tight uppercase line-clamp-1">{post.title}</h3>
             </div>
            
            <div className="p-5 flex-1 flex flex-col gap-4">
              {post.stories.content.map((tela, tIdx) => (
                <div key={tIdx} className="flex gap-3 items-start border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <span className="bg-white border-2 border-slate-900 text-slate-900 font-black px-1.5 py-0.5 text-[10px] flex-shrink-0 mt-0.5 rounded-none">S{tIdx + 1}</span>
                  <p className="text-sm font-medium text-slate-800 leading-relaxed">{tela}</p>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-slate-900 p-4 bg-emerald-100">
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2 border-b-2 border-slate-900 inline-block pb-0.5">Interaction Goal</p>
              <p className="text-sm text-slate-900 font-bold">{post.stories.interaction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductionView() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-2 border-slate-900 bg-slate-900 p-6 md:p-10 flex flex-col text-white">
        <h2 className="bg-emerald-500 text-black text-[11px] font-bold uppercase px-2 py-1 mb-8 inline-block self-start">Workflow Engine</h2>
        <p className="text-lg md:text-xl leading-relaxed font-medium mb-12 border-l-4 border-emerald-500 pl-4 py-1">
          {productionStandardData.model.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {productionStandardData.model.steps.map((step) => (
            <div key={step.step} className="border-2 border-slate-700 bg-slate-800 p-5 flex flex-col hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                 <span className="bg-slate-900 border border-slate-600 text-emerald-400 font-mono font-bold text-[10px] px-2 py-0.5 uppercase">Phase 0{step.step}</span>
              </div>
              <h3 className="font-bold text-md uppercase mb-2 leading-tight text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white text-slate-900 border-2 border-emerald-500 p-5 font-bold uppercase text-sm md:text-md text-center max-w-xl mx-auto tracking-wide">
          Target Output: {productionStandardData.model.timescale}
        </div>
      </div>
    </div>
  );
}

function PortfolioView() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-2 border-slate-900 bg-white p-6 md:p-12 relative overflow-hidden flex flex-col">
        {/* Brutalist Deco */}
        <div className="absolute right-0 top-0 w-32 h-32 border-b-[8px] border-l-[8px] border-emerald-500 pointer-events-none"></div>
        <div className="absolute right-8 top-8 w-16 h-16 bg-slate-900 pointer-events-none"></div>

        <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-12 w-full md:w-4/5 relative z-10">
          {portfolioData.title}
        </h3>
        
        <div className="flex flex-col gap-12 relative z-10">
          <div className="bg-[#f8f9fa] border-2 border-slate-900 p-6 md:p-8">
            <h4 className="bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-1 mb-6 inline-block">Design Philosophy</h4>
            <p className="text-xl md:text-2xl text-slate-800 font-bold leading-tight uppercase font-sans">
              "{portfolioData.philosophy}"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h4 className="bg-emerald-500 text-black text-[10px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Executive Edge</h4>
              <ul className="text-sm font-bold text-slate-800 leading-relaxed uppercase space-y-4 border-t-2 border-slate-900 pt-4">
                {portfolioData.differentials.split('\n').map((diff, index) => {
                  if(!diff.trim()) return null;
                  const parts = diff.replace('• ', '').split(':');
                  return (
                    <li key={index} className="flex flex-col bg-slate-50 border border-slate-200 p-3">
                      <span className="text-slate-900 font-black tracking-wide border-b border-slate-200 pb-1 mb-1">{parts[0]}</span>
                      <span className="text-xs normal-case text-slate-600 font-medium">{parts[1]}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            
            <div className="border-2 border-slate-900 bg-slate-900 text-white p-6 md:p-8 flex flex-col">
              <h4 className="bg-white text-slate-900 text-[10px] font-bold uppercase px-2 py-1 mb-6 inline-block self-start">Simulated Case Study</h4>
              <div className="text-sm leading-relaxed font-mono whitespace-pre-wrap font-medium text-slate-300">
                {portfolioData.simulatedCase.split('\n').map((line, i) => (
                  <p key={i} className={`mb-3 ${line.startsWith('O Caso') ? 'text-emerald-400 font-bold text-lg mb-6' : ''}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
