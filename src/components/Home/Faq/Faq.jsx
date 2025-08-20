const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center  my-16 ">
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="md:text-2xl font-arvo  font-bold text-amber-700">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm text-center">
          {" "}
          Explore our most asked questions to get quick solutions, helpful tips,
          and essential guidance.
        </p>
      </div>
      <div>
        <div className="collapse collapse-arrow bg-base-300 border border-amber-50">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold md:text-xl text-gray-700">
            What is this website used for?
          </div>
          <div className="collapse-content text-sm pl-4">
            <p>
              This website allows users to create, share, and participate in
              surveys. It's ideal for collecting feedback, opinions, or research
              data.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-300 border border-amber-50">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold md:text-xl text-gray-700">
            Who can create a survey?
          </div>
          <div className="collapse-content text-sm ">
            <p>Anyone with an account can create and publish a survey.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-300 border border-amber-50">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold md:text-xl text-gray-700">
            How do I share my survey?
          </div>
          <div className="collapse-content text-sm">
            <p>
              After publishing, you’ll get a unique link to share via email,
              social media, or any platform of your choice.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-300 border border-amber-50">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold md:text-xl text-gray-700">
            Can I edit my survey after publishing?
          </div>
          <div className="collapse-content text-sm">
            <p>
              You can edit your survey as long as it hasn’t received any
              responses. Some fields can still be updated after submission
              begins.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-300 border border-amber-50">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold md:text-xl text-gray-700">
            How do I view survey results?
          </div>
          <div className="collapse-content text-sm">
            <p>
              You can view real-time results in your dashboard with both summary
              and detailed formats.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-300 border border-amber-50">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold md:text-xl text-gray-700">
            How long will my survey be available?
          </div>
          <div className="collapse-content text-sm">
            <p>
              Your survey will remain active until the deadline you set during
              creation. You can also unpublish it manually at any time.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-300 border border-amber-50">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold md:text-xl text-gray-700">
            Are there limitations on the number of questions or responses?
          </div>
          <div className="collapse-content text-sm">
            <p>
              Free users may have limits on the number of questions per survey
              and total responses. Upgrading to a premium plan unlocks higher
              limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
