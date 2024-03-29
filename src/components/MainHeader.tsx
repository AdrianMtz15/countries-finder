'use client'

import { ChangeEventHandler } from 'react';
import { useStore } from '@src/store';
import { useFilterCountries } from "@hooks/useFilterCountries";
import { InputSearch } from '@components/InputSearch'
import { SelectRegion } from '@components/SelectRegion'


type InputHandler = ChangeEventHandler<HTMLInputElement>

export function MainHeader() {
  const search = useStore(state => state.search);
  const allCountries = useStore(state => state.allCountries);
  const setSearch = useStore(state => state.setSearch);
  const setFilteredCountries = useStore((state) => state.setFilteredCountries);
  const filteredCountries = useStore((state) => state.filteredCountries);

  const handleInputChange: InputHandler = (event) => {
    const search = event.target.value;
    setSearch(search);
  }

  return(
    <section className='inputs-container flex flex-row w-full items-end justify-between px-[10vw]'>
      <InputSearch 
        value={search}
        className='input-search mt-[35px]'
        classNames={{
          input: '  text-[1.5rem]',
          inputWrapper: ' border shadow-lg rounded-md'
        }}
        onChange={handleInputChange}
      />

      <SelectRegion/>
        
    </section>
  )
}