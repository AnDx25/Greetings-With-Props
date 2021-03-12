import {useEffect, useState} from 'react';
import Header from './header/Header';
import SubHeading from './subHeading/SubHeading';
import Body from '../components/body/Body'
import './mainComponent.css'
const {Octokit} =require("@octokit/core");



// useEffect>{
//     // const octokit = new Octokit();
//     // const response= octokit.request('GET /repos/facebook/react/issues')
//     console.log("owdjo")
// }
const  MainComponent=()=>{
    const [issueData,setIssueData]=useState([])
    var tempArray=[]
                
                        
    useEffect(()=>{
        const octokit = new Octokit();
        const response=octokit.request('GET /repos/facebook/react/issues')
                        .then(response=>response)
                        .then(data=>{
                            setIssueData(data.data)
                        })
                
            
    },[])
   
        console.log(issueData)
      return(
          <div className="main-container">
              <Header/>
              <SubHeading/>
              <Body issueData={issueData}/>
          </div>
      )

}
export default MainComponent