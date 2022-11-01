import { SearchbarHeader, Form, SearchFormButton, ButtonLabel, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons";


export const Searchbar = ({onQuerry}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const querry = e.currentTarget.searchQuerry.value;

        if (querry.trim() === '') return;
        
        onQuerry(querry)

        e.currentTarget.reset()
    }

    return (
        <SearchbarHeader>
            <Form onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                    <IconContext.Provider
                        value={{
                                size: '100%',
                                style: { verticalAlign: 'middle' }
                            }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                </SearchFormButton>
                <Input
                    type="text"
                    name="searchQuerry"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos" />
            </Form>                       
        </SearchbarHeader>
    )
}

