import * as React from 'react';
import { Drawer, Button } from "@material-ui/core"

interface IBaseProps {
}

/**
 * Base View 
 */
class Base extends React.Component<IBaseProps> {
    public render() {
        return (
            <Drawer variant={"permanent"}>
                <Button variant={"contained"} color={"primary"}>TEST </Button>
            </Drawer>
        );
    }
}


export default Base