import Nav from "../components/Navber/Nav";

const CompliancePage = () => {
  return (
    <div>
      <Nav isVisible={true} />
      <div className="mt-28">
        <h1 className="text-5xl font-bold uppercase container mx-auto text-[#4e589a] my-1 pt-6">Compliance</h1>
        <div className="bg-green-300">
          <p className="container mx-auto py-10 text-6xl tracking-widers gruppo-regular">
            Stylorium Sourcing Ltd uses the Plan, Do, Act, and Check management method for compliance, which allows for
            efficiency and productivity.
          </p>
        </div>
        <div className="container mx-auto my-5">
          <img className="mx-auto" src="https://i.postimg.cc/L84yy2rQ/Complience.png" alt="Compliance Flow" />
        </div>

        {/* Section Container */}
        <div className="container mx-auto max-w-6xl mt-10">
          {/* PLAN | DO */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* PLAN */}
            <div className="text-center p-6 bg-white rounded-lg">
              <img
                src="https://i.postimg.cc/NFwDRc64/image.png"
                alt="Plan Icon"
                className="w-44 h-44 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-4">1. PLAN</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left mx-auto max-w-xs">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Yearly & monthly audit schedule.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Developing a unique audit protocol & checklist.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Web base monitoring & verification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Training schedule for capacity building of factories.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Setting a target.</span>
                </li>
              </ul>
            </div>

            {/* DO */}
            <div className="text-center p-6 bg-white rounded-lg">
              <img
                src="https://i.postimg.cc/BbcggVNG/image.png"
                alt="Do Icon"
                className="w-44 h-44 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-4">2. DO</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left mx-auto max-w-xs">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Assessment & creating report.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Development visit & CAP follow-up.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Training on COC, Local law & certification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Website follow-up and desktop verification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>SWOT analysis and special care of vulnerable factories and issues.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ACT | CHECK */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* ACT */}
            <div className="text-center p-6 bg-white rounded-lg">
              <img
                src="https://i.postimg.cc/59wnbXJk/image.png"
                alt="Act Icon"
                className="w-44 h-44 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-4">3. ACT</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left mx-auto max-w-xs">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Development visit & proper guidance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Preparing the TNA & measuring progress.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Knowledge, document and experience sharing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Making sure of the fulfillment of requirement.</span>
                </li>
              </ul>
            </div>

            {/* CHECK */}
            <div className="text-center p-6 bg-white rounded-lg">
              <img
                src="https://i.postimg.cc/yNgy5dnj/image.png"
                alt="Check Icon"
                className="w-44 h-44 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-4">4. CHECK</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left mx-auto max-w-xs">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Follow-up audit.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Desktop verification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Surprise visit.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Route-cause analysis.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Compliance Goals */}
          <div className="text-center p-6 w-full rounded-lg">
            <h3 className="text-xl font-bold mb-4">COMPLIANCE GOALS</h3>
            <ul className="text-gray-600 space-y-2 text-left mx-auto text-lg">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✔</span>
                <span>Accelerating the business by creating a successful compliance program.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✔</span>
                <span>
                  Minimizing business risk through safe, secure, and environmental-friendly workplaces where the goods
                  are produced.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✔</span>
                <span>Increasing business reputation by fulfilling the customers&apos;s requirements.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
