
import React from "react";
import NBFCMenu from '../Common-features/NBFCMenu';


function AnchorSpoke() {
  return (
    <div>
      
    <section className="anchor-spoke-sec">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <NBFCMenu />
                <div className="Anchor-heading">
                  <h2 className="title-first">Anchor and Spoke</h2>
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="flex-card">
              <div className="flex-card-item">
                <div className="anchor-spoke-card">
                  <h3 className="title-secnd mb-4">Anchor</h3>
                  <p>An “Anchor” is a manufacturer or supplier and has entered into an agreement with the
                    lenders to leverage the opportunity of finance for itself and its channel partners in place of maintaining regular cash flows.
                  </p>
                </div>
              </div>
              <div className="flex-card-item">
                <div className="anchor-spoke-card">
                  <h3 className="title-secnd mb-4">Spoke</h3>
                  <p>A “Spoke” is a stakeholder of supply chain i.e. buyer, supplier, dealer etc, without whom financial transaction can’t be fulfilled and has been recommended by the Anchor and approved by the lender.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default AnchorSpoke;
