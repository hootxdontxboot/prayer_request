import './App.css'
import logo from '../logo.svg'

import Header from './Header'
import AppContent from './AppContent';

function App() {
    return (
        <div>
            <Header pageTitle="PrayerPost with JWT" logoSrc = {logo}></Header>
            <div>
            <AppContent></AppContent>
            </div>
        </div>
    )
}

export default App;