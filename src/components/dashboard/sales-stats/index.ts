
// First import all components
import { SalesStatsContainer } from './SalesStatsContainer';
import { SalesChartContainer } from './SalesChartContainer';
import { SalesFilterBar } from './SalesFilterBar';
import { StatsCardGrid } from './StatsCardGrid';
import { StatCard } from './StatCard';
import { StatCardIcon } from './StatCardIcon';
import { StatCardProgress } from './StatCardProgress';
import { StatCardChangeIndicator } from './StatCardChangeIndicator';
import { StatCardMiniChart } from './StatCardMiniChart';

// Then re-export them
export { 
  SalesStatsContainer,
  SalesChartContainer,
  SalesFilterBar,
  StatsCardGrid,
  StatCard,
  StatCardIcon,
  StatCardProgress,
  StatCardChangeIndicator,
  StatCardMiniChart
};

// Re-export for backward compatibility
export const SalesStats = SalesStatsContainer;
