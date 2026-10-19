import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, XCircle, AlertTriangle, ArrowRight, RotateCcw, Scale, Users } from 'lucide-react';

interface ScenarioCase {
  id: string;
  title: string;
  category: string;
  context: string;
  customerStatement: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
    isCorrect: boolean;
    consequence: string;
    legalRationale: string;
  }[];
}

const SCENARIO_CASES: ScenarioCase[] = [
  {
    id: 'sc-1',
    title: 'The Smartphone Passport Photo at a Booked Booth',
    category: 'Age Verification & Digital ID',
    context: 'A customer who looks roughly 19 approaches the bar ordering four double gin and tonics. When you request proof of age under your venue’s Challenge 25 policy, they open their smartphone photo gallery and hold up a clear photo of an Italian passport.',
    customerStatement: '"Look, here is my passport! The date of birth clearly shows I turned 18 two months ago. I left my physical passport locked in my hotel safe so I wouldn’t lose it on a night out."',
    options: [
      {
        key: 'A',
        text: 'Accept the photo since the passport picture and date of birth match their facial appearance.',
        isCorrect: false,
        consequence: 'Failed inspection! Phone photos are easily edited with photo software and do not contain physical or certified cryptographic security features.',
        legalRationale: 'Under mandatory conditions and SI 2026/1022, a phone photo is NOT an authorized proof of age or certified DVS check. Accepting it constitutes serving without valid proof.'
      },
      {
        key: 'B',
        text: 'Politely refuse alcohol service, explain that only physical photo ID with holographic/UV marks or certified DVS apps can be accepted, and offer soft drinks.',
        isCorrect: true,
        consequence: 'Compliant due diligence! You protected the venue from prosecution and upheld the Protection of Children from Harm objective.',
        legalRationale: 'Mandatory proof-of-age conditions require physical documents to have a holographic or UV mark. Photos on phones lack these features.'
      },
      {
        key: 'C',
        text: 'Serve only single measures instead of double spirits as a risk compromise.',
        isCorrect: false,
        consequence: 'Direct violation! Selling any quantity of alcohol to an unverified customer who appears under age breaches licensing conditions.',
        legalRationale: 'There is no volume compromise for age verification. Underage sales carry unlimited fines and potential licence revocation.'
      },
      {
        key: 'D',
        text: 'Ask their friend at the booth to vouch in writing that they are 18.',
        isCorrect: false,
        consequence: 'Invalid! Third-party verbal or written vouching has zero legal validity under the Licensing Act 2003.',
        legalRationale: 'Age verification must be verified directly through approved statutory identification media.'
      }
    ]
  },
  {
    id: 'sc-2',
    title: 'The Intoxicated Regular Demanding "One Last Shot"',
    category: 'Intoxication & Section 141',
    context: 'At 11:20 PM, a well-known regular customer approaches the bar counter. Their speech is heavily slurred, their eyes are glassy, and they stumble slightly against a bar stool while asking for a double tequila.',
    customerStatement: '"Come on mate, you know me! I’ve been drinking here for five years. Just one quick tequila shot before I call an Uber home."',
    options: [
      {
        key: 'A',
        text: 'Serve the shot because they are an established regular customer and promised they are leaving immediately.',
        isCorrect: false,
        consequence: 'Criminal offence committed! Serving someone who is intoxicated violates Section 141 of the Licensing Act 2003.',
        legalRationale: 'Section 141 makes it an offence to knowingly sell or allow the sale of alcohol to someone who is drunk. Regular customer status provides no legal exemption.'
      },
      {
        key: 'B',
        text: 'Quietly pour half water and half tequila without telling the customer.',
        isCorrect: false,
        consequence: 'Multiple offences! Diluting spirits without disclosure violates Weights and Measures and Food Standards legislation, while still serving alcohol to a drunk person.',
        legalRationale: 'Adulterating or tampering with spirit measures is unlawful and fails to resolve the intoxication duty.'
      },
      {
        key: 'C',
        text: 'Firmly and calmly refuse further alcohol service, provide a complimentary glass of tap water, and notify door security and management.',
        isCorrect: true,
        consequence: 'Exemplary compliance! You prevented potential public disorder, ensured customer safety, and followed statutory guidelines.',
        legalRationale: 'Refusing intoxicated patrons is mandatory under Section 141 and supports the Prevention of Crime and Disorder and Public Safety objectives.'
      },
      {
        key: 'D',
        text: 'Tell them they can have the shot only if their friend pays for it.',
        isCorrect: false,
        consequence: 'Facilitating proxy offence! Section 142 makes it an offence to obtain alcohol for a drunk person.',
        legalRationale: 'Permitting another patron to purchase alcohol for an intoxicated individual is a secondary criminal offence.'
      }
    ]
  },
  {
    id: 'sc-3',
    title: 'Promoter Submitting TEN for 520 Attendees',
    category: 'Temporary Event Notices (TENs)',
    context: 'An external event organiser approaches your venue to stage an all-night charity fundraiser under a Temporary Event Notice (TEN). The promoter submits a flyer stating 480 tickets sold, plus expects 15 security staff, 15 bar staff, 6 DJs, and 10 VIP guests.',
    customerStatement: '"Ticket sales are only 480, which is below the 500 limit. The staff and DJs are working, not attending as guests, so they don’t count towards the TEN limit."',
    options: [
      {
        key: 'A',
        text: 'Agree with the promoter and proceed with the event since ticket sales are under 500.',
        isCorrect: false,
        consequence: 'Severe breach! If inspected by police, the event will be shut down and you face unlimited fines for unauthorized licensable activity.',
        legalRationale: 'The statutory capacity limit for a TEN is fewer than 500 people on site at any one time, explicitly including all workers, performers, security, and staff.'
      },
      {
        key: 'B',
        text: 'Reject the plan or mandate that total headcount on site (tickets + staff + performers) is capped at 499 maximum at all times.',
        isCorrect: true,
        consequence: 'Lawful oversight! You prevented the TEN from being rendered void and protected the venue from prosecution under Section 136.',
        legalRationale: 'Under Section 99 of the Licensing Act 2003, the total number of people on the premises must remain strictly below 500.'
      },
      {
        key: 'C',
        text: 'Submit two TENs for the same room on the same evening to double the capacity to 1,000.',
        isCorrect: false,
        consequence: 'Illegal loophole attempt! The licensing authority will refuse and invalidate overlapping notices for identical premises.',
        legalRationale: 'A premises cannot artificially multiply capacity by submitting duplicate TENs for identical timeframes and spaces.'
      },
      {
        key: 'D',
        text: 'Allow the extra people as long as they stay in the outdoor smoking alley.',
        isCorrect: false,
        consequence: 'Failed compliance! The licensed boundary for the TEN encompasses the outdoor smoking area.',
        legalRationale: 'All persons within the curtilage and boundary of the event premises count towards the 499 capacity cap.'
      }
    ]
  },
  {
    id: 'sc-4',
    title: 'The 17-Year-Old Table Meal Order',
    category: 'Table Meal Exception (s. 150)',
    context: 'A family of three (mother, father, and their 17-year-old son) sit down for dinner in your gastro-pub restaurant. The father orders a roast beef dinner for all three, plus two pints of lager and a pint of draft cider for his son.',
    customerStatement: '"My son is having the roast beef with us. Under the law, 16- and 17-year-olds are allowed to drink beer or cider with a table meal when with their parents, right?"',
    options: [
      {
        key: 'A',
        text: 'Refuse completely, stating that no one under 18 may ever drink any alcohol on licensed premises under any circumstances.',
        isCorrect: false,
        consequence: 'Legally inaccurate! While venues may enforce stricter private policies, Section 150 specifically permits this narrow exception.',
        legalRationale: 'The Licensing Act 2003 provides a statutory exception under Section 150 for beer, wine, or cider consumed with a table meal accompanied by an adult.'
      },
      {
        key: 'B',
        text: 'Allow the 17-year-old to consume the cider with the meal, provided the father purchased the beverage, while confirming venue policy permits the statutory exception.',
        isCorrect: true,
        consequence: 'Flawless statutory knowledge! The meal, parental purchase, and cider meet the Section 150 criteria exactly.',
        legalRationale: 'Section 150 permits a 16- or 17-year-old to consume beer, wine, or cider with a table meal if purchased by an adult (18+).'
      },
      {
        key: 'C',
        text: 'Permit the cider, and also offer the son a complimentary tequila shot for dessert.',
        isCorrect: false,
        consequence: 'Criminal offence! Spirits are strictly prohibited for under-18s under all circumstances, even with meals.',
        legalRationale: 'The table meal exception strictly excludes spirits, fortified wines, and alcopops.'
      },
      {
        key: 'D',
        text: 'Allow the 17-year-old to come to the bar counter and pay for the cider with his own pocket money.',
        isCorrect: false,
        consequence: 'Underage purchase offence! A minor cannot purchase alcohol under Section 149.',
        legalRationale: 'Under Section 149, an under-18 cannot buy alcohol. The exception only covers consumption of adult-purchased drinks.'
      }
    ]
  }
];

