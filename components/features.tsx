"use client"

import type React from "react"
import { useTheme } from "next-themes"
import Earth from "./ui/globe"
import ScrambleHover from "./ui/scramble"
import { FollowerPointerCard } from "./ui/following-pointer"
import { motion, useInView, useAnimation } from "framer-motion"
import { Suspense, useEffect, useRef, useState, useCallback } from "react"
import { montserrat } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()
  const [isHovering, setIsHovering] = useState(false)
  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false)
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false)
  const [isFeature5Hovering, setIsFeature5Hovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  
  // Chatbot states
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your BuddhiVoice AI assistant. How can I help you today?", isUser: false },
    { id: 2, text: "What time should I schedule the call?", isUser: true },
    { id: 3, text: "I can schedule a call for 4 PM as you requested. Would you like me to confirm this appointment?", isUser: false },
    { id: 4, text: "Yes, please confirm.", isUser: true },
    { id: 5, text: "Great! Your appointment is confirmed for today at 4 PM. I'll send you a reminder 30 minutes before.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is updated before scrolling
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [messages, isTyping]);

  const [baseColor, setBaseColor] = useState<[number, number, number]>([0.31, 0.275, 0.898]) // #4F46E5 in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([0.31, 0.275, 0.898]) // #4F46E5 in RGB normalized
  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0)
  
  // Animation controls for the wave animation to allow pausing and resuming
  const waveControls = useAnimation()

  // Throttled resize handler for performance
  const handleResize = useCallback(() => {
    const width = window.innerWidth
    setIsMobile(width < 768)
    setIsDesktop(width >= 1024)
  }, [])

  // Initialize device detection
  useEffect(() => {
    handleResize()
    let timeoutId: NodeJS.Timeout
    
    const throttledResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleResize, 150)
    }
    
    window.addEventListener('resize', throttledResize)
    return () => {
      window.removeEventListener('resize', throttledResize)
      clearTimeout(timeoutId)
    }
  }, [handleResize])

  // Handle sending chat messages
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    
    // Add user message
    const newUserMessage = {
      id: Date.now(),
      text: inputValue,
      isUser: true
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    const userMessage = inputValue.toLowerCase();
    setInputValue("");
    setIsTyping(true);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      let response = "";
      
      // Handle specific scenarios
      if (userMessage.includes('hello') || userMessage.includes('hi')) {
        response = "Hello! I'm your BuddhiVoice AI assistant. How can I help you today?";
      } else if (userMessage.includes('time') && userMessage.includes('4') || userMessage.includes('schedule') || userMessage.includes('appointment')) {
        response = "I can schedule a call for 4 PM as you requested. Would you like me to confirm this appointment?";
      } else if (userMessage.includes('yes') && messages.some(m => m.text.includes('confirm'))) {
        response = "Great! Your appointment is confirmed for today at 4 PM. I'll send you a reminder 30 minutes before.";
      } else {
        // Default responses
        const aiResponses = [
          "I understand. How else can I assist you?",
          "Thanks for your message. Is there anything specific you'd like to know about our services?",
          "I'm here to help. Would you like information about our pricing plans?",
          "Great question! Let me check that for you.",
          "I can help with that. What other information do you need?",
          "Thanks for reaching out! Our team will get back to you shortly.",
          "I've noted your request. Is there anything else I can help with?",
          "That's a good point. Let me provide more details on that."
        ];
        response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      }
      
      const newAiMessage = {
        id: Date.now() + 1,
        text: response,
        isUser: false
      };
      
      setMessages(prev => [...prev, newAiMessage]);
    }, 1000);
  };

  useEffect(() => {
    setBaseColor([0.31, 0.275, 0.898]) // #4F46E5
    setGlowColor([0.31, 0.275, 0.898]) // #4F46E5
    setDark(theme === "dark" ? 1 : 0)
  }, [theme])

  // Effect to control the wave animation based on hover state
  useEffect(() => {
    // Defines the animation for a single bar. It's a function so each bar gets a unique random value.
    const startAnimation = () => ({
      scaleY: [0.1, Math.random() * 0.9 + 0.1, 0.1],
      transition: {
        duration: 1.2 + Math.random(),
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut" as const,
      },
    })
    
    if (isFeature4Hovering) {
      waveControls.stop() // Pause the animation
    } else {
      waveControls.start(startAnimation) // Resume the animation
    }
  }, [isFeature4Hovering, waveControls])


  return (
    <section id="features" className="text-foreground relative overflow-hidden py-8 sm:py-16 md:py-24 lg:py-32">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-4 sm:gap-8 md:gap-12 px-4 md:px-6 lg:px-8"
      >
        <h2
          className={cn(
            "via-foreground mb-4 md:mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-3xl md:text-4xl lg:text-[54px] lg:leading-[60px] font-semibold tracking-tighter text-transparent",
            montserrat.className,
          )}
        >
          Powerful Voice AI Features
        </h2>
        <FollowerPointerCard
          title={
            <div className="flex items-center gap-2">
              <span>✨</span>
              <span>Voice AI Capabilities</span>
            </div>
          }
        >
          <div className="cursor-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center max-w-7xl mx-auto">
              {/* Voice Builder */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out h-[500px] md:h-[550px] lg:h-[600px]"
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: isDesktop ? 1.02 : 1,
                  borderColor: "rgba(79, 70, 229, 0.6)",
                  boxShadow: "0 0 30px rgba(79, 70, 229, 0.2)",
                }}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Voice AI Agent Builder</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Create sophisticated voice agents with our intuitive visual builder. No coding required to design conversational flows.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative min-h-[300px]">
                  <div
                    className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="absolute inset-0">
                      <img
                        src="https://img.freepik.com/free-vector/grainy-gradient-background-dark-blue_78370-4994.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Voice AI Builder"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute opacity-60">
                        {[0, 1].map(i => (
                          <motion.circle
                            key={i}
                            cx="200"
                            cy="150"
                            r="40"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="1.5"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isCliHovering ? { scale: [1, 1.5], opacity: [1, 0] } : { scale: 0, opacity: 0 }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                              repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                              delay: i * 1,
                            }}
                          />
                        ))}
                      </svg>
                    </motion.div>
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full blur-[74px] opacity-65 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 1 }}
                      animate={isCliHovering ? { scale: [1, 1.342, 1, 1.342] } : { scale: 1 }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center gap-8">
                        <div className="flex flex-col gap-3">
                          {["Sales Qualification", "Customer Support", "Appointment Setting"].map((item, index) => (
                            <motion.div
                              key={`left-${index}`}
                              className="bg-white rounded px-3 py-2 flex items-center gap-2 text-black text-sm font-medium shadow-sm"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [-20, 0] } : { x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                {index === 0 && <span className="text-xs">📞</span>}
                                {index === 1 && <span className="text-xs">💬</span>}
                                {index === 2 && <span className="text-xs">📅</span>}
                              </div>
                              {item}
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          className="w-16 h-16 border border-gray-300 rounded-lg overflow-hidden shadow-lg z-10"
                          initial={{ opacity: 1, scale: 1 }}
                          animate={isCliHovering ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <img
                            src="https://image.shutterstock.com/image-vector/vb-bv-logo-design-vector-600nw-2263585685.jpg"
                            alt="VB BV Logo"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div className="flex flex-col gap-3">
                          {["Lead Scoring", "Survey Collection", "Order Taking"].map((item, index) => (
                            <motion.div
                              key={`right-${index}`}
                              className="bg-white rounded px-3 py-2 flex items-center gap-2 text-black text-sm font-medium shadow-sm"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [20, 0] } : { x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                {index === 0 && <span className="text-xs">📊</span>}
                                {index === 1 && <span className="text-xs">📋</span>}
                                {index === 2 && <span className="text-xs">🛒</span>}
                              </div>
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Global */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out h-[500px] md:h-[550px] lg:h-[600px]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{
                  scale: isDesktop ? 1.02 : 1,
                  borderColor: "rgba(79, 70, 229, 0.6)",
                  boxShadow: "0 0 30px rgba(79, 70, 229, 0.2)",
                }}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Global Calling Capabilities</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Make and receive calls from anywhere in the world with our global telephony network. Support for 18+ languages.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[280px] md:min-h-[320px] lg:min-h-[360px] grow items-start justify-center select-none relative">
                  <h1 className="mt-4 md:mt-8 text-center text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
                    <span className='bg-background relative mt-3 inline-block w-fit rounded-md border px-1.5 py-0.5 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                      <ScrambleHover
                        text="Global Voice AI"
                        scrambleSpeed={70}
                        maxIterations={20}
                        useOriginalCharsOnly={false}
                        className="cursor-pointer bg-gradient-to-t from-[#4F46E5] to-[#4F46E5] bg-clip-text text-transparent"
                        isHovering={isHovering}
                        setIsHovering={setIsHovering}
                        characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
                      />
                    </span>
                  </h1>
                  <div className="absolute top-32 md:top-40 lg:top-48 z-10 flex items-center justify-center">
                    <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
                      <Suspense
                        fallback={
                          <div className="bg-secondary/20 h-[300px] w-[300px] animate-pulse rounded-full"></div>
                        }
                      >
                        {!isMobile && (
                          <Earth 
                            baseColor={baseColor} 
                            markerColor={[0, 0, 0]} 
                            glowColor={glowColor} 
                            dark={dark}
                          />
                        )}
                        {isMobile && (
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#4F46E5]/30 to-[#4F46E5]/10 border border-[#4F46E5]/20 flex items-center justify-center">
                            <div className="text-[#4F46E5] text-4xl">🌍</div>
                          </div>
                        )}
                      </Suspense>
                    </div>
                  </div>
                  <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                    <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                    <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                  </div>
                </div>
              </motion.div>

              {/* Smart Components */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out h-[500px] md:h-[550px] lg:h-[600px]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{
                  scale: isDesktop ? 1.02 : 1,
                  borderColor: "rgba(79, 70, 229, 0.5)",
                  boxShadow: "0 0 30px rgba(79, 70, 229, 0.2)",
                }}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Intelligent Conversation Handling</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Advanced natural language processing for human-like conversations.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[280px] md:min-h-[320px] lg:min-h-[360px] p-2 md:p-4">
                  <div className="w-full max-w-lg">
                    <div className="relative rounded-2xl border border-white/10 bg-black/20 dark:bg-white/5 backdrop-blur-sm">
                      <div className="p-4 min-h-[150px] flex flex-col justify-center">
                          <div className="flex items-start gap-2.5 mb-4">
                            <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center border border-green-400 text-green-300">C</div>
                            <div className="bg-white/5 p-3 rounded-lg rounded-tl-none"><p className="text-sm text-white/80">I'd like to schedule a demo.</p></div>
                          </div>
                          <div className="flex items-start gap-2.5 justify-end">
                            <div className="bg-[#4F46E5] p-3 rounded-lg rounded-br-none"><p className="text-sm text-white">Of course! What time works best?</p></div>
                             <div className="w-8 h-8 rounded-full bg-indigo-400/20 flex items-center justify-center border border-indigo-400 text-indigo-300">AI</div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Analytics & Monitoring */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out h-[500px] md:h-[550px] lg:h-[600px]"
                onMouseEnter={() => setIsFeature4Hovering(true)}
                onMouseLeave={() => setIsFeature4Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{
                  scale: isDesktop ? 1.02 : 1,
                  borderColor: "rgba(79, 70, 229, 0.6)",
                  boxShadow: "0 0 30px rgba(79, 70, 229, 0.2)",
                }}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Analytics & Monitoring</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Real-time dashboards with call analytics and performance metrics.
                    </p>
                  </div>
                </div>

                <div className="flex grow items-center justify-center select-none relative min-h-[280px] md:min-h-[320px] lg:min-h-[360px] p-2 md:p-4">
                  <div className="relative w-full h-48 md:h-56 lg:h-64 max-w-sm rounded-lg border border-white/10 bg-black/20 p-4 md:p-6 flex flex-col justify-between backdrop-blur-sm overflow-hidden">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center z-10">
                      <h4 className="font-semibold text-white">Live Call Analysis</h4>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-green-400 animate-pulse">●</span>
                        <span className="text-sm text-white/70">Monitoring</span>
                      </div>
                    </div>

                    {/* Animated Equalizer (always visible, pauses on hover) */}
                    <div className="absolute bottom-0 left-0 right-0 w-full h-24 md:h-28 lg:h-32 flex justify-center items-end gap-1 md:gap-1.5 opacity-50 [mask-image:linear-gradient(to_top,white_20%,transparent)]">
                      {[...Array(isMobile ? 12 : 18)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 md:w-3 rounded-t-full bg-gradient-to-t from-[#4F46E5] to-[#818cf8]"
                          style={{ originY: 1, height: "100%" }}
                          animate={waveControls} // Controlled by useAnimation hook
                        />
                      ))}
                    </div>

                    <motion.div
                      className="absolute inset-0 flex justify-center items-center p-4 md:p-6 bg-black/40 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isFeature4Hovering ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                        <h4 className="font-bold text-lg md:text-xl lg:text-2xl text-white">BuddhiVoice</h4>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* BuddhiVoice AI Agent - Full Width on Mobile */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-1 md:col-span-2 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out min-h-[600px] md:min-h-[650px] lg:min-h-[700px]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{
                  scale: isDesktop ? 1.01 : 1,
                  borderColor: "rgba(79, 70, 229, 0.6)",
                  boxShadow: "0 0 30px rgba(79, 70, 229, 0.2)",
                }}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">BuddhiVoice AI Agent</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Experience human-like conversations with our advanced AI agent.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] p-2 md:p-4">
                  <div className="w-full max-w-4xl">
                    <div className="relative rounded-2xl border border-white/10 bg-black/20 dark:bg-white/5 backdrop-blur-sm">
                      <div className="flex items-center justify-between p-3 md:p-4 border-b border-white/10">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                          <span className="text-white font-medium text-sm md:text-base">BuddhiVoice AI Agent</span>
                        </div>
                        <div className="text-xs text-green-400 flex items-center gap-1">
                          <span className="animate-pulse">●</span>
                          <span className="hidden md:inline">Online</span>
                        </div>
                      </div>
                      <div ref={chatContainerRef} className="p-3 md:p-4 h-48 md:h-56 lg:h-64 overflow-y-auto">
                        <div className="flex flex-col gap-4">
                          {/* Chat messages */}
                          {messages.map((message) => (
                            <div 
                              key={message.id} 
                              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                              <div 
                                className={`rounded-2xl px-3 py-2 md:px-4 md:py-2 max-w-[250px] md:max-w-xs text-xs md:text-sm ${
                                  message.isUser 
                                    ? 'bg-[#4F46E5] rounded-br-md' 
                                    : 'bg-white/10 rounded-bl-md'
                                }`}
                              >
                                <p className="text-white text-xs md:text-sm">{message.text}</p>
                              </div>
                            </div>
                          ))}
                          {/* Typing indicator */}
                          {isTyping && (
                            <div className="flex justify-start">
                              <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 md:px-4 md:py-2">
                                <div className="flex space-x-1">
                                  <div className="h-2 w-2 rounded-full bg-white animate-bounce"></div>
                                  <div className="h-2 w-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                  <div className="h-2 w-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                              </div>
                            </div>
                          )}
                          <div ref={messagesEndRef} />
                        </div>
                      </div>
                      <div className="p-3 md:p-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && inputValue.trim()) {
                                handleSendMessage();
                              }
                            }}
                            placeholder="Type your message..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-full px-3 py-2 md:px-4 md:py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-[#4F46E5] text-xs md:text-sm"
                          />
                          <button 
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim()}
                            className={`p-2 rounded-full transition-colors ${
                              inputValue.trim() 
                                ? 'bg-[#4F46E5] hover:bg-[#4F46E5]/90' 
                                : 'bg-gray-500 cursor-not-allowed'
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white"
                            >
                              <path d="m22 2-7 20-4-9-9-4Z"></path>
                              <path d="M22 2 11 13"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  )
}