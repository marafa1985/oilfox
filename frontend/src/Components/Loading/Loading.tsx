import React from "react"
import './Loading.scss'


const Loading: React.FC = () => {
    return (
        <div className="loading">
            <div className="spinner">
                <div className="double-bounce1" />
                <div className="double-bounce2" />
            </div>
        </div>
    )
}

export default Loading;