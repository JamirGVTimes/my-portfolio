import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme } from "../features/slices/ThemeSlice";
import { Row, Divider, Col, Space, Image, Typography} from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Imge from '../pics/img_avatar.png';

const { Paragraph, Text } = Typography;
function Layout() {
    const [rmenu, setRmenu] = useState(true);
    const [folder, setFolder] = useState({
        leftSection: 5,
        rightSection: 19
    });
    const [swichR, setSwitchR] = useState(true);
     const dispatch = useDispatch();
    const backg = useSelector((sed) => sed.mytheme.value);
    return (
        <div style={backg}>
            <Row gutter={8} >
                <Col span={folder.leftSection} align='right'>
                    <Space style={{ fontSize: "1.6rem", marginTop: "1rem"}}>
                        {rmenu ?
                            <MenuFoldOutlined
                                onClick={() => {
                                    setRmenu(false);
                                    setFolder({ leftSection: 1, rightSection: 23 });
                                }} />
                            :
                            <MenuUnfoldOutlined onClick={() => {
                                setRmenu(true);
                                setFolder({ leftSection: 5, rightSection: 19 })
                            }} />
                        }
                    </Space>
                    <Divider />
                    {rmenu
                        ?
                        <div>
                            <div style={{textAlign:"center"}}>
                                <Image src={Imge} alt="jamir_photo" style={{borderRadius:"50%", height:"100px",width:"100px"}} /> <br/>
                                <p style={{margin:'0.1em', fontSize:'1.1rem'}}> Jamir Muhumuza</p>
                                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}> Software Developer </p>
                            </div>
                            <Divider dashed />
                            <div style={{textAlign:'left'}}>
                                <ul>
                                  <Link to='/'><li>Home</li></Link>  
                                  <Link to='/projects'><li>Projects </li></Link>  
                                  <Link to='/Skills'><li>Skills </li></Link>  
                                  <Link to='/resume'><li>Resume </li></Link>
                                    <Link to='/contact'><li>Contact </li></Link> 
                                   <Link to='/blog'> <li>Blog </li></Link>
                                </ul>
                            </div>
                        </div>
                        :
                        null
                }
                    
                    
                       
                </Col>
                <Col span={folder.rightSection}>
                    <Row>
                        <Col span={24} align='right' style={{paddingTop: "0.2rem"}}>
                            <Link to='/projects'>Projects</Link>
                            {swichR ?
                                <button
                                    onClick={() => {
                                        dispatch(darkTheme());
                                        setSwitchR(false);
                                    }}
                                className="btn small blue"
                                > Dark Mode </button>
                                :
                                <button
                                    onClick={() => {
                                        dispatch(lightTheme());
                                        setSwitchR(true);
                                    }}
                                className="btn small green"
                            >Light Mode</button>
                         }     
                        </Col>
                        <Divider/>
                    </Row>
                    <div> 
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </div>
        
    );
}

export default Layout;