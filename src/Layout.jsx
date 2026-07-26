import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#2C3E1F] antialiased">
      <header className="border-b border-[#2C3E1F]/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold tracking-tight">שיר ופרח</a>
          <span className="text-sm text-[#2C3E1F]/60">הבית לפרחים ורגעים יפים</span>
        </div>
      </header>
      {children}
    </div>
  );
}
