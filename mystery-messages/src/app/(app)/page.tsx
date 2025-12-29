'use client';

import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Lock, Sparkles, Github, Instagram, Send, Copy, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from "@/Messages.json"
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const exampleUrl = "localhost:3000/u/username";

  // Generate floating bubbles
  useEffect(() => {
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setBubbles(newBubbles);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(exampleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <main className="flex-grow">
        {/* Gradient Hero with Floating Bubbles */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-900 text-white overflow-hidden">
          {/* Floating Bubbles Background */}
          <div className="absolute inset-0 overflow-hidden">
            {bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="absolute rounded-full bg-white/10 backdrop-blur-sm animate-float"
                style={{
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  left: `${bubble.left}%`,
                  bottom: '-100px',
                  animationDelay: `${bubble.delay}s`,
                  animationDuration: `${bubble.duration}s`,
                }}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative px-4 md:px-24 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 mb-8 shadow-lg">
                <Sparkles className="w-4 h-4 text-yellow-200" />
                <span className="text-sm font-medium text-white">100% Anonymous & Secure</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                Mystery Message
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
                Send & Receive Anonymous Messages
              </p>
              
              <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Share your unique link and let others send you honest, anonymous feedback. 
                No names, no traces—just pure, unfiltered thoughts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-white/50 transition-all hover:scale-105">
                  Get Started Free
                </Button>
               
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#111827"/>
            </svg>
          </div>
        </section>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) scale(0.5);
              opacity: 0;
            }
          }
          .animate-float {
            animation: float linear infinite;
          }
        `}</style>

     {/* How It Works Section */}
<section className="relative px-4 md:px-24 py-16 md:py-24 overflow-hidden bg-black">

  {/* Grid Background */}
  <div
    className={cn(
      "absolute inset-0",
      "[background-size:20px_20px]",
      "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
    )}
  />

  {/* Radial fade effect */}
  <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        How to Send Anonymous Messages
      </h2>
      <p className="text-gray-400 text-lg">
        It's simple, secure, and takes just seconds
      </p>
    </div>

    {/* Steps */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">

      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
        <CardHeader>
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">1</span>
          </div>
          <CardTitle className="text-white text-xl">Get Their Link</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            Ask your friend for their Mystery Message link or username. Each user has a unique URL.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
        <CardHeader>
          <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">2</span>
          </div>
          <CardTitle className="text-white text-xl">Write Your Message</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            Type your honest thoughts, feedback, or anonymous question. Be kind and respectful!
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
        <CardHeader>
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">3</span>
          </div>
          <CardTitle className="text-white text-xl">Send Anonymously</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            Click send and your message is delivered completely anonymously. Your identity stays hidden.
          </p>
        </CardContent>
      </Card>

    </div>

    {/* URL Example */}
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Lock className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-semibold text-white">
          Your Personal Link Format
        </h3>
      </div>

      <p className="text-gray-400 mb-6">
        Share your unique link with anyone. They'll be able to send you anonymous messages instantly.
      </p>

      <div className="bg-gray-950 border border-purple-500/30 rounded-lg p-4 flex items-center justify-between gap-4">
        <code className="text-purple-300 text-sm md:text-base flex-grow overflow-x-auto">
          {exampleUrl}
        </code>

        <Button
          onClick={handleCopy}
          size="sm"
          className="bg-purple-600 hover:bg-purple-700 flex-shrink-0"
        >
          {copied ? (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </>
          )}
        </Button>
      </div>

      <p className="text-gray-500 text-sm mt-4">
        💡 Replace "username" with the recipient's actual username
      </p>
    </div>

  </div>
</section>


        {/* Features Section */}
        <section className="px-4 md:px-24 py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 backdrop-blur border-gray-700">
                <CardHeader>
                  <MessageSquare className="w-10 h-10 text-purple-400 mb-2" />
                  <CardTitle className="text-white">AI Message Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Stuck on what to write? Our AI suggests thoughtful questions and prompts to help you get meaningful feedback.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur border-gray-700">
                <CardHeader>
                  <Lock className="w-10 h-10 text-pink-400 mb-2" />
                  <CardTitle className="text-white">Message Acceptance Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Toggle message acceptance on or off anytime. Take a break whenever you need without deleting your account.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Messages Carousel */}
        <section className="px-4 md:px-24 py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real Anonymous Messages
              </h2>
              <p className="text-gray-400">See what others are sharing</p>
            </div>

            <Carousel
              plugins={[Autoplay({ delay: 2000 })]}
              className="w-full max-w-lg md:max-w-xl mx-auto"
            >
              <CarouselContent>
                {messages.map((message, index) => (
                  <CarouselItem key={index} className="p-4">
                    <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                      <CardHeader>
                        <CardTitle className="text-purple-300 text-lg">{message.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Mail className="flex-shrink-0 text-purple-400 mt-1" />
                          <p className="text-gray-200 leading-relaxed">{message.content}</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          {message.received}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      </main>

    
    </>
  );
}