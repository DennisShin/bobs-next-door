import React from "react"
import Store from "./Store"

function StoreList({allStores, searchData}) {

    let storesToDisplay = allStores.filter((store) => store.name.toLowerCase().startsWith(searchData.toLowerCase()))

    storesToDisplay.sort(function (a, b) {
        return a.season - b.season || a.episode - b.episode;
      });

    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {/** Render a list of <Store> components here. */}
                {storesToDisplay    .map((store) => (
                    <Store key={store.id} store={store}/> 
                ))}
            </tbody>
        
        </table>
    );
}

export default StoreList;