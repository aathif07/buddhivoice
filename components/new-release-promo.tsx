"use client";

import Image from 'next/image';
import { CheckCircle, Grid3x3, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const NewReleasePromo = () => {
  const uptimeBars = Array(34).fill(0);

  return (
    <section className="bg-black py-[120px]">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mb-12 flex flex-col items-center text-center">  
          <div className="text-label text-muted-foreground">Reliable & Scalable</div>
          <motion.h2
            className="text-section-heading mt-4 text-black"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Build Enterprise-Grade Agents At Scale
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Multilingual Support Card */}
          <motion.div
            className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white shadow-lg lg:row-span-2"
            style={{backgroundImage: 'url(https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/66336ff35f49ceb2f56b3e0c_Group%201%20(1).svg)', backgroundPosition: '100% 100%', backgroundRepeat: 'no-repeat'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-card-heading text-white">Multilingual Support</h3>
            <p className="mt-2 text-body-medium text-gray-300">
              Support 18+ languages, can dial to any countries phone numbers
            </p>
            <div className="relative mt-auto h-32 flex-grow">
               <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/6632eec0f685920b8f4fda08_Photo-1.png?"
                alt="US flag"
                width={72}
                height={72}
                className="absolute bottom-0 left-[-10px] h-14 w-14 rounded-full object-cover shadow-2xl"
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/6632eded0b962eee34015ed8_Photo3-2.png?"
                alt="German Flag"
                width={72}
                height={72}
                className="absolute bottom-0 left-1/2 h-18 w-18 -translate-x-1/2 rounded-full object-cover shadow-2xl"
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/6632edddbcfcb0aa45304169_Photo2-3.png?"
                alt="multi languages"
                width={72}
                height={72}
                className="absolute bottom-[-10px] right-2 h-16 w-16 rounded-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Effortless Scalability Card */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 text-white shadow-lg lg:row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
          >
            <h3 className="text-card-heading text-white">Effortless Scalability</h3>
            <p className="mt-2 text-body-medium text-gray-200">
              Effortlessly handle millions of calls with scalable concurrent calling
            </p>
            <div className="mt-auto flex flex-col space-y-4 pt-10">
              {[
                { calls: 5, avatar: 'https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/66336ff3966a3416a241775f_user.png' },
                { calls: 29, avatar: 'https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/66336ff3ddb961f7495b5251_user-2.png' },
                { calls: 80, avatar: 'https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/66336ff329433360b86a88b5_user-3.png' },
                { calls: null, avatar: 'https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/66336ff3ab1593bf4011882d_user-4.png' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                >
                  {item.calls && (
                  <div className="flex w-20 items-center justify-center space-x-2 rounded-full bg-white/20 p-2 backdrop-blur-sm">
                    <Phone className="h-4 w-4 text-white" />
                    <span className="font-medium">{item.calls}</span>
                  </div>
                  )}
                  {item.calls === null ? <div className="w-20" /> : null}
                  <div className="mx-4 flex-grow border-b-2 border-dotted border-white/50"></div>
                  <div className='w-9 h-9 bg-white/20 rounded-full flex items-center justify-center'>
                    <Image src={item.avatar} alt={`User ${index + 1}`} width={32} height={32} className="h-8 w-8 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Voice AI API Card */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] p-8 text-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
          >
            <h3 className="text-card-heading text-white">Voice AI API</h3>
            <p className="mt-2 text-body-medium text-gray-100">
              Natural, smooth, and empathetic AI conversations with only 500ms latency.
            </p>
            <div className="mt-auto pt-8">
              <svg width="100%" height="40" viewBox="0 0 197 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="3" height="11" rx="1.5" fill="white"></rect>
                <rect x="6" width="3" height="15" rx="1.5" fill="white"></rect>
                <rect x="12" y="5" width="3" height="23" rx="1.5" fill="white"></rect>
                <rect x="18" y="13" width="3" height="3" rx="1.5" fill="white"></rect>
                <rect x="24" y="9" width="3" height="16" rx="1.5" fill="white"></rect>
                <rect x="30" y="15" width="3" height="14" rx="1.5" fill="white"></rect>
                <rect x="36" y="8" width="3" height="20" rx="1.5" fill="white"></rect>
                <rect x="42" y="11" width="3" height="17" rx="1.5" fill="white"></rect>
                <rect x="48" y="4" width="3" height="31" rx="1.5" fill="white"></rect>
                <rect x="54" y="6" width="3" height="24" rx="1.5" fill="white"></rect>
                <rect x="60" y="2" width="3" height="33" rx="1.5" fill="white"></rect>
                <rect x="66" y="8" width="3" height="23" rx="1.5" fill="white"></rect>
                <rect x="72" width="3" height="40" rx="1.5" fill="white"></rect>
                <rect x="78" y="5" width="3" height="28" rx="1.5" fill="white"></rect>
                <rect x="84" y="10" width="3" height="19" rx="1.5" fill="white"></rect>
                <rect x="90" y="15" width="3" height="10" rx="1.5" fill="white"></rect>
                <rect x="96" y="12" width="3" height="13" rx="1.5" fill="white"></rect>
                <rect x="102" y="9" width="3" height="21" rx="1.5" fill="white"></rect>
                <rect x="108" y="4" width="3" height="33" rx="1.5" fill="white"></rect>
                <rect x="114" y="6" width="3" height="23" rx="1.5" fill="white"></rect>
                <rect x="120" y="9" width="3" height="20" rx="1.5" fill="white"></rect>
                <rect x="126" y="14" width="3" height="11" rx="1.5" fill="white"></rect>
                <rect x="132" y="11" width="3" height="17" rx="1.5" fill="white"></rect>
                <rect x="138" y="16" width="3" height="6" rx="1.5" fill="white"></rect>
                <rect x="144" y="12" width="3" height="12" rx="1.5" fill="white"></rect>
                <rect x="150" y="5" width="3" height="28" rx="1.5" fill="white"></rect>
                <rect x="156" y="9" width="3" height="19" rx="1.5" fill="white"></rect>
                <rect x="162" width="3" height="37" rx="1.5" fill="white"></rect>
                <rect x="168" y="4" width="3" height="30" rx="1.5" fill="white"></rect>
                <rect x="174" y="11" width="3" height="17" rx="1.5" fill="white"></rect>
                <rect x="180" y="15" width="3" height="7" rx="1.5" fill="white"></rect>
                <rect x="186" y="13" width="3" height="12" rx="1.5" fill="white"></rect>
                <rect x="192" y="10" width="3" height="20" rx="1.5" fill="white"></rect>
              </svg>
            </div>
          </motion.div>
          
          {/* Reliable and Stable Platform Card */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 text-gray-900 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
          >
             <h3 className="text-card-heading text-gray-900">Reliable and Stable Platform You can trust</h3>
            <p className="mt-2 text-body-medium text-gray-700">
              With average 99.99% uptime and effortless fallback. BuddhiVoice ensures your phone callers are always production-ready.
            </p>
            <div className="mt-auto space-y-3 pt-6">
                <div className="flex items-center space-x-3 rounded-lg bg-white p-3 shadow-sm">
                    <Grid3x3 className="h-5 w-5 text-gray-700" />
                    <span className="font-semibold text-gray-900">BuddhiVoice</span>
                </div>
                <div className="flex items-center space-x-3 rounded-lg bg-emerald-500/10 p-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="font-semibold text-emerald-600">All Systems Operational</span>
                </div>
                <div className="pt-2">
                    <div className="mb-2 flex items-baseline justify-between">
                        <span className="text-label text-gray-600">API Uptime</span>
                        <span className="font-semibold text-gray-900">99.99%</span>
                    </div>
                    <div className="flex justify-between gap-px">
                        {uptimeBars.map((_, i) => (
                            <motion.div
                              key={i}
                              className={`h-6 w-1 flex-grow rounded-sm ${i < 33 ? 'bg-success-green' : 'bg-gray-300'}`}
                              initial={{ opacity: 0, scaleY: 0.6 }}
                              whileInView={{ opacity: 1, scaleY: 1 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.4, delay: i * 0.02 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Fully Compliant Platform Card */}
          <motion.div
            className="rounded-3xl bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] p-8 shadow-lg lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.24, ease: 'easeOut' }}
          >
            <h3 className="text-card-heading text-white">Fully Compliant Platform</h3>
            <p className="mt-2 max-w-2xl text-body-medium text-white/90">
              BuddhiVoice is SOC 2 Type 1&2, HIPAA, and GDPR compliant, meeting all industry compliance standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { NewReleasePromo };