import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './Hero.css';

const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState('buy'); // Default to 'Buy'
    const [selectedPrice, setSelectedPrice] = useState('any'); // Default to 'Any Price'
    const [selectedLocation, setSelectedLocation] = useState('any'); // Default to 'Any Location'
    const [selectedPropertyType, setSelectedPropertyType] = useState('any'); // Default to 'Any Property Type'
    const [selectedBedrooms, setSelectedBedrooms] = useState('any'); // Default to 'Any Bedrooms'
    const [selectedBathrooms, setSelectedBathrooms] = useState('any'); // Default to 'Any Bathrooms'

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handlePriceChange = (price) => {
        setSelectedPrice(price);
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    const handlePropertyTypeChange = (propertyType) => {
        setSelectedPropertyType(propertyType);
    };

    const handleBedroomsChange = (bedrooms) => {
        setSelectedBedrooms(bedrooms);
    };

    const handleBathroomsChange = (bathrooms) => {
        setSelectedBathrooms(bathrooms);
    };

    const handleSearch = () => {
        // Implement the search logic here based on selectedCategory, selectedPrice, selectedLocation, selectedPropertyType, selectedBedrooms, and selectedBathrooms
        // You can perform a search or filter based on the selected filter values
        console.log('Search criteria:', selectedCategory, selectedPrice, selectedLocation, selectedPropertyType, selectedBedrooms, selectedBathrooms);
    };

    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the perfect place</h1>
                <p className='search-text'>Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes.</p>
                <form className='search'>
                    <div className='radio'>
                        <input
                            type='radio'
                            id='buyRadio'
                            checked={selectedCategory === 'buy'}
                            onChange={() => handleCategoryChange('buy')}
                        />
                        <label htmlFor='buyRadio'>Buy</label>

                        <input
                            type='radio'
                            id='rentRadio'
                            checked={selectedCategory === 'rent'}
                            onChange={() => handleCategoryChange('rent')}
                        />
                        <label htmlFor='rentRadio'>Rent</label>
                    </div>

                    <div className='price-dropdown'>
                        <label htmlFor='priceSelect'>Price:</label>
                        <select
                            id='priceSelect'
                            value={selectedPrice}
                            onChange={(e) => handlePriceChange(e.target.value)}
                        >
                            <option value='any'>Any Price</option>
                            <option value='100k'>Up to $100,000</option>
                            <option value='200k'>Up to $200,000</option>
                            <option value='300k'>Up to $300,000</option>
                            {/* Add more price options */}
                        </select>
                    </div>

                    <div className='location-dropdown'>
                        <label htmlFor='locationSelect'>Location:</label>
                        <select
                            id='locationSelect'
                            value={selectedLocation}
                            onChange={(e) => handleLocationChange(e.target.value)}
                        >
                            <option value='any'>Any Location</option>
                            <option value='city-center'>City Center</option>
                            <option value='suburbia'>Suburbia</option>
                            <option value='downtown'>Downtown</option>
                            {/* Add more location options */}
                        </select>
                    </div>

                    <div className='property-type-dropdown'>
                        <label htmlFor='propertyTypeSelect'>Property Type:</label>
                        <select
                            id='propertyTypeSelect'
                            value={selectedPropertyType}
                            onChange={(e) => handlePropertyTypeChange(e.target.value)}
                        >
                            <option value='any'>Any Property Type</option>
                            <option value='apartment'>Apartment</option>
                            <option value='villa'>Villa</option>
                            {/* Add more property type options */}
                        </select>
                    </div>

                    <div className='bedrooms-dropdown'>
                        <label htmlFor='bedroomsSelect'>Bedrooms:</label>
                        <select
                            id='bedroomsSelect'
                            value={selectedBedrooms}
                            onChange={(e) => handleBedroomsChange(e.target.value)}
                        >
                            <option value='any'>Any Bedrooms</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            {/* Add more bedroom options */}
                        </select>
                    </div>

                    <button type='button' onClick={handleSearch}>
                        <AiOutlineSearch className='icon' />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Hero;
