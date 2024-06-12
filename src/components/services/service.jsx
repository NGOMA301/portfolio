import React from 'react'
import { FaMusic, FaLaptopCode, FaVideo, FaCode, FaCamera, FaPaintBrush } from 'react-icons/fa'

export default function service() {
    return (
        <section className='service section'>
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2 className='title'>services</h2>
                    </div>

                </div>
                <div className="row">
                    {/* ===========service section start========================= */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className='fa fa-music'><FaMusic /></i>
                            </div>
                            <h4>Music Director</h4>
                            <p>Elevate your sound with expert music direction and composition services.</p>
                        </div>
                    </div>
                    {/* =================service section start======================= */}
                    {/* ===========service section start========================= */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className='fa fa-music'><FaLaptopCode /></i>
                            </div>
                            <h4>Web Design</h4>
                            <p>Crafting stunning websites for your digital success. Your vision, realized.</p>
                        </div>
                    </div>
                    {/* =================service section start======================= */}
                    {/* ===========service section start========================= */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className='fa fa-music'><FaVideo /></i>
                            </div>
                            <h4>Video Editor</h4>
                            <p>Unlock your vision with professional video editing services today!</p>
                        </div>
                    </div>
                    {/* =================service section start======================= */}{/* ===========service section start========================= */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className='fa fa-music'><FaCode /></i>
                            </div>
                            <h4>Web Develop</h4>
                            <p>Capture moments beautifully with our expert photography services. Timeless memories created.</p>
                        </div>
                    </div>
                    {/* =================service section start======================= */}
                    {/* ===========service section start========================= */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className='fa fa-music'><FaCamera /></i>
                            </div>
                            <h4>Photography</h4>
                            <p>Capture moments beautifully with our expert photography services. Timeless memories created.</p>
                        </div>
                    </div>
                    {/* =================service section start======================= */}
                    {/* ===========service section start========================= */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className='fa fa-music'><FaPaintBrush /></i>
                            </div>
                            <h4>Graphic Design</h4>
                            <p>Elevate your brand with impactful design. Visual excellence, tailored for you.</p>
                        </div>
                    </div>
                    {/* =================service section start======================= */}
                </div>
            </div>
        </section>
    )
}
