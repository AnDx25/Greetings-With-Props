import './body.css'
const Body=({issueData})=>{
    return(
        <div className="body-container">
            <table>
                <thead className="body-header">
                    <tr>
                        <td>Author</td>
                        <td>Label</td>
                        <td>Projects</td>
                        <td>Milestones</td>
                        <td>Assignee</td>
                    </tr>
                </thead>
                <hr/>
                <tbody>
                    {
                        issueData.map((value,index)=>(
                            <div key={index}>
                            <tr key={index}>

                                <td key={index}>{value.title}</td>
                                <td key={index}>{value.state}</td>
                               
                            </tr>
                            <hr/>
                            </div>
                            
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
export default Body