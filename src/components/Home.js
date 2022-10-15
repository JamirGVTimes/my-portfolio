import React from 'react';
import { Divider } from 'antd';
function Home() {
    return (
        <div>
            <p style={{ fontSize: '2.5em', lineHeight:'60px' }}>
                Hi, <br/>
                I'm <b> Jamir Muhumuza</b>,<br/>
                Web Developer, UX/UI Designer based in Uganda - Africa.
            </p>
            <p className="parag2">
               
                A Successful IT Specialist offering a great experience on agile workflows
                in demanding environments focused on producing cutting-edge designs for ICT industry.
                Skilled in directing development with creative and performance-oriented approach.
                Well-organized and customer-focused with proven skills in project management and team leadership. <br />
                <Divider dashed/>
          
                Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. Collaborative team player with excellent technical abilities offering 4 years of related experience.<br />
                <Divider dashed/>
                <button className='btn green'> Continue Reading ...</button>
            </p>
         </div>
    );
}

export default Home;