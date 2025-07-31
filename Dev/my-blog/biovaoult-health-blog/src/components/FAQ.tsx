import React from 'react'

type FAQItem = {
  question: string
  answer: string | React.ReactNode
}

type FAQProps = {
  faqs: FAQItem[]
  className?: string
  heading?: string | React.ReactNode
}

export default function FAQ({
  faqs,
  className = '',
  heading = (
    <>
      Frequently Asked Questions <span>About ProDentim</span>
    </>
  ),
}: FAQProps) {
  return (
    <section id="blog-faq" className={className}>
      <h2 className="section-title text-center position-relative">
        {heading}
      </h2>

      <div className="faq-accordion accordion" id="faqAccordion">
        {faqs.map(({ question, answer }, index) => (
          <div className="faq-item accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`faq-question accordion-button ${
                  index !== 0 ? 'collapsed' : ''
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
              >
                {question}
                <span className="faq-icon">+</span>
              </button>
            </h2>

            <div
              id={`collapse${index}`}
              className={`faq-answer accordion-collapse collapse ${
                index === 0 ? 'show open' : ''
              }`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
