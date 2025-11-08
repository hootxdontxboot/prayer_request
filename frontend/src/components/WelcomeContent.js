import * as React from 'react';
import './WelcomeContent.css'; 

export default class WelcomeContent extends React.Component {
    render() {
        return (
            <div className="welcome-wrapper">
                <div className="welcome-card">
                    <h1 className="welcome-title">Welcome Back!</h1>
                    <h2 className="welcome-subtitle">Lift up others through Faith!</h2>
                    <p className="welcome-description">
                        Login or Register in order to access more Content!
                    </p>
                </div>
            </div>
        );
    }
}