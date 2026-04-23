import React, { useMemo, useState } from 'react';
import { LayoutDashboard, PenTool, LayoutTemplate, Layers, Presentation } from 'lucide-react';
import { planData, postsData, productionStandardData, portfolioData } from './data';

type Tab = 'planning' | 'feed' | 'stories' | 'production' | 'portfolio';

type PaletteId = 'corporativo' | 'oceano' | 'terracota';
type FontId = 'moderno' | 'editorial' | 'impacto';

type TextEditorState = {
  id: string;
  label: string;
  value: string;
  original: string;
};

type EditableApi = {
  getText: (id: string, fallback: string) => string;
  openEditor: (id: string, label: string, fallback: string) => void;
};

const PALETTES: Record<PaletteId, {
  label: string;
  vars: Record<string, string>;
}> = {
  corporativo: {
    label: 'Corporativo (padrão)',
    vars: {
      '--page-bg': '#f8f9fa',
      '--surface-bg': '#ffffff',
      '--primary-900': '#0f172a',
      '--text-strong': '#0f172a',
      '--text-muted': '#475569',
      '--accent': '#10b981',
      '--accent-soft': '#d1fae5',
      '--panel-soft': '#f1f5f9',
    },
  },
  oceano: {
    label: 'Oceano estratégico',
    vars: {
      '--page-bg': '#edf6ff',
      '--surface-bg': '#ffffff',
      '--primary-900': '#0b3b61',
      '--text-strong': '#0a2d49',
      '--text-muted': '#27506c',
      '--accent': '#1d9bf0',
      '--accent-soft': '#d3edff',
      '--panel-soft': '#e8f3fc',
    },
  },
  terracota: {
    label: 'Terracota premium',
    vars: {
      '--page-bg': '#fff7f2',
      '--surface-bg': '#fffdfb',
      '--primary-900': '#4a2f25',
      '--text-strong': '#3f271e',
      '--text-muted': '#6c4c40',
      '--accent': '#d97706',
      '--accent-soft': '#ffedd5',
      '--panel-soft': '#fef3e7',
    },
  },
};

