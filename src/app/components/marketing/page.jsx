import React from "react";
import PageSections from "./page-sections/PageSections";
import Elements from "./elements/Elements";
import Feedbacks from "./feedback/Feedback";
import PageExamples from "./page-examples/PageExamples";
const Marketing = () => {
  return (
    <>
      {" "}
      <section id="product-marketing" className="scroll-mt-28">
        <h2 className="text-xl font-bold text-slate-900">Marketing</h2>
        <p className="mt-3 text-sm leading-7 text-slate-500">
          Heroes, feature sections, newsletter sign up forms — everything you
          need to build beautiful marketing websites.
        </p>
        <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
          <PageSections />
          <Elements />
          <Feedbacks />
          <PageExamples />
        </div>
      </section>
    </>
  );
};

export default Marketing;
