"use client";

import React from 'react';
//import Image from 'next/image';
import Styles from "./export.module.css";

const exportresult: React.FC = () => {
    return (
        <div className={Styles.FullFrame}>
            <div className={Styles.exportContainer}>
                <div className={Styles.Header}>
                <h1 className={Styles.Title}>Export Assessment Results</h1>
            </div>

            <div className={Styles.Contents}>
                <div className={Styles.Left}>
                    <div className={Styles.Top}>
                        <h1 className={Styles.FormatName}>Export Format:</h1>
                        <div className={Styles.FormatOptions}>
                            <h1 className={Styles.FormatName}>PDF Report</h1>
                            <p className={Styles.FormatDescription}>Professional and Detailed Analysis</p>
                        </div>

                        <div className={Styles.FormatOptions}>
                            <h1 className={Styles.FormatName}>Excel Spreadsheet</h1>
                            <p className={Styles.FormatDescription}>Tabular Data for further Analysis</p>
                        </div>
                    </div>

                    <div className={Styles.Bottom}>
                        <div className={Styles.ReportFormat}>
                            <h1 className={Styles.FormatName}>Report Format:</h1>
                            <div className={Styles.Buttons}>
                                <button className={Styles.ButtonBG}>Detailed</button>
                                <button className={Styles.ButtonNBG}>Summary</button>
                            </div>
                        </div>
                        <h1 className={Styles.FormatName}>Include Section:</h1>
                        <div className={Styles.DetailGridList}>
                            <label className={Styles.Name}>
                                <input className={Styles.FormatDescription} type="checkbox" name="pdfOption" value="PDF Printing" />
                                Summary
                            </label>
                            <label className={Styles.Name}>
                                <input className={Styles.FormatDescription} type="checkbox" name="pdfOption" value="PDF Printing" />
                                Detail
                            </label>
                            <label className={Styles.Name}>
                                <input className={Styles.FormatDescription} type="checkbox" name="pdfOption" value="PDF Printing" />
                                Score
                            </label>
                            <label className={Styles.Name}>
                                <input className={Styles.FormatDescription} type="checkbox" name="pdfOption" value="PDF Printing" />
                                Comparison
                            </label>
                        </div>
                    </div>
                </div>

                <div className={Styles.Right}>
                    <h1 className={Styles.FormatName}>Preview</h1>
                    <div className={Styles.Results}>
                        <h1 className={Styles.FormatName}>Assessment Results:</h1>
                        <div className={Styles.Summary}>
                            <h1 className={Styles.FormatName}>Summary</h1>
                            <p className={Styles.FormatDescription}>Total Candidates: 34 People</p>
                            <p className={Styles.FormatDescription}>Total Average: 89%</p>
                        </div>
                        <div className={Styles.CandidateScores}>
                            <h1 className={Styles.FormatName}>Candidate Scores</h1>
                            <p className={Styles.FormatDescription}>Alejandro, Adrian: 98%</p>
                            <p className={Styles.FormatDescription}>Divina, John Jordan: 79%</p>
                            <p className={Styles.FormatDescription}>Galauran Jr, Mariano: 86%</p>
                            <p className={Styles.FormatDescription}>Malanog Jr, Malbert: 95%</p>
                            <p className={Styles.FormatDescription}>Doe, John: 60%</p>
                            <p className={Styles.FormatDescription}>Chad, James: 85%</p>
                            <p className={Styles.FormatDescription}>Porras, Kenneth: 91%</p>
                            <p className={Styles.FormatDescription}>Catalan, Fritz John Josh: 93%</p>
                            <p className={Styles.FormatDescription}>Ugalde, Ednest Lyner: 77%</p>
                            <p className={Styles.FormatDescription}>Ramos, Ken: 84%</p>
                        </div>
                    </div>
                    <h1 className={Styles.FormatName}>File Name:</h1>
                    <div className={Styles.ExportName}>
                        <input className={Styles.ExportNaminger} />
                        <p className={Styles.FormatDescription}>.pdf</p>
                    </div>
                </div>
            </div>
            <div className={Styles.Footer}>
                <label className={Styles.FooterName}>
                    <input className={Styles.Printing} type="checkbox" name="pdfOption" value="PDF Printing" />
                    Print Optimized PDF?
                </label>
                <div className={Styles.Buttons}>
                    <button className={Styles.ButtonBG}>Generate</button>
                    <button className={Styles.ButtonNBG}>Cancel</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default exportresult;