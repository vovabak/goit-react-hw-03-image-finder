import { SearchbarHeader, Form, SearchFormButton, ButtonLabel, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons";


export const Searchbar = () => {
    return (
        <SearchbarHeader>
            <Form>
                <SearchFormButton type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                    <IconContext.Provider value={{size: '100%', style: { verticalAlign: 'middle' }}}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                </SearchFormButton>
                <Input
                    type="text"
                    name="searchQuerry"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos" />
            </Form>                       
        </SearchbarHeader>
    )
}

