import './subHeading.css'

const SubHeading=({openCount=568,closedCount=9547})=>{
    return(
        <div className="sub-heading">
            <div className="open">
                <span>icon</span>
                <span>{openCount}</span>
                <span>Open</span>
            </div>
            <div className="close">
                <span>icon</span>
                <span>{closedCount}</span>
                <span>Closed</span>
            </div>
        </div>
    )
}
export default SubHeading