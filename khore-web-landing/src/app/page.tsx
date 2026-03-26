import { Github, Layers, Cpu, Code, ArrowRight, Zap, Combine, Clock, PenTool } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-charcoal-900 z-10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-[-1]"></div>
      <div className="hero-glow"></div>
      
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-900/80 backdrop-blur-md border-b border-charcoal-700/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-accent-green inline-block animate-pulse"></span>
            KHORE
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-accent-green transition-colors">Features</a>
            <a href="#engine" className="hover:text-accent-red transition-colors">Engine</a>
            <a href="#roadmap" className="hover:text-accent-blue transition-colors">Roadmap</a>
          </nav>
          <a
            href="https://github.com/kamol1dn/khore" // Update later
            className="flex items-center gap-2 text-sm font-mono border border-charcoal-700 bg-charcoal-800 hover:bg-charcoal-700 transition-colors px-4 py-2 rounded-md focus:ring-1 focus:ring-accent-green"
          >
            <Github size={16} />
            Star on GitHub
          </a>
        </div>
      </header>

      {/* Section 1: Hero */}
      <section className="pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-block mx-auto mb-6 px-3 py-1 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green font-mono text-xs">
          v0.1.0-alpha • Zero Copy Output
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          The Open-Source Video Engine <br className="hidden md:block"/>
          <span className="text-gradient">for the Next Generation.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          A node-based NLE powered by <span className="font-medium text-accent-red">Vulkan</span>. 
          No subscription, no legacy bloat, no lag.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://github.com/your-username/khore" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 hover:bg-white text-charcoal-900 px-8 py-4 rounded-md font-bold transition-all shadow-lg hover:shadow-gray-300/30">
            <Github size={20} />
            Star on GitHub
          </a>
          <a href="#manifesto" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-charcoal-800 border border-charcoal-700 hover:bg-charcoal-700 hover:border-charcoal-600 text-gray-200 px-8 py-4 rounded-md font-medium transition-all group">
            Read the Manifesto
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Wireframe Mockup */}
        <div className="mt-24 relative max-w-5xl mx-auto w-full aspect-video rounded-xl bg-charcoal-800 border border-charcoal-700 shadow-2xl shadow-black overflow-hidden flex flex-col">
          {/* Faux Toolbar */}
          <div className="h-8 border-b border-charcoal-700 bg-charcoal-900/50 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-charcoal-700"></div>
            <div className="w-3 h-3 rounded-full bg-charcoal-700"></div>
            <div className="w-3 h-3 rounded-full bg-charcoal-700"></div>
          </div>
          {/* Body */}
          <div className="flex-1 flex p-4 gap-4">
            {/* Left Node Graph Panel */}
            <div className="w-1/2 rounded border border-charcoal-700 bg-charcoal-900/50 flex relative items-center justify-center">
               <div className="absolute inset-x-0 inset-y-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #27272a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               <div className="absolute top-1/4 left-1/4 bg-charcoal-800 border-l-2 border-accent-blue px-3 py-2 text-xs font-mono rounded shadow">MediaIn1</div>
               <div className="absolute top-1/2 left-1/2 bg-charcoal-800 border-l-2 border-accent-green px-3 py-2 text-xs font-mono rounded shadow">ColorCorrect</div>
               <div className="absolute bottom-1/4 right-1/4 bg-charcoal-800 border-l-2 border-accent-red px-3 py-2 text-xs font-mono rounded shadow">MediaOut</div>
               
               {/* Quick lines mimicking node connections */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                  <path d="M 30% 30% L 50% 50%" stroke="#fff" strokeWidth="1" fill="none" />
                  <path d="M 50% 50% L 70% 70%" stroke="#fff" strokeWidth="1" fill="none" />
               </svg>
            </div>
            {/* Right Viewer & Timeline */}
            <div className="w-1/2 flex flex-col gap-4">
              <div className="flex-1 rounded border border-charcoal-700 bg-black flex items-center justify-center text-charcoal-700 font-mono text-sm">Viewer Pane</div>
              <div className="h-1/3 rounded border border-charcoal-700 bg-charcoal-900/50 p-2 flex flex-col gap-1">
                 <div className="w-full h-4 bg-charcoal-800 rounded flex overflow-hidden">
                    <div className="w-1/3 bg-accent-blue/40 border-r border-charcoal-900"></div>
                    <div className="w-1/2 bg-accent-green/40 border-r border-charcoal-900"></div>
                 </div>
                 <div className="w-full h-4 bg-charcoal-800 rounded flex overflow-hidden">
                    <div className="w-1/4 bg-accent-red/40 border-r border-charcoal-900 ml-1/4"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problem vs Solution */}
      <section id="features" className="py-24 px-6 border-t border-charcoal-800/50 bg-charcoal-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-4">Editing shouldn't lag.</h2>
             <p className="text-xl text-gray-400 font-light max-w-2xl">Legacy NLEs are built on decades of technical debt. Khore is built from bare metal up.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-charcoal-800/30 border border-charcoal-800 hover:border-charcoal-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-accent-blue mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Legacy Debt Erased</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Commercial editors crash on complex timelines because of monolithic architecture. Khore uses a <span className="text-gray-200 font-medium">multi-threaded task graph</span> structurally sound to handle millions of operations.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-charcoal-800/30 border border-charcoal-800 hover:border-charcoal-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-accent-red mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">GPU Native Rendering</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Bypassing CPU bottlenecks completely. Powered by a <span className="text-gray-200 font-medium">Zero-Copy Vulkan 1.4 pipeline</span>, frames go straight from decode to encode without touching the host unnecessarily.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-charcoal-800/30 border border-charcoal-800 hover:border-charcoal-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-accent-green mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Extensibility</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Built for pipeline TDs and standard editors alike. A <span className="text-gray-200 font-medium">native Python API</span> lets you script custom node operations, bulk automation, and CI/CD rendering tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Under The Hood */}
      <section id="engine" className="py-24 px-6 border-t border-charcoal-800/50 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Engineers.</h2>
             <p className="text-lg text-gray-400 font-light mb-8">
               Khore is radically open. The entire core is decoupled from the GUI, letting you run headless renders via CLI or integrate it directly into your own Rust/C++ pipelines.
             </p>
             <div className="grid grid-cols-2 gap-6 font-mono text-sm max-w-md">
                <div className="flex flex-col gap-2">
                   <span className="text-gray-500 uppercase tracking-wider text-xs">Engine</span>
                   <span className="text-gray-100 flex items-center gap-2"><Zap size={14} className="text-accent-blue" /> C++ / Rust</span>
                </div>
                <div className="flex flex-col gap-2">
                   <span className="text-gray-500 uppercase tracking-wider text-xs">Graphics</span>
                   <span className="text-gray-100 flex items-center gap-2"><Cpu size={14} className="text-accent-red" /> Vulkan / wgpu</span>
                </div>
                <div className="flex flex-col gap-2">
                   <span className="text-gray-500 uppercase tracking-wider text-xs">Media Parsing</span>
                   <span className="text-gray-100 flex items-center gap-2"><Combine size={14} className="text-accent-green" /> FFmpeg 8.1</span>
                </div>
                <div className="flex flex-col gap-2">
                   <span className="text-gray-500 uppercase tracking-wider text-xs">Interop</span>
                   <span className="text-gray-100 flex items-center gap-2"><Layers size={14} className="text-accent-blue" /> OpenTimelineIO</span>
                </div>
             </div>
           </div>

           {/* Tech stack code visualization */}
           <div className="rounded-xl border border-charcoal-700 bg-charcoal-900 p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-xs text-charcoal-700">src/engine/lib.rs</div>
              <pre className="font-mono text-sm text-gray-300 overflow-x-auto mt-4">
                 <code dangerouslySetInnerHTML={{ __html: `
<span class="text-accent-blue">pub fn</span> <span class="text-accent-green">init_vulkan_pipeline</span>() -&gt; Result&lt;Pipeline, Error&gt; {
    <span class="text-gray-500">// Zero-copy frame ingest</span>
    <span class="text-accent-blue">let</span> instance = Vulkan::new_context(Config::headless())?;
    
    <span class="text-accent-blue">let</span> queue = instance.get_compute_queue();
    <span class="text-accent-blue">let</span> mut graph = RenderGraph::<span class="text-accent-blue">new</span>();

    graph.set_cpu_passthrough(<span class="text-accent-red">false</span>);
    graph.enable_python_hooks(<span class="text-accent-red">true</span>);

    Ok(graph.build(queue))
}
                 `}} />
              </pre>
           </div>
        </div>
      </section>

      {/* Section 4: Roadmap */}
      <section id="roadmap" className="py-24 px-6 border-t border-charcoal-800/50 bg-charcoal-900 text-center">
         <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">The Master Plan</h2>
             <p className="text-gray-400 mb-16 font-light">We are building this in public. Join the movement.</p>

             <div className="grid md:grid-cols-3 gap-6 text-left">
                {/* Phase 1 */}
                <div className="p-6 rounded-lg border border-accent-green/30 bg-accent-green/5 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-accent-green"></div>
                   <div className="flex items-center gap-3 mb-4">
                      <div className="bg-accent-green/20 p-2 rounded text-accent-green"><Code size={18} /></div>
                      <h4 className="font-mono font-bold">Phase 1</h4>
                   </div>
                   <h5 className="font-bold text-lg mb-2 text-white">Core Engine CLI</h5>
                   <p className="text-gray-400 text-sm leading-relaxed">Headless rendering, Vulkan task graph implementation, FFmpeg wrapping, basic node execution.</p>
                </div>
                {/* Phase 2 */}
                <div className="p-6 rounded-lg border border-charcoal-700 bg-charcoal-800 relative">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="bg-charcoal-700 p-2 rounded text-gray-400"><Clock size={18} /></div>
                      <h4 className="font-mono font-bold text-gray-400">Phase 2</h4>
                   </div>
                   <h5 className="font-bold text-lg mb-2 text-white">Timeline GUI</h5>
                   <p className="text-gray-400 text-sm leading-relaxed">NLE fundamentals. Multi-track view, trimming tools, waveform generation, hardware-accelerated viewer.</p>
                </div>
                {/* Phase 3 */}
                <div className="p-6 rounded-lg border border-charcoal-700 bg-charcoal-800 relative">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="bg-charcoal-700 p-2 rounded text-gray-400"><Combine size={18} /></div>
                      <h4 className="font-mono font-bold text-gray-400">Phase 3</h4>
                   </div>
                   <h5 className="font-bold text-lg mb-2 text-white">Node Compositor</h5>
                   <p className="text-gray-400 text-sm leading-relaxed">Full node-based effect system, scripting API integration, masking, tracking, and advanced shading.</p>
                </div>
             </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-charcoal-800 bg-black pt-16 pb-8 px-6 text-sm flex flex-col items-center">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
           <div className="font-mono font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-accent-green inline-block"></span>
            KHORE
          </div>
          <div className="flex gap-8 font-mono text-gray-500">
             <a href="#" className="hover:text-gray-200 transition-colors">GitHub Repo</a>
             <a href="#" className="hover:text-gray-200 transition-colors">Documentation</a>
             <a href="#" className="hover:text-gray-200 transition-colors">Discord / Community</a>
          </div>
        </div>
        <div className="text-gray-600 font-mono text-xs">
           Open Source. Build the future of video editing.
        </div>
      </footer>
    </main>
  );
}
