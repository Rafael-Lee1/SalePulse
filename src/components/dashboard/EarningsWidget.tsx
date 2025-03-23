
import { useState, useEffect } from "react";
import { DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/ui/animated-number";

export function EarningsWidget() {
  const [percentage, setPercentage] = useState(0);
  const [amount, setAmount] = useState(0);
  const targetPercentage = 80;
  const targetAmount = 6078.76;
  
  // Animate percentage and amount on component mount
  useEffect(() => {
    const percentageInterval = setInterval(() => {
      setPercentage(prev => {
        if (prev < targetPercentage) {
          return prev + 1;
        }
        clearInterval(percentageInterval);
        return prev;
      });
    }, 20);
    
    const amountInterval = setInterval(() => {
      setAmount(prev => {
        if (prev < targetAmount) {
          return prev + 50;
        }
        if (prev < targetAmount - 10) {
          return prev + 10;
        }
        if (prev < targetAmount) {
          return targetAmount;
        }
        clearInterval(amountInterval);
        return prev;
      });
    }, 15);
    
    return () => {
      clearInterval(percentageInterval);
      clearInterval(amountInterval);
    };
  }, []);
  
  // Calculate the stroke dash offset for the circle
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-[238px] bg-[#21222D] p-5 rounded-[10px] max-md:w-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col gap-[9px]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-[5px]">
            <h2 className="text-white text-[15px] font-semibold">Earnings</h2>
            <p className="text-[#87888C] text-[10px]">Total Expense</p>
          </div>
          <div className="p-2 rounded-full bg-[#A9DFD8]/10">
            <DollarSign size={16} className="text-[#A9DFD8]" />
          </div>
        </div>
        
        <div className="flex items-baseline gap-1">
          <div className="text-[#A9DFD8] text-xl font-bold">
            $<AnimatedNumber 
              value={amount} 
              formatter={(val) => val.toFixed(2)} 
              showPulse={true}
              pulseColor="#A9DFD8"
            />
          </div>
          <div className="text-[#87888C] text-[10px] flex items-center">
            <TrendingUp size={10} className="text-[#A9DFD8] mr-0.5" />
            48% vs last month
          </div>
        </div>
      </div>
      
      <div className="relative w-[174px] h-[174px] mt-[20px] mx-auto">
        <svg
          viewBox="0 0 100 100"
          className="transform -rotate-90 w-full h-full"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#2B2B36"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#A9DFD8"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-white text-2xl font-bold">
            <AnimatedNumber 
              value={percentage} 
              suffix="%" 
              showPulse={true}
              pulseColor="#A9DFD8"
            />
          </span>
          <span className="text-[#87888C] text-[10px]">Monthly Goal</span>
        </div>
        
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full text-center">
          <div className="text-white text-xs font-medium flex justify-between px-4">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
