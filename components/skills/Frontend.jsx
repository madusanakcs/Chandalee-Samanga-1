// eslint-disable-next-line no-unused-vars
import React from 'react'

const SkillsContent = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Technical & Analytical Skills 💻</h3>

            <div className="skills__box">
                {/* ======================= Programming & Scripting (Languages) ======================= */}
                <div className="skills__group">
                    <h4 className="skills__subtitle">Programming & Scripting</h4>

                    <div className="skills__data">
                        <i className='bx bxl-python'></i>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-data'></i> {/* Icon for SQL/Database */}
                        <div>
                            <h3 className="skills__name">SQL (MySQL)</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    {/* Adding key Python libraries based on the CV */}
                    <div className="skills__data">
                        <i className='bx bx-line-chart'></i>
                        <div>
                            <h3 className="skills__name">Pandas / NumPy</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>
                </div>

                {/* ======================= Software & Tools (Including Relevant Tools from Coursework) ======================= */}
                <div className="skills__group">
                    <h4 className="skills__subtitle">Software, Tools & Platforms</h4>
                    
                    <div className="skills__data">
                        <i className='bx bxs-spreadsheet'></i>
                        <div>
                            <h3 className="skills__name">Excel (Advanced)</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-scatter-chart'></i>
                        <div>
                            <h3 className="skills__name">Matplotlib / Seaborn</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>
                    
                    {/* Relevant tools carried over from the original 'Coursework' component */}

                </div>
            </div>
            
            {/* ======================= Core/Soft Skills (Retained) ======================= */}
            <h3 className="skills__title skills__title-soft">Core Analytical Skills & Traits 🧠</h3>
             <div className="skills__box">
                 <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-trending-up'></i>
                        <div>
                            <h3 className="skills__name">Data Visualization</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-stats'></i>
                        <div>
                            <h3 className="skills__name">Statistical Analysis</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-vector'></i>
                        <div>
                            <h3 className="skills__name">Data Cleaning & Preprocessing</h3>
                        </div>
                    </div>
                 </div>
                 <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-brain'></i>
                        <div>
                            <h3 className="skills__name">Critical Thinking & Problem Solving</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-sitemap'></i>
                        <div>
                            <h3 className="skills__name">Project Management</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-group'></i>
                        <div>
                            <h3 className="skills__name">Teamwork & Communication</h3>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    );
  };
  
  export default SkillsContent;