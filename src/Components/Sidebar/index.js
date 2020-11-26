import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const SidebarElement = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='intro' onClick={toggle}>
                        botanic intro
                    </SidebarLink>
                    <SidebarLink to='detoxifiers' onClick={toggle}>
                        air detoxifiers
                    </SidebarLink>
                    <SidebarLink to='sushis' onClick={toggle}>
                        plant sushis
                    </SidebarLink>
                    <SidebarLink to='customers' onClick={toggle}>
                        more
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SidebarElement