import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import { Link } from 'react-router-dom';
import Data from "../../../../api/data.json"

const imgUrl = require.context('../../../../img/', true);

const ChoseArea = () => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <section className="tp-choose-area position-relative mt-100" >
            <div className="tp-choose-yellow-bg"></div>
            <div className="container">
                <div className="row justify-content-between pb-100">
                    <div className="col-xl-6 col-lg-8">
                        <div className="tp-choose z-index">
                            <div className="tp-section-title-wrapper mt-60 wow fadeInUp" data-wow-delay=".2s">
                                <h5 className="tp-section-subtitle common-white-shape section__sm__title text-white">Why Choose {rpdata?.dbPrincipal?.name}</h5>
                                <h2 className="tp-section-title text-white"> {rpdata.dbSlogan?.[5].slogan}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-12">
                        <div className="tp-choose-img mb-30 z-index d-none d-xl-block wow fadeInUp" data-wow-delay=".6s">
                            <img src={rpdata.stock?.[2]} alt="img not found" className="img-call-to-action"/>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </>
    );
};

export default ChoseArea;