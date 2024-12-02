import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import data from "../../Components/Assets/all-products";
import { setProducts } from '../../redux/actions/productActions';
import { TextField, Autocomplete } from '@mui/material';

const UsedEquipmentList = () => {
    const location = useLocation(); // Get the current route path
    const [currentPage, setCurrentPage] = useState(1);
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const [selectmachineType, setSelectMachineType] = useState('');
    const [selectMachineModel, setSelectMachineModel] = useState('');
    const [selectMachineBrand, setSelectMachineBrand] = useState('');
    const [selectYOM, setSelectYOM] = useState('')
    const [selectHMR, setSelectHMR] = useState('')
    const [showFilters, setShowFilters] = useState(true);
    const [filtersOpen, setFiltersOpen] = useState(false); // State to toggle filters dropdown

    useEffect(() => {
        dispatch(setProducts(data));
    }, [dispatch]);

    // Determine which dataset to use based on the route
    const filteredData =
        location.pathname === '/listingpage1'
            ? products.filter((item) => item.sellTerritory?.includes('IND'))
            : location.pathname === '/listingpage2'
                ? products.filter((item) => item.sellTerritory?.includes('UAE'))
                : [];
    console.log(filteredData);
    console.log(location.pathname)


    //logic for filters
    const machineTypes = [...new Set(filteredData.map(data => data.equipmentType))];
    const machineModels = [...new Set(filteredData.map(data => data.modelName))]
    const machineBrands = [...new Set(filteredData.map(data => data.brandName))]
    const yearOfManufacturings = [...new Set(filteredData.map(data => data.yearOfManufacture))]
    const hmrRanges = [...new Set(filteredData.map(data => data.hoursMeterReading))]

    const selectedFilteredData = filteredData.filter(products => {
        const machineTypematch = selectmachineType ? products.equipmentType.toLowerCase() === selectmachineType.toLowerCase() : true;
        const machineModelmatch = selectMachineModel ? products.modelName.toLowerCase() === selectMachineModel.toLowerCase() : true;
        const machineBrandmatch = selectMachineBrand ? products.brandName.toLowerCase() === selectMachineBrand.toLowerCase() : true;
        const YOMsmatch = selectYOM ? products.yearOfManufacture.toLowerCase() === selectYOM.toLowerCase() : true;
        const HMRMatch = selectHMR ? products.hoursMeterReading.toLowerCase() === selectHMR.toLowerCase() : true;

        return machineModelmatch && machineTypematch && machineBrandmatch && YOMsmatch && HMRMatch;
    })
    //logic of filters for small screens

    const toggleFilters = () => {
        setFiltersOpen((prev) => !prev)
    }
    // Pagination logic
    const productsPerPage = 6;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = selectedFilteredData.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(selectedFilteredData.length / productsPerPage);

    const numbers = [...Array(totalPages + 1).keys()].slice(1);

    // Pagination Handlers
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // Render products
    const renderedProducts = currentProducts.map((product) => {
        const imageUrl = product.imageload?.[0]?.imageName || '';
        return (
            <div className="shop-card-container" key={product.equipmentId}>
                <img
                    src={imageUrl}
                    className="shop-card-image"
                    alt={product.title}
                />
                <p className="product-title">{product.title}</p>
                <p className="product-details">YOM: {product.yearOfManufacture}</p>
                <p className="product-details">HMR: {product.hoursMeterReading}</p>
                <p className="product-details">{product.location}</p>
                <button className="product-view-details">
                    <Link to={`/product/${product.equipmentId}`}>VIEW DETAILS</Link>
                </button>
            </div>
        );
    });

    return (
        <div className='product-listing-container content-width'>
            <h1 className='buy-sell-intro-heading used-equipment-heading'>Used <span>Equipment</span></h1>
            {/* filters section */}
            <div className='used-equipment-page-filters-container'>
                <hr />

                <div className='used-equipment-filters-container'>
                    <div className="filter-heading-container">
                        <p className="filter-heading-mobile" onClick={toggleFilters}>
                            Apply Filters
                        </p>


                        <div className={`used-equipment-filters ${filtersOpen ? 'filters-open' : ''}`}>
                            <p className='filters-heading-desktop'>Filter By:</p>
                            <div className='used-equipment-filters1'>
                                <Autocomplete
                                    options={machineTypes}
                                    value={selectmachineType}
                                    onChange={(event, newMachineType) => setSelectMachineType(newMachineType || '')}
                                    size='small'
                                    sx={{
                                        width: { xs: '100%', sm: '160px' },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#FFFFFF' },
                                            '&:hover fieldset': { borderColor: '#014A60' },
                                            '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': { color: '#FFC629' },
                                        },
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Machine Type" variant="outlined" />
                                    )}
                                />
                                <Autocomplete
                                    options={machineBrands}
                                    value={selectMachineBrand}
                                    onChange={(e, newMachineBrand) => setSelectMachineBrand(newMachineBrand || '')}
                                    size='small'
                                    sx={{
                                        width: { xs: '100%', sm: '160px' },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#FFFFFF' },
                                            '&:hover fieldset': { borderColor: '#014A60' },
                                            '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': { color: '#FFC629' },
                                        },

                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Machine Brand" variant="outlined" />
                                    )}
                                />
                                <Autocomplete
                                    options={machineModels}
                                    value={selectMachineModel}
                                    onChange={(e, newMachineModel) => setSelectMachineModel(newMachineModel || '')}
                                    size='small'
                                    sx={{
                                        width: '165px',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#FFFFFF' },
                                            '&:hover fieldset': { borderColor: '#014A60' },
                                            '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': { color: '#FFC629' },
                                        },

                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Machine Model" variant="outlined" />
                                    )}
                                />
                                <Autocomplete
                                    options={yearOfManufacturings}
                                    value={selectYOM}
                                    onChange={(e, newYOM) => setSelectYOM(newYOM || '')}
                                    size='small'
                                    sx={{
                                        width: '142px',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#FFFFFF' },
                                            '&:hover fieldset': { borderColor: '#014A60' },
                                            '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': { color: '#FFC629' },
                                        },

                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Year Of Mfg" variant="outlined" />
                                    )}
                                />
                                <Autocomplete
                                    options={hmrRanges}
                                    value={selectHMR}
                                    onChange={(e, newHMR) => setSelectHMR(newHMR || '')}
                                    size='small'
                                    sx={{
                                        width: '100px',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#FFFFFF' },
                                            '&:hover fieldset': { borderColor: '#014A60' },
                                            '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': { color: '#FFC629' },
                                        },

                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="HMR" variant="outlined" />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <TextField label='search' size="small" variant="outlined" />
                    </div>

                </div>
                <hr />
            </div>
            {/* display the products  */}
            <div className="product-list-container">
                {selectedFilteredData.length === 0 &&
                    (<p>No products match the selected filters.</p>
                    )}
                {renderedProducts}
            </div>

            {/* Pagination */}
            <nav>
                <ul className='pagination'>
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className='page-link' onClick={prevPage}>
                            <img src="./Images/left-arrow.png" alt="left-arrow" className="pagination-left-arrow" />
                        </button>
                    </li>
                    {numbers.map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                            <button
                                className='page-link'
                                onClick={() => handlePageClick(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className='page-link' onClick={nextPage}>
                            <img src="./Images/right-arrow.png" alt="right-arrow" className="pagination-right-arrow" />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default UsedEquipmentList;
