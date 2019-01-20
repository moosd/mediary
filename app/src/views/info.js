import React, {Component} from 'react';
import {
  Text,
  View,TouchableOpacity, AsyncStorage, Button
} from 'react-native';
//import Swiper from 'react-native-swiper-animated';

import Swiper from 'react-native-deck-swiper'
import ActionButton from 'react-native-action-button';

import { WebView } from 'react-native';


const styles = {
  wrapper: {
    backgroundColor: '#009688',
  },
  slide1: {
    backgroundColor: '#3f51b5',
    borderRadius: 20
  },
  slide2: {
    backgroundColor: '#673ab7',
    borderRadius: 20

  },
  slide3: {
    backgroundColor: '#e91e63',
    borderRadius: 20
  },
  /*text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },*/
container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
textColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
};

export default class Tl extends Component {


constructor(){
super()
this.html = `
<div><h2>Active Problems and Issues</h2><table><thead><tr><th>Start Date</th><th>Entry</th><th>Significance</th><th>Details</th></tr></thead><tbody><tr><td>12 Nov 2017</td><td>Anxiety attack (Xa7kB)</td><td>Major Episode</td><td></td></tr><tr><td>01 Jan 1965</td><td>Type I diabetes mellitus (X40J4)</td><td>Major Episode</td><td></td></tr></tbody></table></div><div><h2>Current Medication Issues</h2><p>No 'Current Medication Issues' data is recorded for this patient.</p></div><div><h2>Current Repeat Medications</h2><table><thead><tr><th>Last Issued</th><th>Medication Item</th><th>Start Date</th><th>Review Date</th><th>Number Issued</th><th>Max Issues</th><th>Details</th></tr></thead><tbody><tr><td>07 Nov 2018</td><td>Apidra 100units/ml solution for injection 3ml pre-filled SoloStar pen (Sanofi) - 1 pre-filled disposable injection - use as directed with evening meal</td><td>07 Nov 2018</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>20 Jan 2018</td><td>Lantus 100units/ml solution for injection 3ml cartridges
(Sanofi) - 1.667 cartridge - use as directed</td><td>20 Jan 2018</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>20 Jan 2018</td><td>Gliclazide 80mg/5ml oral suspension - 150 ml - With breakfast</td><td>20 Jan 2018</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>15 Jan 2018</td><td>Atorvastatin 20mg tablets - 28 tablet - To be taken Each Night</td><td>15 Jan 2018</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>22 Nov 2017</td><td>Metformin 500mg modified-release tablets - 56 tablet -
with evening meal</td><td>22 Nov 2017</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>16 Nov 2017</td><td>Propranolol
80mg tablets - 56 tablet - take one twice daily</td><td>16 Nov 2017</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>16 Nov 2017</td><td>Insulin protamine zinc bovine 100units/ml suspension for injection 10ml vials - 2.8 vial - use as directed</td><td>12 Nov 2017</td><td>12 May 2019</td><td>2</td><td></td><td></td></tr><tr><td>12 Nov 2017</td><td>Venlafaxine 75mg modified-release capsules - 28 capsule - take one daily</td><td>12 Nov 2017</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>Never</td><td>Sertraline 100mg tablets - 28 tablet - Every Day</td><td>30 Nov 2017</td><td>12 May 2019</td><td>0</td><td></td><td></td></tr><tr><td>Never</td><td>Sumatriptan 50mg tablets - 28 tablet - take one as directed</td><td>12 Nov 2018</td><td>12 May 2019</td><td>0</td><td></td><td></td></tr><tr><td>Never</td><td>Cetirizine 10mg tablets - 30 tablet - take one daily</td><td>12 Nov 2018</td><td>12 May 2019</td><td>0</td><td></td><td></td></tr></tbody></table></div><br/><b>The medication above is taken from a list of Repeat Medication Templates in
the patient record which may have been amended since they were last issued.<br/>You should look at the Current Medication Issues section to see what the patient has been given.</b><div><h2>Current Allergies and Adverse Reactions</h2><table><thead><tr><th>Start Date</th><th>Details</th></tr></thead><tbody><tr><td>14 Nov 2018</td><td>MORPHINE SULFATE (all components considered allergens - Morphine sulfate 20mg/1ml solution for injection ampoules)<br/>Makes him Sick</td></tr><tr><td>14 Nov 2018</td><td>ASPIRIN (all components considered
allergens - Aspirin 75mg dispersible tablets)<br/>Has Rash</td></tr><tr><td>14 Nov 2018</td><td>Allergic reaction to drug (Xa1pS)</td></tr><tr><td>14 Nov 2018</td><td>Allergic reaction to drug (Xa1pS) - allergic to morphine sulfate</td></tr><tr><td>16 Nov 2017</td><td>CO-CODAMOL (all components considered allergens - Co-codamol 30mg/500mg tablets)<br/>Induces rash</td></tr></tbody></table></div><div><h2>Last 3 Encounters</h2><table><thead><tr><th>Date</th><th>Title</th><th>Details</th></tr></thead><tbody><tr><td>14 Nov 2018</td><td>Lee Edwards ('Other' Community Health Service)  - Broad Walk Medical Practice</td><td>Hepatitis B Immunoglobulin (HBIG) 1 0.5 ml<br/>Drugs not printed - 14 Nov 2018: Hepatitis B immunoglobulin human 200unit solution for injection vials <br/>Vaccination Consent: HEPATITIS
B IMMUNOGLOBULIN (Consented)<br/>Hepatitis B immunoglobulin human 200unit solution for injection vials - 0.5 ml - <br/>Parent present (Y1605)<br/></td></tr><tr><td>14 Nov 2018</td><td>Lee Edwards ('Other' Community Health Service)  - Broad Walk Medical Practice</td><td>Sensitivity: ASPIRIN (all components considered allergens - Aspirin 75mg dispersible tablets) - Has Rash<br/>Allergic reaction to drug
(Xa1pS) - allergic to morphine sulfate<br/></td></tr><tr><td>14 Nov 2018</td><td>Lee Edwards ('Other' Community Health Service)  - Broad Walk Medical Practice</td><td>Diagnosis: Allergic reaction to drug (Xa1pS)to asprin<br/></td></tr></tbody></table></div></div>
`;
}

render() {
return (
<WebView style={styles.container} 
        originWhitelist={['*']}
        source={{ html: this.html }}>
</WebView>
)
}




}

