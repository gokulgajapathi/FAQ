import { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs


const AddFAQ = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const uniqueId = uuidv4();
        console.log(uniqueId);
        

        alert('Saving Response');
        try {
            await axios.post('http://localhost:3000/api/faqs/add-faq', {
                _id: uniqueId,
                question,
                answer,
            });
            alert('FAQ added successfully');
            setQuestion('');
            setAnswer('');
        } catch (error) {
            console.error('Error adding FAQ:', error);
        }
    };

    return (
        <div style={{ 
            padding: '2rem', 
            backgroundColor: '#f8f9fa', 
            minHeight: '100vh',
            fontFamily: "'Roboto', sans-serif" 
        }}>
            <div style={{ 
                maxWidth: '600px', 
                margin: '0 auto', 
                padding: '2rem', 
                backgroundColor: '#fff', 
                borderRadius: '12px', 
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
            }}>
                <h1 style={{ 
                    color: '#dc3545', 
                    marginBottom: '1.5rem', 
                    fontFamily: "'Montserrat', sans-serif", 
                    fontSize: '2rem', 
                    fontWeight: 600,
                    letterSpacing: '-0.5px'
                }}>
                    Add FAQ
                </h1>
                <form onSubmit={handleSubmit}>
                    <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
                        Question:
                    </label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                        style={{
                            width: '100%', 
                            padding: '12px',
                            marginBottom: '20px',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            transition: 'border-color 0.3s',
                            outline: 'none',
                            '&:focus': {
                                borderColor: '#007bff'
                            }
                        }}
                    />
                    <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
                        Answer:
                    </label>
                    <div style={{ width: '100%', maxWidth: '580px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <CKEditor
                        editor={ClassicEditor}
                        data={answer}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setAnswer(data);
                        }}
                        config={{
                            // licenseKey: '<Your License Key>',
                            licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Mzk3NTAzOTksImp0aSI6IjZiZTJmODg5LTA3ZDUtNGY1My04MjMwLTI2YWUyNjE1ZjJiZCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjVmMDBkZDViIn0._NN_qIRIYfjzJGUBXXj9I35wPiSYe1DcSwuo2ttmNZzs-6xUj7YX-wV5YxKmh-bOvLM9aIxwRheDPGpSre2Zjw',
                            plugins: [Essentials, Paragraph, Bold, Italic],
                            toolbar: ['undo', 'redo', '|', 'bold', 'italic'], //, '|', 'formatPainter'
                            initialData: '<p>Type your answer here...</p>',
                            
                        }}
                    />
                    </div>
                    <button
                        type="submit"
                        style={{
                            marginTop: '20px',
                            padding: '12px 24px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 500,
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
                    >
                        Add FAQ
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFAQ;
