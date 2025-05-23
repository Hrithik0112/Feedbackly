"use client"
import React from 'react'
import { motion } from 'motion/react'
import { CheckCircle } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animation'
import AnimatedButton from '@/components/animated-btn'
import { useRouter } from 'next/navigation'

const Pricing = () => {

  const router = useRouter();

  const handleClick = (planUrl: string) => {
    // Handle the click event for the plan
    console.log(`Clicked on ${planUrl} plan`);
    router.push(planUrl);
    
  }
  return (
    <section  id="pricing" className="py-20 md:py-32 bg-gray-950 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-mono md:text-5xl font-bold mb-6"
              >
                Simple, transparent <span className="text-purple-400">pricing</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300"
              >
                Choose the plan that works best for your business. No hidden fees.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  name: "Starter",
                  url: "/dashboard",
                  price: "₹0",
                  description: "Perfect for small websites and startups",
                  features: [
                    "3 projects",
      "Unlimited users",
      "2GB storage",
      "Priority support",
                  ],
                  cta: "Start for free",
                  popular: false,
                },
                {
                  name: "Monthly",
                  url: "/payments/subscribe?plan=monthly",
                  price: "₹699",
                  description: "Ideal for growing businesses",
                  features: [
                    "Unlimited projects",
      "Unlimited users",
      "5GB storage",
      "Priority support",
                  ],
                  cta: "Get it now",
                  popular: true,
                },
                {
                  name: "Yearly",
                  url: "/payments/subscribe?plan=yearly",
                  price: "₹3999",
                  description: "Upgrade to save more!",
                  features: [
                    "Unlimited projects",
      "Unlimited users",
      "50GB storage",
      "24/7 support",
                  ],
                  cta: "Save more",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`bg-gray-900 border rounded-xl overflow-hidden relative ${
                    plan.popular ? "border-purple-500 shadow-lg shadow-purple-500/20" : "border-gray-800"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-sm font-medium py-1 text-center">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 ${plan.popular ? "pt-8" : ""}`}>
                    <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-gray-400 ml-2">{plan.name === "Yearly" ? "/yearly" : "/month"}</span>}
                    </div>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <AnimatedButton onClick={()=> handleClick(plan.url)} className="w-full mb-6" variant={plan.popular ? "primary" : "secondary"}>
                      {plan.cta}
                    </AnimatedButton>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-16 text-center">
              <p className="text-gray-400 mb-4">Need something specific? We offer custom solutions.</p>
              <AnimatedButton variant="secondary" className="border-gray-700 text-gray-200 hover:bg-gray-800">
                Contact our sales team
              </AnimatedButton>
            </div>
          </div>
        </section>
  )
}

export default Pricing