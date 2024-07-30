
import Accordion from '@/design-systems/Molecules/Accordions/Accordion';
import InfoSection from '@/design-systems/Molecules/InfoSections/InfoSection';

const LockPrismaTemplate:React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full">
        <InfoSection />
        <Accordion />

      </div>
      <div>

      </div>
    </div>
  );
};

export default LockPrismaTemplate;
