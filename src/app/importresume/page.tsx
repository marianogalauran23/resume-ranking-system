import React from "react";
import Styles from "./import.module.css";

const Import: React.FC = () => {
    return (
        <div className={Styles.FullFrame}>
            <div className={Styles.Sidebar}>
                <div className={Styles.Process}>
                    <div className={Styles.Processes}>
                        <h2 className={Styles.proNumbers}>1</h2>
                        <p className={Styles.ProcessTxt}>Upload Resumes</p>
                    </div>
                    <div className={Styles.Processes}>
                        <h2 className={Styles.proNumber}>2</h2>
                        <p className={Styles.ProcessTxt}>Set Criteria</p>
                    </div>
                    <div className={Styles.Processes}>
                        <h2 className={Styles.proNumber}>3</h2>
                        <p className={Styles.ProcessTxt}>View Results</p>
                    </div>
                </div>

                <div className={Styles.RecentActs}>
                    <h2 className={Styles.Title}>Recents</h2>
                    <div className={Styles.Recents}>
                        <div className={Styles.RecentBox}>
                            <h2 className={Styles.Title}>Resume Assessment</h2>
                            <p className={Styles.details}>2 hours ago</p>
                            <p className={Styles.details}>3 candidates evaluated</p>
                        </div>

                        <div className={Styles.RecentBox}>
                            <h2 className={Styles.Title}>Criteria Updated</h2>
                            <p className={Styles.details}>1 day ago</p>
                            <p className={Styles.details}>Modified technical requirements</p>
                        </div>

                        <div className={Styles.RecentBox}>
                            <h2 className={Styles.Title}>Export Generated</h2>
                            <p className={Styles.details}>2 days ago</p>
                            <p className={Styles.details}>PDF report downloaded</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Styles.Contents}>
                <h1 className={Styles.HeaderText}>Upload Resumes</h1>
                <p className={Styles.details}>Upload 1-5 resumes for assessment</p>
                <div className={Styles.ResumeCriteria}>
                    <div className={Styles.CriteriaContainer}>
                        <h2 className={Styles.Title}>Supported Formats</h2>
                        <p className={Styles.details}>PDF Documents</p>
                        <p className={Styles.details}>Word Documents (.doc, .docx)</p>
                        <p className={Styles.details}>Rich Text Format (.rtf)</p>
                    </div>

                    <div className={Styles.CriteriaContainer}>
                        <h2 className={Styles.Title}>Size Limits</h2>
                        <p className={Styles.details}>Maximum 5 files per upload</p>
                        <p className={Styles.details}>Each file up to 10MB</p>
                        <p className={Styles.details}>Total upload limit: 50MB</p>
                    </div>
                </div>

                <input type="file" placeholder="Input Reesume"></input>
            </div>
        </div>
    );
};

export default Import;