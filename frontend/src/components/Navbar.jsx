import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ 
            backgroundColor: 'red', 
            padding: '1rem 2rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <ul style={{ 
                listStyle: 'none',
                display: 'flex',
                gap: '2.5rem',
                margin: 0,
                padding: 0,
                alignItems: 'center',
                maxWidth: '1200px',
            }}>
                <li>
                    <Link 
                        to={'/'} 
                        style={{ 
                            textDecoration: 'none',
                            color: '#F8F8F9', 
                            fontWeight: '500',
                            fontSize: '1.1rem',
                            padding: '0.75rem 1.25rem',
                            border: '2px solid #F8F8F9',
                            borderRadius: '40px',
                        }}
                    >
                        FAQ List
                    </Link>
                </li>
                <li>
                    <Link 
                        to={'/add'} 
                        style={{ 
                            textDecoration: 'none',
                            color: '#F8F8F9',
                            fontWeight: '500',
                            fontSize: '1.1rem',
                            padding: '0.75rem 1.25rem',
                            border: '2px solid #F8F8F9',
                            borderRadius: '40px',
                        }}
                    >
                        Add FAQ
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
