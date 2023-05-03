import React, {useState} from 'react';
import styled from "styled-components";

import PlaceDetails from "./PlaceDetails.jsx";
import SelectableList from "../utils/SelectableList.jsx";

const StyledList = styled.div`

`;


function List({places}) {

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);

    const placePrompt = {
        'restaurants': 'Food & Dining',
        'hotels': 'Hotels',
        'attractions': 'Attractions'
    }

    return (
        <StyledList>
            <h1>{placePrompt[type]} around you</h1>
            <form>
                <label>
                    Location:
                    <SelectableList
                        options={[
                            {value: 'restaurants', label: 'Restaurants'},
                            {value: 'hotels', label: 'Hotels'},
                            {value: 'attractions', label: 'Attractions'},
                        ]}
                        onChange={value => setType(value)}
                    />
                </label>

                <label>
                    Rating:
                    <SelectableList
                        options={[
                            {value: 4.5, label: 'Above 4.5'},
                            {value: 0, label: 'All'},
                            {value: 4, label: 'Above 4.0'},
                            {value: 3, label: 'Above 3.0'},
                            {value: 2, label: 'Above 2.0'},
                        ]}
                        onChange={value => setRating(value)}
                    />
                </label>
            </form>

            <section className={'PlaceList'}>
                {places?.map((place, i) => (
                    <div className={'PlaceListItem'} key={i}>
                        <PlaceDetails place={place}/>
                    </div>
                ))}
            </section>
        </StyledList>
    );
}

export default List;