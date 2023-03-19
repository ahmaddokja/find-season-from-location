import './SeasonDisplay.css';
import React from "react";


const SeasonConfig = {
  summar : {
    text : 'let \s hit the beach!',
    icconName : 'sun'
  },
  winter : {
    text : 'Burr, it is chilly',
    icconName : 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summar" : "winter";
  } else {
    return lat > 0 ? "winter" : "summar";
  }
};

const SeasonDisplay = (props) => {
    const Season = getSeason(props.lat, new Date().getMonth());
    const {text, icconName} = SeasonConfig[Season];


    //  return <div>{Season === 'winter' ? 'Burr.it is chilly' : 'letshit the beach'}</div>;
    return (
    <div className={`season-display ${Season}`}>
      <i className={` icon-left massive ${icconName} icon`} />

        <h1>{text}</h1>

        <i className={` icon-right massive ${icconName} icon`} />

    </div>
    );
};

export default SeasonDisplay;
