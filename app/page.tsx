'use client';

import React, { useEffect } from 'react';
import { Sparkles, CreditCard } from 'lucide-react';

// Extend the Window interface to include the Chatbase config
declare global {
  interface Window {
    embeddedChatbotConfig: {
      chatbotId: string;
      domain: string;
    };
  }
}

export default function Home() {
  useEffect(() => {
    // Configure Chatbase embed
    window.embeddedChatbotConfig = {
      chatbotId: "blWn0Ze_4p-kS6ibfiQWC",
      domain: "www.chatbase.co"
    };

    // Load the Chatbase script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute('chatbotId', 'blWn0Ze_4p-kS6ibfiQWC');
    script.setAttribute('domain', 'www.chatbase.co');
    script.defer = true;

    // Auto-open the chatbot after it loads
    script.onload = () => {
      // Wait a bit for the chatbot to initialize, then open it
      setTimeout(() => {
        // Find and click the chatbot button to open it
        const chatButton = document.querySelector('[id^="chatbase-bubble-button"]') as HTMLElement;
        if (chatButton) {
          chatButton.click();
        }
      }, 500);
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative bg-background min-h-screen overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient-xy bg-[length:400%_400%] pointer-events-none"></div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* First orb */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
        {/* Second orb */}
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10 pt-6 md:pt-8 lg:pt-4 pb-6 md:pb-8">
        {/* Feature boxes at top */}
        <div className="flex justify-center gap-3 mb-4 pt-2 flex-wrap">
          {/* AI-Powered */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 lg:px-5 py-2.5 border border-slate-200/60 flex items-center gap-2 lg:gap-2.5 shadow-sm flex-shrink-0">
            <svg className="h-5 w-5 lg:h-5 lg:w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-slate-700 font-medium text-xs lg:text-sm">AI-Powered</span>
          </div>

          {/* Personalized */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 lg:px-5 py-2.5 border border-slate-200/60 flex items-center gap-2 lg:gap-2.5 shadow-sm flex-shrink-0">
            <svg className="h-5 w-5 lg:h-5 lg:w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-slate-700 font-medium text-xs lg:text-sm">Personalized</span>
          </div>

          {/* Free to Use */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 lg:px-5 py-2.5 border border-slate-200/60 flex items-center gap-2 lg:gap-2.5 shadow-sm flex-shrink-0">
            <svg className="h-5 w-5 lg:h-5 lg:w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-slate-700 font-medium text-xs lg:text-sm">Free to Use</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-2 md:py-4 lg:pt-20 lg:pb-8 mb-2 lg:mb-4 lg:before:absolute lg:before:-top-[200px] lg:before:bottom-0 lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:w-screen lg:before:bg-hero-gradient lg:before:-z-10">
          {/* Hero content */}
          <div className="relative z-10 max-w-3xl lg:max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 lg:mb-3 tracking-tight lg:whitespace-nowrap text-center">
              <span className="hidden lg:inline">
                <span className="text-primary">Find Your </span>
                <span className="bg-gradient-to-r from-primary to-purple-light bg-clip-text text-transparent">Perfect </span>
                <span className="text-foreground">Credit Card</span>
              </span>
              <span className="lg:hidden">
                <span className="text-primary">Find Your Perfect</span>
                <br />
                <span className="text-foreground">Credit Card</span>
              </span>
            </h1>

            <p className="text-lg lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-tight lg:leading-relaxed mb-4 lg:mb-6">
              <span className="lg:hidden">Get personalized credit card recommendations powered by AI.</span>
              <span className="hidden lg:block">
                <span className="whitespace-nowrap block">Get personalized credit card recommendations powered by AI.</span>
                <span className="whitespace-nowrap block">Choose the card that fits your life.</span>
              </span>
            </p>

            {/* Chatbase will inject its widget here */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Sparkles className="h-4 w-4 text-primary" strokeWidth={2} />
                <span className="text-sm font-medium text-primary">AI assistant ready to help</span>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="max-w-4xl mx-auto mt-12 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-slate-200/60 shadow-sm">
            <div className="flex items-start gap-4">
              <CreditCard className="h-8 w-8 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-3 text-foreground">How It Works</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">1.</span>
                    <span>The chat window will open automatically in the bottom right corner</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">2.</span>
                    <span>Ask about credit cards, rewards, travel perks, or any questions you have</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">3.</span>
                    <span>Get instant AI-powered recommendations tailored to your needs</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Questions */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">Popular Questions</h3>
            <p className="text-sm text-muted-foreground">Try asking about these topics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "What's the best card for travel?",
              "How can I earn cash back on everyday purchases?",
              "Show the best cards with no annual fee",
              "Recommend luxury travel credit cards",
              "What are the best cards for beginners?",
              "Which cards offer the best welcome bonuses?"
            ].map((question, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-slate-200/40 hover:border-primary/40 transition-colors">
                <p className="text-sm text-foreground">{question}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
