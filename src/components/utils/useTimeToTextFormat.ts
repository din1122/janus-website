type TimeInterval = {
    limit: number;
    label: string;
  };

  const timeIntervals: TimeInterval[] = [
    { limit: 31536000, label: 'year' },    // 365 days
    { limit: 2592000, label: 'month' },    // 30 days
    { limit: 604800, label: 'week' },      // 7 days
    { limit: 86400, label: 'day' },        // 24 hours
    { limit: 3600, label: 'hour' },        // 60 minutes
    { limit: 60, label: 'minute' },        // 60 seconds
    { limit: 1, label: 'second' }
  ];

  const useTimeToTextFormat = ({date}:{date:string | undefined}) => {

    // check if valid date
    if (!date) return 'invalid date';

      const seconds = Math.floor(
        (new Date().getTime() - new Date(date).getTime()) / 1000
      );

      for (const { limit, label } of timeIntervals) {
        const count = Math.floor(seconds / limit);
        if (count > 0) {
          return `${count} ${label}${count === 1 ? '' : 's'} ago`;
        }
      }

      return 'just now';

  };

//   // React component with TypeScript
//   interface TimeAgoProps {
//     date: string | Date;
//     className?: string;
//   }

//   const TimeAgo: React.FC<TimeAgoProps> = ({ date, className }) => {
//     return (
//       <span className={className}>
//         {formatTimeAgo(date)}
//       </span>
//     );
//   };

  export default useTimeToTextFormat;

