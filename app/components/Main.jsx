var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
    return(
        <div>
            <Nav />
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
            {/* we use this anywhere we want to put the children, can remove the this. 
            when using stateless functional component with props already passed Main
            */}
            
        </div>
    )
};

module.exports = Main;