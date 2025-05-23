"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-mono md:text-5xl font-bold mb-6"
              >
                Simple integration, <span className="text-purple-400">powerful results</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300"
              >
                Get up and running in minutes with our easy integration process.
              </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 hidden md:block"></div>

                {[
                  {
                    title: "Add our script to your website",
                    description: "Simply copy and paste our lightweight JavaScript snippet into your website's code.",
                    icon: "1",
                  },
                  {
                    title: "Customize your feedback widget",
                    description: "Use our intuitive dashboard to design a widget that matches your brand's style.",
                    icon: "2",
                  },
                  {
                    title: "Collect valuable insights",
                    description: "Start gathering feedback from your users in real-time.",
                    icon: "3",
                  },
                  {
                    title: "Analyze and take action",
                    description: "Use our powerful analytics to understand feedback and make data-driven decisions.",
                    icon: "4",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-8 mb-12 md:mb-24 relative"
                  >
                    <div className="hidden md:flex">
                      <div className="w-16 h-16 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-xl font-bold text-purple-400 relative z-10">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="md:hidden w-10 h-10 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-lg font-bold text-purple-400 mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-400 mb-4">{step.description}</p>

                      {index === 0 && (
                        <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                          <CardContent className="p-0">
                            <pre className="text-sm p-4 overflow-x-auto">
                              <code className="text-gray-300">
                                {`<script>
  (function(w,d,s,o,f,js,fjs){
    w['FeedbackPro']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','fbp','https://cdn.feedbackpro.com/widget.js'));
  fbp('init', 'YOUR_WIDGET_ID');
</script>`}
                              </code>
                            </pre>
                          </CardContent>
                        </Card>
                      )}

                      {index === 1 && (
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex gap-4 overflow-hidden">
                          <div className="space-y-2 flex-1">
                            <div className="h-4 w-24 bg-gray-800 rounded"></div>
                            <div className="h-10 bg-gray-800 rounded"></div>
                          </div>
                          <div className="space-y-2 flex-1">
                            <div className="h-4 w-32 bg-gray-800 rounded"></div>
                            <div className="flex gap-2">
                              <div className="h-10 w-10 bg-purple-600 rounded"></div>
                              <div className="h-10 w-10 bg-gray-800 rounded"></div>
                              <div className="h-10 w-10 bg-gray-800 rounded"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}

export default HowItWorks