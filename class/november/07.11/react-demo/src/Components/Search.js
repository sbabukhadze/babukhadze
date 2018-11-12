import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div className="input">
                <form
                    method="post"
                    onSubmit={(e) => { 
                        this.props.onSubmit(e) 
                    }}
                >
                    <input
                        type="text"
                        placeholder="Search Text"
                        name="searchText"
                    />
                    <button>OK</button>
                </form>
            </div>
        );
    }
};