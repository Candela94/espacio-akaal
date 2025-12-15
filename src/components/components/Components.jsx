

import './components.css'

export const Section = ({ children }) => {
    return (

        <>

            <section className="section">
                {children}
            </section>

        </>
    );
}



export const ImgContainer = ({ children }) => {
    return (

        <>

            <div className="imagen-container" style={{position:'relative'}}>
                {children}
            </div>

        </>
    );
}




export const StepIndicators = ({ totalSteps, currentStep, onStepClick }) => {
    return (
      <div className="step-indicators">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <span
            key={index}
            className={`step-dot ${index === currentStep ? 'active' : ''}`}
            onClick={() => onStepClick(index)}
          />
        ))}
      </div>
    );
  };
