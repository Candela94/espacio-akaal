

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

            <div className="imagen-container">
                {children}
            </div>

        </>
    );
}