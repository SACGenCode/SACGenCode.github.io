import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { itemList } from './components/itemList/itemList';
import { useTitle } from './utils/utils';

function App() {
  useTitle("All Tools");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("q") !== null) {
      setSearchKeyword(params.get("q"));
    }
  }, []);

  const [searchKeyword, setSearchKeyword] = useState('');
  const filteredItems = itemList.filter(item =>
    item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    item.description.toLowerCase().includes(searchKeyword.toLowerCase())
  );



  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="is-flex is-justify-content-space-between">
            <h2 className="subtitle is-3 mt-2">All Tools</h2>
            <div className="field has-addons">
              <p className="control">
                <p class="button">
                  Search
                </p>
              </p>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Your search..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </p>
            </div>

          </div>
          <div className="columns is-multiline">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className="column is-4">
                  <Link to={item.link}>
                    <div className="box">
                      <div className="columns">
                        <div className="column is-3 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                          <span className="icon is-large">
                            <i className={`fas fa-${item.icon} item-icon`}></i>
                          </span>
                        </div>
                        <div className="column is-9">
                          <p className="subtitle is-5 has-text-weight-bold">{item.title}</p>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className='ml-3'>No tools found</p>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
