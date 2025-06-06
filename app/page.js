import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Feed
 from '@/components/Feed';

const Home = () => {
  return (
    <section className="w-full flex items-center justify-center">
      {/* Glassmorphic content card */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-8 py-16 text-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl shadow-2xl">
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-purple-600">
          Prompt<span className="font-light">Market</span>
        </h1>
        <p className="mb-6 text-xl text-slate-300 max-w-2xl">
          The ultimate SaaS platform to manage, explore, and scale your prompt engineering workflow. Whether you`re building AI apps, chatbots, or automation tools — PromptMarket helps you discover high-quality prompts from creators across the globe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-slate-200 text-sm max-w-3xl mb-10">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Prompt Marketplace</h3>
            <p>Explore a curated collection of ready-to-use AI prompts for various models and use-cases.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Creator Dashboard</h3>
            <p>Create, manage and monetize your own prompt library with real-time analytics and feedback.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
            <p>Work together with your team, share private prompt sets, and manage role-based access.</p>
          </div>
        </div>

        <a
          href="/prompts"
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-cyan-600 hover:to-teal-500 transition-shadow hover:shadow-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
        >
          Explore Prompts
          <HiArrowNarrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Home;
