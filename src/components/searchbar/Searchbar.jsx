import { AiOutlineSearch } from 'react-icons/ai';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { IconContext } from "react-icons";
import { SearchbarHeader, Form, SearchFormButton, ButtonLabel, Input } from './Searchbar.styled';



export class Searchbar extends Component {

    state = {
        newQuerry: '',
    }

    handleChange = (e) => {     
        this.setState({ newQuerry: e.currentTarget.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const querry = this.state.newQuerry.trim().toLowerCase();       
        
        if (querry === '') {

            toast('Please, enter some querry')
            
            e.currentTarget.searchQuerry.value = ''
            return
        }

        if (querry === this.props.querry) {

            toast('Please, try different querry')
            
            return
        }
                
        this.props.onSubmit(querry)

        this.setState({ newQuerry: '' })
        
        e.currentTarget.reset()
    }
    render() {
        return (
        <SearchbarHeader>
            <Form onSubmit={this.handleSubmit}>
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
                        placeholder="Search images and photos"
                        onChange={this.handleChange} />                    
            </Form>                       
        </SearchbarHeader>
    )
    }    
}

