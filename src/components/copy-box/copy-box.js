import React, { useEffect, useRef } from 'react';
import swal from 'sweetalert';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css'; // Import the GitHub theme
import beautify from 'js-beautify';

// Register the desired languages
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);
const CopyBox = (props) => {
    const codeRef = useRef(null);
    const shouldUpdate = useRef(false);

    useEffect(() => {
        if (codeRef.current && shouldUpdate.current) {
            delete codeRef.current.dataset.highlighted;
            const formatJson = {
                "indent_size": "4",
                "indent_char": " ",
                "max_preserve_newlines": "5",
                "preserve_newlines": true,
                "keep_array_indentation": false,
                "break_chained_methods": false,
                "indent_scripts": "normal",
                "brace_style": "collapse",
                "space_before_conditional": true,
                "unescape_strings": false,
                "jslint_happy": false,
                "end_with_newline": false,
                "wrap_line_length": "0",
                "indent_inner_html": false,
                "comma_first": false,
                "e4x": false,
                "indent_empty_lines": false
            };
            // Beautify the code using js-beautify before highlighting
            const formattedCode = beautify(props.data, formatJson);
            codeRef.current.textContent = formattedCode;
            hljs.highlightElement(codeRef.current);
        }

        shouldUpdate.current = true;
    }, [props.data, shouldUpdate]);

    const handleCopyClick = () => {
        if (codeRef.current) {
            const range = document.createRange();
            range.selectNode(codeRef.current);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            swal("Copied", "Happy Coding", "success");
        }
    };

    return (
        <React.Fragment>
            {props.data && (
                <div className="container">
                    <button className="button is-link" onClick={handleCopyClick}>
                        <span className="icon is-small">
                            <i className="fas fa-clipboard"></i>
                        </span>
                        <span>Copy Code</span>
                    </button>
                    <br />
                    <br />
                    <code
                        className="box p-4 javascript"
                        ref={codeRef}
                        style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                    >
                        {props.data}
                    </code>
                </div>
            )}
        </React.Fragment>
    );
};

export default CopyBox;
