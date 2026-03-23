const academicBackground = [
  { year: '2024', detail: 'B.M. in Composition, Seoul National University' },
  { year: '2021', detail: 'Busan High School of Arts, Music Department, Valedictorian Admission' }
];

const awards = [
  { year: '2024', detail: '2nd Prize (Piano), Young Virtuoso Music Concours' },
  { year: '2024', detail: '3rd Prize (Piano), Premier Classic Music Concours' },
  { year: '2023', detail: 'Grand Prize (Piano), Busan International Music Competition' },
  { year: '2023', detail: 'Grand Prize (Piano), Ulsan Branch, Music Education Newspaper Competition' },
  { year: '2022', detail: 'Grand Prize, Korea Music Association Competition, Composition Division' },
  { year: '2020', detail: 'Selected Performer, Korea Music Association Students Concert' }
];

interface TimelineBoxProps {
  title: string;
  items: Array<{ year: string; detail: string }>;
}

function TimelineBox({ title, items }: TimelineBoxProps) {
  return (
    <section className="education-box">
      <h2 className="education-box-title">{title}</h2>
      <ul className="education-list">
        {items.map((item) => (
          <li key={`${title}-${item.year}-${item.detail}`} className="education-item">
            <span className="education-year">{item.year}</span>
            <span className="education-detail">{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EducationContent() {
  return (
    <section className="education-content">
      <h1 className="page-title">Education</h1>
      <div className="education-stack">
        <TimelineBox title="Academic Background" items={academicBackground} />
        <TimelineBox title="Awards" items={awards} />
      </div>
    </section>
  );
}
