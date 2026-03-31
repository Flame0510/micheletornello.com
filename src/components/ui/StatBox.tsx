'use client';

import { useRef } from 'react';
import { useInView as useFramerInView } from 'framer-motion';
import { useCounter } from '@/hooks/useCounter';

interface StatBoxProps {
  value: string | number;
  label: string;
  isNumber?: boolean;
  /** CSS class for the wrapper element */
  className?: string;
  /** CSS class for the value span */
  valueClassName?: string;
  /** CSS class for the label span */
  labelClassName?: string;
}

export function StatBox({
  value,
  label,
  isNumber = true,
  className = 'docH_stat',
  valueClassName = 'docH_statVal',
  labelClassName = 'docH_statLab',
}: StatBoxProps) {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, { once: true });
  const numericValue =
    typeof value === 'number'
      ? value
      : parseInt(value.toString().replace(/\D/g, ''), 10);
  const count = useCounter(numericValue, isInView);
  const hasPlus = typeof value === 'string' && value.includes('+');

  return (
    <div ref={ref} className={className}>
      <span className={valueClassName}>
        {isNumber ? (hasPlus ? `${count}+` : count) : value}
      </span>
      <span className={labelClassName}>{label}</span>
    </div>
  );
}

export default StatBox;
