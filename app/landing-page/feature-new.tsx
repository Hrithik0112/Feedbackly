"use client"
import React from 'react'
import { motion } from 'motion/react'
import { fadeInUp, staggerContainer } from '@/lib/animation'

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-gray-950 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-6 font-mono"
              >
                Everything you need to collect <span className="text-purple-400">valuable feedback</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300"
              >
                Our platform provides all the tools you need to gather, analyze, and act on customer feedback.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Customizable Widgets",
                  description:
                    "Design widgets that match your brand's look and feel with our easy-to-use customization tools.",
                  icon: "🎨",
                },
                {
                  title: "Real-time Analytics",
                  description:
                    "Get instant insights with real-time data visualization and comprehensive analytics dashboard.",
                  icon: "📊",
                },
                {
                  title: "Multi-channel Collection",
                  description: "Collect feedback across multiple touchpoints - web, mobile, email, and more.",
                  icon: "📱",
                },
                {
                  title: "Sentiment Analysis",
                  description: "Automatically analyze feedback sentiment to understand customer emotions.",
                  icon: "🧠",
                },
                {
                  title: "Team Collaboration",
                  description: "Share insights with your team and collaborate on addressing customer concerns.",
                  icon: "👥",
                },
                {
                  title: "Integration Ecosystem",
                  description: "Connect with your favorite tools like Slack, Jira, Trello, and more.",
                  icon: "🔄",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors group hover:shadow-[0_0_30px_-5px] hover:shadow-purple-500/30 hover:bg-gradient-to-r hover:from-gray-900 hover:to-purple-500/30 duration-300"
                >
                  <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
  )
}

export default Features