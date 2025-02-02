import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FAQList() {
    const [faqs, setFaqs] = useState([]);
    const [lang, setLang] = useState('');

    useEffect(() => {
        fetchFaqs();        
    }, [lang]);

    setTimeout(()=> {
        fetchFaqs();
        
    }, 60*1000);

    async function fetchFaqs() {
        const response = await axios.get(`http://localhost:3000/api/faqs/get-faq/?lang=${lang}`);
                
        if (response.data.data) {
            setFaqs(response.data.data);
        } else {
            setFaqs(response.data.translatedFAQS);
        }
    }

    async function deleteFAQ(id) {
        console.log(id);        
        await axios.delete(`http://localhost:3000/api/faqs/delete-faq/${id}`);
        fetchFaqs();
    }

    return (
        <div style={{ 
            padding: '2rem 4rem',
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            fontFamily: "'Roboto', sans-serif"
        }}>
            <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                backgroundColor: 'white',
                padding: '2rem'
            }}>
                <h1 style={{ 
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '2.5rem',
                    color: '#dc3545',
                    marginBottom: '2rem',
                    fontWeight: 600,
                    letterSpacing: '-0.5px'
                }}>
                    Frequently Asked Questions
                </h1>

                <div style={{ 
                    marginBottom: '2rem',
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap'
                }}>
                    {['hi', 'bn', 'en'].map((language) => (
                        <button
                            key={language}
                            onClick={() => setLang(language)}
                            style={{ 
                                padding: '0.75rem 1.5rem',
                                backgroundColor: lang === language ? '#dc3545' : 'transparent',
                                color: lang === language ? 'white' : '#dc3545',
                                border: '2px solid #dc3545',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                fontSize: '1rem',
                                fontWeight: 500,
                                ':hover': {
                                    backgroundColor: '#0F1A3C',
                                    color: 'white'
                                }
                            }}
                        >
                            {(() => {
                                switch(language) {
                                    case 'hi': return 'Hindi';
                                    case 'bn': return 'Bengali';
                                    default: return 'English';
                                }
                            })()}
                        </button>
                    ))}
                </div>

                <ul style={{ 
                    listStyle: 'none', 
                    padding: 0,
                    display: 'grid',
                    gap: '1.5rem'
                }}>
                    {faqs.map((faq) => (                        
                        <li key={faq._id} style={{ 
                            padding: '1.5rem',
                            border: '1px solid #e9ecef',
                            borderRadius: '8px',
                            transition: 'all 0.2s ease',
                            ':hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)'
                            }
                        }}>
                            <div style={{ 
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '1rem'
                            }}>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ 
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: '1.25rem',
                                        color: '#0F1A3C',
                                        marginBottom: '0.75rem',
                                        fontWeight: 500
                                    }}>
                                        {faq.question}
                                    </h3>
                                    <div 
                                        dangerouslySetInnerHTML={{ __html: faq.answer }} 
                                        style={{ 
                                            color: '#495057',
                                            lineHeight: 1.6,
                                            fontSize: '1rem'
                                        }} 
                                    />
                                </div>
                                <button
                                    onClick={() => deleteFAQ(faq._id)}
                                    style={{ 
                                        padding: '0.5rem 1rem',
                                        backgroundColor: 'transparent',
                                        color: '#dc3545',
                                        border: '1px solid #dc3545',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        ':hover': {
                                            backgroundColor: '#dc3545',
                                            color: 'white'
                                        }
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}