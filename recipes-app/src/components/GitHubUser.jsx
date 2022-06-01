import React from "react";
import Fetch from "./Fetch";

// const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));

// const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function UserDetails({ data }) {
    return (
        <div className="gitHubUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
}

function GitHubUserTake({ login }) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetails}
            renderError={(error) => {
                return <p>Something wrong... {error.message}</p>;
            }}
        />
    );
}

export default function GitHubUser() {
    return <GitHubUserTake login="moonhighway" />;
}
