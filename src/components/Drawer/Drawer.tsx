import * as React from 'react';
import { Drawer as MTDrawer, Button } from "@material-ui/core"
import { } from "@material-ui/core/"
import styled from "styled-components"

interface IDrawerProps {
}

interface DrawerState {
    open: boolean;
}

const StyledDrawer = styled(MTDrawer)`
    background-color: "red"
`;

const StyledButton = styled(Button)`
    color: white;
`;


class Drawer extends React.Component<IDrawerProps, DrawerState> {
    constructor(props: IDrawerProps) {
        super(props);

        this.state = {
            open: false
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({ open: true })
    }

    close() {
        this.setState({ open: false })
    }

    handleDrawerOpen = () => {

    }

    handleDrawerClose = () => {

    }

    render() {
        return (
            <StyledButton variant={"contained"} color={"primary"}>TEST </StyledButton>
        );
    }
}

export default (Drawer);
