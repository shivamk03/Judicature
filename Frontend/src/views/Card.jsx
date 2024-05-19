import { CheckIcon } from "@heroicons/react/24/outline";
const includedFeatures = [
  "Tailored Lawyer Matching",
  "Case Applications for different categories",
  "Latest Legal News",
  "Secured Case Filing",
];
const Card = () => {
  return (
    <div>
      <div className="mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-16 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Judicature
          </h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Your Gateway to Legal Assistance and Case Management
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
              Why us?
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
            <div >
              <img src="/card.png"
              className="h-full"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
