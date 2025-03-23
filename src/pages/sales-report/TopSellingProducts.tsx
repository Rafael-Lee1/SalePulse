
import { motion } from 'framer-motion';
import { AnimatedNumber } from '@/components/ui/animated-number';

export function TopSellingProducts() {
  return (
    <motion.div 
      className="bg-[#21222D] p-5 rounded-[10px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <h2 className="text-white text-[15px] font-semibold mb-5">Top Selling Products</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-[#87888C] text-left text-sm border-b border-[#2B2B36]">
            <tr>
              <th className="pb-3 font-medium">Name</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium">Sold</th>
              <th className="pb-3 font-medium">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => {
              const productSold = Math.floor(Math.random() * 500);
              const productRevenue = Math.floor(Math.random() * 10000);
              
              return (
                <tr key={i} className="border-b border-[#2B2B36] last:border-0">
                  <td className="py-4 text-white text-sm">Product {i}</td>
                  <td className="py-4 text-white text-sm">Category {i}</td>
                  <td className="py-4 text-white text-sm">
                    <AnimatedNumber 
                      value={productSold} 
                      suffix=" units" 
                      useSpring={false}
                    />
                  </td>
                  <td className="py-4 text-white text-sm">$
                    <AnimatedNumber value={productRevenue} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
