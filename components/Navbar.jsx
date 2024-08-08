import { AutoComplete } from "antd";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (searchValue) {
            const fetchOptions = async () => {
                try {
                    const res = await fetch(`https://dummyjson.com/recipes/search?q=${searchValue}`);
                    if (!res.ok) {
                        throw new Error("Couldn't fetch search results");
                    }
                    const data = await res.json();
                    const formattedOptions = data.recipes.map(recipe => ({ value: recipe.name, id: recipe.id }));
                    setOptions(formattedOptions);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchOptions();
        } else {
            setOptions([]);
        }
    }, [searchValue]);

    return (
        <div className="nav__container">
            <nav className="navbar">
                <div className="nav__item">
                    <h3 className="navbar__user">
                        Welcome, Ali ✌️
                    </h3>
                    <p className="user__title"> Discover whatever you need</p>
                </div>
            </nav>
            <div className="navbar__search">
              
                <div className="input">

                <AutoComplete
                    options={options.map(option => (
                        { label: <Link href={`/${option.id}`}>{option.value}</Link>, value: option.value }
                    ))}
                    notFoundContent={<p>No foods found</p>}
                    style={{
                        width: 317,
                        height: 46,
                        borderRadius: '15px',
                        padding: '15px 48px',
                        marginTop: '10px',
                    }}
                    onSearch={(text) => setSearchValue(text)}
                    placeholder="Search"
                />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
