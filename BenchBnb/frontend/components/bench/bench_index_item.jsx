import React from 'react';


export const BenchIndexItem = function ({ bench }) {
    return (
        <li key={bench.id}>
            {bench.description}
        </li>
    )
}