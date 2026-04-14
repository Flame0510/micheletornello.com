interface TimelineItemProps {
  year: string;
  title: string;
  text: string;
  /** Visual variant: 'chi-sono' uses chiB_ classes, 'page' uses timeCard classes */
  variant?: 'chi-sono' | 'page';
  highlight?: boolean;
}

export function TimelineItem({
  year,
  title,
  text,
  variant = 'chi-sono',
  highlight = false,
}: TimelineItemProps) {
  if (variant === 'page') {
    return (
      <article className="timeCard">
        <p className="year">{year}</p>
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
    );
  }

  return (
    <div className={`chiB_tlItem${highlight ? ' chiB_tlHighlight' : ''}`}>
      <div className="chiB_tlDot" />
      <div className="chiB_tlContent">
        <div className="chiB_tlMeta">
          <span className="chiB_tlYear">{year}</span>
          <span className="chiB_tlTag">{title}</span>
        </div>
        <p
          className="chiB_tlText"
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }}
        />
      </div>
    </div>
  );
}

export default TimelineItem;
