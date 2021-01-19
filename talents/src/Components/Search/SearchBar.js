import { Container, Search,Divider,Header} from "semantic-ui-react";
import './Search.css'
import SearchTag from './SearchTag'

export default function SearchBar() {
    return(
        <div>
            <div className="serch_title">Find the talents you wanted</div>
            <div className="search_container">
                <Search style={{textAlign:'center', margin:'5vh'}}></Search>
            </div>
            <SearchTag/ >        
        </div>

        
    )
    
}
