
import { MainContent } from "@/components/dashboard/MainContent";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Dashboard() {
  const isMobile = useIsMobile();
  
  return (
    <div className={`w-full ${isMobile ? 'mt-2' : ''}`}>
      <MainContent />
    </div>
  );
}
