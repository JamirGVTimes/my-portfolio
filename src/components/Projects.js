import React from 'react';
import { Divider } from 'antd';
function Projects() {
    return (
        <div>
            <p>Personal Projects</p>
            <Divider />
            <ul className='projs'>
                <li>
                    <b>Bgimahood Shope</b>                  
                    <p>
                        This is a secure and effecient online store, where many stores around the globe meet and make business...
                    </p>
                    <p> <button className='btn small blue'>View App</button></p>
                </li>
                 <li>
                    <b>Students' Portal </b>                  
                    <p>
                        This is a secure and effecient online store, where many stores around the globe meet and make business...
                    </p>
                    <p> <button className='btn small blue'>View App</button></p>
                </li>
                 <li>
                    <b>Todo App</b>                  
                    <p>
                        This is a secure and effecient online store, where many stores around the globe meet and make business...
                    </p>
                    <p> <button className='btn small blue'>View App</button></p>
                </li>
            </ul>
            <p>Collaborated Projects</p>
        </div>
    );
}

export default Projects;