const FONTS: Record<FontId, { label: string; body: string; heading: string }> = {
  moderno: {
    label: 'Moderno geométrico',
    body: '"Segoe UI", "Helvetica Neue", sans-serif',
    heading: '"Arial Black", "Segoe UI", sans-serif',
  },
  editorial: {
    label: 'Editorial serifado',
    body: 'Georgia, "Times New Roman", serif',
    heading: '"Palatino Linotype", Georgia, serif',
  },
  impacto: {
    label: 'Impacto condensado',
    body: '"Trebuchet MS", "Segoe UI", sans-serif',
    heading: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
  },
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('planning');
  const [paletteId, setPaletteId] = useState<PaletteId>('corporativo');
  const [fontId, setFontId] = useState<FontId>('moderno');
  const [textOverrides, setTextOverrides] = useState<Record<string, string>>({});
  const [editorState, setEditorState] = useState<TextEditorState | null>(null);

  const getText = (id: string, fallback: string) => textOverrides[id] ?? fallback;

  const openEditor = (id: string, label: string, fallback: string) => {
    setEditorState({
      id,
      label,
      value: getText(id, fallback),
      original: fallback,
    });
  };

  const applyEdit = () => {
    if (!editorState) return;
    setTextOverrides((prev) => ({ ...prev, [editorState.id]: editorState.value }));
    setEditorState(null);
  };

  const resetCurrentText = () => {
    if (!editorState) return;
    setTextOverrides((prev) => {
      const next = { ...prev };
      delete next[editorState.id];
      return next;
    });
    setEditorState(null);
  };

  const themeStyle = useMemo(() => {
    const paletteVars = PALETTES[paletteId].vars;
    return {
      ...paletteVars,
      '--font-body': FONTS[fontId].body,
      '--font-heading': FONTS[fontId].heading,
    } as React.CSSProperties;
  }, [fontId, paletteId]);

  const editableApi: EditableApi = { getText, openEditor };

  return (
    <div className={`theme-root min-h-screen bg-[#f8f9fa] font-sans text-slate-900 flex flex-col md:flex-row palette-${paletteId}`} style={themeStyle}>
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-white md:border-r-2 border-b-2 md:border-b-0 border-slate-900 flex flex-col sticky top-0 h-auto md:h-screen z-20 shadow-none">
        <div className="p-6 border-b-2 border-slate-900">
          <p
            className="editable-text text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1"
            onClick={() => openEditor('sidebar.kicker', 'Kicker lateral', 'Portal de Entregáveis')}
          >
            {getText('sidebar.kicker', 'Portal de Entregáveis')}
          </p>
          <h1 className="text-2xl font-black uppercase tracking-tighter leading-tight">
            <span
              className="editable-text"
              onClick={() => openEditor('sidebar.title.line1', 'Título lateral (linha 1)', 'Guia de Presença')}
            >
              {getText('sidebar.title.line1', 'Guia de Presença')}
            </span>
            <br />
            <span
              className="editable-text"
              onClick={() => openEditor('sidebar.title.line2', 'Título lateral (linha 2)', 'Digital')}
            >
              {getText('sidebar.title.line2', 'Digital')}
            </span>
          </h1>
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
            label={getText('nav.feed', 'Posts do Feed')}
          />
          <NavItem 
            active={activeTab === 'stories'} 
            onClick={() => setActiveTab('stories')}
            icon={<LayoutTemplate size={18} />}
            label={getText('nav.stories', 'Stories')}
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
            <span
              className="editable-text"
              onClick={() => openEditor('sidebar.footer.line1', 'Mensagem lateral (linha 1)', 'Feito para execução')}
            >
              {getText('sidebar.footer.line1', 'Feito para execução')}
            </span>
            <br />
            <span
              className="editable-text"
              onClick={() => openEditor('sidebar.footer.line2', 'Mensagem lateral (linha 2)', 'Escale com consistência')}
            >
              {getText('sidebar.footer.line2', 'Escale com consistência')}
            </span>
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
            <option value="stories">{getText('nav.stories.mobile', 'Stories')}</option>
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
              <p
                className="editable-text text-[10px] font-mono uppercase tracking-widest text-slate-500"
                onClick={() => openEditor('header.kicker', 'Kicker do cabeçalho', 'Sistema Operacional de Social Media / v1.0')}
              >
                {getText('header.kicker', 'Sistema Operacional de Social Media / v1.0')}
              </p>
              <h2
                className="editable-text text-3xl font-black uppercase tracking-tighter mt-1"
                onClick={() => openEditor(
                  `header.package.${activeTab}`,
                  'Título do pacote atual',
                  activeTab === 'planning'
                    ? 'Pacote: Plano Estratégico'
                    : activeTab === 'feed'
                      ? 'Pacote: Lote de Posts no Feed'
                      : activeTab === 'stories'
                        ? 'Pacote: Escopo de Stories'
                        : activeTab === 'production'
                          ? 'Pacote: Padrão Operacional'
                          : 'Pacote: Portfólio Introdutório',
                )}
              >
                {getText(
                  `header.package.${activeTab}`,
                  activeTab === 'planning'
                    ? 'Pacote: Plano Estratégico'
                    : activeTab === 'feed'
                      ? 'Pacote: Lote de Posts no Feed'
                      : activeTab === 'stories'
                        ? 'Pacote: Escopo de Stories'
                        : activeTab === 'production'
                          ? 'Pacote: Padrão Operacional'
                          : 'Pacote: Portfólio Introdutório',
                )}
              </h2>
            </div>
            <div className="md:text-right mt-4 md:mt-0">
              <p
                className="editable-text text-sm font-bold uppercase"
                onClick={() => openEditor('header.client', 'Cliente do projeto', 'Cliente: Profissional Especialista')}
              >
                {getText('header.client', 'Cliente: Profissional Especialista')}
              </p>
              <p
                className="editable-text text-[10px] font-mono text-slate-500 italic mt-1 font-bold"
                onClick={() => openEditor('header.status', 'Status de entrega', 'Status: Pronto para Entrega (Canva-Ready)')}
              >
                {getText('header.status', 'Status: Pronto para Entrega (Canva-Ready)')}
              </p>
            </div>
          </header>

          {activeTab === 'planning' && (
            <PlanningView
              editableApi={editableApi}
              fontId={fontId}
              paletteId={paletteId}
              setFontId={setFontId}
              setPaletteId={setPaletteId}
            />
          )}
          {activeTab === 'feed' && <FeedView editableApi={editableApi} />}
          {activeTab === 'stories' && <StoriesView editableApi={editableApi} />}
          {activeTab === 'production' && <ProductionView editableApi={editableApi} />}
          {activeTab === 'portfolio' && <PortfolioView editableApi={editableApi} />}
        </div>
      </main>

      {editorState && (
        <div className="editor-modal-backdrop" role="dialog" aria-modal="true">
          <div className="editor-modal">
            <h3>{editorState.label}</h3>
            <textarea
              value={editorState.value}
              onChange={(e) => setEditorState((prev) => (prev ? { ...prev, value: e.target.value } : prev))}
              rows={8}
            />
            <div className="editor-modal-actions">
              <button type="button" onClick={applyEdit}>Salvar texto</button>
              <button type="button" onClick={() => setEditorState(null)}>Cancelar</button>
              <button type="button" onClick={resetCurrentText}>Restaurar padrão</button>
            </div>
          </div>
        </div>
      )}
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

function PlanningView({
  editableApi,
  paletteId,
  fontId,
  setPaletteId,
  setFontId,
}: {
  editableApi: EditableApi;
  paletteId: PaletteId;
  fontId: FontId;
  setPaletteId: (value: PaletteId) => void;
  setFontId: (value: FontId) => void;
}) {
  const { getText, openEditor } = editableApi;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-2 border-slate-900 p-4 md:p-6 bg-white">
        <h2 className="bg-slate-900 text-white text-[11px] font-bold uppercase px-2 py-1 mb-4 inline-block">Change-and-Play</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase text-slate-600">Tipografia global</span>
            <select
              value={fontId}
              onChange={(e) => setFontId(e.target.value as FontId)}
              className="bg-[#f8f9fa] border-2 border-slate-900 p-2 text-sm font-semibold"
            >
              {(Object.keys(FONTS) as FontId[]).map((key) => (
                <option key={key} value={key}>{FONTS[key].label}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase text-slate-600">Paleta de cores global</span>
            <select
              value={paletteId}
              onChange={(e) => setPaletteId(e.target.value as PaletteId)}
              className="bg-[#f8f9fa] border-2 border-slate-900 p-2 text-sm font-semibold"
            >
              {(Object.keys(PALETTES) as PaletteId[]).map((key) => (
                <option key={key} value={key}>{PALETTES[key].label}</option>
              ))}
            </select>
          </label>
        </div>
        <p className="text-xs font-medium text-slate-600 mt-4">
          Clique em qualquer texto destacado para editar o conteúdo. Isso permite personalização contínua sem alterar código.
        </p>
      </div>

      <div className="border-2 border-slate-900 p-4 md:p-6 bg-white">
        <h2
          className="editable-text bg-slate-900 text-white text-[11px] font-bold uppercase px-2 py-1 mb-4 inline-block"
          onClick={() => openEditor('planning.pilares.title', 'Título da seção de pilares', 'Linha Editorial (Pilares)')}
        >
          {getText('planning.pilares.title', 'Linha Editorial (Pilares)')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {planData.pillars.map((pillar, idx) => (
            <div key={idx} className="border-2 border-slate-200 p-4 bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2 uppercase text-sm flex items-center gap-2">
                <span className="font-mono text-emerald-600">0{idx + 1}</span>
                <span className="editable-text" onClick={() => openEditor(`planning.pilar.${idx}.title`, `Pilar ${idx + 1} - título`, pillar.title)}>
                  {getText(`planning.pilar.${idx}.title`, pillar.title)}
                </span>
              </h4>
              <p
                className="editable-text text-xs text-slate-600 leading-relaxed font-medium"
                onClick={() => openEditor(`planning.pilar.${idx}.desc`, `Pilar ${idx + 1} - descrição`, pillar.desc)}
              >
                {getText(`planning.pilar.${idx}.desc`, pillar.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 border-2 border-slate-900 p-4 flex flex-col bg-slate-900 text-white">
          <h2 className="bg-emerald-500 text-black text-[11px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Tom de Voz</h2>
          <p className="editable-text text-sm leading-relaxed font-medium" onClick={() => openEditor('planning.tone', 'Tom de voz', planData.tone)}>
            {getText('planning.tone', planData.tone)}
          </p>
        </div>
        
        <div className="col-span-12 md:col-span-4 border-2 border-slate-900 p-4 flex flex-col bg-white">
          <h2 className="bg-slate-900 text-white text-[11px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Direcionamento Visual</h2>
          <div className="flex gap-2 mb-4">
            <div className="w-6 h-6 bg-black border border-slate-300"></div>
            <div className="w-6 h-6 bg-white border border-slate-300"></div>
            <div className="w-6 h-6 bg-emerald-500 border border-slate-300"></div>
            <div className="w-6 h-6 bg-slate-100 border border-slate-300"></div>
          </div>
          <p className="editable-text text-sm leading-relaxed font-bold text-slate-700" onClick={() => openEditor('planning.visual', 'Direcionamento visual', planData.visualStyle)}>
            {getText('planning.visual', planData.visualStyle)}
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 border-2 border-slate-900 p-4 flex flex-col bg-emerald-50 text-slate-900 border-l-[12px] border-l-emerald-500">
          <h2 className="bg-slate-900 text-white text-[11px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Frequência Semanal</h2>
          <p className="editable-text text-sm leading-relaxed font-bold uppercase" onClick={() => openEditor('planning.frequency', 'Frequência semanal', planData.frequency)}>
            {getText('planning.frequency', planData.frequency)}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeedView({ editableApi }: { editableApi: EditableApi }) {
  const { getText, openEditor } = editableApi;

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
              <h3
                className="editable-text text-xl font-black text-slate-900 uppercase tracking-tight"
                onClick={() => openEditor(`feed.${post.id}.title`, `Post ${idx + 1} - título`, post.title)}
              >
                {getText(`feed.${post.id}.title`, post.title)}
              </h3>
            </div>
            <div className="text-left md:text-right md:max-w-xs">
              <p className="text-[10px] font-mono font-bold text-slate-500 uppercase rounded">Objetivo Principal</p>
              <p
                className="editable-text text-xs font-bold text-slate-800 leading-tight mt-1"
                onClick={() => openEditor(`feed.${post.id}.objective`, `Post ${idx + 1} - objetivo`, post.objective)}
              >
                {getText(`feed.${post.id}.objective`, post.objective)}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-900">
            {/* Visual Content Section */}
            <div className="p-4 md:p-6 bg-white flex flex-col">
              <h2 className="bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Roteiro Visual (Canva)</h2>
              
              {post.type === 'carrossel' && post.slides && (
                <div className="flex flex-col gap-3">
                  {post.slides.map((s, sIdx) => (
                    <div key={sIdx} className="border-2 border-slate-200 bg-slate-50 p-4 flex flex-col relative gap-2">
                      <span className="absolute top-2 right-2 text-[10px] font-mono font-bold text-slate-400 bg-white px-1 border border-slate-200">0{s.slide}</span>
                      <p
                        className="editable-text text-xs font-bold text-slate-900 pr-6 leading-relaxed whitespace-pre-wrap"
                        onClick={() => openEditor(`feed.${post.id}.slide.${sIdx}.content`, `Post ${idx + 1} - slide ${s.slide} (conteúdo)`, s.content)}
                      >
                        {getText(`feed.${post.id}.slide.${sIdx}.content`, s.content)}
                      </p>
                      <div className="border-t border-slate-200 pt-2 mt-2">
                        <p className="text-[9px] text-emerald-600 font-mono uppercase font-bold mb-1">Regras de Design:</p>
                        <p
                          className="editable-text text-xs text-slate-600 font-medium"
                          onClick={() => openEditor(`feed.${post.id}.slide.${sIdx}.design`, `Post ${idx + 1} - slide ${s.slide} (design)`, s.design)}
                        >
                          {getText(`feed.${post.id}.slide.${sIdx}.design`, s.design)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {post.type === 'estatico' && post.staticContent && (
                <div className="border-2 border-slate-200 bg-slate-50 flex flex-col h-full items-center justify-center p-6 text-center">
                  <p
                    className="editable-text text-lg font-serif italic text-slate-900 mb-6 leading-relaxed bg-white border-2 border-slate-900 p-6 shadow-[4px_4px_0_0_#0f172a]"
                    onClick={() => openEditor(`feed.${post.id}.static.text`, `Post ${idx + 1} - texto estático`, post.staticContent.text)}
                  >
                    {getText(`feed.${post.id}.static.text`, post.staticContent.text)}
                  </p>
                  <div className="w-full text-left border-l-4 border-emerald-500 pl-4 py-1 mt-auto">
                    <p className="text-[9px] text-emerald-600 font-mono uppercase font-bold mb-1">Regras de Design:</p>
                    <p
                      className="editable-text text-[11px] text-slate-800 font-bold"
                      onClick={() => openEditor(`feed.${post.id}.static.design`, `Post ${idx + 1} - design estático`, post.staticContent.design)}
                    >
                      {getText(`feed.${post.id}.static.design`, post.staticContent.design)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Captions and Tags */}
            <div className="p-4 md:p-6 bg-[#f8f9fa] flex flex-col">
              <h2 className="bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Copywriting</h2>
              <p
                className="editable-text text-slate-800 text-sm whitespace-pre-wrap leading-relaxed font-medium mb-6 flex-1"
                onClick={() => openEditor(`feed.${post.id}.caption`, `Post ${idx + 1} - legenda`, post.caption)}
              >
                {getText(`feed.${post.id}.caption`, post.caption)}
              </p>
              
              <div className="mt-4">
                 <h2 className="bg-slate-900 text-emerald-400 text-[10px] font-mono font-bold uppercase px-2 py-1 inline-block self-start border-b-0 border border-slate-900"># Tags</h2>
                 <div
                   className="editable-text bg-slate-900 text-emerald-400 font-mono text-[10px] whitespace-pre-wrap p-4 leading-relaxed mt-0"
                   onClick={() => openEditor(`feed.${post.id}.hashtags`, `Post ${idx + 1} - hashtags`, post.hashtags)}
                 >
                   {getText(`feed.${post.id}.hashtags`, post.hashtags)}
                 </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StoriesView({ editableApi }: { editableApi: EditableApi }) {
  const { getText, openEditor } = editableApi;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid md:grid-cols-2 gap-6">
        {postsData.map((post, idx) => (
          <div key={post.id} className="border-2 border-slate-900 bg-white flex flex-col h-full relative overflow-hidden">
             {/* Decor */}
             <div className="absolute -right-6 -top-6 w-16 h-16 bg-emerald-500 rounded-full opacity-20 pointer-events-none"></div>

             <div className="border-b-2 border-slate-900 p-4 bg-slate-900 text-white">
                <span className="text-[10px] text-emerald-400 font-mono uppercase font-bold tracking-widest block mb-1">Origem: Post 0{idx + 1}</span>
                <h3 className="editable-text font-bold text-lg leading-tight uppercase line-clamp-1" onClick={() => openEditor(`stories.${post.id}.title`, `Story ${idx + 1} - título`, post.title)}>
                  {getText(`stories.${post.id}.title`, post.title)}
                </h3>
             </div>
            
            <div className="p-5 flex-1 flex flex-col gap-4">
              {post.stories.content.map((tela, tIdx) => (
                <div key={tIdx} className="flex gap-3 items-start border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <span className="bg-white border-2 border-slate-900 text-slate-900 font-black px-1.5 py-0.5 text-[10px] flex-shrink-0 mt-0.5 rounded-none">S{tIdx + 1}</span>
                  <p className="editable-text text-sm font-medium text-slate-800 leading-relaxed" onClick={() => openEditor(`stories.${post.id}.screen.${tIdx}`, `Story ${idx + 1} - tela ${tIdx + 1}`, tela)}>
                    {getText(`stories.${post.id}.screen.${tIdx}`, tela)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-slate-900 p-4 bg-emerald-100">
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2 border-b-2 border-slate-900 inline-block pb-0.5">Objetivo de Interação</p>
              <p className="editable-text text-sm text-slate-900 font-bold" onClick={() => openEditor(`stories.${post.id}.interaction`, `Story ${idx + 1} - objetivo de interação`, post.stories.interaction)}>
                {getText(`stories.${post.id}.interaction`, post.stories.interaction)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductionView({ editableApi }: { editableApi: EditableApi }) {
  const { getText, openEditor } = editableApi;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-2 border-slate-900 bg-slate-900 p-6 md:p-10 flex flex-col text-white">
        <h2 className="bg-emerald-500 text-black text-[11px] font-bold uppercase px-2 py-1 mb-8 inline-block self-start">Fluxo de Produção</h2>
        <p className="editable-text text-lg md:text-xl leading-relaxed font-medium mb-12 border-l-4 border-emerald-500 pl-4 py-1" onClick={() => openEditor('production.description', 'Descrição do fluxo de produção', productionStandardData.model.description)}>
          {getText('production.description', productionStandardData.model.description)}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {productionStandardData.model.steps.map((step) => (
            <div key={step.step} className="border-2 border-slate-700 bg-slate-800 p-5 flex flex-col hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                 <span className="bg-slate-900 border border-slate-600 text-emerald-400 font-mono font-bold text-[10px] px-2 py-0.5 uppercase">Fase 0{step.step}</span>
              </div>
              <h3 className="editable-text font-bold text-md uppercase mb-2 leading-tight text-white" onClick={() => openEditor(`production.step.${step.step}.title`, `Fase ${step.step} - título`, step.title)}>
                {getText(`production.step.${step.step}.title`, step.title)}
              </h3>
              <p className="editable-text text-slate-400 text-sm leading-relaxed" onClick={() => openEditor(`production.step.${step.step}.description`, `Fase ${step.step} - descrição`, step.description)}>
                {getText(`production.step.${step.step}.description`, step.description)}
              </p>
            </div>
          ))}
        </div>

        <div className="editable-text mt-12 bg-white text-slate-900 border-2 border-emerald-500 p-5 font-bold uppercase text-sm md:text-md text-center max-w-xl mx-auto tracking-wide" onClick={() => openEditor('production.timescale', 'Meta de produção', `Meta de Produção: ${productionStandardData.model.timescale}`)}>
          {getText('production.timescale', `Meta de Produção: ${productionStandardData.model.timescale}`)}
        </div>
      </div>
    </div>
  );
}

function PortfolioView({ editableApi }: { editableApi: EditableApi }) {
  const { getText, openEditor } = editableApi;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-2 border-slate-900 bg-white p-6 md:p-12 relative overflow-hidden flex flex-col">
        {/* Brutalist Deco */}
        <div className="absolute right-0 top-0 w-32 h-32 border-b-[8px] border-l-[8px] border-emerald-500 pointer-events-none"></div>
        <div className="absolute right-8 top-8 w-16 h-16 bg-slate-900 pointer-events-none"></div>

        <h3 className="editable-text text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-12 w-full md:w-4/5 relative z-10" onClick={() => openEditor('portfolio.title', 'Título principal do portfólio', portfolioData.title)}>
          {getText('portfolio.title', portfolioData.title)}
        </h3>
        
        <div className="flex flex-col gap-12 relative z-10">
          <div className="bg-[#f8f9fa] border-2 border-slate-900 p-6 md:p-8">
            <h4 className="bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-1 mb-6 inline-block">Filosofia de Design</h4>
            <p className="editable-text text-xl md:text-2xl text-slate-800 font-bold leading-tight uppercase font-sans" onClick={() => openEditor('portfolio.philosophy', 'Filosofia de design', portfolioData.philosophy)}>
              "{getText('portfolio.philosophy', portfolioData.philosophy)}"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h4 className="bg-emerald-500 text-black text-[10px] font-bold uppercase px-2 py-1 mb-4 inline-block self-start">Diferenciais Executivos</h4>
              <ul className="text-sm font-bold text-slate-800 leading-relaxed uppercase space-y-4 border-t-2 border-slate-900 pt-4">
                {getText('portfolio.differentials', portfolioData.differentials).split('\n').map((diff, index) => {
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
              <h4 className="bg-white text-slate-900 text-[10px] font-bold uppercase px-2 py-1 mb-6 inline-block self-start">Estudo de Caso Simulado</h4>
              <div className="editable-text text-sm leading-relaxed font-mono whitespace-pre-wrap font-medium text-slate-300" onClick={() => openEditor('portfolio.case', 'Estudo de caso simulado', portfolioData.simulatedCase)}>
                {getText('portfolio.case', portfolioData.simulatedCase).split('\n').map((line, i) => (
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
