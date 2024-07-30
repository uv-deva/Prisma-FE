
import Accordian1 from '@/design-systems/Molecules/Accordions/Accordion1';
import InfoSection1 from '@/design-systems/Molecules/InfoSections/infoSection1';

const LockWeightTemplate: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full">
        <Accordian1 />
        <InfoSection1 />

      </div>
      <div>

      </div>
    </div>
  );
};

export default LockWeightTemplate;
