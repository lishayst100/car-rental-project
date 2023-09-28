
import CarBenefits from "@/components/car details/CarBenefits";
import { benefits, includeInPrice } from "@/components/car details/benefits";

const CombineBenefits = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <div>
        <h3 className="font-bolder">Company Benefits</h3>
        <CarBenefits arr={benefits} />
      </div>
      <div>
        <h3 className="font-bolder">Included in the price</h3>
        <CarBenefits arr={includeInPrice} />
      </div>
    </div>
  );
}

export default CombineBenefits