export const ScenarioSimulator: React.FC = () => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [revealedCases, setRevealedCases] = useState<Record<string, boolean>>({});

  const scenario = SCENARIO_CASES[activeScenarioIndex];
  const userChoice = selectedChoices[scenario.id];
  const isRevealed = revealedCases[scenario.id];

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isRevealed) return;
    setSelectedChoices((prev) => ({ ...prev, [scenario.id]: key }));
  };

  const handleReveal = () => {
    setRevealedCases((prev) => ({ ...prev, [scenario.id]: true }));
  };

  const handleReset = () => {
    setSelectedChoices((prev) => {
      const copy = { ...prev };
      delete copy[scenario.id];
      return copy;
    });
    setRevealedCases((prev) => {
      const copy = { ...prev };
      delete copy[scenario.id];
      return copy;
    });
  };

  const chosenOptionData = scenario.options.find((o) => o.key === userChoice);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code font-semibold text-amber-700 uppercase tracking-wider">
            <Scale className="w-4 h-4 inline" />
            <span>Interactive Venue Dilemma Simulator</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Real-World Shift Decision Training
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Test your legal reasoning on real-world situations faced by DPS and bar supervisors.
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
          {SCENARIO_CASES.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => setActiveScenarioIndex(idx)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                idx === activeScenarioIndex
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Case {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Scenario Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-mono-code font-bold text-slate-400">
                Case {activeScenarioIndex + 1} of {SCENARIO_CASES.length} · {scenario.category}
              </span>
              <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                Live Dilemma
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              {scenario.title}
            </h2>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed space-y-3">
              <p>{scenario.context}</p>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs italic text-slate-600">
                <span className="font-semibold text-slate-900 not-italic">Customer says: </span>
                {scenario.customerStatement}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                What is the lawful, compliant action?
              </div>

              {scenario.options.map((option) => {
                const isSelected = userChoice === option.key;
                let cardStyle = 'border-slate-200 hover:border-slate-300 bg-white text-slate-800';

                if (isSelected && !isRevealed) {
                  cardStyle = 'border-amber-500 bg-amber-50/70 text-slate-950 font-medium ring-1 ring-amber-500';
                }

                if (isRevealed) {
                  if (option.isCorrect) {
                    cardStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                  } else if (isSelected && !option.isCorrect) {
                    cardStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-400';
                  } else {
                    cardStyle = 'border-slate-100 bg-slate-50/40 text-slate-400';
                  }
                }

                return (
                  <button
                    key={option.key}
                    onClick={() => handleSelectOption(option.key)}
                    disabled={isRevealed}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${cardStyle}`}
                  >
                    <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center font-mono-code font-bold shrink-0 text-xs mt-0.5">
                      {option.key}
                    </div>
                    <div className="flex-1 leading-relaxed">
                      {option.text}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {!isRevealed ? (
                <button
                  onClick={handleReveal}
                  disabled={!userChoice}
                  className="py-2.5 px-5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Verify Action & Legal Rationale</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleReset}
                    className="py-2 px-4 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again</span>
                  </button>
                  {activeScenarioIndex < SCENARIO_CASES.length - 1 && (
                    <button
                      onClick={() => setActiveScenarioIndex((prev) => prev + 1)}
                      className="py-2 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg flex items-center gap-1.5"
                    >
                      <span>Next Case</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Feedback & Rationale */}
            {isRevealed && chosenOptionData && (
              <div className="space-y-3 pt-3 animate-in fade-in duration-200">
                <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
                  chosenOptionData.isCorrect
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50 border-rose-200 text-rose-950'
                }`}>
                  <div className="font-bold flex items-center gap-2 mb-1">
                    {chosenOptionData.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Lawful Decision Confirmed</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>Compliance Breach Incurred</span>
                      </>
                    )}
                  </div>
                  <p>{chosenOptionData.consequence}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-xs sm:text-sm space-y-1">
                  <div className="font-bold text-amber-400">Statutory Legal Analysis:</div>
                  <p>{chosenOptionData.legalRationale}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Info Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">
              The "Due Diligence" Standard
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In UK licensing law, a licensee accused of an offence can establish a statutory defense if they can prove they exercised all due diligence and took all reasonable precautions to avoid committing the offence.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div>• Contemporaneous logs</div>
              <div>• Documented staff training</div>
              <div>• Active refusal policies</div>
              <div>• Clear signage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
