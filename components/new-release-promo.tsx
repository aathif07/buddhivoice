"use client";

import Image from 'next/image';
import { CheckCircle, Grid3x3, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * A component to display the features of the BuddhiVoice platform in an animated, responsive grid.
 */
const NewReleasePromo = () => {
  // Create an array to generate the 34 bars for the uptime meter
  const uptimeBars = Array(34).fill(0);

  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="font-semibold text-blue-400">Reliable & Scalable</div>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Build Enterprise-Grade Agents At Scale
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Multilingual Support */}
          <motion.div
            className="relative flex flex-col overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-lg lg:row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold text-white">Multilingual Support</h3>
            <p className="mt-2 text-gray-300">
              Support 18+ languages, can dial to any countries phone numbers
            </p>
            <div className="relative mt-auto h-48 flex-grow">
              
              {/* Grid layout of flags without background */}
              <div className="relative w-full h-full">
                
                {/* Grid layout of flags to fill empty space */}
                <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
                  {/* Row 1 */}
                  <div className="flex flex-col items-center">
                    <Image
                      src="data:image/png;base64,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"
                      alt="US Flag"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-white/30"
                    />
                    <span className="text-white text-xs mt-2 font-medium">English</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Image
                      src="data:image/png;base64,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"
                      alt="China Flag"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-white/30"
                    />
                    <span className="text-white text-xs mt-2 font-medium">中文</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Image
                      src="data:image/png;base64,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"
                      alt="Japan Flag"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-white/30"
                    />
                    <span className="text-white text-xs mt-2 font-medium">日本語</span>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="flex flex-col items-center">
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAACIlBMVEWtFRn6vQD+wwCrDBm/TBW8RhawIya1ACeysrK6ACn+wAD/wQD/wAChhACys7WVIx2IZwaVHh6HbACyACi0uLjrrwC3ACOdnZ3FlQCcfACVQEmTk5OboKmqnoiPcgCdiFzEmgCeUxWbACSlggB6YgDdrADepQCjACSTZWqGVg3tswD/yQCWdAB5YQCsACiVegCJAB9/awAAR7aOXwzFcha8WhuNSwCSfwB6QhCIdQCRVxDJUqDcV66EWmCcWBO9ACG6ABaMQBagOhymKCCTLRulopwaQ5cAKpKMkaB4gJtdX4WEaxppWzR5ZjLUtHO/q4LPp0ntv1JkVlMAN6k3QW/ptjC1o4LgvG+0ji2+mki0m2XDo1ttVACCaBjOtILlu12ihTxhSQCLe1fSixBzbFr///99bSqek3XLfhO1joduNhBnQRKbKg2jgi90QAB4Uwm7qa2NAAmeJzqMXEe2ZG+wdX2XQhiiGTOrShrbkw+ZhU9raR4AWTtDWijNozB3AB2Xcj9rHxSIPixtOBlMLwgUAAdAABFTABRQSg9gQAl5DwCiWIF+HRidO0ezgaGZUli+ZJ6XfY2oTYiWcYe3d5/BbaOUemtVVWSYi4yMXXuNOgCnZBGQWE1YI184LngANpJyFkI1TI2EDjxpHlRFKXa6ew4AdU0uYDc2QGrAjFNeb55ybnU6WJ1SZZmoRTRSJDcAQRtYcGsyWkeFPlRgIhhtgXeHqFlfAAAL60lEQVR4nO2dC3vT1hmAY7mNfCQnkSXFsuNExLZixcYSdpQQ34ivSTOgCSVci5sSwoBBiCFdXZdB6WVbu5KRhFLijULKNraWttvajf+3I9nOzc/Knsp+JsJ5QbYS+7OiN98559ORYre0IBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoGow4zYTstLiO20YIjttJgQ20FO6kFO6kFO6kFO6kFO6kFO6mmiEyLQvNduKk100kn7iOa9ehNpnhPC6wxam/bqzaSJebKbbt5rN5XmOcH2HxhDebKB1WolTAe9r/rgSlM20FSa4qRzYnLi0GuHp44cPTR97LivGZtoJg12AvPCGjg1eSAYdJ44lt918nIweOD1iaNW4nnKl0Y6sQaOT0+cUo34AgGfN79Lqqy8MX3q1PTkm89NudJAJ4FDk6edNDU548BgXUJg+R7JpK30zkxSVPD066eOPh/J0jgnndOnKYcvYNolYfArgtwNnQRItWrDgmdgujjoyxOvPRdSGudkUvCSBGEiz/AkgWG+2UFpVBic9WEYQXrPmtR8ceSnOxu2uSbSMCfHgzzMDxIjz0tk56DIMKL083Pq3WDnbup8ACNhvnipiechURrlhDhEOUgscGHopV9IEYbBcdwWtpzLwHuGSQvll4YuQC2+/MkGba6pNCxPJiRHZ0lmGCZV9gOoAgcX+Uu4trLXZYZm5FJnb36iUZtrJo1yYj3mFMSKgrm0rN3H2mhNDrO4V7vHZYGebNDmmkrDnBy/HK44YcJtNhHgsj9C+2MeAGRxeI8HVJwEp1+k/sRk6pkXAdx1kJt35/miOdwWBUrbsNlG8ZFCDmYO1JTuebHGHdLLD4s50V4c5plC1HzFXMhEOpSrV8xUVI61+e1yTozuobBGba6ZNC5PyAAvtUUXPJGcX5TtbzGAGRaB/S07g0uiX1yg2gTa91woaWRtT86G/Llfvp0ElCJ2UFSRylFFP10U90Zl8M6Vq7GLpedDSUOPAcnegihG3Uo6Fw5H/DylKLzkFqKREPQzx0Qcm55q6IlavU7IziC2voOkLxpOCxLNQwS+UCjQgrpKS/C7YcdGllgDDlLndpuJPidk4N3Hr872re8tYRKi9DXnr65f9/Y4M5lcsMd54/oN7zU+SvdtWAi8d+LgewHjTh3ockJe8PjFSDay0VEQgZv8604aZgrNR6NRXl2hnbuci7PrSqwnTt+/rwy+f8KwUnQ5wWxy3h95I+fZKDtIL01LUuHSxQ9CoZDHY+soumOwMdEbDYf8kLnoyYVyoaN6Nt1MdDkh+j4q5GfyHz3WkoBQIb3Cr3/z248/vnnT4/EwuAwYAMTFPE1qj2pP8300PzMzUw0yIvr6E8zxyaX0JWm39kVfhV7vHik/8zuYKR98+umn6fnCDO11dPo0OjeChN36f/gmoa8/8Xqlgr/Ae+G+Er2eKmKNLq5Kd40z5NYgY6LPCe/0qjh9BHTC4JXjYgAqh8H2LtZSo7LWvsuqBnnXg4yJPidBuoKWJ1UnHR02cZsTdvTsaPu6k01BxkRnfaKOurwUIDacACU6bAM1J6yFU5db7x8c5a5wmhMTpgUJnUZNE51OAhKl4lh30mrrWBQii7mOqpP+8tuW37vi8cRbrtt3KnmyOciY6MyTHtiDusbV6qviJDcc9Yfnh/cIoOLElbjCXlnal0jcZePLbMWJtRJk2Kaj04m1B3YTrm519ypOmIgkRtPpsKfihN23HC+zlkQiscLGr1hqTmAQ1/3COOkoSDlhPhJOi9X+xBVP3IlDJ7fY2+yL6QQUwgIvCbQQ7aiOO+xKXGW5bHlhnVC8EBTgoLKn5oRjVxLQyWcse+sFc7I+7tgkQZDgv3m56uTWciL+eSJxm2Xvci+KE5ZlXeN9AQzDNCdy9CCsPc6d21sdd7hbn6+MWuKJuIW9vQKdwOcFAj2WdnbHOiGxe0sLV80pGR7klBTtFE50CjpZXa05sXBw2LG47iSWb8dh53JmKAufam6ZW+j6rA8zaoGiwwlhGrTNlbK4ksEVmCMhzUl4FVbtBw/Og43anl1OJOKJu+raPvtINlNqxRU8VpJLRp3G/+lOCJ/I3He3lvBSiWkdAUBzwkSDPA//xwDwhEJLapKUuT8kbicSrOYkiVOtpTn7SCtVBK3iY2NK+elOMFiCKPbUHz/sWhq6n/EwqhPZE4YHMzBTInJITqZSqQXOwt1ZSYyqvayWJ2KmNPTFUtfcXCkTy8jGPDTW4aSEg+wX5XbW1a12sX2wPwHpKDy8e3SQp/dcAqkHYw8XUh5Lf3w5blm5m1Dz5J5P/Xs7rWPely1lRWNOyepoOw7GUxpVe1DoRD25w0An6pmLqVWeDzPmtQHIl6l9bD9U0L98l1XnCrTLdrSxmHOHxKGd1nZMWAgktVGFuzpYqU9AOgyZWg2H08mHZ8cGpt6YMrdo80lc/DZbmT8hZ+fK6jc4MwgZs+nocULOykl191xcizhLVo8B4U0qieMe89iBwwOP+CMPUupToIJy1YnppiYSOmEyxkwTXfUJ1nehrNaxlqviIAadAHXeUZt7lJk/Hbn86tSq8/BaSm06NXZZiT75quak+7FRh2Kd5zLUroF1LdnxIYxwpNOeUHW5af9ySvrq0QA1tpbq6t/gfZLwMfYFjlVr+x16LgPW9pZ+sx1nYJ442mhgg0sHXBblhYG1qQNrawMPkyF70my3m81Juz3pxmBVg9tTXdyOre2J3ef7zbD3kO9jcBhy1pxQIGdLDQwcdtJTA39OppWRESUWo4qKwrgxE+lQp1ZSXeOBHZknmK+kGkl61EsGtjqJJB8MrNFHBtZSHiGSU4o5oZDjFRw6MWEBW8qO25PZWaMe8Ohx4lavb0ya93Vr87FbnAyLqYcDh9cGFuwhABhKVG+KWaA6MZE9ZQ+0gjPZHTcWE7Nw3E2K/dWpkK1O2gp46su/PDAnQ1QWz0QUkFVa3emKE3WCobyQgj4NeuGSnmNAhnn5HsvW5tm2OqFCYjKZxBdtRf9ItrA3E/Mzlf6kMqfEcq4hGR/caU5MplBu96a5x21OQId/0XORas0qElDAXn+RoQobTmByBR57Znda2zFhHYzvx5y0+YE8AoDozsRaFRHgmSzY4kQU+3acE5NJfPcZTrJBPOvOxm4UoBgw4t7qxGPUi9r0OCEd1mc4UTKCtCh98te/UR/mpZiype10OozZm+it2Z7lRM2TkezeG3lxpLg9T3Zubf/jTmwUA1rTxZio2AATS2910pCfvxnodtLe/mNtp5hpVSRcYfyxoqwo607ad7AT8vzo6KjLValj+e1OCiAtZXP+GKxjMwq8LYD72EbQTnWy+VKSgLTdyVk7UGRKZDJpBYhKa0wG2rWOO/v6E8LHO1Uc2uVH1DYnTu4dEKOyAM8W0gBnaIrxqAUJ0VcN2pl9LCnxGtqbvxAOYauTA+xK0q8Wa8CvnvqhFCandSf5apBhE0WPEwKrXsLo9am/c3Jmi5OrrlHXO3gHBTPFj7cqVJHx9BJ1QUZEz7lR371HXz1aPfzoyJH9J7RGEdrkJNV/7OsJlxnEOugslVFyEmAUbGvQSYMmig4n1tNPRjnuyZNxbnT8Gy1Rej9ed6L0d7/p+XqaM9vdtpibyroZUdH+Zv9kLYirBBkQPU5OfvvK2CvfPVlbWxur7B4ZEPKqk+Sc4GLbJ/7+9THWspRK2ufsgAlVSnmiLsh46Gk7J8e58dHxn3Hj3a5ydfcwn/8fZ872u9q5f17//mz5h+s/WLjy0tK//u3FyP8aZDR0tZ2psf1rY9++sv/I1Gpt9wgscOLeOKxu258+/eH7p08t7e3drmu9WO1x68la0HcbQQZDz7jjc2AY+d4JE4YF3tvUXVrJTsfpM+Xx8W/Gx133rnl9VpJ4ZpCR0FezqQtRW9v8gNVKWk2BgJUk1Xeb+t+CDAN6v8d6kJN6kJN6kJN6kJN6kJN6kJN60Ocg1NPyMmI76HNV6vl/f9QNAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgDEArYjv/AZiKu9lzm/rbAAAAAElFTkSuQmCC"
                      alt="Spain Flag"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-white/30"
                    />
                    <span className="text-white text-xs mt-2 font-medium">Español</span>
                  </div>
                  
                  <div className="flex flex-col items-center ">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center border border-white/30 shadow-lg">
                      <div className="text-white text-lg font-bold mb-1">BuddhiAI</div>
                      <div className="text-white/90 text-sm font-medium">18+ Languages</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Image
                      src="data:image/png;base64,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"
                      alt="France Flag"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-white/30"
                    />
                    <span className="text-white text-xs mt-2 font-medium">Français</span>
                  </div>
                  
                  {/* Row 3 - Additional flags */}
                  <div className="flex flex-col items-center">
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
                      alt="Germany Flag"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-white/30"
                    />
                    <span className="text-white text-xs mt-2 font-medium">Deutsch</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAKlBMVEX///8AkkbOKzd2t43egYYAjz7NHy4Wlk7OND75/PoAk0j7///bhIfMKzaIpjcKAAABCklEQVR4nO3Q2RGAIBQEsIeg4NV/u1axM34kJaRazN4rZxxbTDlx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDj5/8mMuXqdKffzrpgPKxrVWd5HIaUAAAAASUVORK5CYII="
                      alt="Italy Flag"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-white/30"
                    />
                    <span className="text-white text-xs mt-2 font-medium">Italiano</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Image
                      src="data:image/png;base64,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"
                      alt="India Flag"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-white/30"
                    />
                    <span className="text-white text-xs mt-2 font-medium">Hindi </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Effortless Scalability */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 text-white shadow-lg lg:row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold text-white">Effortless Scalability</h3>
            <p className="mt-2 text-gray-200">
              Effortlessly handle millions of calls with scalable concurrent calling
            </p>
            
            {/* Performance metrics */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-gray-200">Success Rate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">&lt;500ms</div>
                <div className="text-sm text-gray-200">Latency</div>
              </div>
            </div>
            
            <div className="mt-auto flex flex-col space-y-4 pt-6">
              {[
                { calls: 5, avatar: 'https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/66336ff3966a3416a241775f_user.png', location: 'US East' },
                { calls: 29, avatar: 'https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/66336ff3ddb961f7495b5251_user-2.png', location: 'EU West' },
                { calls: 80, avatar: 'https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/66336ff329433360b86a88b5_user-3.png', location: 'Asia Pacific' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                >
                  <div className="flex w-20 items-center justify-center space-x-2 rounded-full bg-white/20 p-2 backdrop-blur-sm">
                    <Phone className="h-4 w-4 text-white" />
                    <span className="font-medium">{item.calls}</span>
                  </div>
                  <div className="mx-4 flex-grow border-b-2 border-dotted border-white/50"></div>
                  <div className="flex items-center space-x-2">
                    <div className='w-9 h-9 bg-white/20 rounded-full flex items-center justify-center'>
                      <Image src={item.avatar} alt={`User ${index + 1}`} width={32} height={32} className="h-8 w-8 rounded-full" />
                    </div>
                    <div className="text-xs text-gray-200">{item.location}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Auto-scaling indicator */}
            <motion.div
              className="mt-4 bg-white/10 rounded-lg p-3 backdrop-blur-sm"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Auto-scaling active</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3: Voice AI API */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] p-8 text-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold text-white">Voice AI API</h3>
            <p className="mt-2 text-gray-100">
              Natural, smooth, and empathetic AI conversations with only 500ms latency.
            </p>
            <div className="mt-auto pt-8">
              {/* SVG Soundwave Graphic */}
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
          
          {/* Card 4: Reliable and Stable Platform */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-3xl bg-gray-100 p-8 text-gray-900 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
          >
             <h3 className="text-xl font-semibold text-gray-900">Reliable and Stable Platform</h3>
            <p className="mt-2 text-gray-700">
              With average 99.99% uptime and effortless fallback, BuddhiVoice ensures your phone callers are always production-ready.
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
                        <span className="text-sm text-gray-600">API Uptime</span>
                        <span className="font-semibold text-gray-900">99.99%</span>
                    </div>
                    <div className="flex justify-between gap-px">
                        {uptimeBars.map((_, i) => (
                            <motion.div
                              key={i}
                              className={`h-6 w-1 flex-grow rounded-sm ${i < 33 ? 'bg-emerald-500' : 'bg-gray-300'}`}
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

          {/* Card 5: Integrations Section */}
          <motion.div
            className="rounded-3xl bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] p-8 text-white shadow-lg lg:col-span-3 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.24, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">Seamless Integrations</h3>
                <p className="mt-2 max-w-2xl text-white/90">
                  Connect with your favorite tools and platforms. BuddhiVoice integrates with 50+ popular services to streamline your workflow.
                </p>
              </div>
              
              {/* Static Icons */}
              <div className="relative h-32 w-80 overflow-hidden ml-8">
                <div className="flex flex-col space-y-4">
                  {/* Integration Icons */}
                  <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <Image src="/icons/slack.png" alt="Slack" width={32} height={32} className="h-8 w-8" />
                    <span className="text-white font-medium">Slack</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <Image src="/icons/salesforce.png" alt="Salesforce" width={32} height={32} className="h-8 w-8" />
                    <span className="text-white font-medium">Salesforce</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <Image src="/icons/hubspot.png" alt="HubSpot" width={32} height={32} className="h-8 w-8" />
                    <span className="text-white font-medium">HubSpot</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <Image src="/icons/zapier.png" alt="Zapier" width={32} height={32} className="h-8 w-8" />
                    <span className="text-white font-medium">Zapier</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { NewReleasePromo };