import { InfoCard } from '../../components';

export type InfoSectionProps = {
  sectionTitle: string;
  data?: {
    label: string;
    data: string | number;
  }[];
};
export const InfoSection = ({ sectionTitle, data }: InfoSectionProps) => (
  <div className="width-100">
    <div className="font-large text-color-secondary fw-normal mb-3">{sectionTitle}</div>
    <div className="d-flex gap-5 ml-n3 wrap">
      {data?.map((item, index) => <InfoCard key={index} label={item.label} data={item.data} />)}
    </div>
  </div>
);
