import { extraSectionData } from "@/src/data";
import { Controller } from "react-hook-form";

interface ExtraSectionProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  control: any;
}

const ExtraSection: React.FC<ExtraSectionProps> = ({ control }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Extra</h3>
      {extraSectionData.map(({ key, label }) => (
        <div key={key}>
          <label className="block text-sm mb-1">{label}</label>
          <Controller
            name={key}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default ExtraSection;
