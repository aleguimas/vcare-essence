'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { trackEvent } from '@/lib/analytics';

interface CalendarEmbedProps {
  calLink: string;
  calendarType: string;
}

export function CalendarEmbed({ calLink, calendarType }: CalendarEmbedProps) {
  useEffect(() => {
    let active = true;
    (async () => {
      const cal = await getCalApi();
      if (!active) return;
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: { light: { 'cal-brand': '#8C7853' }, dark: { 'cal-brand': '#8C7853' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();

    trackEvent('calendar_open', { calendar_type: calendarType });

    return () => {
      active = false;
    };
  }, [calendarType]);

  return (
    <div className="rounded-2xl overflow-hidden border border-line bg-cream-50">
      <Cal
        calLink={calLink}
        style={{ width: '100%', height: '600px', overflow: 'scroll' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}
