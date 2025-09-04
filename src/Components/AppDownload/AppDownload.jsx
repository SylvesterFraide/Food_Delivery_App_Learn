import React from 'react';
import './AppDownload.css';
import appStore from '../../assets/Download/app-store.svg';
import googlePlay from '../../assets/Download/google-play.png';

const AppDownload = () => {
  return (
    <div className="app-download" id='app-download'>
        <p>Download our app for the best <br /> experience!</p>
        <div className="app-download-platforms">
            <img src={appStore} alt="Download on the App Store" />
            <img src={googlePlay} alt="Get it on Google Play" />
        </div>
    </div>
  )
}

export default AppDownload;