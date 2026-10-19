import { CourseModule } from '../types/licensing';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'module-1',
    moduleNumber: 1,
    title: 'The Four Licensing Objectives and Licensable Activities',
    shortTitle: 'Licensing Objectives',
    description: 'Master the fundamental legal pillars governing all alcohol retail in England and Wales under the Licensing Act 2003.',
    readingTimeMinutes: 12,
    statutoryBasis: 'Licensing Act 2003, Section 4 & Section 182 Statutory Guidance',
    sections: [
      {
        title: 'The Four Core Statutory Objectives',
        content: [
          'The Licensing Act 2003 establishes four statutory licensing objectives. Every licensing authority, venue operator, and personal licence holder must actively promote and protect these four pillars with equal statutory importance:',
          '1. The Prevention of Crime and Disorder: Implementing robust queue and door policies, preventing weapon or drug entry, safeguarding patrons, and deterring violent or antisocial behaviour.',
          '2. Public Safety: Maintaining safe venue capacity, unobstructed and unlocked fire emergency exits, adequate first-aid personnel, competent staff training, and safe glass collection procedures.',
          '3. The Prevention of Public Nuisance: Preventing disturbance to local residents and businesses caused by amplified music, patrons congregating outside, street dispersal noise, litter, and external light pollution.',
          '4. The Protection of Children from Harm: Preventing underage alcohol purchases, barring minors from adult entertainment or unsuitable gambling machines, and safeguarding young persons from physical, moral, or psychological harm.'
        ],
        keyHighlight: 'Commercial objectives such as maximizing revenue, boosting regional tourism, or lowering business rates are NOT statutory licensing objectives.'
      },
      {
        title: 'The Four Licensable Activities',
        content: [
          'Under English and Welsh law, carrying out any of the following four activities requires statutory authorization (a Premises Licence, Club Certificate, or Temporary Event Notice):',
          '• Retail sale of alcohol: Selling packaged or draught alcoholic drinks to members of the public.',
          '• Supply of alcohol by or on behalf of a club: Supplying alcohol to qualifying club members or their guests.',
          '• Provision of regulated entertainment: Performance of live music, recorded music, dance, or exhibition of films to an audience (subject to statutory exemptions like the Live Music Act).',
          '• Provision of late-night refreshment: Serving hot food or hot drinks to the public between the hours of 11:00 PM and 5:00 AM.'
        ],
        keyHighlight: 'Serving cold food (e.g. sandwiches) or cold soft drinks during the day or at night does NOT constitute late-night refreshment and is not a licensable activity.'
      },
      {
        title: 'The Responsible Authorities',
        content: [
          'When an application is lodged or a venue is reviewed, statutory "Responsible Authorities" have legal standing to inspect, comment, or lodge representations:',
          '• Chief Officer of Police (crime and disorder)',
          '• Local Fire and Rescue Authority (fire safety)',
          '• Local Enforcement Agency for Health and Safety',
          '• Local Planning Authority',
          '• Environmental Health (noise pollution and nuisance)',
          '• Trading Standards (underage sales enforcement and test purchasing)',
          '• Body responsible for the protection of children from harm',
          '• Primary Care Trust / Local Health Board'
        ]
      }
    ],
    venueScenario: {
      title: 'Neighbour Noise & Dispersal Friction',
      situation: 'A residential neighbour living adjacent to a bustling high-street gastro-bar submits a formal complaint to the local council about booming bass and shouting in the street at 1:15 AM.',
      dilemma: 'The venue general manager claims: "We have a valid premises licence until 2:00 AM, and our patrons are simply having fun outside waiting for taxis. We cannot control people on a public pavement."',
      correctAction: 'The DPS must immediately enforce noise attenuation and a written Dispersal Policy: reduce bass levels 30 minutes before close, deploy SIA door staff to gently direct patrons away from residential clusters, display prominent "Please Respect Our Neighbours" signage, and manage taxi pick-up points.',
      rationale: 'The Prevention of Public Nuisance is a binding statutory objective. Failure to manage dispersal can lead to an official licence review by Environmental Health or Police, resulting in shortened hours or licence revocation.',
      commonMistake: 'Believing that holding a licence until 2:00 AM protects the venue from noise abatement orders or neighbourhood complaints.'
    },
    checklistItems: [
      'Prominently display Summary of Premises Licence (Part B) where visible to the public',
      'Verify that all 4 statutory objectives are embedded into your venue Staff Handbook',
      'Ensure fire exit routes and emergency doors remain totally unobstructed at all times',
      'Maintain an active Dispersal Procedure for closing time noise reduction',
      'Keep contact details of local Environmental Health and Police Licensing officers on file'
    ],
    quiz: [
      {
        id: 'q1-1',
        question: 'Which of the following is NOT one of the four statutory licensing objectives?',
        options: [
          { key: 'A', text: 'Prevention of crime and disorder' },
          { key: 'B', text: 'Maximising tourism and night-time economy revenue' },
          { key: 'C', text: 'Public safety' },
          { key: 'D', text: 'Prevention of public nuisance' }
        ],
        answer: 'B',
        explanation: 'The four objectives are Crime and Disorder, Public Safety, Public Nuisance, and Protection of Children. Commercial considerations are not statutory objectives.',
        legalBasis: 'Licensing Act 2003, s. 4(2)'
      },
      {
        id: 'q1-2',
        question: 'Between which statutory hours does the sale of hot food or hot drink constitute "late-night refreshment"?',
        options: [
          { key: 'A', text: '9:00 PM to 6:00 AM' },
          { key: 'B', text: '10:00 PM to 4:00 AM' },
          { key: 'C', text: '11:00 PM to 5:00 AM' },
          { key: 'D', text: 'Midnight to 8:00 AM' }
        ],
        answer: 'C',
        explanation: 'Under Schedule 2 of the Licensing Act 2003, late-night refreshment is the supply of hot food or hot drinks to the public between 11:00 PM and 5:00 AM.',
        legalBasis: 'Licensing Act 2003, Schedule 2'
      },
      {
        id: 'q1-3',
        question: 'Who grants and oversees a premises licence in England and Wales?',
        options: [
          { key: 'A', text: 'The local licensing authority (council)' },
          { key: 'B', text: 'The venue landlord' },
          { key: 'C', text: 'The National Police Chiefs Council' },
          { key: 'D', text: 'The British Beer & Pub Association' }
        ],
        answer: 'A',
        explanation: 'The local authority (unitary, district, or London borough council acting as the Licensing Authority) grants and oversees premises licences.',
        legalBasis: 'Licensing Act 2003, s. 3'
      }
    ]
  },
  {
    id: 'module-2',
    moduleNumber: 2,
    title: 'Who Grants What: Licences, DPS and Authorisations',
    shortTitle: 'Permissions & DPS',
    description: 'Understand the distinct roles of the Premises Licence, Personal Licence, Designated Premises Supervisor (DPS), and staff authorisations.',
    readingTimeMinutes: 14,
    statutoryBasis: 'Licensing Act 2003, Sections 15, 19, 37, & Home Office s182 Guidance',
    sections: [
      {
        title: 'Premises Licence vs. Personal Licence',
        content: [
          'A Premises Licence is tied to a physical geographical location. It specifies the physical footprint, the exact permitted hours for licensable activities, mandatory operating conditions, and the named Designated Premises Supervisor (DPS).',
          'A Personal Licence is issued to an individual person. It authorises that person to sell alcohol by retail, or to supervise and authorise alcohol sales made by non-licence-holding colleagues under a valid premises licence.',
          'Crucial rule: A personal licence is NOT portable premises permission. You cannot turn up at an unlicensed field or warehouse and sell drinks just because you hold a personal licence.'
        ],
        keyHighlight: 'Both the person and the location framework must be lawful before a single retail sale of alcohol can take place.'
      },
      {
        title: 'The Designated Premises Supervisor (DPS)',
        content: [
          'Every premises licence authorising retail alcohol sales MUST specify a single Designated Premises Supervisor (DPS).',
          '• The DPS must hold a valid Personal Licence.',
          '• There can normally only be ONE DPS named on a premises licence at any one time.',
          '• The DPS is the primary contact person for police, licensing authorities, and local emergency services.',
          '• The DPS does NOT have to be physically on site 24/7 or pour every drink, but they remain legally accountable for ensuring sales comply with the law.'
        ]
      },
      {
        title: 'Staff Authorisation to Sell Alcohol',
        content: [
          'Must every bartender, waiter, or retail cashier hold a personal licence? No.',
          'Non-licence-holding team members may legally dispense and sell alcohol provided each sale is authorised by a personal licence holder (often the DPS or a shift manager).',
          'While the Licensing Act 2003 does not explicitly require staff authorisations to be in writing, current Home Office Section 182 statutory guidance strongly advises maintaining a written Authorisation Record signed by the DPS and each authorised team member.'
        ],
        keyHighlight: 'A written staff authorisation sheet with clear age-check instructions provides paramount legal defense and due diligence during police inspections.'
      }
    ],
    venueScenario: {
      title: 'Unauthorised Weekend Bartender',
      situation: 'On a frantic Saturday night, an agency bartender covers an emergency shift. The venue holds a premises licence, but the DPS is off-duty and no personal licence holder has authorised this temp worker.',
      dilemma: 'The bartender serves cocktails all evening. An enforcement officer requests to see the worker’s authorisation to sell alcohol.',
      correctAction: 'Before any worker touches alcohol dispense, the on-duty personal licence holder or DPS must verify training, review the venue’s age policy, and execute an explicit authorisation (preferably signed and logged).',
      rationale: 'Selling alcohol without authorization from a personal licence holder is an offence under Section 136 of the Licensing Act 2003 (unauthorised licensable activity), exposing the business and staff to unlimited fines.',
      commonMistake: 'Assuming that being employed by the bar automatically confers legal permission to sell alcohol.'
    },
    checklistItems: [
      'Confirm the premises has an active, up-to-date Designated Premises Supervisor (DPS)',
      'Maintain an active Staff Alcohol Authorisation Register signed by the DPS',
      'Ensure on-duty shift managers know who holds a Personal Licence during every trade hour',
      'Provide immediate refreshers to temporary or agency bar staff on mandatory conditions',
      'Keep the DPS contact phone number easily accessible at the central bar terminal'
    ],
    quiz: [
      {
        id: 'q2-1',
        question: 'How many Designated Premises Supervisors (DPS) can be named on a premises licence at any one time?',
        options: [
          { key: 'A', text: 'Exactly one' },
          { key: 'B', text: 'Up to three' },
          { key: 'C', text: 'As many as the venue employs' },
          { key: 'D', text: 'Two: one for weekdays and one for weekends' }
        ],
        answer: 'A',
        explanation: 'Under Section 19 of the Licensing Act 2003, a premises licence can only specify a single DPS at any given time.',
        legalBasis: 'Licensing Act 2003, s. 19(2)'
      },
      {
        id: 'q2-2',
        question: 'Does the DPS need to be physically standing behind the bar for every individual alcohol transaction?',
        options: [
          { key: 'A', text: 'Yes, they must personally witness every pour' },
          { key: 'B', text: 'No, but sales must be properly authorised by a personal licence holder' },
          { key: 'C', text: 'Only between midnight and 5:00 AM' },
          { key: 'D', text: 'Yes, unless the customer orders draft cider' }
        ],
        answer: 'B',
        explanation: 'The DPS does not have to be physically present at all times, provided operational management is maintained and sales are authorised by a personal licence holder.',
        legalBasis: 'Home Office s182 Guidance 2026'
      },
      {
        id: 'q2-3',
        question: 'Is written authorisation for staff to sell alcohol strictly mandated by the Licensing Act 2003 wording?',
        options: [
          { key: 'A', text: 'Yes, it is a criminal offence not to laminate it' },
          { key: 'B', text: 'No, but Section 182 statutory guidance strongly recommends it' },
          { key: 'C', text: 'It is strictly forbidden under privacy legislation' },
          { key: 'D', text: 'Only required for venues with over 200 capacity' }
        ],
        answer: 'B',
        explanation: 'The Act does not expressly require written form, but statutory guidance strongly advises written authorisation as evidence of due diligence.',
        legalBasis: 'Licensing Act 2003 s182 Guidance, para 10.33'
      }
    ]
  },
  {
    id: 'module-3',
    moduleNumber: 3,
    title: 'Personal Licence Applications and Statutory Duties',
    shortTitle: 'Personal Licence & Duties',
    description: 'Learn the legal prerequisites, application process, lifetime validity rules, and continuing legal duties of a personal licence holder.',
    readingTimeMinutes: 13,
    statutoryBasis: 'Licensing Act 2003, Part 6 & Deregulation Act 2015',
    sections: [
      {
        title: 'Prerequisites for Application',
        content: [
          'To apply for a Personal Licence in England and Wales, an applicant must satisfy five core statutory requirements:',
          '1. Minimum Age: Must be at least 18 years of age.',
          '2. Approved Qualification: Must hold an accredited licensing qualification (such as the Level 2 APLH - Award for Personal Licence Holders).',
          '3. Criminal Record Check: Must submit a Basic DBS Disclosure certificate dated within 28 days of submission, disclosing unspent relevant or foreign offences.',
          '4. Right to Work: Must provide statutory proof of right to work in the United Kingdom.',
          '5. Residence & Council Application: Must apply to the licensing authority (council) where you are ORDINARILY RESIDENT, regardless of where your venue is located.'
        ]
      },
      {
        title: 'Abolition of Periodic Renewal (2015)',
        content: [
          'Historically, personal licences expired after 10 years. In 2015, the Deregulation Act permanently abolished periodic renewals in England and Wales.',
          'Today, once granted, a Personal Licence has indefinite lifetime validity unless surrendered by the holder, revoked by the council, or suspended by a magistrates court following a relevant criminal conviction.'
        ],
        keyHighlight: 'A personal licence does not expire after 10 years, but moving house without informing the issuing council is an active criminal offence!'
      },
      {
        title: 'Continuing Legal Duties of the Licence Holder',
        content: [
          'Holding a personal licence confers significant continuing statutory obligations:',
          '• Change of Name or Address: You must give written notice to your original issuing licensing authority as soon as reasonably practicable (failure is a criminal offence).',
          '• Court Notification: If charged with a "relevant offence" (e.g. violent crime, drug offences, drunk driving, firearms offences), you must notify the court immediately that you are a personal licence holder before trial begins.',
          '• Production of Licence: You must be able to produce your licence or badge for inspection upon request by a police officer or authorized council licensing officer.'
        ]
      }
    ],
    venueScenario: {
      title: 'Address Change Neglect & Council Summons',
      situation: 'A personal licence holder relocates from Manchester to Leeds. They update their electoral roll and driving licence, but do not notify the original Manchester Licensing Authority.',
      dilemma: 'Two years later, following a venue inspection, council records reveal an outdated address on the national licensing register.',
      correctAction: 'The holder must immediately notify their issuing authority, submit the statutory fee, and return both parts of the licence for updated reissue.',
      rationale: 'Under Section 127 of the Licensing Act 2003, failure to notify the licensing authority of a change in name or address is an offence subject to a fine.',
      commonMistake: 'Assuming that the licence moves automatically or that you apply to your new council rather than notifying your original issuing authority.'
    },
    checklistItems: [
      'Retain both the photocard licence and paper counterpart in a secure location',
      'Notify the original issuing authority immediately if your legal surname or home address changes',
      'Disclose your personal licence status immediately if charged with any relevant criminal offence in court',
      'Carry your photocard licence or keep it readily producible at your place of work',
      'Verify that right-to-work documentation remains compliant and uninterrupted'
    ],
    quiz: [
      {
        id: 'q3-1',
        question: 'To which licensing authority should an individual apply for their personal licence?',
        options: [
          { key: 'A', text: 'The council where their workplace venue is located' },
          { key: 'B', text: 'The council area in which they are ordinarily resident' },
          { key: 'C', text: 'The Metropolitan Police Headquarters' },
          { key: 'D', text: 'Any council offering the lowest fee' }
        ],
        answer: 'B',
        explanation: 'Applications must be made to the licensing authority for the area where the applicant usually resides (ordinarily resident).',
        legalBasis: 'Licensing Act 2003, s. 115'
      },
      {
        id: 'q3-2',
        question: 'Under current legislation (since the Deregulation Act 2015), how often must a personal licence be renewed?',
        options: [
          { key: 'A', text: 'Every 3 years' },
          { key: 'B', text: 'Every 5 years' },
          { key: 'C', text: 'Every 10 years' },
          { key: 'D', text: 'It has indefinite validity and does not require periodic renewal' }
        ],
        answer: 'D',
        explanation: 'The Deregulation Act 2015 abolished the 10-year renewal requirement. Licences remain valid indefinitely unless surrendered or revoked.',
        legalBasis: 'Deregulation Act 2015, s. 67'
      },
      {
        id: 'q3-3',
        question: 'If a personal licence holder changes their home address, what is their statutory obligation?',
        options: [
          { key: 'A', text: 'Do nothing until the licence is re-inspected' },
          { key: 'B', text: 'Notify their issuing licensing authority in writing as soon as reasonably practicable' },
          { key: 'C', text: 'Surrender the licence and sit the APLH exam again' },
          { key: 'D', text: 'Notify only the local post office' }
        ],
        answer: 'B',
        explanation: 'Section 127 requires the licence holder to notify the issuing authority of any name or address change as soon as reasonably practicable.',
        legalBasis: 'Licensing Act 2003, s. 127'
      }
    ]
  },
  {
    id: 'module-4',
    moduleNumber: 4,
    title: 'Preventing Underage Sales & Verifying ID',
    shortTitle: 'Underage Sales & Digital ID',
    description: 'Master age verification protocols, acceptable physical identification, the table meal exception, and the September 2026 Digital Verification Services (DVS) regulations.',
    readingTimeMinutes: 15,
    statutoryBasis: 'Licensing Act 2003, Sections 145-154 & SI 2026/1022 (Digital Age Verification)',
    sections: [
      {
        title: 'The Law on Under-18s and Alcohol',
        content: [
          'Under the Licensing Act 2003, it is an offence to sell alcohol to anyone under 18 years old anywhere in England and Wales.',
          'It is also an offence for an adult to purchase or attempt to purchase alcohol on behalf of a person under 18 (known as "proxy purchasing").',
          'It is an offence for a person under 18 to purchase or attempt to purchase alcohol.'
        ]
      },
      {
        title: 'The Narrow Table Meal Exception (Ages 16 and 17)',
        content: [
          'A strict and narrow statutory exception exists under Section 149/150:',
          '• A person aged 16 or 17 MAY consume beer, wine, or cider with a substantive table meal, IF AND ONLY IF:',
          '1. The drink is accompanied by a genuine seated table meal.',
          '2. The alcohol is purchased by an accompanying adult (aged 18+).',
          '3. The drink is strictly beer, wine, or cider. Spirits, alcopops, and fortified wines are STRICTLY PROHIBITED.',
          '4. The 16- or 17-year-old cannot purchase the drink themselves, even if eating.'
        ],
        keyHighlight: 'Individual venues have full legal rights to adopt stricter venue policies (e.g. "Over 18s only for all alcohol consumption") regardless of this statutory exception.'
      },
      {
        title: 'Challenge 21 & Challenge 25 Policies',
        content: [
          'Challenge 25 is not the legal drinking age—the legal drinking age is 18. Challenge 25 is an operational buffer: if a patron appears under 25, staff MUST ask for valid ID before completing any sale.',
          'Valid physical ID must contain three mandatory elements:',
          '• A clear photograph of the individual',
          '• The individual’s date of birth',
          '• A recognized security mark (such as a holographic foil or ultraviolet marking). Examples: Passports, UK Photocard Driving Licences, HM Armed Forces cards, or PASS-accredited proof of age cards.'
        ]
      },
      {
        title: 'The September 2026 Digital Verification Standard (SI 2026/1022)',
        content: [
          'Since 15 September 2026, UK legislation permits venues to accept certified Digital Verification Services (DVS) apps that meet government Trust Framework certification standards.',
          'CRITICAL RULE: A smartphone photo, screenshot, or digital gallery picture of a passport or driving licence is NOT compliant and must ALWAYS be rejected.',
          'Compliant digital verification relies on encrypted cryptographic checks (such as a dynamic QR scan or verified DVS app with biometric liveness) where the venue has opted into digital verification.'
        ],
        keyHighlight: 'A customer holding up a photograph of their passport on an iPhone screen must ALWAYS be refused service.'
      }
    ],
    venueScenario: {
      title: 'Smartphone Photo of Passport at Birthday Booking',
      situation: 'A group of four young guests arrive for a reserved birthday table in a cocktail bar. Two guests look 17. When asked for ID, one shows a crisp high-res photograph of an Italian passport on an iPhone.',
      dilemma: 'The customer argues: "It’s my real passport, look at the date of birth, my mum took the picture before I travelled! We have a £200 table deposit booked!"',
      correctAction: 'Politely and firmly decline to serve alcohol. State: "Under licensing law and venue policy, we can only accept original physical IDs with holographic security features or registered certified Digital Verification (DVS) apps. Photographs on phones cannot be accepted."',
      rationale: 'Phone photos can be forged or edited in seconds using photo editing apps. Accepting a phone photo exposes the server and venue to a £5,000 fine, licence review, and criminal conviction.',
      commonMistake: 'Accepting phone photos because "they booked in advance" or "have a large deposit".'
    },
    checklistItems: [
      'Examine every physical ID for holographic seal, intact edges, and raised embossing',
      'Never accept photos, screenshots, or uncertified digital scans on mobile phones',
      'Verify the table meal exception criteria carefully before permitting 16/17 cider/beer consumption',
      'Log every refusal immediately in the venue Refusals Register with date, time, and server name',
      'Watch for proxy purchasing when adults step outside to hand drinks to waiting youths'
    ],
    quiz: [
      {
        id: 'q4-1',
        question: 'Under what specific condition can a 16- or 17-year-old legally consume beer, wine, or cider in a licensed premises?',
        options: [
          { key: 'A', text: 'At any private party after 8:00 PM' },
          { key: 'B', text: 'With a table meal, purchased by an accompanying adult' },
          { key: 'C', text: 'Whenever they present a student union card' },
          { key: 'D', text: 'Only if they drink through a straw' }
        ],
        answer: 'B',
        explanation: 'Section 150 allows 16- and 17-year-olds to consume beer, wine, or cider with a table meal if purchased by an adult. Spirits are never permitted.',
        legalBasis: 'Licensing Act 2003, s. 150(1)'
      },
      {
        id: 'q4-2',
        question: 'What is the status of a photograph of a passport displayed on a customer’s smartphone screen?',
        options: [
          { key: 'A', text: 'It is automatically valid if the photo is sharp' },
          { key: 'B', text: 'It is an official certified digital identity' },
          { key: 'C', text: 'It is NOT compliant and must be refused' },
          { key: 'D', text: 'It is acceptable for beer but not for spirits' }
        ],
        answer: 'C',
        explanation: 'A smartphone photo or screenshot lacks verifiable holographic/UV security features and does not meet statutory DVS requirements.',
        legalBasis: 'Home Office Statutory Guidance & SI 2026/1022'
      },
      {
        id: 'q4-3',
        question: 'Under the September 2026 regulations (SI 2026/1022), are licensed venues legally obligated to accept digital age verification?',
        options: [
          { key: 'A', text: 'Yes, it is mandatory for all venues nationwide' },
          { key: 'B', text: 'No, it is an optional route subject to approved safeguards and venue policy' },
          { key: 'C', text: 'It is only allowed in airports and train stations' },
          { key: 'D', text: 'It was banned completely in late 2026' }
        ],
        answer: 'B',
        explanation: 'Digital verification is an optional pathway; venues may choose whether to adopt certified DVS solutions or continue requiring physical ID.',
        legalBasis: 'Licensing Act 2003 (Mandatory Licensing Conditions) Order 2026'
      }
    ]
  },
  {
    id: 'module-5',
    moduleNumber: 5,
    title: 'The Mandatory Licensing Conditions',
    shortTitle: 'Mandatory Conditions',
    description: 'Learn the compulsory conditions binding all on-trade alcohol premises: irresponsible promotions, free potable water, small measures, and minimum unit pricing.',
    readingTimeMinutes: 14,
    statutoryBasis: 'Licensing Act 2003 (Mandatory Licensing Conditions) Order 2010 & 2014 Amendments',
    sections: [
      {
        title: 'The 5 Mandatory Conditions Overview',
        content: [
          'All premises licences authorising the sale of alcohol for on-site consumption are subject to mandatory statutory conditions. These conditions apply automatically by law, regardless of what local conditions say:',
          '1. Ban on Irresponsible Promotions',
          '2. Ban on Dispensing Alcohol Directly into Mouth',
          '3. Provision of Free Potable Tap Water',
          '4. Age Verification Policy Implementation',
          '5. Availability of Specified Smaller Measures',
          'Plus the overarching Minimum Permitted Price rule (duty + VAT).'
        ]
      },
      {
        title: 'Mandatory Specified Measures',
        content: [
          'Venues must make available and prominently display the specified smaller measures for the following drinks:',
          '• Draught Beer and Cider: Half-pint (1/2 pint) must be available and offered.',
          '• Still Wine by the Glass: 125 ml must be available and offered (even if 175ml and 250ml are standard).',
          '• Gin, Rum, Vodka, and Whisky: 25 ml OR 35 ml single measure must be available and offered (whichever single measure the venue elects).',
          'Crucial: Customers must be made aware of these smaller measures (via menus, price boards, or staff asking when wine or spirits are ordered).'
        ],
        keyHighlight: 'A wine list that lists only 175ml and 250ml glasses is in direct breach of mandatory licensing conditions!'
      },
      {
        title: 'Irresponsible Promotions & Drinking Games',
        content: [
          'Promotions that encourage customers to drink excessively or rapidly are illegal. Banned activities include:',
          '• Drinking games involving speed, consuming a large quantity, or peer pressure.',
          '• Unlimited alcohol for a fixed entrance price (e.g. "£15 entry, all you can drink between 8 PM and 10 PM").',
          '• Dispensing alcohol directly into the mouth (e.g. "dentist chair" pours), except where a person requires physical assistance due to a disability.',
          '• Selling alcohol below the permitted price: The floor price equals duty plus VAT for that beverage.'
        ]
      },
      {
        title: 'Free Potable Water',
        content: [
          'Premises must provide free potable tap water to customers on request wherever it is reasonably available.',
          'A venue cannot charge for tap water or insist that a customer purchase a meal or soft drink before receiving free tap water.'
        ]
      }
    ],
    venueScenario: {
      title: 'The "Only Large Glasses" Wine Menu',
      situation: 'A newly opened boutique wine bar prints elegant leather-bound menus listing still house wines available exclusively in "Medium (175 ml)" and "Large (250 ml)".',
      dilemma: 'The manager states: "A 125 ml glass doesn’t suit our glassware aesthetic and lowers our spend-per-head."',
      correctAction: 'Add the 125 ml option to the printed menu and train staff to offer it. If not printed, staff must explicitly inform patrons that 125 ml is available upon request.',
      rationale: 'Mandatory condition 5 strictly requires 125 ml still wine by the glass to be available and brought to the customer’s attention. Failure to comply is a criminal offence under Section 136.',
      commonMistake: 'Assuming that luxury or boutique venues are exempt from statutory small measure rules.'
    },
    checklistItems: [
      'Audit drinks menu to confirm 125 ml wine, half-pint beer/cider, and 25ml/35ml spirits are listed',
      'Train all front-of-house staff to offer the smaller measure when customers do not specify size',
      'Verify free drinking tap water is accessible and staff never charge or refuse requests',
      'Check all drink promotion prices against the official HM Government Duty + VAT pricing floor',
      'Ensure no staff engage in "dentist chair" pours or rapid drinking promotional games'
    ],
    quiz: [
      {
        id: 'q5-1',
        question: 'What is the mandatory specified small measure for still wine served by the glass?',
        options: [
          { key: 'A', text: '75 ml' },
          { key: 'B', text: '100 ml' },
          { key: 'C', text: '125 ml' },
          { key: 'D', text: '175 ml' }
        ],
        answer: 'C',
        explanation: 'Mandatory conditions require 125 ml still wine by the glass to be available and advertised to customers.',
        legalBasis: 'Mandatory Licensing Conditions Order 2010, Schedule'
      },
      {
        id: 'q5-2',
        question: 'Under what circumstance may staff dispense alcohol directly into a customer’s mouth?',
        options: [
          { key: 'A', text: 'During New Year’s Eve countdowns' },
          { key: 'B', text: 'If the customer signs an injury waiver' },
          { key: 'C', text: 'Only where an individual is unable to drink without assistance due to a disability' },
          { key: 'D', text: 'Whenever tequila or vodka shots are ordered' }
        ],
        answer: 'C',
        explanation: 'The mandatory condition bans dispensing alcohol directly into the mouth, with a sole exemption for customers needing disability assistance.',
        legalBasis: 'Mandatory Licensing Conditions Order 2010, para. 2'
      },
      {
        id: 'q5-3',
        question: 'Can a venue charge a 50p glass washing fee for serving a glass of tap water?',
        options: [
          { key: 'A', text: 'Yes, if clearly stated on the bill' },
          { key: 'B', text: 'No, free potable tap water must be provided on request without charge' },
          { key: 'C', text: 'Only if the customer has not bought a main meal' },
          { key: 'D', text: 'Only during peak Friday and Saturday hours' }
        ],
        answer: 'B',
        explanation: 'Free potable tap water must be provided free of charge on request where reasonably available.',
        legalBasis: 'Mandatory Licensing Conditions Order 2010, para. 3'
      }
    ]
  },
  {
    id: 'module-6',
    moduleNumber: 6,
    title: 'Offences, Intoxication and Responsible Service',
    shortTitle: 'Offences & Intoxication',
    description: 'Understand alcohol-related criminal offences, handling intoxicated patrons, drink spiking deterrence, refusal protocols, and statutory penalties.',
    readingTimeMinutes: 13,
    statutoryBasis: 'Licensing Act 2003, Sections 136-141 & Violent Crime Reduction Act 2006',
    sections: [
      {
        title: 'Selling Alcohol to a Drunk Person',
        content: [
          'Under Section 141 of the Licensing Act 2003, it is a criminal offence for any person on licensed premises to:',
          '• Knowingly sell or attempt to sell alcohol to a person who is drunk.',
          '• Knowingly allow alcohol to be sold to a person who is drunk.',
          'Furthermore, under Section 142, it is an offence for anyone to obtain or attempt to obtain alcohol for a person who is drunk (a friend buying another round for an intoxicated companion).'
        ],
        keyHighlight: 'Both the server and the DPS/premises licence holder can be prosecuted for serving an intoxicated patron.'
      },
      {
        title: 'Recognizing Signs of Intoxication & Refusal Technique',
        content: [
          'Physical signs: Slurred speech, lack of motor coordination, unsteady stance, bloodshot eyes, aggression, loud argumentative behaviour.',
          'When refusing service:',
          '• Be calm, polite, and unequivocal. Do not judge or insult the customer.',
          '• State the law: "I am sorry, under licensing law I am not legally permitted to serve you any more alcohol tonight."',
          '• Offer free tap water or soft drinks.',
          '• Notify door supervisors and colleagues immediately so the patron cannot try another bar station.',
          '• Record the refusal in the Refusals Register immediately.'
        ]
      },
      {
        title: 'Drink Spiking Prevention and Patrons’ Safety',
        content: [
          'Venues owe a statutory duty of care to their customers. Modern licensing compliance mandates active vigilance against drink spiking and predatory behavior:',
          '• Implement vulnerability initiatives such as "Ask for Angela".',
          '• Train staff to never leave unattended drinks on tables or bars.',
          '• Provide drink covers / foil stoppers on request.',
          '• Provide a quiet, supervised welfare space for distressed patrons.',
          '• Never eject a vulnerable, disoriented patron alone into the cold street at night; arrange safe transport or medical aid.'
        ]
      },
      {
        title: 'Enforcement Penalties & Licence Review',
        content: [
          'Breaches of licensing law carry heavy penalties:',
          '• Section 136 (Unauthorised Licensable Activity): Unlimited fine and/or up to 6 months imprisonment.',
          '• Serving a drunk person: Level 3 fine (up to £1,000).',
          '• Persistent sales to minors (Section 147A): Up to £20,000 fine and voluntary/compulsory closure orders.',
          '• Police closure orders: Up to 24 hours (extendable to 48 hours) for immediate disorder or public nuisance.',
          '• Council Licence Review: Conditions added, DPS removed, licence suspended for up to 3 months, or full revocation.'
        ]
      }
    ],
    venueScenario: {
      title: 'The Aggressive Bachelor Party Rounds',
      situation: 'A best man stumbles up to the bar, slurring heavily and leaning heavily on the counter, demanding four double rums for his group.',
      dilemma: 'The customer shouts: "We just spent £300 here! If you don’t pour these drinks, I’m getting you fired!"',
      correctAction: 'Stay composed. Say clearly: "I cannot serve any more alcohol to your party right now under licensing regulations. I will gladly fetch a jug of cold ice water for your table." Immediately alert the shift supervisor and door security.',
      rationale: 'Serving an intoxicated individual is an offence under Section 141. Giving in to intimidation risks safety, police intervention, and loss of the premises licence.',
      commonMistake: 'Pouring the drinks just to avoid a scene or conflict at the bar counter.'
    },
    checklistItems: [
      'Stop alcohol service immediately once a patron exhibits unmistakable signs of intoxication',
      'Provide immediate access to water and safe de-escalation',
      'Brief all staff on the "Ask for Angela" safeguarding protocol',
      'Never allow an unattended vulnerable individual to wander outside alone at closing time',
      'Complete contemporaneous logbook entries for every refused sale and security intervention'
    ],
    quiz: [
      {
        id: 'q6-1',
        question: 'Under Section 141 of the Licensing Act 2003, knowingly selling alcohol to a drunk person is:',
        options: [
          { key: 'A', text: 'Lawful if the customer agrees to take a taxi' },
          { key: 'B', text: 'A criminal offence punishable by fine' },
          { key: 'C', text: 'Permitted if food is consumed simultaneously' },
          { key: 'D', text: 'Only an offence after midnight' }
        ],
        answer: 'B',
        explanation: 'Knowingly selling or allowing the sale of alcohol to someone who is drunk is a criminal offence under Section 141.',
        legalBasis: 'Licensing Act 2003, s. 141'
      },
      {
        id: 'q6-2',
        question: 'What is the maximum statutory penalty for carrying on unauthorized licensable activities under Section 136?',
        options: [
          { key: 'A', text: 'A £50 fixed penalty notice' },
          { key: 'B', text: 'An unlimited fine and/or up to 6 months imprisonment' },
          { key: 'C', text: 'A verbal warning from the council' },
          { key: 'D', text: 'Loss of business rates discount for 1 year' }
        ],
        answer: 'B',
        explanation: 'Section 136 carries an unlimited fine and/or up to six months imprisonment upon summary conviction.',
        legalBasis: 'Licensing Act 2003, s. 136'
      },
      {
        id: 'q6-3',
        question: 'What is the primary operational purpose of keeping an accurate Refusals and Incident Log?',
        options: [
          { key: 'A', text: 'To calculate bartender bonuses' },
          { key: 'B', text: 'To prove due diligence and responsible management during inspections' },
          { key: 'C', text: 'To report daily totals to HM Revenue & Customs' },
          { key: 'D', text: 'To share patron names on social media' }
        ],
        answer: 'B',
        explanation: 'A contemporaneous refusal and incident log is vital evidence of due diligence, demonstrating active compliance to police and licensing officers.',
        legalBasis: 'Licensing Act 2003, Best Practice Enforcement'
      }
    ]
  },
  {
    id: 'module-7',
    moduleNumber: 7,
    title: 'Events, TENs and Venue Compliance',
    shortTitle: 'TENs & Special Events',
    description: 'Learn the strict statutory limits, deadlines, and notifications required for Temporary Event Notices (TENs) and qualifying members clubs.',
    readingTimeMinutes: 14,
    statutoryBasis: 'Licensing Act 2003, Part 5 (Temporary Event Notices) & Club Certificates',
    sections: [
      {
        title: 'What is a Temporary Event Notice (TEN)?',
        content: [
          'A Temporary Event Notice (TEN) is a streamlined statutory procedure used to authorise licensable activities on a short-term basis at premises not normally licensed, or to extend permitted hours for special events at an existing venue.',
          'Crucial: A TEN does not permanently alter a premises licence; it provides temporary statutory cover for a specific event.'
        ]
      },
      {
        title: 'The Statutory Numerical Limits for TENs',
        content: [
          'Every venue operator and licence holder must memorize the statutory caps governing TENs:',
          '• Attendance Limit: Fewer than 500 people (maximum 499) on the premises at any one time. This includes ALL customers, bar staff, security, technicians, and performers!',
          '• Maximum Duration: Up to 168 hours (7 continuous days) per single event.',
          '• Personal Licence Holder Allowance: A personal licence holder can give up to 50 TENs per calendar year (up to 10 of which may be "Late TENs").',
          '• Non-Licence Holder Allowance: An individual without a personal licence can give up to 5 TENs per calendar year (up to 2 of which may be "Late TENs").',
          '• Premises Site Limit: A single venue/premises can be the subject of up to 15 TENs in a calendar year, covering no more than 21 aggregate days in total.'
        ],
        keyHighlight: 'If 500 or more people are present at any time, a TEN is completely invalid and the event becomes an illegal unauthorized activity!'
      },
      {
        title: 'Deadlines and Notice Periods',
        content: [
          '• Standard TEN: Must be served on the licensing authority, police, and environmental health at least 10 clear working days before the event.',
          '• "Clear working days" does not include the day the notice is received or the first day of the event, nor does it include weekends or bank holidays.',
          '• Late TEN: Submitted between 5 and 9 clear working days before the event. Crucial distinction: If police or environmental health object to a Late TEN, the notice is vetoed automatically without a council hearing!'
        ]
      },
      {
        title: 'Qualifying Members’ Clubs',
        content: [
          'Venues operating under a Club Premises Certificate (such as sports clubs or working men’s clubs) enjoy special privileges, including not needing a DPS.',
          'However, the club must be genuinely non-profit, have a rules-based membership with at least 2 days between application and admission, and be governed by its members.',
          'Commercial bars cannot simply declare themselves a "private members club" to escape standard licensing rules.'
        ]
      }
    ],
    venueScenario: {
      title: 'The 520-Guest Warehouse DJ Night',
      situation: 'An event promoter books a photography studio to host a techno rave under a TEN. Pre-sale tickets reach 480, and the promoter plans to sell 40 more tickets on the door.',
      dilemma: 'The promoter says: "The crowd will be around 510 people, but our ticket holders are under 500, so it’s fine."',
      correctAction: 'The personal licence holder must immediately halt ticket sales and enforce a maximum occupancy of 499, explicitly accounting for 15 bar staff, 6 security guards, and 2 DJs.',
      rationale: 'The statutory cap is fewer than 500 people on site at any one time, INCLUDING staff. Exceeding 499 renders the TEN invalid, constituting an illegal event under Section 136.',
      commonMistake: 'Counting only ticket-holding customers while forgetting bar staff, security personnel, and performers.'
    },
    checklistItems: [
      'Calculate total capacity including staff, performers, and security to ensure occupancy stays below 500',
      'Submit standard TENs with at least 10 clear working days notice (excluding delivery day and event day)',
      'Track annual venue TEN quota: maximum 15 notices and 21 days total per calendar year',
      'Keep copies of the council-acknowledged TEN prominently displayed at the event entrance',
      'Ensure event hours and licensable activities match the notice details exactly'
    ],
    quiz: [
      {
        id: 'q7-1',
        question: 'What is the maximum number of people permitted on site at any one time during a TEN event, including staff and security?',
        options: [
          { key: 'A', text: 'Fewer than 500 (up to 499)' },
          { key: 'B', text: '750' },
          { key: 'C', text: '1,000' },
          { key: 'D', text: 'Unlimited, provided noise barriers are used' }
        ],
        answer: 'A',
        explanation: 'The statutory capacity threshold for a Temporary Event Notice is fewer than 500 people on the premises at any one time.',
        legalBasis: 'Licensing Act 2003, s. 99'
      },
      {
        id: 'q7-2',
        question: 'What is the maximum duration for a single Temporary Event Notice (TEN)?',
        options: [
          { key: 'A', text: '24 hours' },
          { key: 'B', text: '72 hours' },
          { key: 'C', text: '168 hours (7 days)' },
          { key: 'D', text: '1 calendar month' }
        ],
        answer: 'C',
        explanation: 'Under Section 100 of the Licensing Act 2003, a single TEN can last a maximum of 168 hours.',
        legalBasis: 'Licensing Act 2003, s. 100(1)'
      },
      {
        id: 'q7-3',
        question: 'How many TENs per calendar year can a Personal Licence Holder generally submit?',
        options: [
          { key: 'A', text: '5' },
          { key: 'B', text: '15' },
          { key: 'C', text: '50' },
          { key: 'D', text: 'Unlimited' }
        ],
        answer: 'C',
        explanation: 'A personal licence holder can give up to 50 TENs in a calendar year (up to 10 of which can be late TENs).',
        legalBasis: 'Licensing Act 2003, s. 107'
      }
    ]
  },
  {
    id: 'module-8',
    moduleNumber: 8,
    title: 'The Shift Manager’s Operating System & Scenarios',
    shortTitle: 'Shift Operating System',
    description: 'Transform legal requirements into checkable operational daily habits across the 5 shift phases: Before Doors, At Entry, During Service, At Close, and After Incidents.',
    readingTimeMinutes: 12,
    statutoryBasis: 'Statutory Due Diligence Standards & Best-Practice Compliance',
    sections: [
      {
        title: 'Phase 1: Before Doors Open (Pre-Shift Briefing)',
        content: [
          'Before unlocking the doors, the shift manager / DPS must carry out the pre-flight safety check:',
          '• Check Premises Licence Part B (Summary) is visibly displayed.',
          '• Inspect all fire exit doors: unlock padlocks, clear fire escapes, ensure panic bolts operate smoothly.',
          '• Verify CCTV operation: cameras recording, timestamps accurate, 31-day minimum storage operational.',
          '• Brief team on who is the designated Personal Licence Holder on duty.',
          '• Verify all staff have signed the Authorisation to Sell register.',
          '• Confirm stocks of Challenge 25 refusal forms and UV counterfeit-detector pens are ready.'
        ]
      },
      {
        title: 'Phase 2: At Entry & Queue Management',
        content: [
          '• Check SIA door supervisor badges and record badge numbers in the Door Register.',
          '• Apply venue entry policy: conduct age verification before patrons reach the bar.',
          '• Use clickers to maintain an accurate running count of venue occupancy.',
          '• Keep external queues orderly, quiet, and separated from neighbouring residences.'
        ]
      },
      {
        title: 'Phase 3: During Active Service',
        content: [
          '• Continually observe patrons at the bar and floor for early indicators of intoxication.',
          '• Enforce specified smaller measures: 125 ml wine, 1/2 pint beer, 25/35 ml spirits.',
          '• Offer free tap water readily without obstruction.',
          '• Maintain vigilance against drink unattendedness and spiking.',
          '• Immediately record any refusals in the logbook.'
        ]
      },
      {
        title: 'Phase 4: At Close & Dispersal',
        content: [
          '• Announce "Last Orders" and stop alcohol sales precisely at the licensable terminal hour.',
          '• Turn up house lighting gradually and lower background music volume (wind-down period).',
          '• Supervise customer dispersal: encourage quiet departures to protect the Prevention of Public Nuisance objective.',
          '• Clear external areas of empty glasses, bottles, and litter.'
        ]
      },
      {
        title: 'Phase 5: After Incidents & Audit Review',
        content: [
          '• Complete detailed contemporaneous statements in the Incident Log: include date, exact time, staff involved, description of persons, police CAD number if called.',
          '• Secure and burn CCTV footage to a persistent file/USB if an altercation occurred.',
          '• Review weekly refusal patterns with the DPS to identify training gaps.'
        ]
      }
    ],
    venueScenario: {
      title: 'Private Hire Karaoke Booking Overrun',
      situation: 'A corporate group rents a private karaoke room for an executive retirement bash. At 11:45 PM (the venue’s licensed alcohol cutoff), the party organizer offers the shift supervisor £200 cash to keep serving tequila shots for one more hour.',
      dilemma: 'The organizer insists: "It is a private booking behind closed doors, no public are here, so licensing laws do not apply!"',
      correctAction: 'Decline the cash and stop alcohol sales at 11:45 PM promptly. Offer non-alcoholic beverages and soft drinks until the 30-minute drinking-up / dispersal window closes.',
      rationale: 'Licensing hours apply to the physical premises, regardless of whether a private booking or corporate hire is present. Serving alcohol past permitted hours is an offence under Section 136.',
      commonMistake: 'Believing private hire or VIP events can bypass premises licence hours without a valid TEN.'
    },
    checklistItems: [
      'Conduct the 5-point Pre-Doors walk: exits, CCTV, licence display, staff authorisations, refusals log',
      'Ensure SIA door supervisor logs are filled out at the start and end of every shift',
      'Commence gradual lighting and music wind-down 30 minutes before terminal closing time',
      'Record all refusals, ejections, and first-aid interventions contemporaneously in the logbook',
      'Never permit private bookings to override statutory hours without an authorized TEN'
    ],
    quiz: [
      {
        id: 'q8-1',
        question: 'Does hiring a venue for a private corporate function exempt the bar from licensed terminal hours?',
        options: [
          { key: 'A', text: 'Yes, private parties are totally exempt from licensing laws' },
          { key: 'B', text: 'No, premises licence conditions and hours apply equally to private bookings' },
          { key: 'C', text: 'Only if the organiser pays a private corkage fee' },
          { key: 'D', text: 'Only if all guests work for the same employer' }
        ],
        answer: 'B',
        explanation: 'The Licensing Act 2003 applies to all licensable activities on the premises, regardless of whether the event is open to the public or a private hire.',
        legalBasis: 'Licensing Act 2003, s. 1 & s. 136'
      },
      {
        id: 'q8-2',
        question: 'When should an incident or refusal entry ideally be recorded into the venue logbook?',
        options: [
          { key: 'A', text: 'At the end of the month before payroll' },
          { key: 'B', text: 'Contemporaneously (as soon as practically possible after the occurrence)' },
          { key: 'C', text: 'Only if the police make a formal written visit' },
          { key: 'D', text: 'Never, to avoid creating paperwork' }
        ],
        answer: 'B',
        explanation: 'Contemporaneous recording ensures fresh recollection of details, times, and descriptions, providing maximum evidentiary value.',
        legalBasis: 'Due Diligence Best Practice Standards'
      },
      {
        id: 'q8-3',
        question: 'What is the purpose of a 30-minute "wind-down period" before final closing?',
        options: [
          { key: 'A', text: 'To sell remaining draft beer at half price' },
          { key: 'B', text: 'To assist orderly dispersal, reduce intoxication levels, and minimize late-night noise' },
          { key: 'C', text: 'To allow staff to drink behind the bar' },
          { key: 'D', text: 'To conduct a fire drill with patrons present' }
        ],
        answer: 'B',
        explanation: 'A structured wind-down with softer music, increased lighting, and water availability promotes calm customer dispersal and protects the public nuisance objective.',
        legalBasis: 'Home Office Guidance on Dispersal Protocols'
      }
    ]
  }
];
