import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import SidebarOptions from './SidebarOptions';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function SideBar() {

    const[channels,loading,error] = useCollection(db.collection('rooms'));

    return (
        <SideBarContainer>

            <SidebarHeader>
                <SidebarLeft>
                    <h2>Name of Slack</h2>
                    <h3>
                        <FiberManualRecord></FiberManualRecord>
                        Murodali Sharipov
                    </h3>

                </SidebarLeft>
                <Create></Create>

                <SidebarRight>

                </SidebarRight>

            </SidebarHeader>

            <SidebarOptions Icon={InsertComment} title="Threads"></SidebarOptions> 
            <SidebarOptions Icon={Inbox} title="Mentions & reactions"></SidebarOptions>
            <SidebarOptions Icon={Drafts} title="Saved Items"></SidebarOptions>
            <SidebarOptions Icon={BookmarkBorder} title="Channel browser"></SidebarOptions>
            <SidebarOptions Icon={PeopleAlt} title="People & user groups"></SidebarOptions>
            <SidebarOptions Icon={Apps} title="Apps"></SidebarOptions>
            <SidebarOptions Icon={FileCopy} title="File browser"></SidebarOptions>
            <SidebarOptions Icon={ExpandLess} title="Show less"></SidebarOptions>

            <hr></hr>

            <SidebarOptions Icon={ExpandMore} title="Channels"></SidebarOptions>
            <hr />
            <SidebarOptions addChannelOption Icon={Add} title="Add channel"></SidebarOptions>



            {channels?.docs.map(doc => {
                return (
                    <SidebarOptions key={doc.id} id={doc.id}  title={doc.data().name} />
                )
            })}

            
            
        </SideBarContainer>
    )
}

export default SideBar;

const SideBarContainer = styled.div`

    background-color: var(--slack-color);
    color: white;
    flex:0.3;
    border-top: 1px solid #49274b;
    max-width:260px;
    margin-top: 60px;

    >hr{
        margin: 10px 0;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
   display: flex;
   border-bottom: 1px solid #49274b;
   padding: 13px;

   >.MuiSvgIcon-root{
       background-color: white;
       padding: 8px;
       border-radius: 999px;
       color: #49274b;
       font-size: 18px;

   }

`;

const SidebarLeft = styled.div`

   flex:1;

   > h2{
       font-size: 15px;
       font-weight:900;
       margin-bottom:5px;
   }

   >h3{

    display: flex;
    font-size: 13px;
    align-items: center;
    font-weight:400;
   }

   >h3 .MuiSvgIcon-root{
       color: green;
       font-size:14px;
       margin-top:1px;
       margin-right: 2px;
   }

 
`;
const SidebarRight = styled.div``;
