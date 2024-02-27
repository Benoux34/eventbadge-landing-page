import Premium from "./plans/Premium";
import Pro from "./plans/Pro";
import Starter from "./plans/Starter";

function Pricing() {
  return (
    <div className="lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 space-y-8 lg:space-y-0">
      <Starter />
      <Pro />
      <Premium />
    </div>
  );
}

export default Pricing;
