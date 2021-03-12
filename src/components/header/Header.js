import './header.css'
const Header=({searchIcon="search-icon",labelIcon="label-icon",mileStoneIcon="ms",labelCount=60,mileStoneCount=1,placeholder})=>{
    return(
        <div className="header-container">
            <div className="filter-search">
            <input type="text" placeholder={placeholder}/>
            </div>
            <div className="labels">
                <span>{labelIcon}</span>
                <span>Labels</span>
                <span>{labelCount}</span>
            </div>
            <div className="milestones">
                <span>{mileStoneIcon}</span>
                <span>Milestones</span>
                <span>{mileStoneCount}</span>
            </div>
            <button>New Issue</button>
            
        </div>
    )
}

export default Header;