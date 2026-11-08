// Product content. Pricing values are placeholders until finalized.
export const products = [
  {
    slug: 'awareness-studies',
    name: 'Awareness Studies',
    short: 'Know where your brand stands with the shoppers who matter, before you spend.',
    tagline: 'A baseline of awareness and perception among a location-verified audience.',
    icon: 'eye',
    price: 'From $X,XXX',
    question: 'How well do the people who actually shop your category know you, and what do they think of you?',
    intro:
      'Most awareness numbers come from broad panels that loosely match your target. We start with real-world behaviour. If your growth depends on people who shop a competitor, visit a type of venue, or live in a specific trade area, we survey those people, verified by where their devices have actually been.',
    how: [
      ['Define the audience', 'Choose the behaviour that matters: competitor shoppers, category visitors, venue attendees, or a custom trade area.'],
      ['Build the cohort', 'We isolate devices that match, using up to 24 months of privacy-compliant location history.'],
      ['Survey', 'A short, unbranded survey measures awareness, consideration, perception and preference.'],
      ['Report', 'Results are benchmarked against a comparison audience and delivered in a clear executive report.'],
    ],
    outputs: [
      'Unaided and aided brand awareness',
      'Consideration and preference vs. competitors',
      'Brand perception and attribute scores',
      'Comparison to a general-population or custom benchmark',
      'Baseline you can re-measure as a tracker or before a campaign',
    ],
    uses: [
      'Setting a baseline before a major campaign',
      'Understanding your standing with a competitor\'s customers',
      'Annual or seasonal brand tracking',
      'Market entry into a new region or trade area',
    ],
  },
  {
    slug: 'brand-lift',
    name: 'Brand Lift Studies',
    short: 'Prove what your campaign changed: recall, awareness, favourability and intent.',
    tagline: 'Exposed vs. unexposed, measured on audiences verified by real-world behaviour.',
    icon: 'lift',
    price: 'From $X,XXX',
    question: 'Did the campaign move the needle with the people it was meant to reach?',
    intro:
      'Brand lift compares people who had an opportunity to see your campaign with a matched group who did not. Because exposure and audience are both grounded in device location, it works for out-of-home, DOOH, venue and event media, not just digital.',
    how: [
      ['Map exposure', 'We identify devices with an opportunity to see your media, based on presence near screens, boards, venues or in targeted areas.'],
      ['Match a control', 'A comparable unexposed group is built from the same audience profile and geography.'],
      ['Survey both groups', 'Identical unbranded surveys measure recall, awareness, favourability and intent.'],
      ['Measure lift', 'Differences are tested for statistical significance and reported with confidence levels.'],
    ],
    outputs: [
      'Ad recall and message association',
      'Lift in awareness, favourability and purchase intent',
      'Results by audience segment and region where sample allows',
      'Statistical significance and confidence intervals',
      'Executive summary with clear recommendations',
    ],
    uses: [
      'Validating out-of-home and DOOH campaigns',
      'Proving sponsorship and venue media value',
      'Comparing performance across markets',
      'Supporting renewal and budget decisions',
    ],
  },
  {
    slug: 'creative-testing',
    name: 'Creative Testing',
    short: 'Pick the winning concept before the media budget is committed.',
    tagline: 'Test concepts with the exact audience you plan to reach.',
    icon: 'split',
    price: 'From $X,XXX',
    question: 'Which concept will work best on the audience we are trying to win?',
    intro:
      'Creative is usually tested on whoever a panel can find. We test it on the audience you actually need: competitor shoppers, category buyers, or visitors to specific places. Respondents are randomly shown one concept so results can be compared fairly.',
    how: [
      ['Define the target', 'Select the behaviour-based audience your campaign is meant to win.'],
      ['Load concepts', 'Two to four concepts, from rough boards to finished ads.'],
      ['Randomized exposure', 'Each respondent sees one concept in an unbranded environment, then answers the same questions.'],
      ['Rank and recommend', 'Concepts are compared on appeal, clarity, persuasion and intent to switch.'],
    ],
    outputs: [
      'Concept ranking with significance testing',
      'Message clarity and key takeaway',
      'Persuasion and likelihood to switch',
      'Diagnostic feedback on what works and what does not',
      'Recommendation on which concept to run',
    ],
    uses: [
      'De-risking a major campaign before launch',
      'Conquest campaigns aimed at competitor customers',
      'Choosing between agency concepts',
      'Testing offers, taglines or positioning',
    ],
  },
  {
    slug: 'footfall-attribution',
    name: 'Footfall Attribution',
    short: 'Connect your media to real store and location visits.',
    tagline: 'Incremental visits, measured against a control. No site pixels required.',
    icon: 'pin',
    price: 'From $X,XXX',
    question: 'Did the campaign drive more people through the door than would have come anyway?',
    intro:
      'Footfall attribution measures whether people who had an opportunity to see your media visited your locations more often than a matched group who did not. It turns awareness spend into a real-world outcome your finance team can understand.',
    how: [
      ['Set the window', 'Define the campaign flight and a post-exposure observation window.'],
      ['Identify exposure', 'Devices with an opportunity to see the media are separated from a matched unexposed group.'],
      ['Observe visits', 'Visits to your locations, and optionally competitors, are measured for both groups.'],
      ['Calculate lift', 'The difference is reported as incremental visitation lift, with confidence levels.'],
    ],
    outputs: [
      'Incremental visitation lift vs. control',
      'Visit timing after exposure',
      'Lift by location, region or market',
      'Optional competitor visitation shifts',
      'Indexed trends rather than raw headcounts',
    ],
    uses: [
      'Proving out-of-home and DOOH drives visits',
      'Measuring retail, QSR, auto and banking campaigns',
      'Comparing markets or creative executions',
      'Year-over-year campaign comparisons',
    ],
  },
];

export const addOns = [
  ['Retargeting audiences', 'Activation-ready audience segments drawn from opt-in devices that match your study audience, for upload to DSPs and social platforms.'],
  ['Additional markets', 'Extend any study to more regions, provinces or custom trade areas.'],
  ['Demographic profiling', 'Append demographic and household context to study results.'],
  ['Repeat waves', 'Re-run a study to track change over time or across flights.'],
];
