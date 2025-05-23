import {  currentUser } from "@clerk/nextjs/server";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";
import ManageSubscription from "./manage-subscription";
import { AlertCircle } from "lucide-react";

const page = async () => {
  const user =  await currentUser();
    const userId = user?.id;

  if (!userId) {
    return null;
  }

  const subscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId)
  });

  const plan = subscription && subscription.subscribed ? 'premium' : 'free';

  return (
    <div className="flex flex-col gap-4">
    <div className="p-4 border rounded-md">
      <h1 className="text-4xl mb-3">Subscription Details</h1>
      <p className="mb-2 text-lg">
        Your current plan is: {plan}
      </p>
      <ManageSubscription  />
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
  )
};

export default page;