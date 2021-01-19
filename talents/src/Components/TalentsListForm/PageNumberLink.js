import { Pagination, Icon } from "semantic-ui-react";

export default function PageNumberLink(){
    return(
        <Pagination
        defaultActivePage={5}
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={10}
        />
    )
}