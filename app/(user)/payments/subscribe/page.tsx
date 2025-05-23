"use client";
import { monthlyPlanId, yearlyPlanId } from "@/lib/payment";
import SubscribeBtn from "../subscribe-btn";
import { AlertCircle } from "lucide-react";




export default  function Page() {

  const params = new URLSearchParams(window.location.search);
  const planParam = params.get("plan");


  const planId = planParam === "monthly" ? monthlyPlanId : yearlyPlanId;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex border p-4 rounded-md flex-col">
        <h1 className="text-2xl font-bold">Start your subscription now:</h1>
        <div className="w-fit mt-3">
          <SubscribeBtn price={planId} />
        </div>
      </div>

      {/* Notice Card */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-blue-500" size={24} />
          <div>
            <h2 className="font-semibold text-blue-700">Stripe Integration Coming Soon</h2>
            <p className="text-blue-600 text-sm mt-1">
              We're currently working on integrating Stripe for seamless payments. 
              Thank you for your patience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}