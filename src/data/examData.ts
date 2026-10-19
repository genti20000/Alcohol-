import { ExamQuestion } from '../types/licensing';

export const EXAM_PASS_THRESHOLD = 28; // 28 out of 40 = 70%
export const EXAM_TOTAL_QUESTIONS = 40;
export const EXAM_TIME_LIMIT_MINUTES = 45;

export const PRACTICE_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "How many statutory licensing objectives are there?",
    options: [
      { key: 'A', text: "Two" },
      { key: 'B', text: "Three" },
      { key: 'C', text: "Four" },
      { key: 'D', text: "Five" }
    ],
    answer: 'C',
    explanation: "The Licensing Act 2003 sets out four statutory licensing objectives: Prevention of crime and disorder, Public safety, Prevention of public nuisance, and Protection of children from harm.",
    category: 'Objectives'
  },
  {
    id: 2,
    question: "Which is a licensing objective?",
    options: [
      { key: 'A', text: "Maximising alcohol revenue" },
      { key: 'B', text: "Prevention of public nuisance" },
      { key: 'C', text: "Reducing all business rates" },
      { key: 'D', text: "Promoting tourism" }
    ],
    answer: 'B',
    explanation: "Preventing public nuisance is one of the four statutory objectives. Commercial aims like tourism or revenue are not licensing objectives.",
    category: 'Objectives'
  },
  {
    id: 3,
    question: "Which is normally a licensable activity?",
    options: [
      { key: 'A', text: "Selling packaged alcohol by retail" },
      { key: 'B', text: "Selling soft drinks at 3pm" },
      { key: 'C', text: "Serving cold sandwiches" },
      { key: 'D', text: "Providing Wi-Fi" }
    ],
    answer: 'A',
    explanation: "Retail alcohol sale is a core licensable activity under the Licensing Act 2003. Daytime soft drinks and cold food are not licensable.",
    category: 'Objectives'
  },
  {
    id: 4,
    question: "Who usually grants a premises licence?",
    options: [
      { key: 'A', text: "The venue bartender" },
      { key: 'B', text: "The local licensing authority" },
      { key: 'C', text: "The landlord alone" },
      { key: 'D', text: "An awarding body" }
    ],
    answer: 'B',
    explanation: "The local licensing authority (usually the district or unitary borough council) is the statutory body empowered to grant, condition, and review premises licences.",
    category: 'Premises & DPS'
  },
  {
    id: 5,
    question: "A personal licence alone allows sales of alcohol:",
    options: [
      { key: 'A', text: "Anywhere at any hour" },
      { key: 'B', text: "Only when required premises authority exists" },
      { key: 'C', text: "Without following any conditions" },
      { key: 'D', text: "Only inside the holder's home" }
    ],
    answer: 'B',
    explanation: "A personal licence does not itself license a location. Retail sales of alcohol can only occur where valid premises authorisation (a premises licence, club certificate, or TEN) is in force.",
    category: 'Personal Licence'
  },
  {
    id: 6,
    question: "What does DPS stand for?",
    options: [
      { key: 'A', text: "Daily Police Supervisor" },
      { key: 'B', text: "Designated Premises Supervisor" },
      { key: 'C', text: "Director of Public Safety" },
      { key: 'D', text: "Designated Promotions Seller" }
    ],
    answer: 'B',
    explanation: "DPS stands for Designated Premises Supervisor, the named individual in day-to-day operational control who holds a valid personal licence.",
    category: 'Premises & DPS'
  },
  {
    id: 7,
    question: "How many DPSs can normally be named on a premises licence at one time?",
    options: [
      { key: 'A', text: "One" },
      { key: 'B', text: "Two" },
      { key: 'C', text: "Five" },
      { key: 'D', text: "Unlimited" }
    ],
    answer: 'A',
    explanation: "Under the Licensing Act 2003, a premises licence can only specify a single individual as the Designated Premises Supervisor at any one time.",
    category: 'Premises & DPS'
  },
  {
    id: 8,
    question: "Must the DPS personally pour every alcoholic drink?",
    options: [
      { key: 'A', text: "Yes" },
      { key: 'B', text: "No, suitably authorised staff can sell" },
      { key: 'C', text: "Only at weekends" },
      { key: 'D', text: "Only if wine is sold" }
    ],
    answer: 'B',
    explanation: "No. A personal licence holder or DPS can authorise other staff members to dispense and sell alcohol under their supervisory responsibility.",
    category: 'Premises & DPS'
  },
  {
    id: 9,
    question: "Is written authorisation to sell alcohol expressly required by the Licensing Act 2003?",
    options: [
      { key: 'A', text: "Always" },
      { key: 'B', text: "Never possible" },
      { key: 'C', text: "Not expressly required, but strongly recommended" },
      { key: 'D', text: "Only for table service" }
    ],
    answer: 'C',
    explanation: "The current Section 182 statutory guidance confirms that while the Act does not mandate written authorisation, it is strongly recommended as best operational practice to evidence due diligence.",
    category: 'Premises & DPS'
  },
  {
    id: 10,
    question: "The normal minimum age to apply for a personal licence is:",
    options: [
      { key: 'A', text: "16" },
      { key: 'B', text: "17" },
      { key: 'C', text: "18" },
      { key: 'D', text: "21" }
    ],
    answer: 'C',
    explanation: "Under statutory criteria, an applicant for a personal licence must be at least 18 years of age.",
    category: 'Personal Licence'
  },
  {
    id: 11,
    question: "Passing APLH on its own makes a learner a personal licence holder:",
    options: [
      { key: 'A', text: "True" },
      { key: 'B', text: "False" },
      { key: 'C', text: "Only on weekends" },
      { key: 'D', text: "Only on licensed premises" }
    ],
    answer: 'B',
    explanation: "False. The APLH is an accredited educational qualification certificate. You must submit a formal application along with DBS disclosures and photos to the local council licensing authority, who issues the licence.",
    category: 'Personal Licence'
  },
  {
    id: 12,
    question: "An applicant normally needs which qualification?",
    options: [
      { key: 'A', text: "An approved licensing qualification" },
      { key: 'B', text: "A driving test" },
      { key: 'C', text: "A security badge" },
      { key: 'D', text: "A hygiene score" }
    ],
    answer: 'A',
    explanation: "Applicants must hold an accredited government-approved licensing qualification (such as the Level 2 Award for Personal Licence Holders / APLH).",
    category: 'Personal Licence'
  },
  {
    id: 13,
    question: "Personal licences currently:",
    options: [
      { key: 'A', text: "Require annual renewal" },
      { key: 'B', text: "Last 12 months" },
      { key: 'C', text: "Generally do not require periodic renewal" },
      { key: 'D', text: "Automatically cover every venue" }
    ],
    answer: 'C',
    explanation: "The 10-year expiry and periodic renewal requirement was abolished in 2015 by the Deregulation Act. A personal licence now continues indefinitely unless surrendered, suspended, or revoked.",
    category: 'Personal Licence'
  },
  {
    id: 14,
    question: "For retail alcohol sales, customers normally must be at least:",
    options: [
      { key: 'A', text: "16" },
      { key: 'B', text: "17" },
      { key: 'C', text: "18" },
      { key: 'D', text: "20" }
    ],
    answer: 'C',
    explanation: "It is an offence to sell alcohol to anyone under the age of 18 in retail or hospitality premises.",
    category: 'Age & Verification'
  },
  {
    id: 15,
    question: "Challenge 25 is:",
    options: [
      { key: 'A', text: "The statutory legal minimum for any alcohol sale" },
      { key: 'B', text: "A commonly used venue age-checking policy" },
      { key: 'C', text: "A licence fee" },
      { key: 'D', text: "A type of TEN" }
    ],
    answer: 'B',
    explanation: "Challenge 25 is an industry-standard best-practice venue policy requiring staff to verify ID for anyone who looks under 25. The statutory legal purchase age remains 18.",
    category: 'Age & Verification'
  },
  {
    id: 16,
    question: "A qualifying physical ID should include:",
    options: [
      { key: 'A', text: "Name only" },
      { key: 'B', text: "Photo and birth date plus recognised security feature" },
      { key: 'C', text: "Home address only" },
      { key: 'D', text: "School uniform" }
    ],
    answer: 'B',
    explanation: "Under the mandatory conditions, compliant physical proof of age must bear the person's photograph, date of birth, and either a holographic mark or an ultraviolet security feature.",
    category: 'Age & Verification'
  },
  {
    id: 17,
    question: "A digital ID photo shown on a phone, by itself, is:",
    options: [
      { key: 'A', text: "Automatically sufficient" },
      { key: 'B', text: "An accredited APLH certificate" },
      { key: 'C', text: "Not a compliant registered DVS check" },
      { key: 'D', text: "Mandatory for all venues" }
    ],
    answer: 'C',
    explanation: "A photo or screenshot of a passport or driving licence on a smartphone is easily altered and is NOT a certified Digital Verification Services (DVS) identity check.",
    category: 'Age & Verification'
  },
  {
    id: 18,
    question: "Since September 2026, qualifying digital age verification is:",
    options: [
      { key: 'A', text: "Mandatory for all premises" },
      { key: 'B', text: "An optional route subject to safeguards" },
      { key: 'C', text: "Forbidden" },
      { key: 'D', text: "Only for nightclubs" }
    ],
    answer: 'B',
    explanation: "Under Statutory Instrument 2026/1022, licensed venues have the legal option to accept certified Digital Verification Services (DVS) apps, subject to meeting technical and security safeguards.",
    category: 'Age & Verification'
  },
  {
    id: 19,
    question: "Can a 17-year-old buy beer in a pub when with a parent?",
    options: [
      { key: 'A', text: "Yes in all circumstances" },
      { key: 'B', text: "No, purchase is still prohibited" },
      { key: 'C', text: "Yes after 10pm" },
      { key: 'D', text: "Yes if the parent signs a waiver" }
    ],
    answer: 'B',
    explanation: "No. A person under 18 can never legally purchase alcohol. The meal exception only permits consumption when purchased by an adult.",
    category: 'Age & Verification'
  },
  {
    id: 20,
    question: "Which circumstance can permit a 16- or 17-year-old to consume beer?",
    options: [
      { key: 'A', text: "Any private party" },
      { key: 'B', text: "With a table meal accompanied by an adult" },
      { key: 'C', text: "At any restaurant after midnight" },
      { key: 'D', text: "With a fake ID" }
    ],
    answer: 'B',
    explanation: "A 16- or 17-year-old may consume beer, wine, or cider if having a substantive table meal with an adult who purchased the beverage. Spirits are strictly forbidden.",
    category: 'Age & Verification'
  },
  {
    id: 21,
    question: "What should staff do when unsure if a customer is old enough?",
    options: [
      { key: 'A', text: "Ignore it" },
      { key: 'B', text: "Serve quickly" },
      { key: 'C', text: "Apply ID policy and refuse without sufficient proof" },
      { key: 'D', text: "Ask another guest to vouch" }
    ],
    answer: 'C',
    explanation: "Staff must strictly follow the venue's age verification policy, request valid proof of age, and refuse service if proof is inadequate.",
    category: 'Age & Verification'
  },
  {
    id: 22,
    question: "Free potable tap water should generally be:",
    options: [
      { key: 'A', text: "Never supplied" },
      { key: 'B', text: "Available on request where reasonably available" },
      { key: 'C', text: "Only available with a food purchase" },
      { key: 'D', text: "Only served after midnight" }
    ],
    answer: 'B',
    explanation: "Under the mandatory licensing conditions, free potable tap water must be provided to customers on request where it is reasonably available on the premises.",
    category: 'Mandatory Conditions'
  },
  {
    id: 23,
    question: "What is the specified small measure for still wine by the glass?",
    options: [
      { key: 'A', text: "75 ml" },
      { key: 'B', text: "100 ml" },
      { key: 'C', text: "125 ml" },
      { key: 'D', text: "300 ml" }
    ],
    answer: 'C',
    explanation: "The mandatory licensing condition mandates that if still wine is sold by the glass, customers must be offered and informed of the availability of a 125 ml measure.",
    category: 'Mandatory Conditions'
  },
  {
    id: 24,
    question: "Which is a specified small beer/cider measure?",
    options: [
      { key: 'A', text: "1/4 pint" },
      { key: 'B', text: "1/2 pint" },
      { key: 'C', text: "2 pints" },
      { key: 'D', text: "1 litre" }
    ],
    answer: 'B',
    explanation: "The mandatory condition requires half a pint (1/2 pint) to be offered and made available for draft beer and cider.",
    category: 'Mandatory Conditions'
  },
  {
    id: 25,
    question: "For gin, rum, vodka and whisky the small option includes:",
    options: [
      { key: 'A', text: "25ml or 35ml as applicable" },
      { key: 'B', text: "Only 100ml" },
      { key: 'C', text: "One whole bottle" },
      { key: 'D', text: "Unlimited pours" }
    ],
    answer: 'A',
    explanation: "Venues must choose whether their single spirit measure is 25 ml or 35 ml and ensure that single measure is available and notified to customers.",
    category: 'Mandatory Conditions'
  },
  {
    id: 26,
    question: "Irresponsible promotions are:",
    options: [
      { key: 'A', text: "Always required" },
      { key: 'B', text: "Restricted by mandatory conditions" },
      { key: 'C', text: "Only restricted for beer" },
      { key: 'D', text: "Excluded from all licensing rules" }
    ],
    answer: 'B',
    explanation: "Mandatory condition rules prohibit drinks promotions that encourage excessive or irresponsible consumption (e.g. drinking games, large quantities for flat entry fees).",
    category: 'Mandatory Conditions'
  },
  {
    id: 27,
    question: "Selling alcohol below the permitted price based on duty and VAT is:",
    options: [
      { key: 'A', text: "Required" },
      { key: 'B', text: "Prohibited" },
      { key: 'C', text: "Allowed whenever busy" },
      { key: 'D', text: "Required for private hire" }
    ],
    answer: 'B',
    explanation: "It is strictly unlawful under mandatory licensing conditions to retail alcohol at a price lower than the applicable duty plus VAT.",
    category: 'Mandatory Conditions'
  },
  {
    id: 28,
    question: "Knowingly selling alcohol to someone who is drunk is:",
    options: [
      { key: 'A', text: "Lawful" },
      { key: 'B', text: "An alcohol-related offence" },
      { key: 'C', text: "Compulsory" },
      { key: 'D', text: "Only unlawful at 2 am" }
    ],
    answer: 'B',
    explanation: "Under Section 141 of the Licensing Act 2003, it is a criminal offence to knowingly sell or attempt to sell alcohol to a person who is drunk.",
    category: 'Offences & Intoxication'
  },
  {
    id: 29,
    question: "A guest list removes the need for legal age checks:",
    options: [
      { key: 'A', text: "Yes" },
      { key: 'B', text: "No" },
      { key: 'C', text: "For VIP bookings only" },
      { key: 'D', text: "For birthdays only" }
    ],
    answer: 'B',
    explanation: "Guest lists, VIP reservations, or table bookings do not exempt a venue from statutory age verification and licensing laws.",
    category: 'Offences & Intoxication'
  },
  {
    id: 30,
    question: "A key duty when a guest becomes aggressive is to:",
    options: [
      { key: 'A', text: "Continue shots service" },
      { key: 'B', text: "Ignore warning signs" },
      { key: 'C', text: "De-escalate and protect safety" },
      { key: 'D', text: "Lock all emergency exits" }
    ],
    answer: 'C',
    explanation: "Staff have a legal duty to protect public safety and prevent disorder: refuse further alcohol, de-escalate calmly, summon support/security, and maintain records.",
    category: 'Offences & Intoxication'
  },
  {
    id: 31,
    question: "A TEN event can have how many people at a time including staff?",
    options: [
      { key: 'A', text: "Fewer than 500" },
      { key: 'B', text: "700" },
      { key: 'C', text: "1000" },
      { key: 'D', text: "Any number" }
    ],
    answer: 'A',
    explanation: "The statutory capacity limit for a Temporary Event Notice (TEN) is fewer than 500 people on the premises at any one time, including all staff, performers, and security.",
    category: 'TENs & Events'
  },
  {
    id: 32,
    question: "The maximum duration of a single TEN event is:",
    options: [
      { key: 'A', text: "12 hours" },
      { key: 'B', text: "48 hours" },
      { key: 'C', text: "168 hours" },
      { key: 'D', text: "30 days" }
    ],
    answer: 'C',
    explanation: "Under the Licensing Act 2003, an individual Temporary Event Notice may cover an event lasting at most 168 hours (7 continuous days).",
    category: 'TENs & Events'
  },
  {
    id: 33,
    question: "A personal licence holder can generally give up to how many TENs per year?",
    options: [
      { key: 'A', text: "5" },
      { key: 'B', text: "15" },
      { key: 'C', text: "50" },
      { key: 'D', text: "100" }
    ],
    answer: 'C',
    explanation: "A personal licence holder can give up to 50 Temporary Event Notices in a calendar year (of which up to 10 can be late TENs).",
    category: 'TENs & Events'
  },
  {
    id: 34,
    question: "A person without a personal licence can generally give up to how many TENs per year?",
    options: [
      { key: 'A', text: "2" },
      { key: 'B', text: "5" },
      { key: 'C', text: "20" },
      { key: 'D', text: "50" }
    ],
    answer: 'B',
    explanation: "A non-personal licence holder can give at most 5 Temporary Event Notices in a calendar year (of which up to 2 can be late TENs).",
    category: 'TENs & Events'
  },
  {
    id: 35,
    question: "A premises can generally be the subject of up to how many TENs per year?",
    options: [
      { key: 'A', text: "5" },
      { key: 'B', text: "10" },
      { key: 'C', text: "15" },
      { key: 'D', text: "60" }
    ],
    answer: 'C',
    explanation: "A single location/premises can generally be the subject of up to 15 TENs in a calendar year, subject to an overall cap of 21 aggregate days.",
    category: 'TENs & Events'
  },
  {
    id: 36,
    question: "What is generally the deadline for a standard TEN?",
    options: [
      { key: 'A', text: "1 hour" },
      { key: 'B', text: "At least 10 clear working days" },
      { key: 'C', text: "Whenever doors open" },
      { key: 'D', text: "After the event" }
    ],
    answer: 'B',
    explanation: "A standard TEN must be served on the licensing authority and police/environmental health at least 10 clear working days before the first day of the event.",
    category: 'TENs & Events'
  },
  {
    id: 37,
    question: "A private members' label automatically exempts a bar from ordinary licensing?",
    options: [
      { key: 'A', text: "Yes" },
      { key: 'B', text: "No" },
      { key: 'C', text: "Only in Soho" },
      { key: 'D', text: "Only on Saturday" }
    ],
    answer: 'B',
    explanation: "Calling a commercial venue a 'members club' does not confer legal exemption. A genuine Qualifying Club must hold a Club Premises Certificate and meet strict statutory non-profit rules.",
    category: 'TENs & Events'
  },
  {
    id: 38,
    question: "The DPS must legally remain inside the venue every minute alcohol is sold:",
    options: [
      { key: 'A', text: "Yes" },
      { key: 'B', text: "No" },
      { key: 'C', text: "Only if there are fewer than 20 people" },
      { key: 'D', text: "Only when cocktails are served" }
    ],
    answer: 'B',
    explanation: "The DPS does not have to be physically present at all times, provided that day-to-day management is maintained and sales are properly authorised by a personal licence holder.",
    category: 'Shift Compliance'
  },
  {
    id: 39,
    question: "A useful good-practice record after refusing alcohol service is:",
    options: [
      { key: 'A', text: "A refusal/incident log" },
      { key: 'B', text: "A cocktail photo" },
      { key: 'C', text: "A staff playlist" },
      { key: 'D', text: "A booking advert" }
    ],
    answer: 'A',
    explanation: "Contemporaneous entries in a Refusals and Incident Log provide essential evidence of due diligence and compliance for police and licensing officers.",
    category: 'Shift Compliance'
  },
  {
    id: 40,
    question: "Which source should staff check for local venue-specific conditions?",
    options: [
      { key: 'A', text: "A competitor Instagram post" },
      { key: 'B', text: "The actual premises licence and approved plan" },
      { key: 'C', text: "A customer review" },
      { key: 'D', text: "The menu alone" }
    ],
    answer: 'B',
    explanation: "The actual Premises Licence (Annex 2 and Annex 3 conditions) and the council-approved architectural premises plan specify all enforceable local venue restrictions.",
    category: 'Shift Compliance'
  }
];
