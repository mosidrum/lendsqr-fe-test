import { SideBarTypes } from './sideBarItems.ts';
import { SideBarList } from './SideBarList.tsx';

type SideBarSectionProps = {
  title: string;
  items: SideBarTypes[];
};

export const SideBarSection = ({ title, items }: SideBarSectionProps) => (
  <div className="d-flex flex-dir-column gap-1">
    <div className="font-smaller text-color-secondary2 pl-3">{title}</div>
    {items.map((item, index) => (
      <SideBarList variant="secondary" key={index} image={item.icon} title={item.title} />
    ))}
  </div>
);
