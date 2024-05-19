import {
    CheckBadgeIcon,
  } from '@heroicons/react/24/outline'
  
  const actions = [
    {
      title: "Lok Sabha passes Women's Reservation Bill with 454:2 majority",
      href: 'https://www.barandbench.com/news/lok-sabha-passes-womens-reservation-bill-with-4542-majority',
      icon: CheckBadgeIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
      body:"Congress parliamentary party Chairperson Sonia Gandhi expressed Congress' support for the Bill but questioned why it was contingent on the census and delimitation exercise.",
    },
    {
      title: 'Karnataka to ban hookah bars, raise age for buying cigarettes to 21',
      href: 'https://www.barandbench.com/news/karnataka-ban-hookah-bars-raise-age-buying-cigarettes-21',
      icon: CheckBadgeIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
      body:"The government intends to implement these changes by making amendments to the Cigarettes and Other Tobacco Products Act (COTPA) in the upcoming winter session of the State legislature.",
    },
    {
      title: "Delhi High Court issues summons to 'People of India' in copyright infringement suit by 'Humans of Bombay'",
      href: 'https://www.barandbench.com/news/delhi-high-court-summons-people-of-india-copyright-infringement-suit-humans-of-bombay',
      icon: CheckBadgeIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
      body:"Humans of Bombay contended that People of India completely replicated its business model and is approaching the very same subjects shown on its website.",
    },
    {
      title: 'Husband on study leave not exempted from paying maintenance to estranged wife, child: Madras High Court',
      href: 'https://www.barandbench.com/news/husband-study-leave-not-exempted-paying-maintenance-wife-child-madras-high-court',
      icon: CheckBadgeIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      body:"The Court refused to entertain an appeal against a family court order, by which the husband was directed to ₹12,500 each for the maintenance of his wife and his daughter.",
    },
    {
      title: '[Rape on pretext of marriage] Ending long, family-approved consensual relationship is not rape: Allahabad High Court',
      href: 'https://www.barandbench.com/news/rape-pretext-marriage-ending-long-family-approved-consensual-relationship-not-rape-allahabadhighcourt',
      icon: CheckBadgeIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
      body:"The Court made the observation while allowing a plea to quash a criminal case filed against a man who was accused of raping a woman on the false pretext of marriage.",
    },
    {
      title: 'X Corp (Twitter) case on blocking orders: Karnataka High Court says unwarranted publicity can be avoided if government reconsiders matter',
      href: 'https://www.barandbench.com/news/x-corp-twitter-case-blocking-orders-karnataka-high-court-publicity-avoided-government-reconsiders',
      icon: CheckBadgeIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      body:"The Court made the oral remark after X Corp's counsel pointed out that their primary grievance was that the Indian government's blocking orders did not give any reasons.",
    }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const News = () => {
  return (
    <div>
        <div className="mx-auto max-w-2xl lg:mx-8 m-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">From the blog</h2>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 m-10">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
            'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'inline-flex rounded-lg p-3 ring-4 ring-white'
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {action.body}
            </p>
          </div>
          <span
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default News