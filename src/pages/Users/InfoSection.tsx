import { InfoCard } from '../../components/Card/InfoCard.tsx';

export type InfoSectionProps = {
  sectionTitle: string;
  data?: {
    label: string;
    data: string;
  }[];
};
export const InfoSection = ({ sectionTitle, data }: InfoSectionProps) => {
  return (
    <div className="width-100">
      <div className="font-large text-color-secondary fw-normal mb-3">{sectionTitle}</div>
      <div className="d-flex wrap">
        {data?.map((item) => <InfoCard label={item.label} data={item.data} />)}
      </div>
    </div>
  );
};
