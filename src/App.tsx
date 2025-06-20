import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './App.css';

const menuItems = [
    { label: 'Home', key: 'home' },
    { label: 'About', key: 'about' },
    { label: 'Project', key: 'project' },
    { label: 'Contact', key: 'contact' },
];

function App() {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState('home');

    const isMobile = window.innerWidth < 768;

    const handleClick = (e: any) => {
        setCurrent(e.key);
        if (isMobile) setOpen(false);
    };

    return (
        <div style={{ height: '100vh' }}>
            <div className="flex items-center justify-between p-4 bg-yellow-300">
                {isMobile ? (
                    <>
                        <Button
                            type="text"
                            icon={<MenuOutlined />}
                            onClick={() => setOpen(true)}
                            style={{ fontSize: 24 }}
                        />
                        <Drawer
                            placement="right"
                            onClose={() => setOpen(false)}
                            open={open}
                        >
                            <Menu
                                mode="vertical"
                                selectedKeys={[current]}
                                onClick={handleClick}
                                items={menuItems}
                            />
                        </Drawer>
                    </>
                ) : (
                    <Menu
                        mode="horizontal"
                        selectedKeys={[current]}
                        onClick={handleClick}
                        items={menuItems}
                        style={{ fontSize: 18, backgroundColor: 'transparent' }}
                    />
                )}
            </div>
            {/* Add other page content here */}
        </div>
    );
}

export default App;
