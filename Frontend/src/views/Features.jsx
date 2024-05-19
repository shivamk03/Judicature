import { CheckIcon } from '@heroicons/react/24/outline'
const features = [
    {
      name: 'Tailored Lawyer Matching',
      description:
        'Clients can handpick legal professionals who are ideally suited to handle their unique case after reading their proposals on the application and going through their profiles.',
      icon: CheckIcon,
    },
    {
      name: 'Case Applications for different categories',
      description:
        'User-friendly forms for clients to submit their case applications efficiently.',
      icon: CheckIcon,
    },
    {
      name: 'Latest Legal News',
      description:
        'Access to legal articles, documents, and templates.',
      icon: CheckIcon,
    },
    {
      name: 'Secured Case Filing',
      description:
        'Streamlined client registration and case submission process.',
      icon: CheckIcon,
    },
  ]
const Features = () => {
  return (
    <div>
    <div className="bg-white py-10 sm:py-15">
      <div className="mx-auto max-w-7xl px-3 lg:px-3">
        <div className='flex justify-center'>
            <div >
                <img src="/features.png" className='rounded-2xl' />
            </div>
        </div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 pt-10 text-primary">Why us?</h2>
          <p className=" text-3xl font-bold tracking-tight text-secondary sm:text-3xl">
            Solutions to all your legal problems at place
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Find the right lawyer for your legal needs and get the help you deserve for case filing and management. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features