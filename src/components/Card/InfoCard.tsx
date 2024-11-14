type InfoCardProps = {
  label: string;
  data: string | number;
};
export const InfoCard = ({ label, data }: InfoCardProps) => {
  return (
    <div className="d-flex flex-dir-column gap-1 width-fit-content mx-3">
      <div className="font-small text-color-primary">{label}</div>
      <div className="font-normal text-color-primary fw-normal">{data}</div>
    </div>
  );
};
