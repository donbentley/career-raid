import React from "react";
import RaidMeter from "./RaidMeter";
import CardGrid from './CardGrid';

const JobPage = () => {
    return(
        <div className="JobPage">
            <RaidMeter />
            <CardGrid />
        </div>
    );
};

export default JobPage;